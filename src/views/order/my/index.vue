<!-- 我的 -->
<template>
	<div class="container">
		<div class="course-title">
			<div>我的</div>
		</div>
		<el-row class="top-statis-list">
			<el-col :span="8" v-for="(item,index) in statis" :key="index">
				<div class="top-statis">
					<div class="top-statis-name">{{item.name}}</div>
					<div class="top-statis-data">{{item.data}}</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
    data(){
        return {
            statis: [{
                name: '同步课堂',
                data: 32
            }, {
                name: '录播课程',
                data: 18
            }, {
                name: '视频会议',
                data: 24
            }]
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 16px;
		background-color: #F1F3F8;
		min-height: calc(100vh - 60px);
		
		.course-title {
			padding-top: 20px;
			display: flex;
		
			div {
				&:first-child {
					color: #55595C;
					font-weight: bold;
				}
			}
		}
		
		.box {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 5px 20px 0px rgba(23, 38, 71, 0.05);
			border-radius: 6px;
			padding: 22px 24px;
			width: 100%;
		}
		
		
		.top-statis {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 16px;
			height: 140px;
			border-radius: 4px;
			background: url('../../../assets/image/order-syc.png') no-repeat right bottom #FFFFFF;
			
			.top-statis-name {
				color: #55595C;
				position: absolute;
				top: 22px;
				left: 24px;
			}
		
			.top-statis-data {
				color: #606266;
				font-size: 38px;
			}
		
			img {
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				height: 140px;
				width: 118px;
			}
		}
		
		.top-statis-list {
			padding-top: 32px;
		
			.el-col {
				&:nth-child(2) {
					.top-statis {
						background: url('../../../assets/image/order-play.png') no-repeat right bottom #FFFFFF;
					}
				}
		
				&:nth-child(3) {
					.top-statis {
						background: url('../../../assets/image/order-meetting.png') no-repeat right bottom #FFFFFF;
					}
				}
			}
		}
	}
</style>
