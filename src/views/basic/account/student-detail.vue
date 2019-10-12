<!-- 学生详情 -->
<template>
	<div id="teachaer-detail">
		<div class="detai-title">
			<div class="detail-name">{{teacherName}}</div>
			<div>学生</div>
		</div>
		<div class="detail-tab-container">
			<div class="btnGroup">
				<btn-list v-for="(item,index) in btnGroup" :key="index" :model="item" @btn-click="btnClick"></btn-list>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="基本信息" name="first">
					<div class="flex">
						<div style="padding-left: 20px;">
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
							<el-collapse v-model="active">
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
											<div>出生日期</div>
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
								<el-collapse-item name="2">
									<template slot="title">
										<div class="detail-table-title">
											<img :src="require('@/assets/image/student.png')" alt="">
											<span>招生信息</span>
										</div>
									</template>
									<ul class="detail-table-list">
										<li>
											<div>招生类型</div>
											<div>春季</div>
										</li>
										<li>
											<div>生源类型</div>
											<div>应届毕业生</div>
										</li>
									</ul>
								</el-collapse-item>
								<el-collapse-item name="3">
									<template slot="title">
										<div class="detail-table-title">
											<img :src="require('@/assets/image/other.png')" alt="">
											<span>其它</span>
										</div>
									</template>
									<ul class="detail-table-list">
										<li>
											<div>账号安全等级</div>
											<div>0</div>
										</li>
									</ul>
								</el-collapse-item>
							</el-collapse>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="一卡通" name="second">
					<div class="detail-card-title">
						<img :src="require('@/assets/image/account-card.png')" alt="">
						<div>卡</div>
					</div>
					<ul class="detail-table-list detail-line">
						<li>
							<div>卡号</div>
							<div>101011</div>
						</li>
						<li>
							<div>注册时间</div>
							<div>2019-08-27 16:44</div>
						</li>
						<li>
							<div>状态</div>
							<div>启用</div>
						</li>
					</ul>
					<div class="detail-card-title">
						<img :src="require('@/assets/image/account-card.png')" alt="">
						<div>手环</div>
					</div>
					<ul class="detail-table-list detail-line">
						<li>
							<div>mac地址</div>
							<div>101011</div>
						</li>
						<li>
							<div>注册时间</div>
							<div>2019-08-27 16:44</div>
						</li>
						<li>
							<div>状态</div>
							<div>启用</div>
						</li>
					</ul>
					<div class="detail-card-title">
						<img :src="require('@/assets/image/account-card.png')" alt="">
						<div>电子校徽</div>
					</div>
					<ul class="detail-table-list detail-line">
						<li>
							<div>编号</div>
							<div>101011</div>
						</li>
						<li>
							<div>注册时间</div>
							<div>2019-08-27 16:44</div>
						</li>
						<li>
							<div>状态</div>
							<div>启用</div>
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="家长信息" name="third">
					<div class="detail-card-title">
						<img :src="require('@/assets/image/name.png')" alt="">
						<div>家长1</div>
					</div>
					<ul class="detail-table-list detail-line">
						<li>
							<div>姓名</div>
							<div>101011</div>
						</li>
						<li>
							<div>关系</div>
							<div>2019-08-27 16:44</div>
						</li>
						<li>
							<div>身份证号</div>
							<div>启用</div>
						</li>
						<li>
							<div>手机号</div>
							<div>101011</div>
						</li>
						<li>
							<div>微信绑定</div>
							<div>2019-08-27 16:44</div>
						</li>
						<li>
							<div>状态</div>
							<div>启用</div>
						</li>
					</ul>
				</el-tab-pane>
			</el-tabs>
			<div class="replenish-line"></div>
		</div>
	</div>
</template>

<script>
import btnList from '@/components/btn-list'
export default {
    data() {
        return {
            activeName: 'third',
            labelPosition: 'right',
            active: ['1', '2', '3'],
            edit: false,
            edit1: false,
            teacherName: '林浩阳',
            userPhoto: require('@/assets/image/user-detail.png'),
            btnGroup: [{
                icon: 'icon-enable',
                name: '启用',
                alias: 3
            }, {
                icon: 'icon-permissions',
                name: '重置密码',
                alias: 4
            }, {
                icon: 'icon-edit',
                name: '编辑',
                alias: 5
            }],
            intro: {
                personal: '哈撒给',
                record: [{
                    text: '成都希望小学',
                    startTime: '',
                    endTime: ''
                }],
                Award: [{
                    text: '2018年市级优秀教师',
                    time: '',
                    pic: ''
                }]
            }
        };
    },
    components: {
        'btn-list': btnList
    },
    created(){
        console.log(this.$route.params)
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        btnClick() {
			console.log(123)
        }
    }
};
</script>
<style>
	.el-tabs__header {
		margin-bottom: 0;
	}

	.el-collapse-item__content {
		padding-bottom: 0;
	}

	.el-tabs__content {
		margin-left: -20px;
	}

	.el-textarea__inner[readonly=readonly] {
		background-color: #f5f5f5;
	}

	.line.el-col.el-col-1 {
		text-align: center;
	}
</style>
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
		margin-top: 20px;
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

	.detail-table-title {
		display: flex;
		align-items: center;
	}

	.detail-table-title>img {
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}

	.detail-table-title {
		padding-left: 13px;
	}

	.detail-table-list>li {
		display: flex;
		border-top: 1px solid #E5E7EF;
		height: 44px;
		align-items: center;
	}

	.detail-table-list>li>div:first-child {
		padding-left: 32px;
		width: 25%;
	}

	.detail-table-list>li>div:nth-child(2) {
		background-color: #F7F7F7;
		width: 100%;
		height: 100%;
		line-height: 44px;
		padding-left: 10px;
	}

	.btnGroup {
		position: absolute;
		right: 30px;
		top: 10px;
		z-index: 9999;
	}

	.detail-line>li>div:first-child {
		padding-left: 43px;
	}

	.detail-line>li:last-child {
		border-bottom: 1px solid #E5E5Ef;
	}

	.detail-card-title {
		display: flex;
		height: 44px;
		align-items: center;
		padding-left: 20px;
	}

	.detail-card-title img {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}

	.icon-picture {
		color: #4A80F6;
		font-size: 20px;
	}
</style>
