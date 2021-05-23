const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Stripe = require('stripe');
const stripe = Stripe(
    'sk_test_51ItLKSGT2Gao4EuETtJDhTJ0I14JfegyV94IrCCWno75bWMwN7KOhoWhtN8S1Ih9BZXd6yE5oqvArbEIWUwzauWc00EwBvSktU', {
        apiVersion: '2020-08-27',
    }
);
app.use(cors());
app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    next();
});
const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// for parsing application/json
app.use(express.json());
// simple route
app.post('/createInvoice', (req, res) => {
    stripe.customers
        .create({
            description: req.body.customer_description,
            email: req.body.customer_email,
            phone: req.body.customer_phone,
            name: req.body.customer_name,
        })
        .then((customer) => {
            stripe.invoiceItems
                .create({
                    customer: customer.id,
                    amount: parseInt(req.body.invoice_amount, 10), //req.body.invoice_amount, //'2500', //req.body.invoice_amount, // 25
                    currency: 'eur',
                    description: req.body.invoice_description,
                })
                .then((invoiceItem) => {
                    stripe.invoices
                        .create({
                            customer: invoiceItem.customer,
                            collection_method: 'send_invoice',
                            days_until_due: req.body.days_until_due,
                        })
                        .then((invoice) => {
                            stripe.invoices.sendInvoice(invoice.id, function(err, invoice) {
                                res.status(200).send({ sent: invoice });
                            });
                        })
                        .catch((invoice_error) => {
                            res.status(500).send(invoice_error);
                        });
                })
                .catch((inoiveitem_error) => {
                    res.status(500).send(inoiveitem_error);
                });
        })
        .catch((customer_error) => {
            res.status(500).send(customer_error);
        });
});