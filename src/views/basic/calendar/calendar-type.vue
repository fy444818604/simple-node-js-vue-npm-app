<!--作息类型-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="pol-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list  @btn-click="dictAdd" :model="{icon:'icon-add',name:'添加'}"></bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <pol-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="polStop"
                @on-edit="polEdit">
        </pol-table>
        <!--分页/启用/停用-->
        <el-row class="pol-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateSwitch"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <pol-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></pol-paging>
            </div></el-col>
        </el-row>
        <!--新建-->
        <div class="dict-modal-add">
            <div class="modalAdd">
                <el-form ref="dictForm" :model="dictForm" label-width="88px" :rules="formRules" id="modalForm">
                    <el-form-item label="类型名称"  prop="text">
                        <el-input v-model="dictForm.text"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="description">
                        <el-input v-model="dictForm.description"></el-input>
                    </el-form-item>
                    <el-form-item label="显示顺序"  prop="orderIndex">
                        <el-input v-model="dictForm.orderIndex"></el-input>
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
    name: "calendar-type",
    data(){
        return{
            pageTile:'作息类型',
            //按钮
            model:{
                name:'添加',
                icon:'icon-add'
            },
            //表格
            tableData:[],
            tableColumn:[
                {
                    prop:'orderIndex',
                    label:'显示顺序'
                },
                {
                    prop:'text',
                    label:'作息类型'
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
            //分页
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status: 0,
            dictType: "work_rest",
            //弹框
            /* dialog */
            dialog: {
                visible:false,
                title: '新建',
            },
            dictForm:{
                text:'',
                description:'',
                orderIndex:''
            },
            formRules:{
                text:[{required: true, message: '不能为空', trigger: 'blur'}],
                orderIndex:[{pattern: /^[0-9]+$/, message: '只能输入数字', trigger: 'change'}]
            },
        }
    },
    components:{
        'bnt-list':bntList,
        'pol-table':table,
        'stateSwitch':stateSwitch,
        'pol-paging':paging
    },
    //初始化
    created() {
        this.dictList();
    },
    methods: {
        //分页查询
        dictList(){
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
        //添加
        dictAdd(){
            let _this = this;
            _this.dictForm = {
                text:'',
                description:'',
                orderIndex:''
            };

            // eslint-disable-next-line no-undef
            this.$myLayer.formLayer("新建", $('.dict-modal-add'), ['422px'], function () {
                _this.$refs["dictForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            text: _this.dictForm.text,
                            description:_this.dictForm.description,
                            orderIndex:_this.dictForm.orderIndex,
                            type: _this.dictType
                        };
                        _this.$api.dictAdd(params).then(res => {
                            if (res.success == true) {
                                _this.dictList();
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
        //启用停用
        polStop(row){
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
                        _this.dictList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            });

        },
        //编辑
        polEdit(row){
            let editForm = {
                text: row.row.text,
                description: row.row.description,
                orderIndex: row.row.orderIndex
            };
            this.dictForm = editForm;
            let _this = this;
            this.$myLayer.formLayer("编辑", $('.dict-modal-add'), ['422px'], function () {
                _this.$refs["dictForm"].validate((valid) => {
                    if (valid) {
                        let ediData = {
                            text: _this.dictForm.text,
                            description:_this.dictForm.description,
                            orderIndex:_this.dictForm.orderIndex,
                            type: _this.dictType,
                            id:row.row.id
                        };
                        _this.$api.dictEdit(ediData).then(res => {
                            if (res.success == true) {
                                _this.dictList();
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
        stateSwitch(state){
            this.status = state;
            this.dictList();
        },
        //分页
        SizeChange(pageSize){//显示多少页
            this.pageSize = pageSize;
            this.dictList();
        },
        CurrentChange(pageCurrent){//当前页
            this.pageCurrent = pageCurrent;
            this.dictList();
        },
        //弹框
        polSave(){
            this.dialog.visible = false
        },
        polClose(){
            this.dialog.visible = false
        },
    }
}
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .pol-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .pol-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .pol-bnt{
        margin-top: 14px;
    }
    .pol-bnt .bg-purple-light{
        text-align: right;
    }
    .pol-bnt .bg-purple{
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
