<!--学区管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="school-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i @click="schoolAdd" class="iconfont icon-add"></i></div></el-col>
        </el-row>
        <!--查询表单-->
        <div class="school-form">

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
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <school-stateSwitch @switchL="schoolSwitch"></school-stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <school-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></school-paging>
            </div></el-col>
        </el-row>
        <!--添加弹框-->
        <school-modal
                :title="dialog.title"
                @on-close="schoolClose"
                @on-save="schoolSave"
                :visible="dialog.visible">
            <el-form ref="form" :model="schoolForm" label-width="88px" :rules="formRules">
                <el-form-item label="学区名称"  prop="name">
                    <el-input v-model="schoolForm.name"></el-input>
                </el-form-item>
                <el-form-item label="组织结构"  prop="institutions">
                    <div>
                        <div class="school-structure-top">
                            <div class="school-structure-bnt">2222</div>
                        </div>

                    </div>
                </el-form-item>
                <el-form-item label="描述"  >
                    <el-input v-model="schoolForm.describe"></el-input>
                </el-form-item>
                <el-form-item label="显示顺序" >
                    <el-input v-model="schoolForm.order"></el-input>
                </el-form-item>
            </el-form>
        </school-modal>
    </div>
</template>

<script>
    import table from '../../../components/table'
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    import modal from '../../../components/modal'
    export default {
        name: "schoolDistrict",
        data(){
            return{
                pageTile:'学区管理',
                pageSize:'',//显示多少页
                pageCurrent:'',//当前页
                pageTotal:300,//总条数
                //表格
                tableData:[
                    {
                        id:1,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',
                    },
                    {
                        id:2,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',
                    },
                    {
                        id:3,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',

                    },
                    {
                        id:4,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',
                    }
                ],
                tableColumn:[
                    {
                        prop:'id',
                        label:'显示顺序'
                    },
                    {
                        prop:'school',
                        label:'学区名称'
                    },
                    {
                        prop:'structure',
                        label:'组织结构'
                    },
                    {
                        prop:'describe',
                        label:'描述'
                    },
                    {
                        prop:'status',
                        label:'状态'
                    }
                ],
                //添加弹框
                dialog: {
                    visible:false,
                    title: '新建',
                },
                schoolForm:{
                    name:'',
                    institutions:'',
                    describe:'',
                    order:''
                },
                formRules:{
                    name:[{required: true, message: '请输入学区名称', trigger: 'blur'}],
                    institutions:[{required: true, message: '请选择组织结构', trigger: 'blur'}],
                }
            }
        },
        components:{
            'school-table':table,
            'school-stateSwitch':stateSwitch,
            'school-paging':paging,
            'school-modal':modal
        },
        methods: {
            //表格操作
            schoolStop(row){
                console.log(row)
            },
            schoolEdit(row){
                console.log(row)
            },
            //启用/禁用
            schoolSwitch(state){
                console.log(state)
            },
            //分页
            SizeChange(pageSize){//显示多少页
                console.log(pageSize)
            },
            CurrentChange(pageCurrent){//当前页
                console.log(pageCurrent)
            },
            //添加弹框
            schoolClose(){
                this.dialog.visible = false
            },
            schoolSave(){

            },
            schoolAdd(){
                this.dialog.visible = true
            }
        }
    }
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .school-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
    }
    .school-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .school-table{
        margin-top: 25px;
    }
    .school-bnt{
        margin-top: 14px;
    }
    .school-bnt .bg-purple-light{
        text-align: right;
    }
    .school-bnt .bg-purple{
        margin-top: 4px;
    }
    .school-structure-top{
        width: 100%;
        height: 36px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
    }
    .school-structure-bnt{
        width: 100%;
        height: 200px;
        background: red;
        position: relative;
        top: 38px;
        left: 0px;
        z-index: 9999;
    }
</style>
