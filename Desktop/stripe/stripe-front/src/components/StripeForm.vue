<template>
     <form @submit.prevent="handleSubmit">
      <label>Full name</label>
      <input type="text" required v-model="requestbody.customer_name" />
      <label>Email</label>
      <input type="email" required v-model="requestbody.customer_email" />
      <label>Phone number</label>
      <input type="tel" required v-model="requestbody.customer_phone" />
      <label>Customer's description</label>
      <input type="text" required v-model="requestbody.customer_description" />
      <label>Invoice amount</label>
      <input type="number" required v-model="requestbody.invoice_amount" />
      <label>Days until due</label>
      <input type="number" required v-model="requestbody.days_until_due" />
      <div class="submit">
        <button type="submit">Create an ivoice</button>
      </div>
    </form>
 
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
export default {
  data() {
    return {
      requestbody: {
        customer_description: '',
        customer_email: '',
        customer_name: '',
        customer_phone: '',
        invoice_amount: '',
        invoice_description: '',
        days_until_due: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      let apiURL = 'http://localhost:5000/createInvoice';
      let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};Vue.use(VueToast);

      axios
        .post(apiURL,this.requestbody,{axiosConfig})
        .then((response) => {
         

          Vue.$toast.info('invoice created for '+ response.data.sent.customer_email+' and sent through email',{ position: 'top'});
        })
        .catch((error) => {
         Vue.$toast.error('error while creating invoice'+error,{ position: 'top'})
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font: size 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>
