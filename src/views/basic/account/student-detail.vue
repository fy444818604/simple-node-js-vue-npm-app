<!-- 学生详情 -->
<template>
	<div id="teachaer-detail">
		<div class="detai-title">
			<div class="detail-name">{{teacherName}}</div>
			<div>学生</div>
		</div>
		<div class="detail-tab-container" @click.stop>
			<div class="btnGroup" >
				<btn-list v-show="!edit" @btn-click="btnClick(item)" v-for="(item,index) in btnGroup" :key="index" :model="item" ></btn-list>
                <btn-list v-show="edit" @btn-click="baoClick(item)" v-for="(item,index) in btnGroupT" :key="index" :model="item" ></btn-list>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="基本信息" name="third">
					<div class="flex">
						<div style="padding-left: 20px;">
							<div>
								<img :src="userPhoto" class="user-photo">
							</div>
							<ul class="detail-status">
								<li>
									<label>状态:</label>
									<div >{{ leftData.status }}</div>
								</li>
								<li>
									<label>理由:</label>
									<div >{{ leftData.reason }}</div>
								</li>
								<li>
									<label>备注:</label>
									<div >{{ leftData.notes }}</div>
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
											<div><span v-show="edit" style="color: red">*</span>学号</div>
											<div>
												<span v-show="!edit">{{baseForm.workId}}</span>
												<el-input v-show="edit"  v-model="baseForm.workId" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div><span v-show="edit" style="color: red">*</span>姓名</div>
											<div>
												<span v-show="!edit">{{baseForm.userName}}</span>
												<el-input v-show="edit"  v-model="baseForm.userName" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div><span v-show="edit" style="color: red">*</span>性别</div>
											<div>
												<span v-show="!edit">{{baseForm.sex}}</span>
												<el-select v-show="edit" v-model="baseForm.sex" style="width:30%">
													<el-option
															v-for="item in sex"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div><span v-show="edit" style="color: red">*</span>名族</div>
											<div>
												<span v-show="!edit">{{baseForm.nationality}}</span>
												<el-select v-show="edit" v-model="baseForm.nationality" style="width:30%">
													<el-option
															v-for="item in nationData"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div>出生日期</div>
											<div>
												<span v-show="!edit">{{baseForm.birthday}}</span>
												<el-input v-show="edit" :disabled="true" v-model="baseForm.birthday" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div>年龄</div>
											<div>
												<span v-show="!edit">{{baseForm.age}}</span>
												<el-input v-show="edit" :disabled="true" v-model="baseForm.age" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div><span v-show="edit" style="color: red">*</span>身份证号</div>
											<div>
												<span v-show="!edit">{{baseForm.idCard}}</span>
												<el-input v-show="edit"  v-model="baseForm.idCard" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div><span v-show="edit" style="color: red">*</span>班级</div>

											<div>
												<span v-show="!edit">{{baseForm.classId}}</span>
												<el-select v-show="edit" v-model="baseForm.classId" style="width:30%">
                                                    <el-option
                                                            v-for="item in learn"
                                                            :key="item.code"
                                                            :label="item.text"
                                                            :value="item.code">
                                                    </el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div>就读类型</div>
											<div>
												<span v-show="!edit">{{baseForm.typeOfStudy}}</span>
												<el-select v-show="edit" v-model="baseForm.typeOfStudy" style="width:30%">
													<el-option
															v-for="item in attend"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div>政治面貌</div>
											<div>
												<span v-show="!edit">{{baseForm.politicalAttitudes}}</span>
												<el-select v-show="edit" v-model="baseForm.politicalAttitudes" style="width:30%">
													<el-option
															v-for="item in attitudes"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div>加入时间</div>
											<div>
												<span v-show="!edit">{{baseForm.joinTime}}</span>
												<el-date-picker
														v-show="edit"
														v-model="baseForm.joinTime"
														type="datetime"
														placeholder="选择日期时间" style="width:30%">
												</el-date-picker>

											</div>
										</li>
										<li>
											<div>户口所在地</div>
											<div>
												<span v-show="!edit">{{baseForm.home}}</span>
												<el-input v-show="edit"  v-model="baseForm.home" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div>住址区域</div>
											<div>
												<span v-show="!edit">{{baseForm.area}}</span>
												<el-input v-show="edit"  v-model="baseForm.area" style="width:30%"></el-input>
											</div>
										</li>
										<li>
											<div>详细地址</div>
											<div>
												<span v-show="!edit">{{baseForm.detailedAddress}}</span>
												<el-input v-show="edit" v-model="baseForm.detailedAddress" style="width:30%"></el-input>
											</div>
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
											<div>
												<span v-show="!edit">{{baseForm.enrollmentType}}</span>
												<el-select v-show="edit" v-model="baseForm.enrollmentType" style="width:30%" >
													<el-option
															v-for="item in recruit"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
										</li>
										<li>
											<div>生源类型</div>
											<div>
												<span v-show="!edit">{{baseForm.originType}}</span>
												<el-select v-show="edit" v-model="baseForm.originType" style="width:30%">
													<el-option
															v-for="item in source"
															:key="item.code"
															:label="item.text"
															:value="item.code">
													</el-option>
												</el-select>
											</div>
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
											<div>
												<span v-show="!edit">{{baseForm.securityLevel}}</span>
												<el-input v-show="edit" v-model="baseForm.securityLevel" style="width:30%"></el-input>
											</div>
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
				<el-tab-pane label="家长信息" name="first">
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
			userId:'',
            activeName: 'third',
            labelPosition: 'right',
            active: ['1', '2', '3'],
            edit: false,
            edit1: false,
            teacherName: '林浩阳',
            userPhoto: require('@/assets/image/user-detail.png'),
            btnGroup: [ {
                icon: 'icon-edit',
                name: '编辑',
                alias: 1
            }],
            btnGroupT: [ {
                icon: 'icon-save',
                name: '保存',
                alias: 1
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
                    pic: '',
                }]
            },
			leftData:{
				status:'',
				reason:'',
				notes:''
			},
			baseForm:{
				workId:'',
				userName:'',
				sex:'',
				joinTime:'',
				nationality:'',
				birthday:'',
				age:'',
				idCard:'',
				classId:'',
				typeOfStudy:'',
				enrollmentType:'',
				originType:'',
				area:'',
				home:'',
				detailedAddress:'',
				securityLevel:''
			},
            staId:'',
            classId:'',
			//字典数据
			sex:[],//性别
			stage:[],//阶段
			attend:[],//就读类型
			nationData:[],//名族
			attitudes:[],//政治面貌
			recruit:[],//招生
			source:[],//生源
            learn:[],//班级
        };
    },
    components: {
        'btn-list': btnList
    },
    created(){
    	this.userId = this.$route.query.id;
		this.studentsDetails();
		this.dictionary();
		this.classNid();
    },
    methods: {
    	//字典
		dictionary(){
			let sex = {"type": ["sex",'stage','study_type','nation','political_attitudes','recruit_student_type','student_source_type']};
			this.$api.dictSelect(sex).then(res => {
				if(res.success == true){
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						if(res.data[i].type == 'sex'){
							this.sex = res.data[i].data;
						}else if(res.data[i].type == 'stage'){
							this.stage = res.data[i].data;
						}else if(res.data[i].type == 'study_type'){
							this.attend = res.data[i].data;
						}else if(res.data[i].type == 'nation'){
							this.nationData = res.data[i].data;
						}else  if(res.data[i].type == 'political_attitudes'){
							this.attitudes = res.data[i].data
						}else  if(res.data[i].type == 'recruit_student_type'){
							this.recruit = res.data[i].data
						}else  if(res.data[i].type == 'student_source_type'){
							this.source = res.data[i].data
						}
					}
				}
			});
		},
    	//学生详情
		studentsDetails(){
			let params = {
				id :this.userId,
			};
			this.$api.studentsDetails(params).then(res => {
				if (res.success == true) {
				    console.log(res)
                    this.staId = res.data.id;
                    this.classId = res.data.coreClassmembers.classId;
					this.teacherName = res.data.userName;
					this.baseForm = {
							workId:res.data.workId,
							userName:res.data.userName,
							sex:res.data.sexText,
							joinTime:res.data.joinTime,
							nationality:res.data.nationalityText,
							birthday:res.data.birthday,
							age:res.data.age,
							idCard:res.data.idCard,
							classId:res.data.coreClassmembers.classId,
							typeOfStudy:res.data.typeOfStudyText,
							enrollmentType:res.data.coreUserWorkInfo.enrollmentTypeText,
							originType:res.data.coreUserWorkInfo.originTypeText,
							area:res.data.registeredPermanentAddressLocusDetail,
							home:res.data.registeredPermanentAddressLocusId,
							detailedAddress:res.data.detailedAddress,
							securityLevel:res.data.securityLevel
					};
					this.leftData={
						status:res.data.statusText,
						reason:res.data.reason,
						notes:res.data.notes
					};
					this.studentsParents();
				}
			});
		},
        //家长详情
        studentsParents(){
            let studentsParents = {
                integer :this.staId
            };
            this.$api.studentsParents(studentsParents).then(res => {
                if (res.success == true) {
                    console.log(res)
                }
            })
        },
        //查询班级下拉
        classNid(){
            let learnSelect = {
                orgId:this.classId,
            };
            this.$api.learnSelect(learnSelect).then(res => {
                console.log(res);
                if(res.success == true){
                    console.log(res)
                    this.learn = res.data
                }
            });
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        btnClick(val) {
            if(val.alias  == 1){
                this.edit = true;
            }
        },
        baoClick(val){
            if(this.baseForm.workId == ''){
                this.$myLayer.errorLayer('学号不能为空')
            }else if(this.baseForm.userName == ''){
                this.$myLayer.errorLayer('姓名不能为空')
            }else if(this.baseForm.sex == ''){
                this.$myLayer.errorLayer('性别不能为空')
            }else if(this.baseForm.nationality == ''){
                this.$myLayer.errorLayer('名族不能为空')
            }else if(this.baseForm.idCard == ''){
                this.$myLayer.errorLayer('身份证号码不能为空')
            }else if(this.baseForm.this.baseForm.idCard == ''){
                this.$myLayer.errorLayer('班级不能为空')
            }else {
                let params = {
                    workId:this.baseForm.workId,
                    userName:this.baseForm.userName,
                    sex:this.baseForm.sex,
                    joinTime:this.baseForm.joinTime,
                    nationality:this.baseForm.nationality,
                    birthday:this.baseForm.birthday,
                    age:this.baseForm.age,
                    idCard:this.baseForm.idCard,
                   /* classId:'',
                    typeOfStudy:'',
                    enrollmentType:this.data.coreUserWorkInfo.enrollmentTypeText,
                    originType:this.data.coreUserWorkInfo.originTypeText,
                    area:this.data.registeredPermanentAddressLocusDetail,
                    home:this.data.registeredPermanentAddressLocusId,
                    detailedAddress:this.data.detailedAddress,
                    securityLevel:this.data.securityLevel*/
                };
                this.$api.studentsUpdate(params).then(res => {
                    if(res.success == true){
                        this.$myLayer.successLayer(res.msg)
                    }else {
                        this.$myLayer.errorLayer(res.msg)
                    }
                })
            }
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
