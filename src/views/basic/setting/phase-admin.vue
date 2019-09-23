<!--学段设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="phase-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i  class="iconfont icon-add"></i></div></el-col>
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
        <phase-modal
            :title="dialog.title"
            @on-close="phaseClose"
            @on-save="phaseSave"
            :visible="dialog.visible">
            <el-form ref="form" :model="admForm" label-width="88px" :rules="formRules">
                <el-form-item label="阶段名称"  prop="level">
                    <el-input v-model="admForm.level"></el-input>
                </el-form-item>
                <el-form-item label="描述"  prop="order">
                    <el-input v-model="admForm.level"></el-input>
                </el-form-item>
            </el-form>
        </phase-modal>
    </div>
</template>

<script>
    import table from '../../../components/table'
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    import modal from '../../../components/modal'
    export default {
        name: "phase-admin",
        data(){
            return{
                pageTile:'学段设置',
                pageSize:'',//显示多少页
                pageCurrent:'',//当前页
                pageTotal:300,//总条数
                //表格
                tableData:[
                    {
                        id:1,
                        school:'1号教学楼',
                        describe:'学区1',
                        status:'启用',
                    },
                    {
                        id:2,
                        school:'1号教学楼',
                        describe:'学区1',
                        status:'启用',
                    },
                    {
                        id:3,
                        school:'1号教学楼',
                        describe:'学区1',
                        status:'启用',

                    },
                    {
                        id:4,
                        school:'1号教学楼',
                        describe:'学区1',
                        status:'启用',
                    }
                ],
                tableColumn:[
                    {
                        prop:'id',
                        label:'序号'
                    },
                    {
                        prop:'school',
                        label:'学段名称'
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
                    visible:true,
                    title: '新建',
                },
                admForm:{
                    level:'',
                    order:''
                },
                formRules:{
                    level:[{required: true, message: '不能为空', trigger: 'blur'}],
                }
            }
        },
        components:{
            'phase-table':table,
            'phase-stateSwitch':stateSwitch,
            'phase-paging':paging,
            'phase-modal':modal
        },
        methods: {
            //表格
            phaseStop(){

            },
            phaseEdit(){

            },
            //状态
            phaseSwitch(){

            },
            //分页
            SizeChange(){

            },
            CurrentChange(){

            },
            //弹框
            phaseClose(){
               this.dialog.visible = false
            },
            phaseSave(){

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

</style>
