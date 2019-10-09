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
		<div style="padding: 20px;background-color: #FFFFFF;">
			<order-calendar :tableData="orderList"></order-calendar>
		</div>
	</div>
</template>

<script>
import calendar from '../../../components/calendar'
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
			orderList:[
				{x:1,y:1,record:5,syn:3,meeting:2}
			]
        }
    },
    components: {
        'order-calendar': calendar
    },
    created() {
        this.$api.test().then(res => {
            console.log(res)
        })
    }
}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 16px;
		background-color: #F1F3F8;

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
