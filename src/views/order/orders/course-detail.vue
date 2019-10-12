<!-- 课程详情 -->
<template>
	<div class="container">
		<div class="course-title">
			<div>课程预约</div>
			<div>&nbsp;> 课程详情</div>
		</div>
		<div class="box">
			<div>
				<div>学习简笔画</div>
				<div>
					<div>主讲老师:</div>
					<div>龙飞</div>
				</div>
				<div>
					<div>课程代码:</div>
					<div>
						<p>DSFSDFSDF</p>
						<p>已结束</p>
					</div>
				</div>
				<div>
					<div>教材:</div>
					<div>XXXXXXXXXX</div>
				</div>
				<div>
					<div>时间:</div>
					<div>XXXXXXXXXX</div>
				</div>
				<div>
					<div>教室:</div>
					<div>XXXXXXXXXX</div>
				</div>
				<div>
					<div>简介:</div>
					<div>XXXXXXXXXX</div>
				</div>
				<div>
					<div>课件:</div>
					<div>XXXXXXXXXX</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
				
        }
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
