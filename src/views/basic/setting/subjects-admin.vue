<!--科目管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="sub-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="subAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <snb-table
            :tableData="tableData"
            :tableColumn="tableColumn"
            @on-stop="subStop"
            @on-edit="subEdit">
        </snb-table>
        <!--分页/启用/停用-->
        <el-row class="sub-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <sub-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></sub-paging>
            </div></el-col>
        </el-row>
        <!--新建-->
        <sub-modal
            :title="dialog.title"
            @on-close="subClose"
            @on-save="subSave"
            :visible="dialog.visible">
            <el-form ref="form" :model="subForm" label-width="88px" :rules="formRules">
                <el-form-item label="科目类型" prop="type">
                    <el-select v-model="subForm.type" placeholder="请选择活动区域" style="width: 100%" >
                        <el-option
                            v-for="item in typeSet"
                            :label="item.label"
                            :value="item.val">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="科目名称"  prop="name">
                    <el-input v-model="subForm.name"></el-input>
                </el-form-item>
                <el-form-item label="学段" prop="period">
                    <el-select v-model="subForm.period" placeholder="请选择活动区域" style="width: 100%" >
                        <el-option v-for="item in typeSet" :label="item.label" :value="item.val"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="序号" >
                    <el-input v-model="subForm.number"></el-input>
                </el-form-item>
                <el-form-item label="描述" >
                    <el-input v-model="subForm.describe"></el-input>
                </el-form-item>
            </el-form>
        </sub-modal>
    </div>
</template>

<script>
import bntList from '../../../components/btn-list'
import table from '../../../components/table'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
import modal from '../../../components/modal'

export default {
    name: "subjectsAdmin",
    data(){
        return{
            pageTile:'科目管理',
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
            subForm:{
                type:'',
                name:'',
                period:'',
                number:'',
                describe:''
            },
            formRules:{
                type:[{required: true, message: '不能为空', trigger: 'blur'}],
                name:[{required: true, message: '不能为空', trigger: 'blur'}],
                period:[{required: true, message: '不能为空', trigger: 'blur'}],
            },
            typeSet:[
                {label:'类型1',val:1},
                {label:'类型2',val:2},
                {label:'类型3',val:3}
            ]
        }
    },
    components:{
        'bnt-list':bntList,
        'snb-table':table,
        'stateSwitch':stateSwitch,
        'sub-paging':paging,
        'sub-modal':modal
    },
    methods: {
        //添加按钮
        subAdd(){
            this.dialog.visible = true
        },
        //表格
        subStop(row){
            console.log(row)
        },
        subEdit(row){
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
        subSave(){
            this.dialog.visible = false
        },
        subClose(){
            this.dialog.visible = false
        },
    }
}
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .sub-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .sub-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .sub-bnt{
        margin-top: 14px;
    }
    .sub-bnt .bg-purple-light{
        text-align: right;
    }
    .sub-bnt .bg-purple{
        margin-top: 4px;
    }
</style>
