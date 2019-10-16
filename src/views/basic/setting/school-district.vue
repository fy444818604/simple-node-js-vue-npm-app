<!--学区管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="school-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list  @btn-click="schoolAdd" :model="{icon:'icon-add',name:'添加'}"></bnt-list>
            </div></el-col>
        </el-row>
        <!--查询表单-->
        <div class="school-form">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="组织结构" prop="institutions">
                    <div @click="queryStructureTop">
                        <el-input
                                v-model="queryFilterText"
                                placeholder="请选择或输入"
                                @click.stop>
                            <i slot="suffix"  class="iconfont icon-apartment"></i>
                        </el-input>
                    </div>
                    <div class="el-div-tree" v-if="queryStruct">
                        <el-tree
                                class="filter-tree"
                                :data="labelData"
                                :props="defaultProps"
                                default-expand-all
                                :filter-node-method="filterNode"
                                @node-click="queryAddIns"
                                ref="tree">
                        </el-tree>
                    </div>
                </el-form-item>
                <el-form-item>
                    <button class="primary-btn" @click="search(1)">查询</button>
                    <button class="clear-btn" @click="search(2)">清空</button>
                </el-form-item>
            </el-form>
        </div>
        <!--表格-->
        <div class="school-table">
            <school-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="schoolStop"
                @on-edit="schoolEdit">
            </school-table>
        </div>
        <!--分页/启用/停用-->
        <el-row class="school-bnt">
            <el-col :span="5">
                <div class="grid-content bg-purple cha-title">
                    <school-stateSwitch @switchL="schoolSwitch"></school-stateSwitch>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content bg-purple-light">
                    <school-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></school-paging>
                </div>
            </el-col>
        </el-row>
        <!--添加弹框-->
        <div class="stu-yeaer-modal-add">
            <div class="modalAdd">
                <el-form ref="schoolForm" :model="schoolForm" label-width="88px" :rules="formRules" >
                    <el-form-item label="学区名称" prop="name">
                        <el-input v-model="schoolForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构" prop="institutions">
                        <div @click="structureTop">
                            <el-input
                                    v-model="filterText"
                                    placeholder="请选择或输入"
                                    @click.stop>
                                <i slot="suffix"  class="iconfont icon-apartment"></i>
                            </el-input>
                        </div>
                        <div class="el-div-tree" v-if="structureBnt">
                            <el-tree
                                    class="filter-tree"
                                    :data="labelData"
                                    :props="defaultProps"
                                    default-expand-all
                                    :filter-node-method="filterNode"
                                    @node-click="addIns"
                                    ref="tree">
                            </el-tree>
                        </div>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="schoolForm.describe"></el-input>
                    </el-form-item>
                    <el-form-item label="显示顺序">
                        <el-input v-model="schoolForm.orderIndex"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import table from '../../../components/table'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
import bntList from '../../../components/btn-list'

