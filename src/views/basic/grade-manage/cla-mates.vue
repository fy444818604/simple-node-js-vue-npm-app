<!--班级管理-->
<template>
	<div class="cla-mates">
    <base-title title="班级管理" border>
      <template slot="filterTree">
		  <slelctTree :rootId="rootId" @node-select="orgSelect" style="margin-left: 15px"></slelctTree>
      </template>
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>
		<div class="content">
			<div class="search-info">
				<el-input style="width:200px" v-model="search.name" placeholder="请输入班级名称查询"></el-input>
				<div class="item">
					<span>阶段:</span>
					<el-select style="width:80px;margin-left:10px" v-model="search.stage">
						<el-option v-for="item in search.stageList" :key="item.code" :label="item.text" :value="item.code">
						</el-option>
					</el-select>
				</div>
				<div>
					<span>学届:</span>
					<el-select style="width:90px;margin-left:10px" v-model="search.grade">
						<el-option v-for="item in search.gradeList" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="item">
					<span>建筑:</span>
					<el-select style="width:200px;margin-left:10px" v-model="search.area">
						<el-option v-for="item in search.areaList" :key="item.code" :label="item.label" :value="item.code">
						</el-option>
					</el-select>
				</div>
				<el-button @click="query(1)">查询</el-button>
				<el-button @click="query(2)" style="color:#606266;text-decoration: underline" type="text">清空</el-button>
			</div>
			<base-table :tableData="tableData" :tableColumn="tableColumn" @on-stop="schoolStop" @on-edit="schoolEdit">
			</base-table>
		</div>

    <div class="footer">
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></page>
    </div>
		<!-- modal -->
		<div class="cla-mates-modal">
			<el-form style="width:330px;margin:24px auto" label-width="80px"   ref="formInfo" :model="formInfo" :rules="rules">
				<el-form-item label="学校" prop="rootId">
					<org-selst  :rootId="rootId"    @node-select="handleOrgSelect"></org-selst>
				</el-form-item>
				<el-form-item label="班名" prop="className">
					<el-input v-model="formInfo.className"></el-input>
				</el-form-item>
				<el-form-item label="学届" prop="classYear" >
					<el-select style="width:100%" v-model="formInfo.classYear" @focus="setSelectMinWidth">
						<el-option  v-for="item in addGradeList" :key="item.id" :label="item.name" :value="item.id" :style="{'min-width': selectMinWidth + 2 + 'px'}"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班主任" prop="teacher">
					<el-select style="width:100%" v-model="formInfo.teacher" @focus="setSelectMinWidth">
						<el-option  v-for="item in addTebList" :key="item.id" :label="item.name" :value="item.id" :style="{'min-width': selectMinWidth + 2 + 'px'}"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="教室" prop="classRoom">
					<el-select style="width:100%" v-model="formInfo.classRoom"  @focus="setSelectMinWidth">
						<el-option  v-for="item in addClass" :key="item.id" :label="item.name" :value="item.id" :style="{'min-width': selectMinWidth + 2 + 'px'}"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import {isSchool} from "../../../assets/javascript/orgType.js"
