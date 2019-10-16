<!--知识点管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="kno-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="knoAdd"></bnt-list>
                <bnt-list :model="modela" @btn-click="knoAdd"></bnt-list>
                <bnt-list :model="modelb" @btn-click="knoAdd"></bnt-list>
                <bnt-list :model="modelc" @btn-click="knoAdd"></bnt-list>
            </div></el-col>
        </el-row>
        <!--查询-->
        <div>
            <el-form ref="formInline"  :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="formInline.account" placeholder="请输入账号查询"></el-input>
                </el-form-item>
                <el-form-item label="学科:">
                    <el-select v-model="formInline.discipline" placeholder="不限" style="width: 200px;">
                        <el-option v-for="item in discipline" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <button class="primary-btn" @click="search(1)">查询</button>
                    <button class="clear-btn" @click="search(2)">清空</button>
                </el-form-item>
            </el-form>
        </div>
        <!--表格-->
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"  @mouseenter="handleSelectionChange(scope.row)">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" label="序号" width="120">
            </el-table-column>
            <el-table-column prop="pointsName" label="名称" width="120">
            </el-table-column>
            <el-table-column label="科目" prop="subjectIdName">
            </el-table-column>
            <el-table-column prop="periodIdText" label="学段" >
            </el-table-column>
            <el-table-column prop="notes" label="备注">
            </el-table-column>
            <el-table-column prop="statusText" label="状态">
            </el-table-column>
            <el-table-column prop="id" label="操作" width="80px">
                <template slot-scope="scope"  >
                    <i v-if="!scope.row.showBtn" class="iconfont icon-more" @mouseenter="handleMouseEnter(scope.row)"></i>
                    <ul class="tableOpe"  v-else @mouseleave="handleMouseLeave(scope.row)">
                        <li>
                            <span v-if="scope.row.status == 0" @click="disable(scope.row,1)">停用</span>
                            <span v-else @click="disable(scope.row,0)">启用</span>
                        </li>
                        <li>编辑</li>
                    </ul>
                </template>
            </el-table-column>
        </el-table>
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
            modela:{
                name:'导入',
                icon:'icon-input'
            },
            modelb:{
                name:'启用',
                icon:'icon-enable'
            },
            modelc:{
                name:'禁用',
                icon:'icon-stop'
            },
            //表格
            tableData:[],
            multipleSelection: [],
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
            //查询表单
            formInline:{
                account:'',
                discipline:''
            },
            discipline:[],
            //分页
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status:0,//状态
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
        'stateSwitch':stateSwitch,
        'kno-paging':paging,
        'kno-modal':modal
    },
    created() {
        this.knowList();
        this.subjectSelect();
    },
    methods: {
        //学科下拉框数据
        subjectSelect(){
            let params = {};
            this.$api.subjectSelect(params).then(res => {
                if (res.success == true) {
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        res.data[i].showBtn = false;
                    }
                    this.discipline = res.data;
                }
            })
        },
        //分页查询
        knowList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                /*status: this.status,*/
                pointsName:this.formInline.account,
                subjectId:this.formInline.discipline
            };
            this.$api.knowledge(params).then(res => {
                if (res.success == true) {
                    console.log(res)
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    this.tableData = res.data;
                }
            })
        },
        //添加
        knoAdd(){
            this.dialog.visible = true;
        },
        //表格
        disable(row,val){

        },
        //查询
        search(val){
            if(val == 1){
                this.knowList();
            }else {
                this.formInline ={
                    account:'',
                    discipline:''
                }
            }
        },
        //状态
        stateList(state){
            this.status = state;
            this.knowList();
        },
        //分页
        SizeChange(val){
            this.pageSize = val;
            this.knowList();
        },
        CurrentChange(val){
            this.pageCurrent = val;
            this.knowList();
        },
        //弹框
        knoSave(){
            this.dialog.visible = false
        },
        knoClose(){
            this.dialog.visible = false
        },
        /* 鼠标移入移除 */
        handleMouseEnter(row){
            row.showBtn = true
        },
        handleMouseLeave(row){
            row.showBtn = false
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
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
