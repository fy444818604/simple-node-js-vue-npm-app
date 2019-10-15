<template>
	<el-scrollbar :native="false" style="height:100%">
		<div id="teachaer-detail">
			<div class="detai-title">
				<div class="detail-name">{{teacherName}}</div>
				<div>教职工</div>
			</div>
			<div class="detail-tab-container"  @click.stop>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="基本信息" name="first">
						<div class="btnGroup">
							<i v-show="!edit" class="iconfont icon-edit" style="font-size: 20px;color: #4A80F6" @click="btnClick"></i>
							<i v-show="edit" class="iconfont icon-save" style="font-size: 20px;color: #4A80F6" @click="btnSave"></i>
						</div>
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
													<span v-show="!edit">
														{{baseForm.sex == 0?'男':'女'}}
													</span>
													<el-select v-show="edit" v-model="baseForm.sex">
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
												<div>民族</div>
												<div>
													<span v-show="!edit">
														{{ baseFormSet.nation}}
													</span>
													<el-select v-show="edit" v-model="baseForm.nation">
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
													<span v-show="!edit">{{baseForm.dateBirth}}</span>
													<el-input v-show="edit" :disabled="true" v-model="baseForm.dateBirth"></el-input>
												</div>
											</li>
											<li>
												<div>年龄</div>
												<div>
													<span v-show="!edit">{{baseForm.age}}</span>
													<el-input v-show="edit" :disabled="true" v-model="baseForm.age"></el-input>
												</div>
											</li>
											<li>
												<div>身份证号</div>
												<div>
													<span v-show="!edit">{{baseForm.idCard}}</span>
													<el-input v-show="edit"  v-model="baseForm.idCard"></el-input>
												</div>
											</li>
											<li>
												<div>手机</div>
												<div>
													<span v-show="!edit">{{baseForm.phone}}</span>
													<el-input v-show="edit" v-model="baseForm.phone"></el-input>
												</div>
											</li>
											<li>
												<div>婚姻状况</div>
												<div>
													<span v-show="!edit">{{baseFormSet.marStatus}}</span>
													<el-select v-show="edit" v-model="baseForm.marStatus">
														<el-option
																v-for="item in marStatus"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>户口所在地</div>
												<div>
													<span v-show="!edit">{{baseForm.home}}</span>
													<div v-show="edit" class="home-input"  @click="homeClick" >
														<div>
															{{ baseForm.home }}
														</div>
														<div>
															<i slot="suffix" class="iconfont icon-examine"></i>
														</div>
													</div>
													<div class="home-tree" 	 v-show="homeState">
														<el-tree
															 :props="defaultProps"
															 class="filter-tree"
															 :data="homeData"
															 default-expand-all
															 @node-click="honeTree"
															 ref="tree">
														</el-tree>
													</div>

												</div>
											</li>
											<li>
												<div>住址区域</div>
												<div>
													<span v-show="!edit">{{baseForm.area}}</span>
													<div v-show="edit" class="home-input"  @click="areaClick" >
														<div>
															{{ baseForm.area }}
														</div>
														<div>
															<i slot="suffix" class="iconfont icon-examine"></i>
														</div>
													</div>
													<div class="home-tree"  v-show="areaState">
														<el-tree
															 :props="defaultProps"
															 class="filter-tree"
															 :data="homeData"
															 default-expand-all
															 @node-click="areaTree"
															 ref="tree">
														</el-tree>
													</div>
												</div>
											</li>
											<li>
												<div>政治面貌</div>
												<div>
													<span v-show="!edit">{{baseFormSet.polLandscape}}</span>
													<el-select v-show="edit" v-model="baseForm.polLandscape">
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
															v-model="baseForm.joinTime"
															v-show="edit"
															value-format="yyyy-MM-dd"
															type="datetime"
															format="yyyy-MM-dd"
															placeholder="选择日期时间">
													</el-date-picker>
												</div>
											</li>
											<li>
												<div>学历</div>
												<div>
													<span v-show="!edit">{{baseFormSet.record}}</span>
													<el-select v-show="edit" v-model="baseForm.record">
														<el-option
																v-for="item in record"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>学位</div>
												<div>
													<span v-show="!edit">{{baseFormSet.degree}}</span>
													<el-select v-show="edit" v-model="baseForm.degree">
														<el-option
																v-for="item in degree"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>详细地址</div>
												<div>
													<span v-show="!edit">{{baseForm.detailedAddress}}</span>
													<el-input v-show="edit"  v-model="baseForm.detailedAddress"></el-input>
												</div>
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
												<div>
													<span v-show="!edit">{{baseForm.institutions}}</span>
													<div v-show="edit" class="home-input"  @click="institutionsClick" >
														<div>
															{{ baseForm.institutions }}
														</div>
														<div>
															<i slot="suffix" class="iconfont icon-apartment"></i>
														</div>
													</div>
													<div class="home-tree" v-show="instState">
														<el-tree
																class="filter-tree"
																:data="instData"
																:props="defaultPropsT"
																default-expand-all
																@node-click="instTree"
																ref="tree">
														</el-tree>
													</div>

												</div>
											</li>
											<li>
												<div>职务</div>
												<div>
													<span v-show="!edit">{{baseFormSet.position}}</span>
													<el-select v-show="edit" v-model="baseForm.position">
														<el-option
																v-for="item in position"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>岗位</div>
												<div>
													<span v-show="!edit">{{baseFormSet.jobs}}</span>
													<el-select v-show="edit" v-model="baseForm.jobs">
														<el-option
																v-for="item in jobs"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>职称</div>
												<div>
													<span v-show="!edit">{{baseFormSet.positionName}}</span>
													<el-select v-show="edit" v-model="baseForm.positionName">
														<el-option
																v-for="item in position"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>用工性质</div>
												<div>
													<span v-show="!edit">{{baseFormSet.nature}}</span>
													<el-select v-show="edit" v-model="baseForm.nature">
														<el-option
																v-for="item in nature"
																:key="item.code"
																:label="item.text"
																:value="item.code">
														</el-option>
													</el-select>
												</div>
											</li>
											<li>
												<div>到岗时间</div>
												<div>
													<span v-show="!edit">{{baseForm.workTime}}</span>
													<el-date-picker
															v-model="baseForm.workTime"
															v-show="edit"
															value-format="yyyy-MM-dd"
															type="datetime"
															format="yyyy-MM-dd"
															placeholder="选择日期时间">
													</el-date-picker>
												</div>
											</li>
											<li>
												<div>直接上级</div>
												<div>
													<span v-show="!edit">{{baseFormSet.superior}}</span>
													<el-select v-show="edit" v-model="baseForm.superior">
														<el-option
																v-for="item in superior"
																:key="item.id"
																:label="item.name"
																:value="item.id">
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
													<el-input v-show="edit"  v-model="baseForm.securityLevel"></el-input>
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
			defaultProps: {
				children: 'children',
				label: 'name'
			},
			defaultPropsT: {
				children: 'children',
				label: 'displayName'
			},
			userId:'',//用户id
            activeName: 'first',
            labelPosition: 'right',
            active: ['1', '2', '3'],
			arresIndex:'0',
            edit: false,
            edit1: false,
			homeState:false,
			areaState:false,
			instState:false,
			options:'',
            teacherName: '林浩阳',
            userPhoto: require('@/assets/image/user-detail.png'),
            btnGroup: [{
                icon: 'icon-edit',
                name: '编辑',
                alias: 3
            }],
			btnGroupT: [{
				icon: 'icon-edit',
				name: '编辑',
				alias: 3
			}],
            btnGroup1: [{
                icon: 'icon-edit',
                name: '编辑',
                alias: 4
            }],
			baseFormSet:{
				nation:"",//名族
				polLandscape:"",//政治面貌
				record:"",//学历
				degree:"",//学位
				position:"",//职务
				jobs:"",//岗位
				positionName:"",//职称
				nature:"",//性质
				superior:"",//上级
				marStatus:"",//婚否
			},
            baseForm: {
                workId: '',
                name: '',//姓名
                sex:'',//性别
                nation:'汉',//名族
				dateBirth:'',//出生年月日
				age:'',//年龄
                idCard:'',//身份证号码
				phone:'',//手机
				marStatus:'',//婚否
				polLandscape:'',//政治面貌
				joinTime:'',//加入时间
				record:'',//学历
				degree:'',//学位
				home:'',//所在地
				area:'',//所在地
				detailedAddress:'',//详细地址
				institutions:'',//机构
				position:'',//职务
				jobs:'',//岗位
				positionName:'',//职称
				nature:'',//性质
				workTime:'',//到岗时间
				superior:'',//上级
				securityLevel:''//安全等级
			},
			leftData:{
				status:'',
				reason:'',
				notes:''
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
            },
			sex:[],//性别
			nationData:[],//名族
			attitudes:[],//政治面貌
			marStatus:[],//婚否
			record:[],//学历
			degree:[],//学位
			position:[],//职务
			positionName:[],//职称
			nature:[],//性质
			jobs:[],//岗位
			superior:[],//上级
			//地区
			homeData:[],
			homeDataId:'',
			areaDataId:'',
			//机构
			instData:[],
			instDataId:'',
        };
    },
    components: {
        'btn-list': btnList
    },
	created(){
		this.userId = this.$route.query.id;
		this.dictionary();
		this.regionData();
		this.structure();
	},
    methods: {
		//字典
		dictionary(){
			let sex = {"type": ["sex",'nation','political_attitudes','marriedType','education','academic_degree','job_type','professional_title','employment_nature','workStationType']};
			this.$api.dictSelect(sex).then(res => {
				if(res.success == true){
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						if(res.data[i].type == 'sex'){
							this.sex = res.data[i].data;
						}else if(res.data[i].type == 'nation'){
							this.nationData = res.data[i].data;
						}else  if(res.data[i].type == 'political_attitudes'){
							this.attitudes = res.data[i].data
						}else  if(res.data[i].type == 'marriedType'){
							this.marStatus = res.data[i].data
						}else  if(res.data[i].type == 'education'){
							this.record = res.data[i].data
						}else  if(res.data[i].type == 'academic_degree'){
							this.degree = res.data[i].data
						}else  if(res.data[i].type == 'job_type'){
							this.position = res.data[i].data
						}else  if(res.data[i].type == 'professional_title'){
							this.positionName = res.data[i].data
						}else  if(res.data[i].type == 'employment_nature'){
							this.nature = res.data[i].data
						}else  if(res.data[i].type == 'workStationType'){
							this.jobs = res.data[i].data
						}
					}
					this.details();
				}
			});
		},
    	//详情
		details(){
			let params = {
				id :this.userId,
			};
			this.$api.teachersDetails(params).then(res => {
				console.log(res)
				if (res.success == true) {
					this.teacherName = res.data.userName;
					this.baseForm = {
						workId: res.data.workId,//工号
						name: res.data.userName,//姓名
						sex:res.data.sex+"",//性别
						nation:res.data.nationality,//名族
						dateBirth:res.data.birthday,//出生年月日
						age:res.data.age,//年龄
						idCard:res.data.idCard,//身份证号码
						phone:res.data.phone,//手机
						marStatus:res.data.isMarried,//婚否
						polLandscape:res.data.politicalAttitudes,//政治面貌
						joinTime:res.data.joinTime,//加入时间
						record:res.data.education,//学历
						degree:res.data.academicDegree,//学位
						home:res.data.registeredPermanentAddressLocusDetail,//所在地
						area:res.data.addressAreaId,//所在地
						detailedAddress:res.data.detailedAddress,//详细地址
						institutions:res.data.coreUserWorkInfo.orgIdText,//机构
						position:res.data.coreUserWorkInfo.job,//职务
						jobs:res.data.coreUserWorkInfo.workStation,//岗位
						positionName:res.data.coreUserWorkInfo.technicalTitle,//职称
						nature:res.data.coreUserWorkInfo.employmentNature,//性质
						workTime:res.data.coreUserWorkInfo.workStationText,//到岗时间
						superior:res.data.coreUserWorkInfo.directSuperiorId,//上级
						securityLevel:res.data.securityLevel//安全等级
					};
					this.baseFormSet = {
							nation:res.data.nationalityText,//名族
							polLandscape:res.data.politicalAttitudesText,//政治面貌
							record:res.data.educationText,//学历
							degree:res.data.academicDegreeText,//学位
							position:res.data.jobText,//职务
							jobs:res.data.workStationText,//岗位
							positionName:res.data.technicalTitleText,//职称
							nature:res.data.employmentNatureText,//性质
							superior:res.data.directSuperiorIdName,//上级
							marStatus:res.data.isMarriedText,//婚否
					},
					console.log(this.baseFormSet)
					this.leftData={
						status:res.data.statusText,
						reason:res.data.reason,
						notes:res.data.notes
					};
				}
			});
		},
		//地区树的接口
		regionData(){
			let params = {
				level  :1,
				parentId:0
			};
			this.$api.areasTree(params).then(res => {
				if (res.success == true) {
					this.homeData = res.data;
					console.log(res.data)
				}
			});

		},
		//组织结构的接口
		structure(){
			let params = {
				level  :0,
				parentId:0,
				onlyOrg:1
			};
			this.$api.institutions(params).then(res => {
				if (res.success == true) {
					console.log(res.data)
					this.instData = res.data;
				}
			});
		},
		//直接上级
		immediateAuperiot(){
			let params = {
				orgId:this.instDataId
			};
			this.$api.teachersSelect(params).then(res => {
				if (res.success == true) {
					this.superior = res.data;
				}
			});
		},
        handleClick(tab, event) {
			this.arresIndex = tab.index;
        },
		//编辑
        btnClick() {
			if(this.arresIndex == '0'){
				this.edit = true;
			}
        },
		//编辑保存
		btnSave(){
			this.edit = false;
			let params = {
				id:this.userId,
				workId:this.baseForm.workId,
				userName:this.baseForm.name,
				sex:this.baseForm.sex,
				nationality:this.baseForm.nation,
				idCard:this.baseForm.idCard,
				phone:this.baseForm.phone,
				isMarried:this.baseForm.marStatus,
				politicalAttitudes:this.baseForm.polLandscape,
				joinTime:this.baseForm.joinTime,
				education:this.baseForm.record,
				academicDegree:this.baseForm.degree,
				registeredPermanentAddressLocusDetail:this.baseForm.detailedAddress,
				coreUserWorkInfo:{
					job:this.baseForm.position,
					workStation:this.baseForm.jobs,
					technicalTitle:this.baseForm.positionName,
					employmentNature:this.baseForm.nature,
					arrivalDate:this.baseForm.workTime,
					directSuperiorId:this.baseForm.superior
				},
				securityLevel:this.baseForm.securityLevel,
				addressAreaId:this.areaDataId,
				registeredPermanentAddressLocusId:this.homeDataId,
				orgId:this.instDataId
			};
			this.$api.teacherSdetAdd(params).then(res => {
				if (res.success == true) {
					this.details();
				}
			});
		},
        btnClick1() {

        },
		homeClick(){
			this.homeState = !this.homeState
		},
		honeTree(val){
			this.baseForm.home = val.name;
			this.homeDataId = val.id;
			this.homeState = false
		},
		areaClick(){
			this.areaState = !this.areaState
		},
		areaTree(val){
			this.areaDataId = val.id;
			this.baseForm.area = val.name;
			this.areaState = false;
		},
		institutionsClick(){
			this.instState = !this.instState;
		},
		instTree(val){
			this.baseForm.institutions = val.displayName;
			this.instState = false
			this.instDataId = val.id;
			this.immediateAuperiot();
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
	.el-date-picker,.el-input,.el-select{
		width: 30%;
	}
	.home-input:hover{
		cursor: pointer;
	}
	.home-input{
		margin-top: 3.5px;
		height: 36px;
		width: 30%;
		webkit-appearance: none;
		background-color: #fff;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #606266;
		display: inline-block;
		font-size: inherit;
		padding-right: 10px;
		line-height: 36px;
		display: flex;
	}
	.home-input>div:nth-child(1){
		width: 80%;
		padding-left: 15px;
	}
	.home-input>div:nth-child(2){
		text-align: right;
		width: 20%;
	}
	.home-tree{
		width: 30%;
		max-height: 200px;
		overflow: auto;
		position: relative;
		top: 2px;
		left: 0px;
		transform-origin: center top;
		z-index: 2011;
		border: 1px solid #e4e7ed;
		border-radius: 4px;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
</style>
