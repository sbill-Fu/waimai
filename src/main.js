import Vue from 'vue';
import App from './App';
import router from './router';
import './config/rem.js';
import '@/assets/scss/index.scss';
import store from './store/';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
