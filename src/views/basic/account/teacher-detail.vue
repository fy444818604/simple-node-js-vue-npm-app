<template>
	<div id="teachaer-detail">
		<div class="detai-title">
			<div class="detail-name">{{teacherName}}</div>
			<div>教职工</div>
		</div>
		<div class="detail-tab-container">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="基本信息" name="first">
					<div>
						<div>
							<div>
								<img :src="userPhoto" class="user-photo">
							</div>
							<ul class="detail-status">
								<li>
									<label>状态:</label>
									<div>停用</div>
								</li>
								<li>
									<label>理由:</label>
									<div>停用</div>
								</li>
								<li>
									<label>备注:</label>
									<div>停用</div>
								</li>
							</ul>
						</div>
						<div></div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="一卡通" name="second">一卡通</el-tab-pane>
			</el-tabs>
			<div class="replenish-line"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				teacherName:'林浩阳',
				userPhoto:require('@/assets/image/user-detail.png')
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style lang="scss" scoped="scoped">
	.detai-title{
		padding-left: 20px;
		padding-top: 22px;
		display: flex;
		align-items: center;
	}
	.detail-name{
		margin-right: 8px;
		font-size: 20px;
		color: #303133;
		font-weight: bold;
	}
	.el-tabs{
		padding-left: 20px;
	}
	.detail-tab-container{
		position: relative;
	}
	.replenish-line{
		height: 1px;
		width: 20px;
		position: absolute;
		left: 0;
		top: 39px;
		background-color: #E5E7EF;
	}
	.user-photo{
		width: 200px;
		height: 200px;
	}
	.detail-status>li{
		display: flex;
	}
</style>
