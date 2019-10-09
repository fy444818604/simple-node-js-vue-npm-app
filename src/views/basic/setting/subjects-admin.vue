<!--科目管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="sub-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="subAdd('subForm')"></bnt-list>
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
        <div class="stu-yeaer-modal-add">
            <div class="modalAdd">
                <el-form id="subForm" ref="form" :model="subForm" label-width="88px" :rules="formRules">
                    <el-form-item label="科目类型" prop="type">
                        <el-select v-model="subForm.type"  style="width: 100%">
                            <el-option :label="item.text" :key="item.code" :value="item.code" v-for="item in typeSet"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="科目名称"  prop="name">
                        <el-input v-model="subForm.name" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="学段" prop="period">
                        <el-select v-model="subForm.period"  style="width: 100%">
                            <el-option :label="item.text" :key="item.code" :value="item.code" v-for="item in period"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="序号" >
                        <el-input v-model="subForm.number" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" >
                        <el-input v-model="subForm.describe" placeholder="请输入"></el-input>
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
    name: "subjectsAdmin",
    data() {
        return {
            pageTile: '科目管理',
            //按钮
            model: {
                name: '添加',
                icon: 'icon-add'
            },
            //表格
            tableData: [],
            tableColumn: [
                {
                    prop: 'index',
                    label: '序号'
                },
                {
                    prop: 'subjectName',
                    label: '名称'
                },
                {
                    prop: 'subjectTypeText',
                    label: '科目类型'
                },
                {
                    prop: 'periodIdText',
                    label: '学段'
                },
                {
                    prop: 'notes',
                    label: '描述'
                },
                {
                    prop: 'statusText',
                    label: '状态'
                }
            ],
            //分页
            pageSize: 10,//显示多少页
            pageCurrent: 1,//当前页
            pageTotal: 0,//总条数
            status: 0,
            enable:null,
            //弹框
            subForm: {
                type: '',
                name: '',
                period: '',
                number: '',
                describe: ''
            },
            formRules: {
                type: [{required: true, message: '请选择', trigger: 'blur'}],
                name: [{required: true, message: '不能为空', trigger: 'blur'}],
                period: [{required: true, message: '请选择', trigger: 'blur'}],
            },
            typeSet: '',
            period:'',
        }
    },
    components: {
        'bnt-list': bntList,
        'snb-table': table,
        'stateSwitch': stateSwitch,
        'sub-paging': paging,
    },
    //初始化
    created() {
        this.subjectsList();
        this.subjectsType();
        this.periodType();
    },
    methods: {
        //科目类型
        subjectsType(){
            let params = {
                'type':[
                    'subjectType'
                ]
            }
            this.$api.dictSelect(params).then(res => {
                if (res.success == true) {
                    this.typeSet = res.data[0].data
                }
            })
        },
        //学段
        periodType(){
            let params = {
                'type':[
                    'stage'
                ]
            }
            this.$api.dictSelect(params).then(res => {
                if (res.success == true) {
                    this.period = res.data[0].data
                }
            })
        },
        //分页请求
        subjectsList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                status: this.status,
            };
            this.$api.subjects(params).then(res => {
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
        //添加按钮
        subAdd() {
            let _this = this;
            document.getElementById('subForm').reset();
            this.$myLayer.formLayer("新建", $('.stu-yeaer-modal-add'), ['422px'], function () {
                if(_this.subForm.type == ''){

                }else {
                    let params = {
                        subjectType: _this.subForm.type,
                        subjectName:_this.subForm.name,
                        periodId:_this.subForm.period,
                        notes:_this.subForm.describe,
                        orderIndex:_this.subForm.number
                    };
                    _this.$api.subjectsAdd(params).then(res => {
                        if (res.success == true) {
                            _this.schoolList();
                            _this.$myLayer.successLayer(res.msg)
                        } else {
                            _this.$myLayer.errorLayer(res.msg)
                        }
                    })
                }
            })
        },
        //表格
        enableIf(){
            if(this.enable != 0){
                this.enable = 0;
            }else {
                this.enable = 1;
            }
        },
        subStop(row) {//停用/禁用
            let _this = this;
            _this.enable = row.status;
            _this.enableIf();
            let params = {
                id:row.id,
                status:_this.enable
            };
            this.$api.subjectsDis(params).then(res => {
                if (res.success == true) {
                    _this.subjectsList();
                    this.$myLayer.successLayer(res.msg)
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })
        },
        subEdit(row) {
            console.log(row.row)

        },
        //状态
        stateList(state) {
            this.status = state;
            this.subjectsList()
        },
        //分页
        SizeChange(val) {
            this.pageSize = val;
            this.subjectsList();
        },
        CurrentChange(val) {
            this.pageCurrent = val;
            this.subjectsList();
        },
    }
}
</script>
<style>
    .el-select-dropdown{
        z-index: 999999999!important;
    }
</style>
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
    .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
        display: none;
    }
    .modalAdd {
        width: 330px;
        margin: 24px auto;
    }
</style>
