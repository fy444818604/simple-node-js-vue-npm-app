<!-- 框架 -->
<template>
	<div id="layout">
		<fy-head></fy-head>
		<div class="main">
			<div class="main-middle" :style="{ paddingLeft : toggleWidth }">
				<!-- <fy-note v-if="$store.state.offsideConfig.offsideShow"></fy-note> -->
				<el-scrollbar :native="false">
					<router-view></router-view>
				</el-scrollbar>
			</div>
			<div class="main-left" :style="{ width : toggleWidth }">
				<fy-nav ref="leftNav" :menuData1="menuData1"></fy-nav>
			</div>
		</div>
	</div>
</template>

<script>
	import TopHead from '../../../components/head'
	import LeftNav from '../../../components/nav'
	// import note from '../../../components/note'
	export default {
		name: 'layout',
		data() {
			return {
				toggleWidth: '240px',
				menuData1:[{
						menu_id: 1,
						menu_text: '基础设置199',
						menu_icon: 'icon-setup',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 2,
						menu_text: '系统设置',
						menu_icon: '',
						menu_href: '/basic/Layout/system',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 3,
						menu_text: '行政区域',
						menu_icon: '',
						menu_href: '',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 4,
						menu_text: '行政级别设置',
						menu_icon: '',
						menu_href: '/basic/Layout/admin-level-setting',
						menu_pid: 3,
						menu_target_type: 0
					},
					{
						menu_id: 5,
						menu_text: '行政区域设置',
						menu_icon: '',
						menu_href: '/basic/Layout/admin-area-setting',
						menu_pid: 3,
						menu_target_type: 0
					},
					{
						menu_id: 6,
						menu_text: '学区管理',
						menu_icon: '',
						menu_href: '/basic/Layout/school-area-man',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 7,
						menu_text: '学段设置',
						menu_icon: '',
						menu_href: '/basic/Layout/stage-setting',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 8,
						menu_text: '学科管理',
						menu_icon: '',
						menu_href: '',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 9,
						menu_text: '科目管理',
						menu_icon: '',
						menu_href: '/basic/Layout/subject-man',
						menu_pid: 8,
						menu_target_type: 0
					},
					{
						menu_id: 10,
						menu_text: '教材版本',
						menu_icon: '',
						menu_href: '/basic/Layout/textbook-man',
						menu_pid: 8,
						menu_target_type: 0
					},
					{
						menu_id: 11,
						menu_text: '教材内容',
						menu_icon: '',
						menu_href: '/basic/Layout/textbook-cont',
						menu_pid: 8,
						menu_target_type: 0
					},
					{
						menu_id: 12,
						menu_text: '知识点管理',
						menu_icon: '',
						menu_href: '/basic/Layout/point',
						menu_pid: 8,
						menu_target_type: 0
					},
					{
						menu_id: 13,
						menu_text: '人员设置',
						menu_icon: '',
						menu_href: '',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 14,
						menu_text: '政治面貌',
						menu_icon: '',
						menu_href: '/basic/Layout/politics',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 15,
						menu_text: '就读类型',
						menu_icon: '',
						menu_href: '/basic/Layout/attend-type',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 16,
						menu_text: '职务设置',
						menu_icon: '',
						menu_href: '/basic/Layout/duty-setting',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 17,
						menu_text: '岗位设置',
						menu_icon: '',
						menu_href: '/basic/Layout/job-setting',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 18,
						menu_text: '用工类型',
						menu_icon: '',
						menu_href: '/basic/Layout/job-type',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 19,
						menu_text: '职称设置',
						menu_icon: '',
						menu_href: '/basic/Layout/job-level-setting',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 20,
						menu_text: '学历设置',
						menu_icon: '',
						menu_href: '/basic/Layout/education-setting',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 21,
						menu_text: '学位设置',
						menu_icon: '',
						menu_href: '/basic/Layout/education-level-setting',
						menu_pid: 13,
						menu_target_type: 0
					},
					{
						menu_id: 22,
						menu_text: '账号变动',
						menu_icon: '',
						menu_href: '',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 23,
						menu_text: '学生变动',
						menu_icon: '',
						menu_href: '/basic/Layout/student-account',
						menu_pid: 22,
						menu_target_type: 0
					},
					{
						menu_id: 23,
						menu_text: '教职工变动',
						menu_icon: '',
						menu_href: '/basic/Layout/teacher-account',
						menu_pid: 22,
						menu_target_type: 0
					},
					{
						menu_id: 24,
						menu_text: '招生设置',
						menu_icon: '',
						menu_href: '',
						menu_pid: 1,
						menu_target_type: 0
					},
					{
						menu_id: 25,
						menu_text: '招生类型',
						menu_icon: '',
						menu_href: '/basic/Layout/enter-type',
						menu_pid: 24,
						menu_target_type: 0
					},
					{
						menu_id: 26,
						menu_text: '生源类型',
						menu_icon: '',
						menu_href: '/basic/Layout/source-type',
						menu_pid: 24,
						menu_target_type: 0
					},
					{
						menu_id: 27,
						menu_text: '组织机构',
						menu_icon: 'icon-apartment',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 28,
						menu_text: '机构类型',
						menu_icon: '',
						menu_href: '/basic/Layout/org-type',
						menu_pid: 27,
						menu_target_type: 0
					},
					{
						menu_id: 29,
						menu_text: '机构设置',
						menu_icon: '',
						menu_href: '/basic/Layout/org-set',
						menu_pid: 27,
						menu_target_type: 0
					},
					{
						menu_id: 30,
						menu_text: '校历管理',
						menu_icon: 'icon-calendar',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 31,
						menu_text: '校历设置',
						menu_icon: '',
						menu_href: '/basic/Layout/calendar-set',
						menu_pid: 30,
						menu_target_type: 0
					},
					{
						menu_id: 32,
						menu_text: '作息类型',
						menu_icon: '',
						menu_href: '/basic/Layout/calendar-type',
						menu_pid: 30,
						menu_target_type: 0
					},
					{
						menu_id: 33,
						menu_text: '作息时间',
						menu_icon: '',
						menu_href: '/basic/Layout/calendar-time',
						menu_pid: 30,
						menu_target_type: 0
					},
					{
						menu_id: 34,
						menu_text: '教室管理',
						menu_icon: 'icon-home',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 35,
						menu_text: '建筑场所',
						menu_icon: '',
						menu_href: '/basic/Layout/build-area',
						menu_pid: 34,
						menu_target_type: 0
					},
					{
						menu_id: 36,
						menu_text: '教室类型',
						menu_icon: '',
						menu_href: '/basic/Layout/room-type',
						menu_pid: 34,
						menu_target_type: 0
					},
					{
						menu_id: 37,
						menu_text: '教室设置',
						menu_icon: '',
						menu_href: '/basic/Layout/room-setting',
						menu_pid: 34,
						menu_target_type: 0
					},
					{
						menu_id: 38,
						menu_text: '年级班级',
						menu_icon: 'icon-grade',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 39,
						menu_text: '学届管理',
						menu_icon: '',
						menu_href: '/basic/Layout/stu-year',
						menu_pid: 38,
						menu_target_type: 0
					},
					{
						menu_id: 40,
						menu_text: '班级管理',
						menu_icon: '',
						menu_href: '/basic/Layout/cla-mates',
						menu_pid: 38,
						menu_target_type: 0
					},
					{
						menu_id: 41,
						menu_text: '账号管理',
						menu_icon: 'icon-user',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 42,
						menu_text: '教职工账号',
						menu_icon: '',
						menu_href: '/basic/Layout/teacher',
						menu_pid: 41,
						menu_target_type: 0
					},
					{
						menu_id: 43,
						menu_text: '学生账号',
						menu_icon: '',
						menu_href: '/basic/Layout/student',
						menu_pid: 41,
						menu_target_type: 0
					},
				]
			}
		},
		created() {
			
		},
		components: {
			'fy-head': TopHead,
			'fy-nav': LeftNav,
			// 'fy-note': note
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.main {
		height: calc(100% - 60px);
		overflow: hidden;
	}

	.main-middle {
		height: 100%;
		width: 100%;
		background: #ffffff;
		float: left;
		padding-left: 240px;
		// overflow: auto;
		position: relative;
	}
	
	.main-middle>.el-scrollbar {
		height: 100%;
	}

	#layout {
		height: 100%;
	}

	.main-left {
		height: 100%;
		width: 240px;
		float: left;
		margin-left: -100%;
		background: #f9f9fb;
		border-right: 1px solid #e5e7ef;
		position: relative;
	}

	.main-iframe {
		width: 100%;
		background-color: #ffffff;
		height: 100%;
	}

	.main-middle>.el-scrollbar>.el-scrollbar__wrap{
		height: calc(100% + 17px);
	}
</style>
