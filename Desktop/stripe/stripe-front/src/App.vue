<template>
  <StripeFormgenerated message="Create stripe invoice for client"/>
</template>

<script>

  //import StripeForm from './components/StripeForm.vue'
  //import StripeForm from './components/StripeForm.vue'
import StripeFormgenerated from './components/StripeFormgenerated.vue'
export default {
  name: 'App',
  components: {
  //   StripeForm,
     StripeFormgenerated
  }
}
</script>

<style>

  body {
    background-color: #fafafa !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .vue-form-generator > div{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  .form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2%;
    width: 50%;
  }

  .field-wrap, .wrapper{
    width: 100%;
  }

  .dropList{
    z-index: 10;
    background-color: #FFF;
    position: relative;
    width: 40%;
    top: 5px;
    right: 12px;
  }

  legend{
    margin: 10px 0 20px 18px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  .hint{
    font-size: 10px;
    font-style: italic;
    color: purple;
  }

  .help-block{
    color: red;
  }
</style>