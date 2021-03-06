import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
// 登录
Vue.use(Router)

//登录
const signin = {
	path: '/signin',
	name: 'signin',
	component: resolve => {
		require(['../views/Signin/index'], resolve)
	},
	meta: {
		title: '登录'
	}
}
//基础数据平台
const basic = {
	path: '/basic/Layout',
	name: 'Layout',
	component: resolve => {
		require(['../views/basic/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/basic/Layout/system',
			name: 'system',
			component: resolve => {
				require(['../views/basic/setting/system'], resolve)
			},
			meta: {
				title: '系统设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/admin-level-setting',
			name: 'admin-level-setting',
			component: resolve => {
				require(['../views/basic/setting/adm-level'], resolve)
			},
			meta: {
				title: '行政级别设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/admin-area-setting',
			name: 'admin-area-setting',
			component: resolve => {
				require(['../views/basic/setting/adm-areas'], resolve)
			},
			meta: {
				title: '行政区域设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/school-area-man',
			name: 'school-area-man',
			component: resolve => {
				require(['../views/basic/setting/school-district'], resolve)
			},
			meta: {
				title: '学区管理',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/stage-setting',
			name: 'stage-setting',
			component: resolve => {
				require(['../views/basic/setting/phase-admin'], resolve)
			},
			meta: {
				title: '学段设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/subject-man',
			name: 'subject-man',
			component: resolve => {
				require(['../views/basic/setting/subjects-admin'], resolve)
			},
			meta: {
				title: '科目管理',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/textbook-man',
			name: 'textbook-man',
			component: resolve => {
				require(['../views/basic/setting/material-version'], resolve)
			},
			meta: {
				title: '教材版本',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/textbook-cont',
			name: 'textbook-cont',
			component: resolve => {
				require(['../views/basic/setting/material-conet'], resolve)
			},
			meta: {
				title: '教材内容',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/point',
			name: 'point',
			component: resolve => {
				require(['../views/basic/setting/knowledge-admin'], resolve)
			},
			meta: {
				title: '知识点管理',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/politics',
			name: 'politics',
			component: resolve => {
				require(['../views/basic/setting/pol-land'], resolve)
			},
			meta: {
				title: '政治面貌',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/attend-type',
			name: 'attend-type',
			component: resolve => {
				require(['../views/basic/setting/Studying-type'], resolve)
			},
			meta: {
				title: '就读类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/duty-setting',
			name: 'duty-setting',
			component: resolve => {
				require(['../views/basic/setting/position-set'], resolve)
			},
			meta: {
				title: '职务设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/job-setting',
			name: 'job-setting',
			component: resolve => {
				require(['../views/basic/setting/jobs-set'], resolve)
			},
			meta: {
				title: '岗位设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/job-type',
			name: 'job-type',
			component: resolve => {
				require(['../views/basic/setting/labor-type'], resolve)
			},
			meta: {
				title: '用工类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/job-level-setting',
			name: 'job-level-setting',
			component: resolve => {
				require(['../views/basic/setting/technical-set'], resolve)
			},
			meta: {
				title: '职称设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/education-setting',
			name: 'education-setting',
			component: resolve => {
				require(['../views/basic/setting/education-set'], resolve)
			},
			meta: {
				title: '学历设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/education-level-setting',
			name: 'education-level-setting',
			component: resolve => {
				require(['../views/basic/setting/degree-set'], resolve)
			},
			meta: {
				title: '学位设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/student-account',
			name: 'student-account',
			component: resolve => {
				require(['../views/basic/setting/students-change'], resolve)
			},
			meta: {
				title: '学生变动',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/teacher-account',
			name: 'teacher-account',
			component: resolve => {
				require(['../views/basic/setting/teacher-change'], resolve)
			},
			meta: {
				title: '教职工变动',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/enter-type',
			name: 'enter-type',
			component: resolve => {
				require(['../views/basic/setting/admissions-set'], resolve)
			},
			meta: {
				title: '招生类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/source-type',
			name: 'source-type',
			component: resolve => {
				require(['../views/basic/setting/students-type'], resolve)
			},
			meta: {
				title: '生源类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/org-type',
			name: 'org-type',
			component: resolve => {
				require(['../views/basic/organization/org-type'], resolve)
			},
			meta: {
				title: '机构类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/org-set',
			name: 'org-set',
			component: resolve => {
				require(['../views/basic/organization/org-set'], resolve)
			},
			meta: {
				title: '机构设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/calendar-set',
			name: 'calendar-set',
			component: resolve => {
				require(['../views/basic/calendar/calendar-set'], resolve)
			},
			meta: {
				title: '校历设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/calendar-type',
			name: 'calendar-type',
			component: resolve => {
				require(['../views/basic/calendar/calendar-type'], resolve)
			},
			meta: {
				title: '作息类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/calendar-time',
			name: 'calendar-time',
			component: resolve => {
				require(['../views/basic/calendar/calendar-time'], resolve)
			},
			meta: {
				title: '作息时间',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/calendar-detail',
			name: 'calendar-detail',
			component: resolve => {
				require(['../views/basic/calendar/calendar-detail'], resolve)
			},
			meta: {
				title: '作息时间详情',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/build-area',
			name: 'build-area',
			component: resolve => {
				require(['../views/basic/class-manage/build-area'], resolve)
			},
			meta: {
				title: '建筑场所',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/room-type',
			name: 'room-type',
			component: resolve => {
				require(['../views/basic/class-manage/room-type'], resolve)
			},
			meta: {
				title: '教室类型',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/room-setting',
			name: 'room-setting',
			component: resolve => {
				require(['../views/basic/class-manage/room-setting'], resolve)
			},
			meta: {
				title: '教室设置',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/stu-year',
			name: 'stu-year',
			component: resolve => {
				require(['../views/basic/grade-manage/stu-year'], resolve)
			},
			meta: {
				title: '学届管理',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/cla-mates',
			name: 'cla-mates',
			component: resolve => {
				require(['../views/basic/grade-manage/cla-mates'], resolve)
			},
			meta: {
				title: '班级管理',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/teacher',
			name: 'teacher',
			component: resolve => {
				require(['../views/basic/account/teacher'], resolve)
			},
			meta: {
				title: '教职工账号',
				requireAuth: true
			}
		},
		{
			path: '/basic/Layout/student',
			name: 'student',
			component: resolve => {
				require(['../views/basic/account/student'], resolve)
			},
			meta: {
				title: '学生账号',
				requireAuth: true
			}
		}
	]
}
//设备管理系统
const equipment = {
	path: '/equipment/Layout',
	name: 'equipment-Layout',
	component: resolve => {
		require(['../views/equipment/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/equipment/Layout/mcu',
			name: 'mcu',
			component: resolve => {
				require(['../views/equipment/mcu/index'], resolve)
			},
			meta: {
				title: 'mcu管理',
				requireAuth: true
			}
		},
		{
			path: '/equipment/Layout/mcu-edit',
			name: 'mcu-edit',
			component: resolve => {
				require(['../views/equipment/mcu/edit'], resolve)
			},
			meta: {
				title: 'mcu新建&编辑',
				requireAuth: true
			}
		},
		{
			path: '/equipment/Layout/meeting-setting',
			name: 'meeting-setting',
			component: resolve => {
				require(['../views/equipment/meeting-setting/index'], resolve)
			},
			meta: {
				title: '会议室设置',
				requireAuth: true
			}
		},
		{
			path: '/equipment/Layout/meeting-setting-edit',
			name: 'meeting-setting-edit',
			component: resolve => {
				require(['../views/equipment/meeting-setting/edit'], resolve)
			},
			meta: {
				title: '会议室设置',
				requireAuth: true
			}
		},
		{
			path: '/equipment/Layout/classroom-setting',
			name: 'classroom-setting',
			component: resolve => {
				require(['../views/equipment/classroom-setting/index'], resolve)
			},
			meta: {
				title: '录播教室设置',
				requireAuth: true
			}
		},
		{
			path: '/equipment/Layout/classroom-setting-edit',
			name: 'classroom-setting-edit',
			component: resolve => {
				require(['../views/equipment/classroom-setting/edit'], resolve)
			},
			meta: {
				title: '录播教室设置',
				requireAuth: true
			}
		}
	]
}
//授权系统
const authorization = {
	path: '/authorization/Layout',
	name: 'authorization-Layout',
	component: resolve => {
		require(['../views/authorization/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/authorization/Layout/role-man',
			name: 'role-man',
			component: resolve => {
				require(['../views/authorization/role-man/index'], resolve)
			},
			meta: {
				title: '角色管理',
				requireAuth: true
			}
		},
		{
			path: '/authorization/Layout/role-man-detail',
			name: 'role-man-detail',
			component: resolve => {
				require(['../views/authorization/role-man/detail'], resolve)
			},
			meta: {
				title: '角色详情',
				requireAuth: true
			}
		},
		{
			path: '/authorization/Layout/action-auth',
			name: 'action-auth',
			component: resolve => {
				require(['../views/authorization/action-auth/index'], resolve)
			},
			meta: {
				title: '功能授权',
				requireAuth: true
			}
		},
		{
			path: '/authorization/Layout/action-auth-detail',
			name: 'action-auth-detail',
			component: resolve => {
				require(['../views/authorization/action-auth/detail'], resolve)
			},
			meta: {
				title: '功能授权详情',
				requireAuth: true
			}
		}
	]
}
//资源平台
const resource = {
	path: '/resource/Layout',
	name: 'resource-Layout',
	component: resolve => {
		require(['../views/resource/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/resource/Layout/index',
			name: 'resource-index',
			component: resolve => {
				require(['../views/resource/index/index'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/resource-list',
			name: 'resource-list',
			component: resolve => {
				require(['../views/resource/resource-list/index'], resolve)
			},
			meta: {
				title: '资源',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/resource-list/:id',
			name: 'resource-detail',
			component: resolve => {
				require(['../views/resource/resource-list/res-detail'], resolve)
			},
			meta: {
				title: '资源详情',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/resource-list/edit/:id',
			name: 'resource-edit',
			component: resolve => {
				require(['../views/resource/resource-list/edit-res'], resolve)
			},
			meta: {
				title: '资源编辑',
				requireAuth: true
			}
		}, {
			path: '/resource/Layout/resource-list/upload/:id',
			name: 'resource-upload',
			component: resolve => {
				require(['../views/resource/resource-list/upload-res'], resolve)
			},
			meta: {
				title: '资源上传',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/album',
			name: 'album',
			component: resolve => {
				require(['../views/resource/album/index'], resolve)
			},
			meta: {
				title: '专辑',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/album/:id',
			name: 'album-detail',
			component: resolve => {
				require(['../views/resource/album/introduce'], resolve)
			},
			meta: {
				title: '专辑详情',
				requireAuth: true
			}
		},
		{
			path: '/resource/Layout/discover',
			name: 'discover',
			component: resolve => {
				require(['../views/resource/discover/index'], resolve)
			},
			meta: {
				title: '发现',
				requireAuth: true
			}
		}
	]
}
// 同步课堂
const synclass = {
	path: '/sync/Layout',
	name: 'sync-Layout',
	component: resolve => {
		require(['../views/synclass/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/sync/Layout/index',
			name: 'sync-Layout-index',
			component: resolve => {
				require(['../views/synclass/index/index'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/school',
			name: 'sync-Layout-school',
			component: resolve => {
				require(['../views/synclass/school/index'], resolve)
			},
			meta: {
				title: '学校课表',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/my',
			name: 'sync-Layout-my',
			component: resolve => {
				require(['../views/synclass/my/index'], resolve)
			},
			meta: {
				title: '我的课表',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/video',
			name: 'sync-Layout-video',
			component: resolve => {
				require(['../views/synclass/video/index'], resolve)
			},
			meta: {
				title: '视频中心',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/live',
			name: 'sync-Layout-live',
			component: resolve => {
				require(['../views/synclass/live/index'], resolve)
			},
			meta: {
				title: '同步课直播',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/live/detail',
			name: 'sync-Layout-detail',
			component: resolve => {
				require(['../views/synclass/live/detail'], resolve)
			},
			meta: {
				title: '同步课直播',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/live/project',
			name: 'sync-Layout-project',
			component: resolve => {
				require(['../views/synclass/live/project'], resolve)
			},
			meta: {
				title: '同步课作业',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/static',
			name: 'sync-Layout-static',
			component: resolve => {
				require(['../views/synclass/static/index'], resolve)
			},
			meta: {
				title: '数据统计',
				requireAuth: true
			}
		},
		{
			path: '/sync/Layout/setting',
			name: 'sync-Layout-setting',
			component: resolve => {
				require(['../views/synclass/setting/index'], resolve)
			},
			meta: {
				title: '系统设置',
				requireAuth: true
			}
		},
	]
}
//预约系统
const order = {
	path: '/order/Layout',
	name: 'order-Layout',
	component: resolve => {
		require(['../views/order/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/order/Layout/index',
			name: 'order-Layout-index',
			component: resolve => {
				require(['../views/order/index/index'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			}
		},
		{
			path: '/order/Layout/course-order',
			name: 'order-Layout-course-order',
			component: resolve => {
				require(['../views/order/orders/course'], resolve)
			},
			meta: {
				title: '课程预约',
				requireAuth: true
			}
		},
		{
			path: '/order/Layout/course-order-add',
			name: 'order-Layout-course-order-add',
			component: resolve => {
				require(['../views/order/orders/course-add'], resolve)
			},
			meta: {
				title: '课程预约添加',
				requireAuth: true
			}
		},
		{
			path: '/order/Layout/my',
			name: 'order-Layout-my',
			component: resolve => {
				require(['../views/order/my/index'], resolve)
			},
			meta: {
				title: '我的',
				requireAuth: true
			}
		},
		{
			path: '/order/Layout/course-search',
			name: 'order-Layout-course-search',
			component: resolve => {
				require(['../views/order/search/course-search'], resolve)
			},
			meta: {
				title: '课程查询',
				requireAuth: true
			}
		},
		{
			path: '/order/Layout/setting',
			name: 'order-Layout-setting',
			component: resolve => {
				require(['../views/order/setting/index'], resolve)
			},
			meta: {
				title: '设置',
				requireAuth: true
			}
		}
	]
}

//统一门户
const index = {
	path: '/index',
	name: 'index-layout',
	component: resolve => {
		require(['../views/index/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
		path: '/Layout/index',
		name: 'index',
		component: resolve => {
			require(['../views/index/index'], resolve)
		},
		meta: {
			title: '首页',
			requireAuth: true
		}
	}]
}

//个人中心
const personal = {
	path: '/personal/layout',
	name: 'personal-layout',
	component: resolve => {
		require(['../views/personal/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
		path: '/personal/layout/index',
		name: 'personal-index',
		component: resolve => {
			require(['../views/personal/person/index'], resolve)
		},
		meta: {
			title: '个人中心',
			requireAuth: true
		}
	}]
}

//直播中心
const liveCenter = {
	path: '/liveCenter/layout',
	name: 'liveCenter-layout',
	component: resolve => {
		require(['../views/liveCenter/layout/layout'], resolve)
	},
	meta: {
		title: '首页',
		requireAuth: true
	},
	children: [{
			path: '/liveCenter/Layout/index',
			name: 'live-index',
			component: resolve => {
				require(['../views/liveCenter/index/index'], resolve)
			},
			meta: {
				title: '首页',
				requireAuth: true
			},
		},
		{
			path: '/liveCenter/Layout/living',
			name: 'living-index',
			component: resolve => {
				require(['../views/liveCenter/living/index'], resolve)
			},
			meta: {
				title: '正在直播',
				requireAuth: true
			},
		},
		{
			path: '/liveCenter/Layout/livebroad',
			name: 'livebroad-index',
			component: resolve => {
				require(['../views/liveCenter/livebroad/index'], resolve)
			},
			meta: {
				title: '直播预告',
				requireAuth: true
			},
		},
		{
			path: '/liveCenter/Layout/liveSetting',
			name: 'liveSetting-index',
			component: resolve => {
				require(['../views/liveCenter/liveSetting/index'], resolve)
			},
			meta: {
				title: '直播设置',
				requireAuth: true
			},
		},
		{
			path: '/liveCenter/Layout/systemSetting',
			name: 'systemSetting-index',
			component: resolve => {
				require(['../views/liveCenter/systemSetting/index'], resolve)
			},
			meta: {
				title: '系统设置',
				requireAuth: true
			},
		}
	]
}

const router = new Router({
	base: './',
	routes: [
		// 首先是登录页的路由
		signin,
		basic,
		{
			path: '/basic/teacher-detail',
			name: 'teacher-detail',
			component: resolve => {
				require(['../views/basic/account/teacher-detail'], resolve)
			},
			meta: {
				title: '教职工基本信息',
				requireAuth: true
			}
		},
		{
			path: '/basic/student-detail',
			name: 'student-detail',
			component: resolve => {
				require(['../views/basic/account/student-detail'], resolve)
			},
			meta: {
				title: '学生基本信息',
				requireAuth: true
			}
		},
		equipment,
		authorization,
		resource,
		order,
		index,
		synclass,
		liveCenter,
		{
			path: '/Layout/index/notice-detail',
			name: 'notice-detail',
			component: resolve => {
				require(['../views/index/notice-detail'], resolve)
			},
			meta: {
				title: '通知&新闻详情',
				requireAuth: true
			}
		},
		personal
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
	next()
	// }
	if (to.meta.title) {
		document.title = to.meta.title
	}
})

export default router
