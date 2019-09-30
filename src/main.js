//import 'babel-polyfill';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import layer from 'layui-layer'
import 'layui-layer/layer.css';
import './App.scss';
import * as api from './request/api';
import * as myLayer from './assets/javascript/notice';
Vue.prototype.$layer = layer;
Vue.prototype.$api = api;
Vue.prototype.$myLayer = myLayer;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.directive('clickOutSide', {
    bind(el, binding, vnode) {
        el.handler = function(e) {
            if (el.contains(e.target)) {
                return false
            }
            binding.value()
        }
        el.stopProp = function(event) {
            event.stopPropagation()
        }
        el.addEventListener('click', el.stopProp)
        document.body.addEventListener('click', el.handler)
    },
    unbind(el, binding) {
        el.removeEventListener('click', el.stopProp)
        document.body.removeEventListener('click', el.handler)
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
