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
        <mat-modal
                :title="dialog.title"
                @on-close="matClose"
                @on-save="matSave"
                :visible="dialog.visible">
            <el-form ref="form" :model="matForm" label-width="88px" :rules="formRules">
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
        </mat-modal>
    </div>
</template>

<script>
    import bntList from '../../../components/btn-list'
    import table from '../../../components/table'
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    import modal from '../../../components/modal'
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
            'mat-modal':modal
        },
        methods: {
            //添加
            matAdd(){
                this.dialog.visible = true;
            },
            //表格
            matStop(row){
                console.log(row)
            },
            matEdit(row){
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
            matSave(){
                this.dialog.visible = false
            },
            matClose(){
                this.dialog.visible = false
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
        padding-right: 24px;
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

</style>
