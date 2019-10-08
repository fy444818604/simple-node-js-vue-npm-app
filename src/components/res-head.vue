<!-- 资源平台头部 -->
<template>
	<div class="res-head-container">
		<div class="head-left">
			<div class="logo-contaier">
				<img src="../assets/image/res-logo.png" alt="">
				<div>教育资源平台</div>
			</div>
			<ul>
				<li v-for="(item,index) in menuList" :key="index">
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
                href: '/resource/Layout/index',
                active: false
            }, {
                name: '资源',
                href: '/resource/Layout/resource-list',
                active: false
            }, {
                name: '专辑',
                href: '/resource/Layout/album',
                active: false
            }, {
                name: '发现',
                href: '/resource/Layout/discover',
                active: false
            }]
        }
    },
    created() {
        this.active(this.$route.path)
    },
    watch: {
        $route(to) {
            this.active(to.path)
        }
    },
    methods: {
        active(para) {
            this.menuList.map((v) => {
                v.active = false;
                if (v.href == para) {
                    v.active = true;
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.res-head-container {
		display: flex;
		height: 60px;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.08);
		min-width: 1200px;

		.head-left {
			display: flex;
			align-items: center;

			.logo-contaier {
				height: 100%;
				min-width: 10px;
				padding-left: 28px;
				margin-right: 110px;
				display: flex;
				align-items: center;
				
				div{
					margin-left: 5px;
					font-size: 22px;
					color: #333333;
				}
			}

			ul {
				display: flex;

				li {
					margin-right: 50px;

					a {
						font-size: 16px;
					}

					a.router-link-active {
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
