<!--知识点管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="kno-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="knoAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <kno-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="knoStop"
                @on-edit="knoEdit">
        </kno-table>
        <!--分页/启用/停用-->
        <el-row class="kno-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <kno-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></kno-paging>
            </div></el-col>
        </el-row>
        <!--新建-->
        <kno-modal
                :title="dialog.title"
                @on-close="knoClose"
                @on-save="knoSave"
                :visible="dialog.visible">
            <el-form ref="form" :model="honForm" label-width="88px" :rules="formRules">
                <el-form-item label="名称"  prop="name">
                    <el-input v-model="honForm.name"></el-input>
                </el-form-item>
                <el-form-item label="学段"  prop="period">
                    <el-input v-model="honForm.period"></el-input>
                </el-form-item>
                <el-form-item label="科目"  prop="subjects">
                    <el-input v-model="honForm.subjectsT"></el-input>
                </el-form-item>
                <el-form-item label="备注" >
                    <el-input v-model="honForm.note"></el-input>
                </el-form-item>
            </el-form>
        </kno-modal>
    </div>
</template>

<script>
    import bntList from '../../../components/btn-list'
    import table from '../../../components/table'
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    import modal from '../../../components/modal'
    export default {
        name: "knowledgeAdmin",
        data(){
            return{
                pageTile:'知识点管理',
                //按钮
                model:{
                    name:'添加',
                    icon:'icon-add'
                },
                //表格
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
                //分页
                pageSize:'',//显示多少页
                pageCurrent:'',//当前页
                pageTotal:300,//总条数
                //弹框
                /* dialog */
                dialog: {
                    visible:false,
                    title: '新建',
                },
                honForm:{
                    name:'',
                    period:'',
                    subjects:'',
                    note:''
                },
                formRules:{
                    name:[{required: true, message: '不能为空', trigger: 'blur'}],
                    period:[{required: true, message: '不能为空', trigger: 'blur'}],
                    subjects:[{required: true, message: '不能为空', trigger: 'blur'}],
                },
            }
        },
        components:{
            'bnt-list':bntList,
            'kno-table':table,
            'stateSwitch':stateSwitch,
            'kno-paging':paging,
            'kno-modal':modal
        },
        methods: {
            //添加
            knoAdd(){
                this.dialog.visible = true;
            },
            //表格
            knoStop(row){
                console.log(row)
            },
            knoEdit(row){
                console.log(row)
            },
            //状态
            stateList(state){
                console.log(state)
            },
            //分页
            SizeChange(val){
                console.log(val)
            },
            CurrentChange(val){
                console.log(val)
            },
            //弹框
            knoSave(){
                this.dialog.visible = false
            },
            knoClose(){
                this.dialog.visible = false
            },
        }

    }
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .kno-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .kno-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .kno-bnt{
        margin-top: 14px;
    }
    .kno-bnt .bg-purple-light{
        text-align: right;
    }
    .kno-bnt .bg-purple{
        margin-top: 4px;
    }

</style>
