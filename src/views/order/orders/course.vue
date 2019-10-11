<!-- 课程预约 -->
<template>
	<div class="container">
		<div class="course-title">
			<div>课程预约</div>
		</div>
		<div class="box">
			<div class="flex-between">
				<div class="flex">
					<ul class="state-wrap flex">
						<li v-for="item in state" class="flex">
							<div class="state-lump" :style="{'background':item.color}"></div>
							<div>{{item.text}}</div>
						</li>
					</ul>
					<ul class="type-wrap flex">
						<li v-for="item in type" class="flex">
							<div class="type-lump" :style="{'background':item.color}"></div>
							<div>{{item.text}}</div>
						</li>
					</ul>
				</div>
				<div>
					<order-time></order-time>
				</div>
			</div>
			<order-calendar :tableData="courseData" :type="2"></order-calendar>
		</div>
	</div>
</template>

<script>
import calendar from '../../../components/calendar'
import time from '../../../components/time-selected'
export default {
    data(){
        return {
            state:[{
                color:'#4C84FF',text:'未开始'
            },{
                color:'#5ECB3D',text:'进行中'
            },{
                color:'#B7BBC3',text:'已结束'
            }],
            type:[{
                color:'rgba(76,132,255,.15)',text:'同步课'
            },{
                color:'rgba(253,164,35,.15)',text:'录播课'
            }],
            courseData:[{
                x:2,y:2,name:'生物组织与细胞力学',subject:'生物',school:'成都七中',author:'龙飞',time:'8:40-9:20',state:3,type:1
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
	.container {
		padding: 0 32px;
		background-color: #F1F3F8;
		min-height: calc(100vh - 60px);

		.box {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 5px 20px 0px rgba(23, 38, 71, 0.05);
			border-radius: 6px;
			padding: 22px 24px;
			width: 100%;
			
			.flex-between{
				align-items: center;
				margin-bottom: 30px;
				
				ul{
					li{
						align-items: center;
						margin-right: 24px;
						.state-lump{
							width: 16px;
							height: 16px;
							border-radius: 4px;
							margin-right: 12px;
						}
						
						.type-lump{
							width: 24px;
							height: 16px;
							border-radius: 4px;
							margin-right: 12px;
						}
					}
				}
			}
		}
		
		.course-title{
			padding-top: 20px;
			margin-bottom: 24px;
			
			div{
				&:first-child{
					color: #55595C;
					font-weight: bold;
				}
			}
		}
	}
</style>
