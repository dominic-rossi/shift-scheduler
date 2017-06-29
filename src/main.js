import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import autosize from 'autosize'
import 'bootstrap/dist/js/bootstrap'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'

 require('bootstrap/dist/css/bootstrap.min.css');
 require('font-awesome/css/font-awesome.min.css');

Vue.use(VueResource)

sync(store, router)

const app = new Vue({
  router,
  store
}).$mount('#app')
