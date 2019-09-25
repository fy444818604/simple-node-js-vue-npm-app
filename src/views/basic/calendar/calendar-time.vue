<!--时间设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="pol-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="polAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->


        <!--分页/启用/停用-->
        <el-row class="pol-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <pol-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></pol-paging>
            </div></el-col>
        </el-row>
        <!--        &lt;!&ndash;新建&ndash;&gt;
                <pol-modal
                        :title="dialog.title"
                        @on-close="polClose"
                        @on-save="polSave"
                        :visible="dialog.visible">
                    <el-form ref="form" :model="polForm" label-width="88px" :rules="formRules">
                        <el-form-item label="政治面貌"  prop="political">
                            <el-input v-model="polForm.political"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" >
                            <el-input v-model="polForm.describe"></el-input>
                        </el-form-item>
                        <el-form-item label="显示顺序" >
                            <el-input v-model="polForm.order"></el-input>
                        </el-form-item>
                    </el-form>
                </pol-modal>-->
    </div>
</template>

<script>
    import bntList from '../../../components/btn-list'
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    /*import modal from '../../../components/modal'*/
    export default {
        name: "calendar-set",
        data(){
            return{
                pageTile:'作息时间',
                //按钮
                model:{
                    name:'添加',
                    icon:'icon-add'
                },
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
                polForm:{
                    political:'',
                    describe:'',
                    order:''
                },
                formRules:{
                    political:[{required: true, message: '不能为空', trigger: 'blur'}],
                },
            }
        },
        components:{
            'bnt-list':bntList,
            'stateSwitch':stateSwitch,
            'pol-paging':paging,
            /* 'pol-modal':modal*/
        },
        methods: {
            //添加
            polAdd(){
                this.dialog.visible = true;
            },
            //表格
            polStop(row){
                console.log(row)
            },
            polEdit(row){
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
            /*    //弹框
                polSave(){
                    this.dialog.visible = false
                },
                polClose(){
                    this.dialog.visible = false
                },*/
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
</style>
