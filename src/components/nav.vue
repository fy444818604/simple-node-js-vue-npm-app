<!-- 菜单组件 -->
<template>
	<div class="fy-nav-wrap" :class="expend?'':'unexpend'" ref='menu'>
		<el-scrollbar wrap-class="list" :native="false">
			<div class="fy-nav" :style={backgroundColor:menuConfig.menuBodyColor}>
				<div class="subhead" v-show="expend">{{subhead}}</div>
				<ul id="site-menu" v-cloak>
					<fy-nav class="site-menu-item" v-for="(item,index) in menuData" :key="index" :model="item" :expend="expend" :num="num"
					 :firstpage="firstpage" @jump='jump'></fy-nav>
				</ul>
			</div>
		</el-scrollbar>
		<div class="nav-bottom" :style={backgroundColor:menuConfig.menuBottomColor,borderTop:menuConfig.menuBottomColor}>
			<i class="iconfont icon-fold" :class="expend?'':'active'" @click="expendChange"></i>
		</div>
	</div>
</template>

<script>
	import '../assets/style/menu.scss';
	import navItem from './nav-list';
	export default {
		name: 'LeftNav',
		components: {
			'fy-nav': navItem
		},
		data() {
			return {
				menuData: [],
				expend: true,
				firstpage: '',
				subhead: '统一门户',
				num: 0
			}
		},
		created() {
			this.menuSearch();
		},
		methods: {
			expendChange() {
				this.expend = !this.expend
			},
			menuSearch() {
				// this.$post('/api/menu1').then(res => {
				// 	this.menuData = this.getTree(res, 0);
				// 	this.getFirstMenu(this.menuData[0])
				// })
				let data = [{
						menu_id: 1,
						menu_text: '基础设置',
						menu_icon: 'icon-home',
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
						menu_icon: 'icon-home',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 28,
						menu_text: '机构类型',
						menu_icon: '',
						menu_href: '',
						menu_pid: 27,
						menu_target_type: 0
					},
					{
						menu_id: 29,
						menu_text: '机构设置',
						menu_icon: '',
						menu_href: '',
						menu_pid: 27,
						menu_target_type: 0
					},
					{
						menu_id: 30,
						menu_text: '校历管理',
						menu_icon: 'icon-home',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 31,
						menu_text: '校历设置',
						menu_icon: '',
						menu_href: '',
						menu_pid: 30,
						menu_target_type: 0
					},
					{
						menu_id: 32,
						menu_text: '作息类型',
						menu_icon: '',
						menu_href: '',
						menu_pid: 30,
						menu_target_type: 0
					},
					{
						menu_id: 33,
						menu_text: '作息时间',
						menu_icon: '',
						menu_href: '',
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
						menu_href: '/basic/Layout/buile-area',
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
						menu_icon: 'icon-home',
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
						menu_icon: 'icon-home',
						menu_href: '',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 42,
						menu_text: '教职工账号',
						menu_icon: '',
						menu_href: '',
						menu_pid: 41,
						menu_target_type: 0
					},
					{
						menu_id: 43,
						menu_text: '学生账号',
						menu_icon: '',
						menu_href: '',
						menu_pid: 41,
						menu_target_type: 0
					},
				]
				this.menuData = this.getTree(data, 0);
				// this.getFirstMenu(this.menuData[0])
			},
			getTree(list, parentId) {
				var re = new Array();
				for (var i = 0; i < list.length; i++) {
					var pid = list[i].menu_pid;
					if (pid == parentId) {
						var child = this.getTree(list, list[i].menu_id);
						if (child.length > 0) {
							list[i].children = child;
						}
						re.push(list[i]);
					}
				}
				return re;
			},
			getFirstMenu(para) {
				if (para.menu_href) {
					this.firstpage = para.menu_href
				} else {
					this.getFirstMenu(para.children[0])
				}
			},
			jump(url) {
				this.firstpage = url
			}
		},
		watch: {
			expend(val) {
				if (val) {
					return this.$parent.toggleWidth = '240px'
				} else {
					return this.$parent.toggleWidth = '100px'
				}
			},
			firstpage() {
				this.$router.push({
					path: this.firstpage
				})
			}
		},
		computed: {
			menuConfig() {
				return this.$store.state.menuConfig;
			}
		},
		mounted() {
			if (this.expend) {
				return this.$parent.toggleWidth = '240px'
			} else {
				return this.$parent.toggleWidth = '100px'
			}
		}
	}
</script>

<style lang="scss">
	.el-scrollbar {
		height: calc(100% - 43px)
	}

	.icon-fold {
		font-size: 20px !important;
	}

	.icon-fold.active {
		transform: rotate(180deg)
	}

	.fy-nav-wrap .el-scrollbar__wrap {
		overflow-x: hidden
	}
</style>
