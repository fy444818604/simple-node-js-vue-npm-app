<!-- 教职工账号 -->
<template>
	<div class="page-container" id="teacher-account">
		<div class="flex-between bt-line pb10">
			<div class="flex">
				<div class="cha-title">教职工账号</div>
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
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="formInline.user" placeholder="请输入工号/姓名查询"></el-input>
				</el-form-item>
				<el-form-item label="性别:">
					<el-select v-model="formInline.sex" placeholder="不限" style="width: 80px;">
						<el-option v-for="item in sex" :key="item.code" :label="item.text" :value="item.code"></el-option>
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
			<el-table-column prop="workId" label="工号" width="120">
			</el-table-column>
			<el-table-column label="姓名">
				<template slot-scope="scope">
					<router-link class="main-color" target="_blank" :to="{path:'/basic/teacher-detail',query:{id:scope.row.id}}">{{scope.row.userName}}</router-link>
				</template>
			</el-table-column>
			<el-table-column label="性别">
				<template slot-scope="scope">
					{{scope.row.sex == 0?'男':'女'}}
				</template>
			</el-table-column>
			<el-table-column prop="orgName" label="机构">
			</el-table-column>
			<el-table-column prop="phone" label="手机号">
			</el-table-column>
			<el-table-column label="微信">
				<template slot-scope="scope">
					<img :src="require('@/assets/image/weixin.png')" v-show="scope.row.weChat == 1" class="weixin-icon">
				</template>
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					{{scope.row.status == 1?'启用':'停用'}}
				</template>
			</el-table-column>
			<el-table-column prop="id" label="操作" width="60">
				<template slot-scope="scope">
					<i v-if="!scope.row.showBtn" class="iconfont icon-more" @mouseenter="handleMouseEnter(scope.row)"></i>
					 <ul  v-else @mouseleave="handleMouseLeave(scope.row)">
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
					<el-form-item label="工号" prop="student">
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
					<el-form-item label="手机号" prop="phone">
						<el-input v-model="addForm.phone" placeholder="请输入"></el-input>
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
                name: '导入',
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
                sex: ''
            },
            tableData: [{
                id: 123,
                num: 1,
                workNum: 20134490,
                name: '王志山',
                sex: 1,
                org: '元素中学',
                telphone: 15155552222,
                weixin: 1,
                status: 1,
            }, {
                id: 123,
                num: 1,
                workNum: 20134490,
                name: '王志山',
                sex: 1,
                org: '元素中学',
                telphone: 15155552222,
                weixin: 0,
                status: 2,
            }],
            multipleSelection: [],
            pageSize: 10, //显示多少页
            pageCurrent: 1, //当前页
            pageTotal: 300, //总条数
			orgId:'',//机构id
			isshow:false,//机构显示隐藏
			sex:'',//字典性别
			nationData:[],//民族
			state:0,//状态
			patState:0,//批量状态
			//添加弹框
			addForm: {
				school:'',
				student: '',
				name:'',
				order: '',
				sex:'',
				national:'',
				identity:'',
				addInsIs:'',
				phone:''
			},
			formRules: {
				 school: [{required: true, message: '请选择学校', trigger: 'blur'}],
				student: [{required: true, message: '请输入工号', trigger: 'blur'}],
				name:[{required: true, message: '请输入姓名', trigger: 'blur'}],
				sex:[{required: true, message: '性别', trigger: 'change'}],
				national:[{required: true, message: '请选择名族', trigger: 'change'}],
				identity:[{required: true, message: '请输入身份证号码', trigger: 'blur'}],
				phone:[{required: true, message: '请输入手机号码', trigger: 'blur'}],
			},
        }
    },
    components: {
        'btn-list': btnList,
        'state-switch': stateSwitch,
        'paging': paging
    },
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
	created(){
		this.institutions();
		this.dictionary();
		this.teachList();
	},
    mounted() {

    },
    methods: {
    	//字典
		dictionary(){
			let sex = {"type": ["sex","nation"]};
			this.$api.dictSelect(sex).then(res => {
				if(res.success == true){
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						if(res.data[i].type == 'sex'){
							this.sex = res.data[i].data;
						}else if(res.data[i].type == 'nation'){
							this.nationData = res.data[i].data;
						}
					}
				}
			});
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
		//分页查询
		teachList(){
			let params = {
				orgId :this.orgId,
				pageIndex :this.pageCurrent,
				pageSize :this.pageSize,
				sex:this.formInline.sex,
				status:this.state,
				workId:this.formInline.user
			};
			this.$api.teachers(params).then(res => {
				if(res.success == true){
					this.pageTotal = parseInt(res.totalDatas)
					let  i = 0;
					for (i = 0; i < res.data.length; i++) {
						res.data[i].showBtn = false;
					}
					this.tableData = res.data;
				}
			})

		},
		//按钮
        btnClick(val) {
			console.log(val)
			if(val == 1){
				this.teacherAdd();
			}else if(val == 2){

			}else if(val == 3){
				this.teachersPassword()
			}else if(val == 4){
				this.patState = 0;
				this.paTteachersDis()
			}else {
				this.patState = 1;
				this.paTteachersDis()
			}
        },
		//添加结构
		isgow(){
			this.isshow = !this.isshow
		},
		addIns(val){
			this.filterText = val.displayName;
			this.addForm.school = val.id;
			this.isshow = false;
		},
		//添加请求
		teacherAdd(){
			let _this = this;
			this.$myLayer.formLayer("添加", $('.stu-yeaer-modal-add'), ['422px'], function () {
				_this.$refs["addForm"].validate((valid) => {
					if (valid) {
						let params = {
							orgId: _this.orgId,
							workId:_this.addForm.student,
							userName:_this.addForm.name,
							sex: _this.addForm.sex,
							nationality: _this.addForm.national,
							phone: _this.addForm.phone,
							idCard:_this.addForm.identity
						};
						_this.$api.teachersAdd(params).then(res => {
							if (res.success == true) {
								_this.$myLayer.successLayer(res.msg)
								_this.teachList();
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
		//重置密码
		teachersPassword(){
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
				_this.$api.teachersPassword(params).then(res => {
					if(res.success == true){
						_this.$myLayer.successLayer(res.msg)
						_this.studentsList();
					}
				})

			}
		},
		//批量启用/禁用
		paTteachersDis(){
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
				this.$api.teachersDis(params).then(res => {
					if (res.success == true) {
						this.$myLayer.successLayer(res.msg)
						this.teachList();
					} else {
						this.$myLayer.errorLayer(res.msg)
					}
				})
			}
		},
		//单个停用
		disable(row,val){
			let params = {
				id:row.id,
				status:val
			};
			this.$api.teachersDisT(params).then(res => {
				if (res.success == true) {
					this.$myLayer.successLayer(res.msg)
					this.teachList();
				} else {
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
        filterNode(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
        handleSelect(value) {
			this.currentSelect = value.displayName;
			this.orgId = value.id;
			this.teachList();
        },
		//查询
        search(val) {
			if( val == 1){
				this.teachList();
			}else {
				this. formInline = {
					user: '',
					sex: ''
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
            this.state = state;
            this.teachList();
        },
        SizeChange(pageSize) {
            this.pageSize = pageSize;
            this.teachList();
        },
        CurrentChange(pageCurrent) {
            this.pageCurrent = pageCurrent;
            this.teachList();
        }
    }
}
</script>

<style>
	.weixin-icon {
		height: 14px;
		width: 16px;
	}
	.el-select-dropdown{
		z-index: 999999999!important;
		width: auto;
	}
</style>
<style scoped>

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
