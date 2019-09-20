<!--行政级别-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="level-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i class="iconfont icon-add" @click="admAdd"></i></div></el-col>
        </el-row>
        <!--表格-->
        <div>
            <adm-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="amdStop"
                @on-edit="admEdit">
            </adm-table>
        </div>
        <!--分页/启用/停用-->
        <el-row class="level-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <state-switch @switchL="stateList"></state-switch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></paging>
            </div></el-col>

        </el-row>
        <!--添加弹框-->
        <adm-modal
                :title="dialog.title"
                @on-close="admClose"
                @on-save="admSave"
                :visible="dialog.visible">
            <el-form ref="form" :model="admForm" label-width="88px" :rules="formRules">
                <el-form-item label="行政级别"  prop="level">
                    <el-input v-model="admForm.level"></el-input>
                </el-form-item>
                <el-form-item label="显示顺序"  prop="order">
                    <el-input v-model="admForm.level"></el-input>
                </el-form-item>
            </el-form>
        </adm-modal>
    </div>
</template>

<script>
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    import table from '../../../components/table'
    import modal from '../../../components/modal'
    export default {
        name: "adm-level",
        data(){
            return{
                pageTile:'行政级别设置',
                pageSize:'',//显示多少页
                pageCurrent:'',//当前页
                pageTotal:300,//总条数
                tableData:[
                    {
                        id:1,
                        level:'1号教学楼',
                        status:'启用',

                    },
                    {
                        id:2,
                        level:'1号教学楼',
                        status:'启用',

                    },
                    {
                        id:3,
                        level:'1号教学楼',
                        status:'启用',

                    },
                    {
                        id:4,
                        level:'1号教学楼',
                        status:'启用',

                    }
                ],
                tableColumn:[
                    {
                        prop:'id',
                        label:'显示顺序'
                    },
                    {
                        prop:'level',
                        label:'行政级别'
                    },
                    {
                        prop:'status',
                        label:'状态'
                    }
                ],
                /* dialog */
                dialog: {
                    visible:false,
                    title: '新建',
                },
                admForm:{
                    level:'',
                    order:''
                },
                formRules:{
                    level:[{required: true, message: '不能为空', trigger: 'blur'}],
                    order:[{required: true, message: '不能为空', trigger: 'blur'}],
                }
            }
        },
        components: {
            'state-switch': stateSwitch,
            'paging':paging,
            'adm-table':table,
            'adm-modal':modal
        },
        methods: {
            stateList(state){//状态开关
                alert(state)
            },
            SizeChange(pageSize){//显示多少页
                alert(pageSize)
            },
            CurrentChange(pageCurrent){//当前页
                alert(pageCurrent)
            },
            //表格操作
            amdStop(){

            },
            admEdit(){

            },
            //modal
            admClose(){
                this.dialog.visible = false
            },
            admSave(){
                this.$refs.form.validate((valid) => {
                    if(valid) {
                        console.log(valid);
                    }
                })

            },
            //添加弹框
            admAdd(){
                this.dialog.visible = true;
            }
        }
    }
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .level-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .level-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .level-bnt{
        margin-top: 14px;
    }
    .level-bnt .bg-purple-light{
        text-align: right;
    }
    .level-bnt .bg-purple{
        margin-top: 4px;
    }

    item__label:before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
    }
</style>
