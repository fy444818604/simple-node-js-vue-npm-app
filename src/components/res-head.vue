<template>
	<div class="res-head-container">
		<div class="head-left">
			<div class="logo-contaier">
				<img src="" alt="">
			</div>
			<ul>
				<li v-for="(item,index) in menuList" :key="index" :class="item.active?'active':''">
					<router-link :to="item.href">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
		<div class="login-info">
			登陆
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuList: [{
					name: '首页',
					href: '/resource/Layout/index'
				}, {
					name: '资源',
					href: '/resource/Layout/resource-list'
				}, {
					name: '专辑',
					href: '/resource/Layout/album'
				}, {
					name: '发现',
					href: '/resource/Layout/discover'
				}, ]
			}
		},
		created() {
			this.active(this.$route.path)
		},
		methods:{
			active(para){
				this.menuList.map((v,i) => {
					v.active = false;
					if(v.href == para){
						v.active = true;
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.res-head-container {
		display: flex;
		height: 60px;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.08);
		.head-left {
			display: flex;

			.logo-contaier {
				height: 100%;
				min-width: 10px;
				padding-left: 28px;
				margin-right: 110px;
			}

			ul {
				display: flex;

				li {
					margin-right: 50px;

					a {
						font-size: 16px;
					}
				}

				li.active {
					a {
						color: #4A80F6;
					}
				}
			}
		}

		.login-info {
			margin-right: 36px;
			font-size: 16px;
		}
	}
</style>
