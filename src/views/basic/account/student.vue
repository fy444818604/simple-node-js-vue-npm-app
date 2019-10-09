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
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
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
					<button class="primary-btn" @click="search">查询</button>
					<button class="clear-btn" @click="search">清空</button>
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
			<el-table-column prop="id" label="操作" width="60">
				<template slot-scope="scope">
					<i class="iconfont icon-more"></i>
					<!-- <ul>
						<li>停用</li>
						<li>编辑</li>
					</ul> -->
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
				<el-form ref="form" :model="schoolForm" label-width="88px" :rules="formRules" id="schoolForm">
					<el-form-item label="学区名称" prop="name">
						<el-input v-model="schoolForm.name"></el-input>
					</el-form-item>
					<el-form-item label="描述">
						<el-input v-model="schoolForm.describe"></el-input>
					</el-form-item>
					<el-form-item label="显示顺序">
						<el-input v-model="schoolForm.order"></el-input>
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
                sex: '',
                stage:'',
                attend:'',
                learn:'',
                className:''
            },
            tableData: [],
            multipleSelection: [],
            pageSize: 10, //显示多少页
            pageCurrent: 1, //当前页
            pageTotal: 0, //总条数
            sex:[],//性别
            stage:[],//阶段
            attend:[],//就读类型
            status:0,//启用停用
            orgId:'',//机构id
            learn:[],//学届
            className:[],//班级
            //添加弹框
            schoolForm: {
                name: '',
                institutions: '',
                describe: '',
                order: ''
            },
            formRules: {
                name: [{required: true, message: '请输入学区名称', trigger: 'blur'}],
                institutions: [{required: true, message: '请选择组织结构', trigger: 'blur'}],
            },
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
            let sex = {"type": ["sex",'stage','study_type']};
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
                        }
                    }
                }
            });
        },
        orgQuery(){
            let learnSelect = {orgId:this.orgId};
            let classSelect = {orgId:this.orgId};

            this.$api.learnSelect(learnSelect).then(res => {
                if(res.success == true){
                    this.learn = res.data
                }
            })
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
                stageId:'',
                classId: '',
                orgId: '',
                pageIndex:this.pageCurrent,
                pageSize:this.pageSize,
                status:this.status,
                typeOfStudy:'',
            };
            this.$api.students(params).then(res => {
                if(res.success == true){
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
            this.$myLayer.formLayer("添加", $('.stu-yeaer-modal-add'), ['422px'], function () {})
        },
        btnClick(val) {
            if(val == 1){
                this.studentAdd();
            }else if(val == 2){
                console.log('导入')
            }else if(val == 3){
                console.log('重置密码')
            }else if(val == 4){
                console.log('启用')
            }else {
                console.log('停用')
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
        },
        search() {

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
        }
    }
}
</script>

<style>
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
</style>
