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
		props: {
			'menuData1':Array
		},
		data() {
			return {
				expend: true,
				menuData:[],
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
				this.menuData = this.getTree(this.menuData1, 0);
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