import orgSelst from '../../../components/org-select'
export default {
    components: {
        baseTable: () => import("./../../../components/table"),
        stateSwitch: () => import("./../../../components/state-switch"),
        slelctTree: () => import("./../../../components/org-menu"),
        baseTitle:()=>import("@/components/title"),
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging"),
		'org-selst':orgSelst
    },
    data() {
        return {
			//分页数据
			pageIndex:1,//当前页
			pageSize:10,//每页显示
			status:0,//状态
			className:'',//名称
			stageId:'',//阶段id
			rootId:'0',//机构id
			gradeId:'',//学届id
			pageTotal:0,//分页总数
            search: {
                name: '', //班级名称
                stage: '', //阶段
                grade: '', //学届
                area: '', //建筑
                stageList: [],
                gradeList: [],
                areaList: [{
                    value: '',
                    label: ""
                }]
            },
            tableColumn: [{
                prop: "index",
                label: "序号"
            },
            {
                prop: "name",
                label: "班名"
            },
            {
                prop: "stageIdText",
                label: "阶段"
            },
            {
                prop: "gradeName",
                label: "学届"
            },
            {
                prop: "classroomName",
                label: "教室"
            },
			{
				prop: "teacherName",
				label: "班主任"
			},
			{
				prop: "members",
				label: "成员"
			},
			{
				prop: "statusText",
				label: "状态"
			}
            ],
            tableData: [],
            /* dialog */
            formInfo: {
				rootId:'',
                classYear: '',
                teacher: '',
                classRoom: '',
                className: ''
            },
            rules: {
				rootId: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],
                classYear: [{
                    required: true,
                    message: '请选择学届',
                    trigger: 'blur'
                }],
                teacher: [{
                    required: true,
                    message: '请选择班主任',
                    trigger: 'blur'
                }],
                classRoom: [{
                    required: true,
                    message: '请选择教室',
                    trigger: 'blur'
                }],
                className: [{
                    required: true,
                    message: '请选择班级名称',
                    trigger: 'blur'
                }],

            },
			addGradeList:[],
			addTebList:[],
			addClass:[],
			selectMinWidth:0,
			enable:null,
        }
    },
	created(){
    	this.claList();
		this.dictionary();
	},
    methods: {
		setSelectMinWidth(val){
			let target = val.srcElement ? val.srcElement : val.target;
			this.selectMinWidth = target.clientWidth;
		},
		//字典
		dictionary(){
			let sex = {"type": ['stage']};
			this.$api.dictSelect(sex).then(res => {
				if(res.success == true){
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						console.log(res)
						if(res.data[i].type == 'stage'){
							this.search.stageList = res.data[i].data;
						}
					}
				}
			});
		},
		//机构id
		orgSelect(value) {
			this.rootId = value.id;
			this.claList();
			this.areaSelect();
		},
		//添加的机构id
		handleOrgSelect(val,callback){
			if(isSchool(val.unitAttr)){
				this.formInfo.rootId = val.id;
				this.addareaSelect();
				callback(true);
			}else {
				this.$myLayer.errorLayer('请选择学校');
			}
		},
		//根据机构id查下拉框
		areaSelect(){
			let sex = {
				campusId:'',
				orgId:this.rootId
			};
			this.$api.areaSelect(sex).then(res => {
				if(res.success == true){
					console.log(res)
				}
			});
			let sexT = {
				orgId:this.rootId
			};
			this.$api.learSelect(sexT).then(res => {
				if(res.success == true){
					console.log(res)
					this.search.gradeList = res.data
				}
			});
		},
		//添加框下拉的数据
		addareaSelect(){
			let sexT = {
				orgId:this.formInfo.rootId
			};
			this.$api.learSelect(sexT).then(res => {
				if(res.success == true){
					console.log(res)
					this.addGradeList = res.data
				}
			});
			this.$api.teachersSelect(sexT).then(res => {
				if(res.success == true){
					console.log(res)
					this.addTebList = res.data
				}
			});
			this.$api.classroomSelect(sexT).then(res => {
				if(res.success == true){
					console.log(res)
					this.addClass = res.data
				}
			});
		},
		//分页查询
		claList(){
			let params = {
				orgId:this.rootId,
				pageIndex:this.pageIndex,
				pageSize:this.pageSize,
				status:this.status,
				stageId:this.search.stage,
				gradeId:this.search.grade,
				buildingId:this.search.area,
				name:this.search.name,
			};
			this.$api.claList(params).then(res => {
				if(res.success == true){
					let array = [];
					let list = res.data;
					list.map((item,index)=>{
						array.push(
							Object.assign({
								index:index+1
							},item,{indexNum:'str'})
						)
					});
					this.tableData = array
				}
			});
		},
		//查询
		query(val){
			if(val == 1){
				this.claList();
			}else {
				this.search.name = '';
				this.search.stage = '';
				this.search.grade = '';
				this.search.area = '';
			}
		},
        /* 添加 */
        handleAdd() {
        	let _this = this;
			_this.$refs['formInfo'].resetFields();
            this.$myLayer.formLayer("新建",$('.cla-mates-modal'),['422px'],function () {
				_this.$refs["formInfo"].validate((valid) => {
					if (valid) {
						let params = {
							orgId:_this.formInfo.rootId,
							name:_this.formInfo.className,
							gradeId:_this.formInfo.classYear,
							teacherId:_this.formInfo.teacher,
							classRoomId:_this.formInfo.classRoom
						};
						_this.$api.claAdd(params).then(res => {
							if(res.success == true){
								_this.$myLayer.successLayer(res.msg);
								_this.claList();
							}else {
								_this.$myLayer.errorLayer(res.msg)
							}
						})
					} else {
						return false;
					}
				});
			})
        },
		//编辑
		schoolEdit(val){
			let _this = this;
        /*	this.formInfo.rootId = */
			_this.formInfo.classYear = val.row.gradeName;
			_this.formInfo.teacher = val.row.teacherName;
			_this.formInfo.classRoom = val.row.classroomName;
			_this.formInfo.className = val.row.name;
			_this.$myLayer.formLayer("编辑",$('.cla-mates-modal'),['422px'],function () {
				_this.$refs["formInfo"].validate((valid) => {
					if (valid) {
						let params = {
							id:val.row.id,
							orgId:_this.formInfo.rootId,
							name:_this.formInfo.className,
							gradeId:_this.formInfo.classYear,
							teacherId:_this.formInfo.teacher,
							classRoomId:_this.formInfo.classRoom
						};
						_this.$api.learnEdit(params).then(res => {
							if(res.success == true){
								_this.$myLayer.successLayer(res.msg);
								_this.claList();
							}else {
								_this.$myLayer.errorLayer(res.msg)
							}
						})
					} else {
						return false;
					}
				});
			})
		},
		//停用禁用
		schoolStop(val){
			if(val.status != 0){
				this.enable = 0;
			}else {
				this.enable = 1;
			}
			let params = {
				id:val.id,
				status:this.enable
			};
			this.$api.claDis(params).then(res => {
				if (res.success == true) {
					this.$myLayer.successLayer(res.msg)
					this.claList();
				} else {
					this.$myLayer.errorLayer(res.msg)
				}
			})
		},
		//状态
        handleSwicthState(val) {
			this.status = val;
			this.claList();
		},
		//分页
		SizeChange(val){
			this.pageSize = val;
			this.claList();
		},
		CurrentChange(val){
			this.pageIndex = val;
			this.claList();
		},
    }
}
</script>
<style>
	.el-select-dropdown,.el-picker-panel{
		z-index: 999999999!important;
		width: auto;
	}
</style>
<style lang="scss" scoped>
	.cla-mates {
		padding: 18px 24px;
		.content {
			.search-info {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				align-items: center;
				.item {
					margin: 0 15px;
				}
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			margin-top: 24px;
		}
		.cla-mates-modal {
			display: none;
		}
	}
</style>
