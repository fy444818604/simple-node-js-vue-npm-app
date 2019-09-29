<!-- 资源平台首页 -->
<template>
	<div class="res-index">
		<!-- 轮播 -->
		<el-carousel class="base-carousel" height="360px">
			<el-carousel-item>
				<div class="item"></div>
			</el-carousel-item>
			<el-carousel-item>
				<div class="item"></div>
			</el-carousel-item>
		</el-carousel>
		<!-- tips -->
		<div class="tips">
			<div class="tip-content content-center">
				<resTip>
					<div>
						<p>2000</p>
						<p>总计访问量</p>
					</div>
				</resTip>
				<resTip></resTip>
				<resTip></resTip>
				<resTip></resTip>
			</div>
		</div>
		<div class="recommend">
			<div class="recommend-content content-center">
				<res-title title="精品推荐"></res-title>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
			</div>
		</div>
		<div class="latest">
			<div class="latest-content content-center">
				<res-title title="最新资源"></res-title>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
			</div>
		</div>
		<div class="popular">
			<div class="popular-content content-center">
				<res-title title="热门资源"></res-title>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
			</div>
		</div>
		<div class="album">
			<div class="album-content content-center">
				<res-title title="精选专辑"></res-title>
				<res-box :index="4" show></res-box>
				<res-box :index="4" show></res-box>
				<res-box :index="4" show></res-box>
				<res-box :index="4" show></res-box>
			</div>
		</div>
		<div class="sync">
			<div class="sync-content content-center">
				<res-title title="同步课堂"></res-title>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
				<res-box></res-box>
			</div>
		</div>
		<res-footer></res-footer>
	</div>
</template>

<script>
export default {
    components: {
        resTip: () => import("@/components/res-tip"),
        resTitle: () => import("@/components/res-title"),
        resBox: () => import("@/components/res-box"),
        resFooter: () => import("@/components/res-footer"),
    }
}
</script>

<style lang="scss" scoped="scoped">
	.content-center {
		width: 80%;
		margin: 0 auto;
	}

	.res-index {
		min-width: 1200px;

		.base-carousel {
			.item {
				width: 100%;
				height: 100%;
				background: url(./../../../assets/image/logo.jpeg) no-repeat left top;
				background-size: 100% 100%;
			}
		}

		.tips {
			.tip-content {
				margin: 30px auto;
				display: flex;
				justify-content: space-between;

				&>div:first-child {
					margin-left: 0;
				}
			}
		}

		.recommend {
			padding-bottom: 30px;

			.recommend-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&>div:nth-child(5n + 2) {
					margin-left: 0;
				}
			}
		}

		.latest {
			background: #F7F8FB;
			padding-bottom: 30px;

			.latest-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&>div:nth-child(5n + 2) {
					margin-left: 0;
				}
			}
		}

		.popular {
			padding-bottom: 30px;

			.popular-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&>div:nth-child(5n + 2) {
					margin-left: 0;
				}
			}
		}

		.album {
			background: #F7F8FB;
			padding-bottom: 30px;

			.album-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&>div:nth-child(4n + 2) {
					margin-left: 0;
				}
			}
		}

		.sync {
			padding-bottom: 30px;

			.sync-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&>div:nth-child(5n + 2) {
					margin-left: 0;
				}
			}
		}
	}
</style>
