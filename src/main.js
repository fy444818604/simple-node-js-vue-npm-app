//import 'babel-polyfill';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import axios from 'axios'
import {post,get} from './request/http'
import layer from 'vue-layer'
import vcolorpicker from 'vcolorpicker'
import 'vue-layer/lib/vue-layer.css';
import './App.scss';
Vue.use(vcolorpicker)
Vue.prototype.$axios = axios
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
