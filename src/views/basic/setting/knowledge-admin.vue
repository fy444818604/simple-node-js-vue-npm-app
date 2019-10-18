<!--知识点管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="kno-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="knoAdd(1)"></bnt-list>
                <bnt-list :model="modela" @btn-click="knoAdd(2)"></bnt-list>
                <bnt-list :model="modelb" @btn-click="knoAdd(3)"></bnt-list>
                <bnt-list :model="modelc" @btn-click="knoAdd(4)"></bnt-list>
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
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"  @selection-change="handleSelectionChange">
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
                        <li @click="konEditor(scope.row)">编辑</li>
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
        <div class="stu-yeaer-modal-add">
            <div class="modalAdd">
                <el-form ref="honForm" :model="honForm" label-width="88px" :rules="formRules">
                    <el-form-item label="名称"  prop="name">
                        <el-input v-model="honForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学段"  prop="period">
                        <el-select v-model="honForm.period" placeholder="请选择" style="width: 100%" @focus="setSelectMinWidth">
                            <el-option :style="{'min-width': selectMinWidth + 2 + 'px'}"  v-for="item in phase" :key="item.code" :label="item.text" :value="item.code"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学科"  prop="subjects">
                        <el-select v-model="honForm.subjects" placeholder="请选择" style="width:100%;" @focus="setSelectMinWidth">
                            <el-option :style="{'min-width': selectMinWidth + 2 + 'px'}" v-for="item in discipline" :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注" >
                        <el-input v-model="honForm.note"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import bntList from '../../../components/btn-list'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
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
            honForm:{
                name:'',
                period:'',
                subjects:'',
                note:''
            },
            formRules:{
                name:[{required: true, message: '请输入名称', trigger: 'blur'}],
                period:[{required: true, message: '请选择学段', trigger: 'change'}],
                subjects:[{required: true, message: '请选择学科', trigger: 'change'}],
            },
            phase:[],//阶段字典数据
            selectMinWidth:0,//弹框下拉框宽度
            patState:null,//批量启用禁用
            sinState:null,//单个启用禁用
        }
    },
    components:{
        'bnt-list':bntList,
        'stateSwitch':stateSwitch,
        'kno-paging':paging,
    },
    created() {
        this.knowList();
        this.subjectSelect();
        this.dictionary();
    },
    methods: {
        // 设置弹窗中下拉框的最小宽度
        setSelectMinWidth(val){
            let target = val.srcElement ? val.srcElement : val.target;
            this.selectMinWidth = target.clientWidth;
        },
        //字典
        dictionary(){
            let sex = {"type": ['stage']};
            this.$api.dictSelect(sex).then(res => {
                if(res.success == true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type == 'stage'){
                            this.phase = res.data[i].data;
                        }
                    }
                }
            });
        },
        //学科下拉框数据
        subjectSelect(){
            let params = {};
            this.$api.subjectSelect(params).then(res => {
                if (res.success == true) {
                    this.discipline = res.data;
                }
            })
        },
        //分页查询
        knowList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                status: this.status,
                pointsName:this.formInline.account,
                subjectId:this.formInline.discipline
            };
            this.$api.knowledge(params).then(res => {
                if (res.success == true) {
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        res.data[i].showBtn = false;
                    }
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    this.tableData = res.data;
                }
            })
        },
        //添加
        knoAdd(val){
            if(val == 1){
                this.dataAdd();
            }else if(val == 2){
                console.log('导入')
            }else if(val == 3){
                this.patState = {
                    status:0,
                    text:'确定启用所选项'
                };
                this.batState();
            }else if(val == 4){
                this.patState = {
                    status:1,
                    text:'确定停用所选项'
                };
                this.batState();
            }
        },
        //批量停启用
        batState(){
            let _this = this;
            let userIds = [];
            let i = 0;
            for (i = 0; i < _this.multipleSelection.length; i++) {
                userIds.push(_this.multipleSelection[i].id)
            }
            let params = {
                "status": _this.patState.status,
                "pointIds": userIds
            };
            if(userIds.length == 0){
                _this.$myLayer.errorLayer('至少选择一条数据')
            }else {
                _this.$myLayer.confirmLayer(_this.patState.text,function () {
                    _this.$api.knowledgeState(params).then(res => {
                        if (res.success == true) {
                            _this.$myLayer.successLayer(res.msg)
                            _this.knowList();
                        } else {
                            _this.$myLayer.errorLayer(res.msg)
                        }
                    })
                })

            }
        },
        //单个停用
        disable(row,val){
            let _this = this;
            if(val == 1){
                _this.sinState = {
                    status:1,
                    text:'确定停用该类型'
                };

            }else {
                _this.sinState = {
                    status:0,
                    text:'确定起用该类型'
                };
            }
            let params = {
                id : row.id,
                status : _this.sinState.status
            };
            _this.$myLayer.confirmLayer(_this.sinState.text,function () {
                _this.$api.knowSinState(params).then(res => {
                    if (res.success == true) {
                        _this.$myLayer.successLayer(res.msg)
                        _this.knowList();
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            })
        },
        //添加
        dataAdd(){
            let _this = this;
            _this.$refs['honForm'].resetFields();
            this.$myLayer.formLayer("添加", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs['honForm'].validate((valid) => {
                    if (valid) {
                        let ediData = {
                            pointsName:_this.honForm.name,
                            periodId:_this.honForm.period,
                            subjectId:_this.honForm.subjects,
                            notes:_this.honForm.note,
                        };
                        _this.$api.knowledgeAdd(ediData).then(res => {
                            if (res.success == true) {
                                _this.knowList();
                                _this.$myLayer.successLayer(res.msg)
                            } else {
                                _this.$myLayer.errorLayer(res.msg)
                            }
                        })
                    } else {
                        return false;
                    }
                });
            })
        },
        //编辑
        konEditor(row){
            console.log(row)
            let _this = this;
            _this.honForm.name = row.pointsName;
            _this.honForm.period = row.periodId;
            _this.honForm.subjects = row.subjectId;
            _this.honForm.note = row.notes;
            this.$myLayer.formLayer("编辑", $('.stu-yeaer-modal-add'), ['422px'], function () {
                _this.$refs['honForm'].validate((valid) => {
                    if (valid) {
                        let ediData = {
                            id:row.id,
                            pointsName:_this.honForm.name,
                            periodId:_this.honForm.period,
                            subjectId:_this.honForm.subjects,
                            notes:_this.honForm.note,
                        };
                        _this.$api.knowEdi(ediData).then(res => {
                            if (res.success == true) {
                                _this.knowList();
                                _this.$myLayer.successLayer(res.msg)
                            } else {
                                _this.$myLayer.errorLayer(res.msg)
                            }
                        })
                    } else {
                        return false;
                    }
                });
            })

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
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        /* 鼠标移入移除 */
        handleMouseEnter(row){
            row.showBtn = true
        },
        handleMouseLeave(row){
            row.showBtn = false
        },
    }
}
</script>
<style>
    .el-select-dropdown,.el-picker-panel{
        z-index: 999999999!important;
        width: auto;
    }
</style>

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
    .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
        display: none;
    }
    .modalAdd {
        padding: 0px 32px;
        margin: 24px 0px;
    }

</style>
