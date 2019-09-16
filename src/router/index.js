import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';
// 登录
Vue.use(Router);

const router = new Router({
	base: './',
	routes: [
		// 首先是登录页的路由
		{
			path: '/signin',
			name: 'signin',
			component: (resolve) => {
				require(['../views/Signin/index'], resolve)
			},
			meta: {
				title: '登录'
			}
		},
		{
			path: '/basic/setting/system',
			name: 'system',
			component: (resolve) => {
				require(['../views/basic/setting/system'], resolve)
			},
			meta: {
				title: '设置'
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.requireAuth) {
		if (store.state.Authorization) { // 通过vuex state获取当前的token是否存在
			Vue.prototype.$post('/api/loginV',{token:store.state.Authorization}).then(res => {
				if(res.status == 200){
					next();
				}else{
					next({
						path: '/signin',
						query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
					})
				}
			}).catch(err => {
				
			})
		} else {
			next({
				path: '/signin',
				query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	} else {
		next();
	}
	if (to.meta.title) {
		document.title = to.meta.title;
	}
})

export default router
