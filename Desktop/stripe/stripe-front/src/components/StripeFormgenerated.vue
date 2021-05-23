<template>
    <div class="container">
       
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start">
                <h2>Create Invoice</h2><span class="text-muted">Add new customer record</span>
            </div>
        </div>
        <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
            <form action="" @submit.prevent="handleSubmit">
                <vue-form-generator tag="div" :schema="schema" :options="formOptions" :model="model" />
                <div class="d-flex justify-content-end mt-3 pr-4">
                    <button type="submit" class="btn btn-primary btn-lg">
                        {{ isSaving ? 'Saving...' : 'Submit'}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import stripeformschema from '../forms/stripeformschema'
import axios from 'axios';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
export default {
     mounted () {
  },
  data() {
    return {
      model: {
        customer_description: '',
        customer_email: '',
        customer_name: '',
        customer_phone: '',
        invoice_amount: '',
        invoice_description: '',
        days_until_due: '',
      },
       schema: stripeformschema,
      formOptions: {
        validateAfterChanged: true
      },
      isSaving: false
    };
  },
  methods: {
    handleSubmit() {
        console.log(this.model)
      let apiURL = 'http://localhost:5000/createInvoice';
      let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};Vue.use(VueToast);

      axios
        .post(apiURL,this.model,{axiosConfig})
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
