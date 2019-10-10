<!-- 预约中心首页 -->
<template>
	<div class="container">
		<el-row class="top-statis-list">
			<el-col :span="8" v-for="(item,index) in statis" :key="index">
				<div class="top-statis">
					<div class="top-statis-name">{{item.name}}</div>
					<div class="top-statis-data">{{item.data}}</div>
					<img src="../../../assets/image/spume.png" alt="">
				</div>
			</el-col>
		</el-row>
		<el-row :style="{'padding-top':'32px'}">
			<el-col :lg="15" :span="24" :style="{'padding':'0 16px'}">
				<div class="box">
					<div class="flex-between order-title">
						<div class="order-title-name">预约统计</div>
						<ul>
							<li v-for="item in type" :class="item.active?'active':''" @click="typeChange">{{item.text}}</li>
						</ul>
						<div>
							<order-time></order-time>
						</div>
					</div>
					<order-calendar :tableData="orderList"></order-calendar>
				</div>
			</el-col>
			<el-col :lg="9" :span="24" :style="{'padding':'0 16px'}">
				<div class="box bight">
					<div class="flex-between order-title">
						<div class="order-title-name">预约记录曲线</div>
					</div>
					<div id="order-record"></div>
				</div>
				<div class="box bight">
					<div class="flex-between order-title">
						<div class="order-title-name">预约信息</div>
					</div>
					<div class="order-msg-list">
						<ul>
							<li v-for="(item,index) in orderMsg" :key="index">
								<img :src="item.photo" alt="">
								<div class="order-msg-list-name">{{item.name}}</div>
								<div class="order-msg-list-detail">{{item.msg}}</div>
								<div class="order-msg-list-time">{{item.time}}</div>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import calendar from '../../../components/calendar'
import time from '../../../components/time-selected'
import echarts from 'echarts'
export default {
    data() {
        return {
            statis: [{
                name: '今日预约',
                data: 2
            }, {
                name: '本周预约',
                data: 18
            }, {
                name: '累计预约',
                data: 241
            }],
            orderMsg:[{
                photo:'http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg',
                name:'龙飞',
                msg:'预约了一堂同步课',
                time:'2019-09-25 11:55'
            }, {
                photo:'http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg',
                name:'龙飞',
                msg:'预约了一堂同步课',
                time:'2019-09-25 11:55'
            }, {
                photo:'http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg',
                name:'龙飞',
                msg:'预约了一堂同步课',
                time:'2019-09-25 11:55'
            }, {
                photo:'http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg',
                name:'龙飞',
                msg:'预约了一堂同步课',
                time:'2019-09-25 11:55'
            }, {
                photo:'http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg',
                name:'龙飞',
                msg:'预约了一堂同步课',
                time:'2019-09-25 11:55'
            }],
            orderList: [{
                x: 1,
                y: 1,
                record: 5,
                syn: 3,
                meeting: 2
            },{
                x: 2,
                y: 2,
                record: 0,
                syn: 0,
                meeting: 1
            },{
                x: 2,
                y: 5,
                record: 5,
                syn: 1,
                meeting: 1
            },{
                x: 3,
                y: 3,
                record: 2,
                syn: 3,
                meeting: 1
            },{
                x: 4,
                y: 6,
                record: 1,
                syn: 0,
                meeting: 1
            },{
                x: 5,
                y: 2,
                record: 1,
                syn: 1,
                meeting: 1
            }],
            type: [{
                id: 1,
                text: '全部',
                active: true
            }, {
                id: 2,
                text: '同步课',
                active: false
            }, {
                id: 3,
                text: '录播课',
                active: false
            }, {
                id: 4,
                text: '会议',
                active: false
            }],
            option: {
                xAxis: {
                    type: 'category',
                    data: ['9/25', '9/26', '9/27', '9/28', '9/29', '9/30', '10/1'],
                    boundaryGap: false,
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: false,
                    show: false
                },
                grid: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 20
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        color: '#4C84FF'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4C84FF'
                        }, {
                            offset: 1,
                            color: '#ffffff'
                        }])
                    }
                }]
            }
        }
    },
    components: {
        'order-calendar': calendar,
        'order-time': time
    },
    mounted() {
        let myChart = echarts.init(document.getElementById('order-record'));
        myChart.setOption(this.option);
    },
    methods: {
        typeChange() {

        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 16px;
		background-color: #F1F3F8;

		.box {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 5px 20px 0px rgba(23, 38, 71, 0.05);
			border-radius: 6px;
			padding: 22px 24px;
			width: 100%;

			&.bight {
				height: 399px;
			}
			
			.order-msg-list{
				height: calc(100% - 47px);
				ul{
					height: 100%;
					
					li{
						display: flex;
						align-items: center;
						height: 20%;
						
						img{
							width: 40px;
							height: 40px;
							margin-right: 20px;
							border-radius: 100%;
						}
						
						.order-msg-list-name{
							width: 45px;
							margin-right: 42px;
						}
						
						.order-msg-list-detail{
							width: calc(100% - 300px);
							margin-right: 32px;
						}
						
						.order-msg-list-time{
							width: 120px;
						}
					}
				}
			}

			#order-record {
				width: 100%;
				height: 300px;
			}

			.flex-between {
				&.order-title {
					align-items: center;
					margin-bottom: 28px;

					.order-title-name {
						color: #55595C;
						font-weight: bold;
					}
				}

				ul {
					display: flex;

					li {
						height: 28px;
						line-height: 28px;
						padding: 0 11px;

						&.active {
							background-color: #4C84FF;
							border-radius: 14px;
							color: #FFFFFF;
						}
					}
				}
			}
		}

		.top-statis {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 16px;
			height: 140px;

			&:first-child {
				background: linear-gradient(to top right, #8EC9F8, #4C84FF);
			}

			.top-statis-name {
				color: #FFFFFF;
				position: absolute;
				top: 22px;
				left: 24px;
			}

			.top-statis-data {
				color: #FFFFFF;
				font-size: 48px;
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
						background: linear-gradient(to top right, #FFBE96, #FE7096);
					}
				}

				&:nth-child(3) {
					.top-statis {
						background: linear-gradient(to top right, #83D9D2, #07CDAE);
					}
				}
			}
		}
	}
</style>
