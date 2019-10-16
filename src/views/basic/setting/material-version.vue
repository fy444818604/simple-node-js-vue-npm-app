<!--教材版本-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="mat-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="matAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <mat-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="matStop"
                @on-edit="matEdit">
        </mat-table>
        <!--分页/启用/停用-->
        <el-row class="mat-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <mat-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></mat-paging>
            </div></el-col>
        </el-row>
        <!--新建-->
        <div class="stu-yeaer-modal-add">
            <div class="modalAdd">
                <el-form ref="matForm" :model="matForm" label-width="88px" :rules="formRules">
                    <el-form-item label="名称"  prop="name">
                        <el-input v-model="matForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="顺序" >
                        <el-input v-model="matForm.number"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" >
                        <el-input v-model="matForm.describe"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import bntList from '../../../components/btn-list'
import table from '../../../components/table'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
export default {
    name: "materialVersion",
    data() {
        return {
            pageTile: '教材版本',
            //按钮
            model: {
                name: '添加',
                icon: 'icon-add'
            },
            //表格
            tableData:[],
            tableColumn:[
                {
                    prop:'orderIndex',
                    label:'序号'
                },
                {
                    prop:'versionName',
                    label:'名称'
                },
                {
                    prop:'notes',
                    label:'描述'
                },
                {
                    prop:'statusText',
                    label:'状态'
                }
            ],
            //分页
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0
            ,//总条数
            status:0,//状态
            enable:null,
            //添加弹框
            matForm:{
                name:'',
                number:'',
                describe:''
            },
            formRules:{
                name:[{required: true, message: '不能为空', trigger: 'blur'}],
            },
        }
    },
    components:{
        'bnt-list':bntList,
        'mat-table':table,
        'stateSwitch':stateSwitch,
        'mat-paging':paging,
    },
    created() {
        this.materialList();
    },
    methods: {
        //分页
        materialList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                status: this.status,
            };
            this.$api.phase(params).then(res => {
                if (res.success == true) {
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    this.tableData = res.data;
                } else {
                    this.$myLayer.errorLayer('失败')
                }
            })
        },
        //添加
        matAdd(){
            let _this = this;
            _this.$refs['matForm'].resetFields();
            this.$myLayer.formLayer("新建", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs['matForm'].validate((valid) => {
                    if (valid) {

                        let params = {
                            versionName:_this.matForm.name,
                            orderIndex:_this.matForm.number,
                            notes:_this.matForm.describe
                        };
                        _this.$api.phaseAdd(params).then(res => {
                            if (res.success == true) {
                                _this.materialList();
                                _this.$myLayer.successLayer(res.msg)
                            } else {
                                _this.$myLayer.errorLayer(res.msg)
                            }
                        })
                    } else {
                        return false;
                    }
                })
            })
        },
        //表格
        matStop(row){
            let _this = this;
            if(row.status != 0){
                _this.enable = 0;
            }else {
                _this.enable = 1;
            }
            let params = {
                id:row.id,
                status:_this.enable
            };
            this.$api.phaseState(params).then(res => {
                if (res.success == true) {
                    _this.materialList();
                    this.$myLayer.successLayer(res.msg)
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })
        },
        //编辑
        matEdit(row){
            let _this = this;
            _this.matForm.name = row.row.versionName;
            _this.matForm.number = row.row.orderIndex;
            _this.matForm.describe = row.row.notes;
            _this.$myLayer.formLayer("编辑", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs['matForm'].validate((valid) => {
                    if (valid) {
                        let params = {
                            id:row.row.id,
                            versionName:_this.matForm.name,
                            orderIndex:_this.matForm.number,
                            notes:_this.matForm.describe
                        };
                        _this.$api.phaseEdi(params).then(res => {
                            if (res.success == true) {
                                _this.materialList();
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
        //状态
        stateList(state){
            this.status = state;
            this.materialList();
        },
        //分页
        SizeChange(val){
            this.pageSize = val;
            this.materialList();
        },
        CurrentChange(val){
            this.pageCurrent = val;
            this.materialList();
        },
    }
}
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .mat-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .mat-title .bg-purple-light{
        text-align: right;
    }
    .mat-bnt{
           margin-top: 14px;
    }
    .mat-bnt .bg-purple-light{
        text-align: right;
    }
    .mat-bnt .bg-purple{
        margin-top: 4px;
    }
    .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
        display: none;
    }
    .modalAdd {
        width: 330px;
        margin: 24px auto;
    }

</style>
