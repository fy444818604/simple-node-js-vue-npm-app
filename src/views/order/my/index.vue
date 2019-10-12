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
		<div style="padding: 32px 16px;">
			<div class="box">
				<div class="flex-between mb32">
					<div class="lumps">
						<ul>
							<li v-for="(item,index) in type">
								<div class="order-lump" :style="{'background':`linear-gradient(to right, ${item.color}, ${item.color1})`}"></div>
								<div>{{item.name}}</div>
							</li>
						</ul>
					</div>
					<div>
						<order-time></order-time>
					</div>
				</div>
				<order-calendar :type="3" :tableData="myCalendar"></order-calendar>
			</div>
		</div>
	</div>
</template>

<script>
	import calendar from '../../../components/calendar'
	import time from '../../../components/time-selected'
	export default {
		data() {
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
				}],
				type: [{
					name: '同步课堂',
					color: '#4C84FF',
					color1: '#8EC9F8'
				}, {
					name: '录播课程',
					color: '#FDA423',
					color1: '#FEDB73'
				}, {
					name: '视频会议',
					color: '#B7BBC3',
					color1: '#D4D7DE'
				}],
				myCalendar: [{
					x: 1,
					y: 1,
					type: 1,
					name: '把学生当成自己的孩子培养',
					time: '16:00-16:40',
					syc: true,
					state: 1
				}]
			}
		},
		components: {
			'order-calendar': calendar,
			'order-time': time
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.mb32 {
		margin-bottom: 32px;
		align-items: center;
	}

	.container {
		padding: 0 16px;
		background-color: #F1F3F8;
		min-height: calc(100vh - 60px);

		.lumps {
			ul {
				display: flex;

				li {
					display: flex;
					margin-right: 22px;

					.order-lump {
						width: 24px;
						height: 16px;
						border-radius: 4px;
						margin-right: 13px;
					}

					div {
						color: #909399;
					}
				}
			}
		}

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
