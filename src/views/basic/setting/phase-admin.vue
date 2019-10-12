<!--学段设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="phase-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list  @btn-click="dictAdd" :model="{icon:'icon-add',name:'添加'}"></bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <phase-table
            :tableData="tableData"
            :tableColumn="tableColumn"
            @on-stop="phaseStop"
            @on-edit="phaseEdit">
        </phase-table>
        <!--启用/禁用||分页-->
        <el-row class="phase-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
              <!--  <school-stateSwitch @switchL="schoolSwitch"></school-stateSwitch>-->
                <phase-stateSwitch @switchL="phaseSwitch"></phase-stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <phase-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></phase-paging>
            </div></el-col>
        </el-row>
        <!--弹框-->
        <div class="dict-modal-add">
            <div class="modalAdd">
                <el-form ref="admForm" :model="admForm" label-width="88px" :rules="formRules" id="modalForm">
                    <el-form-item label="阶段名称"  prop="text">
                        <el-input v-model="admForm.text"></el-input>
                    </el-form-item>
                    <el-form-item label="描述"  prop="description">
                        <el-input v-model="admForm.description"></el-input>
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
    name: "phase-admin",
    data(){
        return{
            pageTile:'学段设置',
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status: 0,
            dictType: "stage",
            //表格
            tableData:[],
            tableColumn:[
                {
                    prop:'index',
                    label:'序号'
                },
                {
                    prop:'text',
                    label:'学段名称'
                },
                {
                    prop:'description',
                    label:'描述'
                },
                {
                    prop:'statusText',
                    label:'状态'
                }
            ],
            //添加弹框
            dialog: {
                visible:false,
                title: '新建',
            },
            admForm:{
                text:'',
                description:''
            },
            formRules:{
                text:[{required: true, message: '不能为空', trigger: 'blur'}],
            }
        }
    },
    components:{
        'phase-table':table,
        'phase-stateSwitch':stateSwitch,
        'phase-paging':paging,
        'bnt-list': bntList
    },
    //初始化
    created() {
        this.phaseList();
    },
    methods: {
        //分页查询
        phaseList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                type: this.dictType,
                status: this.status
            };
            this.$api.dictPage(params).then(res => {
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
        //启用停用
        phaseStop(row){
            let opText;
            let newStatus;
            if (row.status === 0) {
                opText = "停用";
                newStatus = 1;
            } else {
                opText = "启用";
                newStatus = 0;
            }
            let _this = this;

            this.$myLayer.confirmLayer("确认"+opText+"该类型", function () {
                let params = {
                    id:row.id,
                    status:newStatus,
                    type: _this.dictType
                }
                _this.$api.dictDis(params).then(res => {
                    if (res.success === true) {
                        _this.phaseList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            });

        },
        //编辑
        phaseEdit(row){
            this.$refs["admForm"].resetFields();
            let editForm = {
                text: row.row.text,
                description: row.row.description
            };
            this.admForm = editForm;
            let _this = this;
            this.$myLayer.formLayer("编辑", $('.dict-modal-add'), ['422px'], function () {
                _this.$refs["admForm"].validate((valid) => {
                    if (valid) {
                        let ediData = {
                            text: _this.admForm.text,
                            description:_this.admForm.description,
                            type: _this.dictType,
                            id:row.row.id
                        };
                        _this.$api.dictEdit(ediData).then(res => {
                            if (res.success == true) {
                                _this.phaseList();
                                // TODO 关闭弹窗
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
        phaseSwitch(state){
            this.status = state;
            this.phaseList();
        },
        //分页
        SizeChange(pageSize){//显示多少页
            this.pageSize = pageSize;
            this.phaseList();
        },
        CurrentChange(pageCurrent){//当前页
            this.pageCurrent = pageCurrent;
            this.phaseList();
        },
        dictAdd(){
            let _this = this;
            _this.admForm = {
                text:'',
                description:''
            }
            this.$refs["admForm"].resetFields();
            // eslint-disable-next-line no-undef
            this.$myLayer.formLayer("新建", $('.dict-modal-add'), ['422px'], function () {
                _this.$refs["admForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            text: _this.admForm.text,
                            description:_this.admForm.description,
                            type: _this.dictType
                        };
                        _this.$api.dictAdd(params).then(res => {
                            if (res.success == true) {
                                _this.phaseList();
                                // TODO 关闭弹窗
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
        }
    }
}
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .phase-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 25px;
    }
    .phase-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .phase-bnt{
        margin-top: 14px;
    }
    .phase-bnt .bg-purple-light{
        text-align: right;
    }
    .phase-bnt .bg-purple{
        margin-top: 4px;
    }
    .dict-modal-add {
        display: none;
    }
    .modalAdd {
        padding: 0px 32px;
        margin: 24px 0px;
    }

</style>
