import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';
// 登录
Vue.use(Router);

const router = new Router({
	// mode: 'history',
	base: './',
	// history: false,
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
			path: '/Layout',
			name: 'Layout',
			component: (resolve) => {
				require(['../views/layout/index'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			},
			children: [{
					path: 'ele-layout',
					component: (resolve) => {
						require(['../views/ele-layout/index'], resolve)
					},
					meta: {
						title: '布局',
						requireAuth:true
					}
				},
				{
					path: 'ele-container',
					component: (resolve) => {
						require(['../views/ele-container/index'], resolve)
					},
					meta: {
						title: '布局容器',
						requireAuth:true
					}
				},
				{
					path: 'ele-icon',
					component: (resolve) => {
						require(['../views/ele-icon/index'], resolve)
					},
					meta: {
						title: '图标',

					}
				},
				{
					path: 'ele-button',
					component: (resolve) => {
						require(['../views/ele-button/index'], resolve)
					},
					meta: {
						title: '按钮',

					}
				},
				{
					path: 'ele-radio',
					component: (resolve) => {
						require(['../views/ele-radio/index'], resolve)
					},
					meta: {
						title: '单选框',
					}
				},
				{
					path: 'ele-checkbox',
					component: (resolve) => {
						require(['../views/ele-checkbox/index'], resolve)
					},
					meta: {
						title: '多选框',

					}
				},
				{
					path: 'ele-input',
					component: (resolve) => {
						require(['../views/ele-input/index'], resolve)
					},
					meta: {
						title: '输入框',

					}
				},
				{
					path: 'ele-inputNumber',
					component: (resolve) => {
						require(['../views/ele-inputNumber/index'], resolve)
					},
					meta: {
						title: '计数器',

					}
				},
				{
					path: 'ele-select',
					component: (resolve) => {
						require(['../views/ele-select/index'], resolve)
					},
					meta: {
						title: '选择器',

					}
				},
				{
					path: 'ele-cascader',
					component: (resolve) => {
						require(['../views/ele-cascader/index'], resolve)
					},
					meta: {
						title: '级联选择器',

					}
				},
				{
					path: 'ele-switch',
					component: (resolve) => {
						require(['../views/ele-switch/index'], resolve)
					},
					meta: {
						title: '开关',

					}
				},
				{
					path: 'ele-slider',
					component: (resolve) => {
						require(['../views/ele-slider/index'], resolve)
					},
					meta: {
						title: '滑块',

					}
				},
				{
					path: 'ele-timepicker',
					component: (resolve) => {
						require(['../views/ele-timepicker/index'], resolve)
					},
					meta: {
						title: '时间选择器',

					}
				},
				{
					path: 'ele-datepicker',
					component: (resolve) => {
						require(['../views/ele-datepicker/index'], resolve)
					},
					meta: {
						title: '日期选择器',

					}
				},
				{
					path: 'ele-datetimepicker',
					component: (resolve) => {
						require(['../views/ele-datetimepicker/index'], resolve)
					},
					meta: {
						title: '日期时间选择器',
					}
				},
				{
					path: 'ele-upload',
					component: (resolve) => {
						require(['../views/ele-upload/index'], resolve)
					},
					meta: {
						title: 'Upload 上传',
					}
				},
				{
					path: 'ele-rate',
					component: (resolve) => {
						require(['../views/ele-rate/index'], resolve)
					},
					meta: {
						title: '评分',

					}
				},
				{
					path: 'ele-form',
					component: (resolve) => {
						require(['../views/ele-form/index'], resolve)
					},
					meta: {
						title: '表单',

					}
				},
				{
					path: 'ele-table',
					component: (resolve) => {
						require(['../views/ele-table/index'], resolve)
					},
					meta: {
						title: '表格',

					}
				},
				{
					path: 'ele-tree',
					component: (resolve) => {
						require(['../views/ele-tree/index'], resolve)
					},
					meta: {
						title: '树',

					}
				},
				{
					path: 'setting',
					component: (resolve) => {
						require(['../views/setting/index'], resolve)
					},
					meta: {
						title: '设置',
					}
				}
			]
		},
		// 然后就是嵌套路由了，也就是登陆后的各个页面
		//{
		//    path: '/',
		//    meta: {
		//        
		//    },
		//    component: Layout
		//}

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
