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
					title: '学段设置',
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
					require(['../views/basic/setting/pol-land'], resolve)
				},
				meta: {
					title: '政治面貌',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/attend-type',
				name: 'attend-type',
				component: (resolve) => {
					require(['../views/basic/setting/Studying-type'], resolve)
				},
				meta: {
					title: '就读类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/duty-setting',
				name: 'duty-setting',
				component: (resolve) => {
					require(['../views/basic/setting/position-set'], resolve)
				},
				meta: {
					title: '职务设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-setting',
				name: 'job-setting',
				component: (resolve) => {
					require(['../views/basic/setting/jobs-set'], resolve)
				},
				meta: {
					title: '岗位设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-type',
				name: 'job-type',
				component: (resolve) => {
					require(['../views/basic/setting/labor-type'], resolve)
				},
				meta: {
					title: '用工类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/job-level-setting',
				name: 'job-level-setting',
				component: (resolve) => {
					require(['../views/basic/setting/technical-set'], resolve)
				},
				meta: {
					title: '职称设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/education-setting',
				name: 'education-setting',
				component: (resolve) => {
					require(['../views/basic/setting/education-set'], resolve)
				},
				meta: {
					title: '学历设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/education-level-setting',
				name: 'education-level-setting',
				component: (resolve) => {
					require(['../views/basic/setting/degree-set'], resolve)
				},
				meta: {
					title: '学位设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/student-account',
				name: 'student-account',
				component: (resolve) => {
					require(['../views/basic/setting/students-change'], resolve)
				},
				meta: {
					title: '学生变动',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/teacher-account',
				name: 'teacher-account',
				component: (resolve) => {
					require(['../views/basic/setting/teacher-change'], resolve)
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
					require(['../views/basic/setting/students-type'], resolve)
				},
				meta: {
					title: '生源类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/org-type',
				name: 'org-type',
				component: (resolve) => {
					require(['../views/basic/organization/org-type'], resolve)
				},
				meta: {
					title: '机构类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/org-set',
				name: 'org-set',
				component: (resolve) => {
					require(['../views/basic/organization/org-set'], resolve)
				},
				meta: {
					title: '机构设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/calendar-set',
				name: 'calendar-set',
				component: (resolve) => {
					require(['../views/basic/calendar/calendar-set'], resolve)
				},
				meta: {
					title: '校历设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/calendar-type',
				name: 'calendar-type',
				component: (resolve) => {
					require(['../views/basic/calendar/calendar-type'], resolve)
				},
				meta: {
					title: '作息类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/calendar-time',
				name: 'calendar-time',
				component: (resolve) => {
					require(['../views/basic/calendar/calendar-time'], resolve)
				},
				meta: {
					title: '作息时间',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/build-area',
				name: 'build-area',
				component: (resolve) => {
					require(['../views/basic/class-manage/build-area'], resolve)
				},
				meta: {
					title: '建筑场所',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/room-type',
				name: 'room-type',
				component: (resolve) => {
					require(['../views/basic/class-manage/room-type'], resolve)
				},
				meta: {
					title: '教室类型',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/room-setting',
				name: 'room-setting',
				component: (resolve) => {
					require(['../views/basic/class-manage/room-setting'], resolve)
				},
				meta: {
					title: '教室设置',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/stu-year',
				name: 'stu-year',
				component: (resolve) => {
					require(['../views/basic/grade-manage/stu-year'], resolve)
				},
				meta: {
					title: '学届管理',
					requireAuth: true
				}
			}, {
				path: '/basic/Layout/cla-mates',
				name: 'cla-mates',
				component: (resolve) => {
					require(['../views/basic/grade-manage/cla-mates'], resolve)
				},
				meta: {
					title: '班级管理',
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
