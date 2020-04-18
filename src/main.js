import Vue from 'vue';
import App from './App';
import router from './router';
import './config/rem.js';
import '@/assets/scss/index.scss';
import store from './store/';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('@/assets/img/error.png'),
  loading: require('@/assets/img/loading.gif'),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
