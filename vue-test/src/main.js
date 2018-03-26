// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);

import store from './store'


import axios from 'axios';
Vue.prototype.$http = axios;
// console.log(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
