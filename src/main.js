// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import api from "./api"
import Tabs from './components/Tabs'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'

Vue.use(Tabs)
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = Axios;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.config.devtools = true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
