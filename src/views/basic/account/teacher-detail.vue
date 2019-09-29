<template>
	<el-scrollbar :native="false" style="height:100%">
		<div id="teachaer-detail">
			<div class="detai-title">
				<div class="detail-name">{{teacherName}}</div>
				<div>教职工</div>
			</div>
			<div class="detail-tab-container">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="基本信息" name="first">
						<div class="btnGroup">
							<btn-list v-for="(item,index) in btnGroup" :key="index" :model="item" @btn-click="btnClick"></btn-list>
						</div>
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
												<div>工号</div>
												<div>
													<span v-show="!edit">{{baseForm.workId}}</span>
													<el-input v-show="edit" v-model="baseForm.workId"></el-input>
												</div>
											</li>
											<li>
												<div>姓名</div>
												<div>
													<span v-show="!edit">{{baseForm.name}}</span>
													<el-input v-show="edit" v-model="baseForm.name"></el-input>
												</div>
											</li>
											<li>
												<div>性别</div>
												<div>
													<span v-show="!edit">{{baseForm.sex}}</span>
													<el-select v-show="edit" v-model="baseForm.sex">
														<el-option label="男" value="1"></el-option>
														<el-option label="女" value="2"></el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>民族</div>
												<div>
													<span v-show="!edit">{{baseForm.nation}}</span>
													<el-select v-show="edit" v-model="baseForm.nation">
														<el-option label="汉" value="汉"></el-option>
														<el-option label="满" value="满"></el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>出生日期</div>
												<div>
													<span v-show="!edit">{{baseForm.name}}</span>
													<el-input v-show="edit" :disabled="true" v-model="baseForm.name"></el-input>
												</div>
											</li>
											<li>
												<div>年龄</div>
												<div>
													<span v-show="!edit">{{baseForm.name}}</span>
													<el-input v-show="edit" :disabled="true" v-model="baseForm.name"></el-input>
												</div>
											</li>
											<li>
												<div>身份证号</div>
												<div>
													<span v-show="!edit">{{baseForm.idCard}}</span>
													<el-input v-show="edit" :disabled="true" v-model="baseForm.idCard"></el-input>
												</div>
											</li>
											<li>
												<div>手机</div>
												<div>2018012545</div>
											</li>
											<li>
												<div>婚姻状况</div>
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
												<div>学历</div>
												<div>2018012545</div>
											</li>
											<li>
												<div>学位</div>
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
												<span>工作信息</span>
											</div>
										</template>
										<ul class="detail-table-list">
											<li>
												<div>机构</div>
												<div>教研组</div>
											</li>
											<li>
												<div>职务</div>
												<div>应届毕业生</div>
											</li>
											<li>
												<div>岗位</div>
												<div>应届毕业生</div>
											</li>
											<li>
												<div>职称</div>
												<div>应届毕业生</div>
											</li>
											<li>
												<div>用工性质</div>
												<div>应届毕业生</div>
											</li>
											<li>
												<div>到岗时间</div>
												<div>应届毕业生</div>
											</li>
											<li>
												<div>直接上级</div>
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
					<el-tab-pane label="个人介绍" name="third">
						<div class="btnGroup">
							<btn-list v-for="(item,index) in btnGroup1" :key="index" :model="item" @btn-click="btnClick1"></btn-list>
						</div>
						<div style="padding-left: 20px;width: 680px;padding-top: 20px;">
							<el-form :label-position="labelPosition" label-width="86px" :model="intro">
								<el-form-item label="个人简介:">
									<el-input type="textarea" :disabled="!edit1" :rows="4" v-model="intro.personal"></el-input>
								</el-form-item>
								<el-form-item label="教室资格证:">
									<i class="iconfont icon-picture"></i>
								</el-form-item>
								<el-form-item label="个人履历:">
									<el-row v-for="(item,index) in intro.record" :key="index">
										<el-col :span="12">
											<el-input :disabled="!edit1" v-model="item.text"></el-input>
										</el-col>
										<el-col :span="1">
											&nbsp;
										</el-col>
										<el-col :span="5">
											<el-date-picker :disabled="!edit1" type="date" placeholder="选择日期" v-model="item.startTime" style="width: 100%;"></el-date-picker>
										</el-col>
										<el-col class="line" :span="1">-</el-col>
										<el-col :span="5">
											<el-date-picker :disabled="!edit1" type="date" placeholder="选择日期" v-model="item.endTime" style="width: 100%;"></el-date-picker>
										</el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="获奖&证书:">
									<el-row v-for="(item,index) in intro.Award" :key="index">
										<el-col :span="12">
											<el-input :disabled="!edit1" v-model="item.text"></el-input>
										</el-col>
										<el-col :span="1">
											&nbsp;
										</el-col>
										<el-col :span="5">
											<el-date-picker :disabled="!edit1" type="date" placeholder="选择日期" v-model="item.time" style="width: 100%;"></el-date-picker>
										</el-col>
										<el-col class="line" :span="1">&nbsp;</el-col>
										<el-col :span="5">
											<i class="iconfont icon-picture"></i>
										</el-col>
									</el-row>
								</el-form-item>
							</el-form>
						</div>
					</el-tab-pane>
				</el-tabs>
				<div class="replenish-line"></div>
			</div>
		</div>
	</el-scrollbar>
</template>

<script>
import btnList from '@/components/btn-list'
export default {
    data() {
        return {
            activeName: 'first',
            labelPosition: 'right',
            active: ['1', '2', '3'],
            edit: true,
            edit1: false,
            teacherName: '林浩阳',
            userPhoto: require('@/assets/image/user-detail.png'),
            btnGroup: [{
                icon: 'icon-enable',
                name: '启用',
                alias: 1
            }, {
                icon: 'icon-permissions',
                name: '重置密码',
                alias: 2
            }, {
                icon: 'icon-edit',
                name: '编辑',
                alias: 3
            }],
            btnGroup1: [{
                icon: 'icon-edit',
                name: '编辑',
                alias: 4
            }],
            baseForm: {
                workId: '2018012545',
                name: '5asdasd',
                sex:1,
                nation:'汉',
                idCard:''
            },
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
    methods: {
        handleClick(tab, event) {

        },
        btnClick() {

        },
        btnClick1() {

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
		overflow: visible;
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
		top: -30px;
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
