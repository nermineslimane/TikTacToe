import VueFormGenerator from 'vue-form-generator';
export default {
    groups: [{
            legend: 'Customer Info',
            fields: [{
                    type: 'input',
                    inputType: 'text',
                    label: 'Full Name',
                    model: 'customer_name',
                    required: true,
                    validator: ['string', 'required'],
                },
                {
                    type: 'input',
                    inputType: 'email',
                    label: 'Email',
                    model: 'customer_email',
                    required: true,
                    validator: VueFormGenerator.validators.email,
                },

                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Description',
                    model: 'customer_description',
                    required: true,
                    validator: ['string', 'required'],
                },
                {
                    type: 'tel-input',
                    label: 'Phone Number',
                    model: 'customer_phone',
                },
            ],
        },
        {
            legend: 'Invoice Details',
            fields: [{
                    type: 'input',
                    inputType: 'number',
                    label: 'Invoice amount',
                    model: 'invoice_amount',
                    required: true,
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: 'Invoice description',
                    model: 'invoice_description',
                    required: true,
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: 'Days until due',
                    model: 'days_until_due',
                    required: true,
                },
            ],
        },
    ],
};