export default {
    name: "schoolDistrict",
    data() {
        return {
            pageTile: '学区管理',
            pageSize: 10,//显示多少页
            pageCurrent: 1,//当前页
            pageTotal: 0,//总条数
            status: 0,
            enable:null,
            defaultProps: {
                children: 'children',
                label: 'displayName'
            },
            //表格
            tableData: [],
            tableColumn: [
                {
                    prop: 'orderIndex',
                    label: '显示顺序'
                },
                {
                    prop: 'name',
                    label: '学区名称'
                },
                {
                    prop: 'orgName',
                    label: '组织结构'
                },
                {
                    prop: 'description',
                    label: '描述'
                },
                {
                    prop: 'statusText',
                    label: '状态'
                }
            ],
            //添加弹框
            schoolForm: {
                name:'',
                id:'',
                orderIndex:'',
                orgId:'',
                description:'',
                institutions:''
            },
            formRules: {
                name: [{required: true, message: '请输入学区名称', trigger: 'blur'}],
                institutions: [{required: true, message: '请选择组织结构', trigger: 'blur'}],
            },
            formInline: {},
            //自定义下拉框选中数据
            labelData: '',
            structureBnt: false,
            queryStruct:false,
            filterText: '',
            queryFilterText:'',
            orgId:'',
            queryOrgId:''
        }
    },
    components: {
        'school-table': table,
        'school-stateSwitch': stateSwitch,
        'school-paging': paging,
        'bnt-list': bntList
    },
    //初始化
    created() {
        this.schoolList();
        this.institutions();
    },
    watch: {
        filterText(val) {
            if(this.$refs.tree){
                this.$refs.tree.filter(val);
            }
        },
        queryFilterText(val){
            if(val){
                this.$refs.tree.filter(val);
            }
        }
    },
    methods: {
        filterNode(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
        //分页数据请求
        schoolList() {
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                orgId: this.queryOrgId,
                status: this.status,
            };
            this.$api.school(params).then(res => {
                if (res.success == true) {
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    let array = [];
                    let list = res.data;
                    list.map((item,index)=>{
                        array.push(
                            Object.assign({
                                index:index+1
                            },item,{indexNum:'str'})
                        )
                    });
                    //赋值表格数据
                    this.tableData = array;
                } else {
                    this.$myLayer.errorLayer('失败')
                }
            })
        },
        //表格操作
        enableIf(){
            if(this.enable != 0){
                this.enable = 0;
            }else {
                this.enable = 1;
            }
        },
        schoolStop(row) {//停用
            let _this = this;
            _this.enable = row.status;
            _this.enableIf();
            let params = {
                id:row.id,
                status:_this.enable
            }
            this.$api.schoolDis(params).then(res => {
                if (res.success == true) {
                    _this.schoolList();
                    this.$myLayer.successLayer(res.msg)
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })
        },
        schoolEdit(row) {//编辑
            this.filterText = row.row.orgName;
            let editForm = {
                name: row.row.name,
                describe: row.row.description,
                orderIndex: row.row.orderIndex,
            };
            this.schoolForm = editForm;
            let _this = this;
            this.$myLayer.formLayer("编辑", $('.stu-yeaer-modal-add'), ['422px'], function () {
                let ediData = {
                    name:_this.schoolForm.name,
                    id:row.row.id,
                    orderIndex:_this.schoolForm.orderIndex,
                    orgId:_this.orgId,
                    description:_this.schoolForm.describe
                };
                _this.$api.schoolEdi(ediData).then(res => {
                    if (res.success == true) {
                        _this.schoolList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            })
        },
        //启用/禁用
        schoolSwitch(state) {
            this.status = state;
            this.schoolList();
        },
        //分页
        SizeChange(pageSize) {//显示多少页
            this.pageSize = pageSize;
            this.schoolList();
        },
        CurrentChange(pageCurrent) {//当前页
            this.pageCurrent = pageCurrent;
            this.schoolList();
        },
        //添加弹框
        schoolAdd() {
            let _this = this;
            _this.$refs['schoolForm'].resetFields();
            _this.filterText = '';
            this.$myLayer.formLayer("新建", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs['schoolForm'].validate((valid) => {
                    if (valid) {
                        let params = {
                            name: _this.schoolForm.name,
                            description:_this.schoolForm.describe,
                            orderIndex:_this.schoolForm.order,
                            orgId:_this.orgId
                        };
                        _this.$api.schoolAdd(params).then(res => {
                            if (res.success == true) {
                                _this.schoolList();
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
        //添加弹框里面的自定义下拉框
        structureTop() {
            this.structureBnt = !this.structureBnt
        },
        queryStructureTop(){
            this.queryStruct = !this.queryStruct
        },
        //机构树
        institutions(){
            let params = {
                level :0,
                onlyOrg :1,
                parentId :0,
            };
            this.$api.institutions(params).then(res => {
                if(res.success == true){
                    this.labelData = res.data;
                }
            })
        },
        addIns(val){
            this.filterText = val.displayName;
            this.orgId = val.id;
            this.schoolForm.institutions = val.id;
            this.structureBnt = false;
        },
        queryAddIns(val){
            this.queryFilterText = val.displayName;
            this.queryOrgId = val.id;
            this.queryStruct = false;
        },
        //查询
        search(val){
            if(val == 1){
                this.schoolList();
            }else {
                this.queryFilterText = '';
                this.queryOrgId = '';
            }
        }

    }
}
</script>

<style scoped>
    .page-template {
        padding: 18px 24px;
    }
    .school-title {
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
    }
    .school-title .bg-purple-light {
        text-align: right;
    }
    .school-bnt {
        margin-top: 14px;
    }
    .school-bnt .bg-purple-light {
        text-align: right;
    }
    .school-bnt .bg-purple {
        margin-top: 4px;
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
        z-index: 9999999!important;
        overflow: auto;
    }
    .school-form{
        padding-top: 20px;
    }
</style>
