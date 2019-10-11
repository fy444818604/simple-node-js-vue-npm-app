<!-- 学生账号 -->
<template>
	<div class="page-container" id="teacher-account">
		<div class="flex-between bt-line pb10">
			<div class="flex">
				<div class="cha-title">学生账号</div>
				<el-dropdown trigger="click" placement="bottom">
					<span class="el-dropdown-link">
						{{currentSelect}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-input v-model="filterText">
						</el-input>
						<el-tree @node-click="handleSelect" style="width:250px" class="filter-tree" :data="areaList" :props="defaultProps" :filter-node-method="filterNode" ref="tree">
						</el-tree>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="btnGroup">
				<btn-list v-for="(item,index) in btnGroup" :key="index" :model="item" @btn-click="btnClick"></btn-list>
			</div>
		</div>
		<div class="pt20">
			<el-form ref="queForm"  :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="formInline.user" placeholder="请输入账号查询"></el-input>
				</el-form-item>
				<el-form-item label="性别:">
					<el-select v-model="formInline.sex" placeholder="不限" style="width: 80px;">
						<el-option v-for="item in sex" :key="item.code" :label="item.text" :value="item.code"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="阶段:">
					<el-select v-model="formInline.stage" placeholder="不限" style="width: 80px;">
						<el-option v-for="item in stage" :key="item.code" :label="item.text" :value="item.code"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="学届">
					<el-select v-model="formInline.learn" placeholder="全部" style="width: 80px;">
						<el-option v-for="item in learn" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="行政班:">
					<el-select v-model="formInline.className" placeholder="全部" style="width: 80px;">
						<el-option v-for="item in className" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="就读类型:">
					<el-select v-model="formInline.attend" placeholder="全部" style="width: 80px;">
						<el-option v-for="item in attend" :key="item.code" :label="item.text" :value="item.code"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<button class="primary-btn" @click="search(1)">查询</button>
					<button class="clear-btn" @click="search(2)">清空</button>
				</el-form-item>
			</el-form>
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" label="序号" width="120">

			</el-table-column>
			<el-table-column prop="workId" label="学号" width="120">
			</el-table-column>
			<el-table-column label="姓名">
				<template slot-scope="scope">
					<router-link class="main-color" target="_blank" :to="{path:'/basic/student-detail',query:{id:scope.row.id}}">{{scope.row.userName}}</router-link>
				</template>
			</el-table-column>
			<el-table-column prop="sexText" label="性别" >

			</el-table-column>
			<el-table-column prop="orgName" label="机构">
			</el-table-column>
			<el-table-column prop="stageIdText" label="阶段">
			</el-table-column>
			<el-table-column prop="gradeName" label="年级">
			</el-table-column>
			<el-table-column prop="className" label="行政班">
			</el-table-column>
			<el-table-column prop="typeOfStudyText" label="就读类型">
			</el-table-column>
			<el-table-column prop="statusText" label="状态">
			</el-table-column>
			<el-table-column prop="id" label="操作" >
				<template slot-scope="scope">
					<i v-if="!scope.row.showBtn" class="iconfont icon-more" @mouseenter="handleMouseEnter(scope.row)"></i>
					<ul class="tableOpe"  v-else @mouseleave="handleMouseLeave(scope.row)">
						<li>
							<span v-if="scope.row.status == 0" @click="disable(scope.row,1)">停用</span>
							<span v-else @click="disable(scope.row,0)">启用</span>
						</li>
						<li>编辑</li>
					</ul>
				</template>
			</el-table-column>
		</el-table>
		<div class="flex-between mt20">
			<state-switch @switchL="stateList"></state-switch>
			<paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></paging>
		</div>
		<!--弹出层-->
		<div class="stu-yeaer-modal-add">
			<div class="modalAdd">
				<el-form ref="addForm" :model="addForm" label-width="88px" :rules="formRules" id="schoolForm">
					<el-form-item label="学校" prop="school" >
							<el-input
									v-model="filterText"
									placeholder="请选择或输入"
									@click.stop>
								<i slot="suffix" @click="isgow" class="iconfont icon-apartment"></i>
							</el-input>
							<div class="el-div-tree" v-if="isshow">
								<el-tree
										class="filter-tree"
										:data="areaList"
										:props="defaultProps"
										default-expand-all
										:filter-node-method="filterNode"
										@node-click="addIns"
										ref="tree">
								</el-tree>
							</div>
					</el-form-item>
					<el-form-item label="班级" prop="className">
						<el-select v-model="addForm.className" placeholder="请选择" style="width: 100%">
							<el-option
									v-for="item in className"
									:key="item.id"
									:label="item.name"
									:value="item.id">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="学号" prop="student">
						<el-input v-model="addForm.student" placeholder="请输入"></el-input>
					</el-form-item>
					<el-form-item label="姓名" prop="name">
						<el-input v-model="addForm.name" placeholder="请输入"></el-input>
					</el-form-item>
					<el-form-item label="性别" prop="sex">
						<el-select v-model="addForm.sex" placeholder="请选择" style="width: 100%">
							<el-option
									v-for="item in sex"
									:key="item.code"
									:label="item.text"
									:value="item.code">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="名族" prop="national">
						<el-select v-model="addForm.national" placeholder="请选择" style="width: 100%">
							<el-option
									v-for="item in nationData"
									:key="item.code"
									:label="item.text"
									:value="item.code">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="身份证号" prop="identity">
						<el-input v-model="addForm.identity" placeholder="请输入"></el-input>
					</el-form-item>
					<el-form-item label="就读类型" prop="attType">
						<el-select v-model="addForm.attType" placeholder="请选择" style="width: 100%">
							<el-option
									v-for="item in attend"
									:key="item.code"
									:label="item.text"
									:value="item.code">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
import btnList from '@/components/btn-list'
import stateSwitch from '@/components/state-switch'
import paging from '@/components/paging'
export default {
    data() {
        return {
            btnGroup: [{
                icon: 'icon-add',
                name: '添加',
                alias: 1
            }, {
                icon: 'icon-input',
                name: '导出',
                alias: 2
            }, {
                icon: 'icon-permissions',
                name: '重置密码',
                alias: 3
            }, {
                icon: 'icon-enable',
                name: '启用',
                alias: 4
            }, {
                icon: 'icon-stop',
                name: '停用',
                alias: 5
            }],
            currentSelect: "成都第X中学",
            defaultProps: {
                children: 'children',
                label: 'displayName'
            },
            filterText: '',
            areaList: [],
            formInline: {
                user: '',
                sex: null,
                stage:null,
                attend:null,
                learn:null,
                className:null
            },
            isshow:false,
            tableData: [],
            multipleSelection: [],
            pageSize: 10, //显示多少页
            pageCurrent: 1, //当前页
            pageTotal: 0, //总条数
            sex:[],//性别
            stage:[],//阶段
            attend:[],//就读类型
            nationData:[],//民族
            status:0,//启用停用
            orgId:'',//机构id
            learn:[],//学届
            className:[],//班级
            //添加弹框
            addForm: {
                school:'',
                className: '',
                student: '',
                name:'',
                order: '',
                sex:'',
                national:'',
                identity:'',
                attType:'',
                addInsIs:''
            },
            formRules: {
                school: [{required: true, message: '请选择学校', trigger: 'blur'}],
                className: [{required: true, message: '请选择班级', trigger: 'change'}],
                student: [{required: true, message: '请输入学号', trigger: 'blur'}],
                name:[{required: true, message: '请输入姓名', trigger: 'blur'}],
                sex:[{required: true, message: '请选择姓名', trigger: 'change'}],
                national:[{required: true, message: '请选择名族', trigger: 'change'}],
                identity:[{required: true, message: '请输入身份证号码', trigger: 'blur'}],
                attType:[{required: true, message: '请选择就读类型', trigger: 'change'}],
            },
            seen:false,
            current:0,
            patState:null,
            disableVal:0
        }
    },
    components: {
        'btn-list': btnList,
        'state-switch': stateSwitch,
        'paging': paging
    },
    created(){
        this.dictionary();
        this.studentsList();
        this.institutions();
    },
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    methods: {
        dictionary(){
            let sex = {"type": ["sex",'stage','study_type','nation']};
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
                        }
                    }
                }
            });
        },
        orgQuery(){
            let learnSelect = {
                orgId:this.orgId,
            };
            let classSelect = {
                orgId:this.orgId,
            };
            this.$api.learnSelect(learnSelect).then(res => {
                if(res.success == true){
                    this.learn = res.data
                }
            });
            this.$api.classSelect(classSelect).then(res => {
                if(res.success == true){
                    this.className = res.data
                }
            })
        },
        //list列表
        studentsList(){
            let params = {
                workId:this.formInline.user,
                sex:this.formInline.sex,
                stageId:this.formInline.stage,
                classId: this.formInline.className,
                orgId: this.orgId,
                pageIndex:this.pageCurrent,
                pageSize:this.pageSize,
                status:this.status,
                typeOfStudy:this.formInline.attend,
                gradeName:this.formInline.learn
            };
            this.$api.students(params).then(res => {
                if(res.success == true){
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						res.data[i].showBtn = false;
					}
					this.tableData = res.data;
					this.pageTotal = parseInt(res.totalDatas)
                }
            })
        },
        //机构
        institutions(){
            let params = {
                level :0,
                onlyOrg :1,
                parentId :0,
            };
            this.$api.institutions(params).then(res => {
                if(res.success == true){
                    this.areaList = res.data;
                }
            })
        },
        studentAdd(){

            let _this = this;
			_this.$refs['addForm'].resetFields();
            this.$myLayer.formLayer("添加", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs["addForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            "coreClassmembers":{
                                classId:_this.addForm.className
                            },
                            orgId: _this.orgId,
                            workId:_this.addForm.student,
                            userName:_this.addForm.name,
                            sex: _this.addForm.sex,
                            nationality: _this.addForm.national,
                            idCard: _this.addForm.identity,
                            typeOfStudy: _this.addForm.attType,
                        };
                        _this.$api.studentsAdd(params).then(res => {
                            if (res.success == true) {
                                _this.$myLayer.successLayer(res.msg)
                            } else {
                                _this.$myLayer.errorLayer(res.msg)
                            }
                        })
                    } else {
                        return false;
                    }
                });

            })
        },
        disable(row,val){
            let params = {
                id:row.id,
                status:val
            };
            this.$api.studentsDis(params).then(res => {
                if (res.success == true) {
                    this.$myLayer.successLayer(res.msg)
                    this.studentsList();
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })
        },
		stuExport(){
			let userIds = [];
			let i = 0;
			for (i = 0; i < this.multipleSelection.length; i++) {
				userIds.push(this.multipleSelection[i].id)
			}
			let params = {
				workId:this.formInline.user,
				sex:this.formInline.sex,
				stageId:this.formInline.stage,
				classId: this.formInline.className,
				orgId: this.orgId,
				pageIndex:this.pageCurrent,
				pageSize:this.pageSize,
				status:this.status,
				typeOfStudy:this.formInline.attend,
				gradeName:this.formInline.learn,
				ids:userIds
			};
			this.$api.batStudentsExport(params).then(res => {
				if(res.success == true){
					this.$myLayer.successLayer(res.msg)
				}else {
					this.$myLayer.errorLayer(res.msg)
				}
			})
		},
		/* 鼠标移入移除 */
		handleMouseEnter(row){
			row.showBtn = true
		},
		handleMouseLeave(row){
			console.log(row)
			row.showBtn = false
		},
        addIns(val){
            this.filterText = val.displayName;
            this.addForm.school = val.id;
            this.orgQuery();
            this.isshow = false;
        },
        handleNodeClick(data) {
            console.log(data);
        },
        btnClick(val) {
            if(val == 1){
                this.studentAdd();
            }else if(val == 2){
                this.stuExport();
            }else if(val == 3){
                this.resetPassword();
            }else if(val == 4){
                let id = 0;
                this.patState = id;
                this.batchenable();
            }else {
                let id = 1;
                this.patState = id;
                this.batchenable();
            }
        },
        batchenable(){
            let userIds = [];
            let i = 0;
            for (i = 0; i < this.multipleSelection.length; i++) {
                userIds.push(this.multipleSelection[i].id)
            }
            let params = {
                "status": this.patState,
                "userIds": userIds
            };
            if(userIds.length == 0){
                this.$myLayer.errorLayer('至少选择一条数据')
            }else {
                this.$api.batStudentsDis(params).then(res => {
                    if (res.success == true) {
                        this.$myLayer.successLayer(res.msg)
                        this.studentsList();
                    } else {
                        this.$myLayer.errorLayer(res.msg)
                    }
                })
            }
        },
        resetPassword(){
            let _this = this;
            let id = [];
            let i = 0;
            for (i = 0; i < this.multipleSelection.length; i++) {
                let ids = {
                    "userInfoId":this.multipleSelection[i].id
                };
                id.push(ids);
            }
            if(id.length == ''){
                _this.$myLayer.errorLayer('至少选择一条数据')
            }else {
                let params =id;
                _this.$api.batPassword(params).then(res => {
                    if(res.success == true){
                        _this.$myLayer.successLayer(res.msg)
						_this.studentsList();
                    }
                })

            }
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
        handleSelect(value) {
            this.currentSelect = value.displayName;
            this.orgId = value.id;
            this.orgQuery();
            this.studentsList();
        },
        search(val) {
            let _this = this;
            if(val == 1){
                _this.studentsList();
            }
            else {
            	_this.formInline= {
					user: '',
					sex: '',
					stage:'',
					attend:'',
					learn:'',
					className:''
				}
            }
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        stateList(state) {
            this.status = state;
            this.studentsList()
        },
        SizeChange(pageSize) {
            this.pageSize = pageSize;
            this.studentsList()
        },
        CurrentChange(pageCurrent) {
            this.pageCurrent = pageCurrent;
            this.studentsList()
        },
        isgow(){
            this.isshow = !this.isshow
        }
    }
}
</script>

<style>
	.el-select-dropdown{
		z-index: 999999999!important;
		width: auto;
	}
	.weixin-icon {
		height: 14px;
		width: 16px;
	}
	.stu-yeaer-modal-add, .tu-yeaer-modal-edit {
		display: none;
	}
	.modalAdd {
		padding: 0px 32px;
		margin: 24px 0px;
	}
	.el-div-tree{
		position: absolute;
		top:45px;
		width: 100%;
		background-color: #fff;
		border: 1px solid #ebeef5;
		border-radius: 4px;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		z-index: 9999999;
		overflow: auto;
	}
</style>
<style scoped>
	.tableOpe{

	}
	.tableOpe li{

	}
</style>
