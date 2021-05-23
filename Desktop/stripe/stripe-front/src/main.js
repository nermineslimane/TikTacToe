import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueFormGenerator from 'vue-form-generator';
import TelInput from './components/tel-input.vue';

Vue.component('field-tel-input', TelInput);
Vue.use(VueFormGenerator);
Vue.config.productionTip = false;
new Vue({
    render: (h) => h(App),
}).$mount('#app');