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
        <div class="stu-yeaer-modal-add">
            <div class="modalAdd">
                <el-form ref="form" :model="schoolForm" label-width="88px" :rules="formRules">
                    <el-form-item label="学区名称"  prop="name">
                        <el-input v-model="schoolForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构"  prop="institutions">
                        <div>
                            <div class="school-structure-top" @click="structureTop">
                                {{ label }}
                            </div>
                            <div class="school-structure-bnt" v-show="structureBnt">
                                <adm-areas-tree @superiorData="structureT"></adm-areas-tree>
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
            </div>
        </div>
    </div>
</template>

<script>
import table from '../../../components/table'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
import admAreasTree from  './adm-areas-tree'
import bntList from  '../../../components/btn-list'
export default {
    name: "schoolDistrict",
    data(){
        return{
            pageTile:'学区管理',
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status:0,
            //表格
            tableData:[],
            tableColumn:[
                {
                    prop:'id',
                    label:'显示顺序'
                },
                {
                    prop:'name',
                    label:'学区名称'
                },
                {
                    prop:'orgName',
                    label:'组织结构'
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
            schoolForm:{
                name:'',
                institutions:'',
                describe:'',
                order:''
            },
            formRules:{
                name:[{required: true, message: '请输入学区名称', trigger: 'blur'}],
                institutions:[{required: true, message: '请选择组织结构', trigger: 'blur'}],
            },
            //自定义下拉框选中数据
            label:'',
            structureBnt:false
        }
    },
    components:{
        'school-table':table,
        'school-stateSwitch':stateSwitch,
        'school-paging':paging,
        'adm-areas-tree':admAreasTree,
        'bnt-list':bntList
    },
    //初始化
    created(){
        this.schoolList();
    },
    methods: {
        //分页数据请求
        schoolList(){
            let params = {
                pageIndex :this.pageCurrent,
                pageSize:this.pageSize,
                orgId:0,
                status:this.status
            };
            this.$api.school(params).then(res => {
                if(res.success == true){
                    //赋值分页总数
                    this.pageTotal = res.totalDatas;
                    //赋值表格数据
                    this.tableData = res.data;
                }else {
                    console.log('请求失败')
                }
            })
        },
        //保存编辑接口
        schoolListAdd(){
            let params = {
                name:this.schoolForm.name,
            };
            this.$api.schoolAdd(params).then(res => {
                if(res.success == true){
                    console.log(res)
                }else {
                    console.log('请求失败')
                }
            })
        },
        //停用接口
        schoolDis(){

        },
        //表格操作
        schoolStop(row){//停用
            /* this.$myLayer.confirmLayer('确定停用?',function () {});*/
            console.log(row.id)
            console.log(row.id.toFixed(0))
            /* var params = {
                    id:row.id,
                    status:row.status
                };
                this.$api.schoolDis(params).then(res => {
                    if(res.success == true){
                        console.log(res)

                    }else {
                        console.log('请求失败')
                    }
                })*/



        },
        schoolEdit(row){//编辑
            let editForm = {
                name:row.row.name,
                institutions:row.row.orgName,
                describe:row.row.description,
                order:row.$index+1
            };
            this.schoolForm = editForm;
            this.$myLayer.formLayer("编辑",$('.stu-yeaer-modal-add'),['422px'],function () {
                this.schoolListAdd()
            })
        },
        //启用/禁用
        schoolSwitch(state){
            this.status = state;
            this.schoolList();
        },
        //分页
        SizeChange(pageSize){//显示多少页
            this.pageSize = pageSize;
            this.schoolList();
        },
        CurrentChange(pageCurrent){//当前页
            this.pageCurrent = pageCurrent;
            this.schoolList();
        },
        //添加弹框
        schoolAdd(){
            /*  var name = this.schoolForm;
                this.$refs[name].resetFields();*/
            this.$myLayer.formLayer("新建",$('.stu-yeaer-modal-add'),['422px'],function () {
                this.schoolListAdd()
            })
        },
        //添加弹框里面的自定义下拉框
        structureT(label){
            console.log(label);
            this.label = label;
            this.structureBnt = false
        },
        structureTop(){
            this.structureBnt = true
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
        padding: 0 15px;
    }
    .school-structure-bnt{
        width: 100%;
        height: 125px;
        position: absolute;
        top: 42px;
        left: 0px;
        z-index: 9999;
        border: 1px solid #e4e7ed;
        overflow: auto;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
    }
    .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
        display: none;
    }
    .modalAdd{
        padding: 0px 32px;
        margin: 24px 0px;
    }

</style>
