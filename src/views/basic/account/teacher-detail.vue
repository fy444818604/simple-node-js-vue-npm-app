<template>
	<div id="teachaer-detail">
		<div class="detai-title">
			<div class="detail-name">{{teacherName}}</div>
			<div>教职工</div>
		</div>
		<div class="detail-tab-container">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="基本信息" name="first">
					<div class="flex">
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
						<div class="detail-table">
							<el-collapse>
								<el-collapse-item name="1">
									<template slot="title">
										<div class="detail-table-title">
											<img :src="require('@/assets/image/basic-msg.png')" alt="">
											<span>基本信息</span>
										</div>
									</template>
									<ul class="detail-table-list">
										<li>
											<div>学号</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>姓名</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>性别</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>民族</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>出生年月</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>年龄</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>身份证号</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>班级</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>就读类型</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>政治面貌</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>加入时间</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>户口所在地</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>住址区域</div>
											<div>2018012545</div>
										</li>
										<li>
											<div>详细地址</div>
											<div>2018012545</div>
										</li>
									</ul>
								</el-collapse-item>
							</el-collapse>
						</div>
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
				teacherName: '林浩阳',
				userPhoto: require('@/assets/image/user-detail.png')
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
	.detai-title {
		padding-left: 20px;
		padding-top: 22px;
		display: flex;
		align-items: center;
	}

	.detail-name {
		margin-right: 8px;
		font-size: 20px;
		color: #303133;
		font-weight: bold;
	}

	.el-tabs {
		padding-left: 20px;
	}

	.detail-tab-container {
		position: relative;
	}

	.replenish-line {
		height: 1px;
		width: 20px;
		position: absolute;
		left: 0;
		top: 39px;
		background-color: #E5E7EF;
	}

	.user-photo {
		width: 200px;
		height: 200px;
		padding-top: 20px;
	}

	.detail-status>li {
		display: flex;
		margin-bottom: 15px;
	}

	.detail-status>li>label {
		margin-right: 5px;
	}

	.detail-table {
		width: 100%;
		margin-left: 20px;
		border-left: 1px solid #E5E7EF;
		min-height: calc(100vh - 102px);
	}

	.el-tabs__header {
		margin-bottom: 0;
	}
	
	.detail-table-title{
		display: flex;
		align-items: center;
	}
	
	.detail-table-title>img{
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}
	
	.detail-table-title{
		padding-left: 13px;
	}
	.detail-table-list{
		margin-bottom: -25px;
	}
	.detail-table-list>li{
		display: flex;
		border-top: 1px solid #E5E7EF;
		height: 44px;
		align-items: center;
	}
	.detail-table-list>li>div:first-child{
		padding-left: 32px;
		width: 25%;
	}
	.detail-table-list>li>div:nth-child(2){
		background-color: #F7F7F7;
		width: 100%;
		height: 100%;
		line-height: 44px;
		padding-left: 5px;
	}
</style>
