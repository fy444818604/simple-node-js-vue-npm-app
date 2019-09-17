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
			path: '/basic/Layout',
			name: 'Layout',
			component: (resolve) => {
				require(['../views/basic/layout/layout'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			},
			children: [{
				path: '/basic/Layout/system',
				name: 'system',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '系统设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/admin-level-setting',
				name: 'admin-level-setting',
				component: (resolve) => {
					require(['../views/basic/setting/adm-level'], resolve)
				},
				meta: {
					title: '行政级别设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/admin-area-setting',
				name: 'admin-area-setting',
				component: (resolve) => {
					require(['../views/basic/setting/adm-areas'], resolve)
				},
				meta: {
					title: '行政区域设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/school-area-man',
				name: 'school-area-man',
				component: (resolve) => {
					require(['../views/basic/setting/school-district'], resolve)
				},
				meta: {
					title: '学区管理',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/stage-setting',
				name: 'stage-setting',
				component: (resolve) => {
					require(['../views/basic/setting/phase-admin'], resolve)
				},
				meta: {
					title: '阶段设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/subject-man',
				name: 'subject-man',
				component: (resolve) => {
					require(['../views/basic/setting/subjects-admin'], resolve)
				},
				meta: {
					title: '科目管理',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/textbook-man',
				name: 'textbook-man',
				component: (resolve) => {
					require(['../views/basic/setting/material-version'], resolve)
				},
				meta: {
					title: '教材版本',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/textbook-cont',
				name: 'textbook-cont',
				component: (resolve) => {
					require(['../views/basic/setting/material-conet'], resolve)
				},
				meta: {
					title: '教材内容',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/point',
				name: 'point',
				component: (resolve) => {
					require(['../views/basic/setting/knowledge-admin'], resolve)
				},
				meta: {
					title: '知识点管理',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/politics',
				name: 'politics',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '政治面貌',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/attend-type',
				name: 'attend-type',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '就读类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/duty-setting',
				name: 'duty-setting',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '职务设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-setting',
				name: 'job-setting',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '岗位设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-type',
				name: 'job-type',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '用工类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-level-setting',
				name: 'job-level-setting',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '职称设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/education-setting',
				name: 'education-setting',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '学历设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/education-level-setting',
				name: 'education-level-setting',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '学位设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/student-account',
				name: 'student-account',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '学生变动',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/teacher-account',
				name: 'teacher-account',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '教职工变动',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/enter-type',
				name: 'enter-type',
				component: (resolve) => {
					require(['../views/basic/setting/admissions-set'], resolve)
				},
				meta: {
					title: '招生类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/source-type',
				name: 'source-type',
				component: (resolve) => {
					require(['../views/basic/setting/system'], resolve)
				},
				meta: {
					title: '生源类型',
					requireAuth: true
				}
			}]
		}
	]
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	// if (to.meta.requireAuth) {
	// 	if (store.state.Authorization) { // 通过vuex state获取当前的token是否存在
			// 			Vue.prototype.$post('/api/loginV', {
			// 				token: store.state.Authorization
			// 			}).then(res => {
			// 				if (res.status == 200) {
			// 					next();
			// 				} else {
			// 					next({
			// 						path: '/signin',
			// 						query: {
			// 							redirect: to.fullPath
			// 						} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			// 					})
			// 				}
			// 			}).catch(err => {
			//
			// 			})

		// } else {
		// 	next({
		// 		path: '/signin',
		// 		query: {
		// 			redirect: to.fullPath
		// 		} // 将跳转的路由path作为参数，登录成功后跳转到该路由
		// 	})
		// }
	// } else {
		next();
	// }
	if (to.meta.title) {
		document.title = to.meta.title;
	}
})

export default router
