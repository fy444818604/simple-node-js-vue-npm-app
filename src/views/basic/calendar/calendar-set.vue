<!--校历设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="pol-title">
            <el-col :span="12">
                <div class="grid-content bg-purple cha-title">
                    <span>{{ pageTile }}</span>
                    <span style="margin-left: 22px; font-weight: normal;">
                        <org-menu :rootId="rootId" @node-select="orgSelect"></org-menu>
                    </span>
                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list  @btn-click="calendarAdd" :model="{icon:'icon-add',name:'添加'}"></bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <pol-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="polStop"
                @on-edit="polEdit">
        </pol-table>
        <!--分页/启用/停用-->
        <el-row class="pol-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <pol-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></pol-paging>
            </div></el-col>
        </el-row>
        <!--新增弹窗-->
        <div class="pol-modal-add">
            <div class="modalAdd">
                <el-form ref="addForm" :model="polForm" label-width="88px" :rules="formRules">
                    <el-form-item label="机构" prop="orgId" >
                        <org-select :rootId="rootId" :initText="orgSelectText" :refreshText="refreshText" @node-select="handleOrgSelect"></org-select>
                    </el-form-item>
                    <el-form-item label="学年" prop="schoolYear">
                        <el-select v-model="polForm.schoolYear" @focus="setSelectMinWidth" placeholder="请选择" style="width: 100%">
                            <el-option :style="{'min-width': selectMinWidth + 2 + 'px'}"
                                    v-for="item in schoolYear"
                                    :key="item.code"
                                    :label="item.text"
                                    :value="item.code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="学期" prop="schoolTerm">
                        <el-select v-model="polForm.schoolTerm" @focus="setSelectMinWidth" placeholder="请选择" style="width: 100%">
                            <el-option :style="{'min-width': selectMinWidth + 2 + 'px'}"
                                    v-for="item in schoolTerm"
                                    :key="item.code"
                                    :label="item.text"
                                    :value="item.code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开学时间" prop="startDate">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.startDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="放假时间" prop="holidayDate">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.holidayDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <!--修改弹窗-->
        <div class="pol-modal-edit">
            <div class="modalEdit">
                <el-form ref="editForm" :model="polForm" label-width="88px" :rules="formRules">
                    <el-form-item label="机构" prop="orgId" >
                        <org-select :rootId="rootId" :initText="orgSelectText" :refreshText="refreshText" @node-select="handleOrgSelect"></org-select>
                    </el-form-item>
                    <el-form-item label="开学时间" prop="startDate">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.startDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="放假时间" prop="holidayDate">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.holidayDate"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
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
import orgMenu from "../../../components/org-menu"
import orgSelect from "../../../components/org-select"
import {isOrg} from "../../../assets/javascript/orgType.js"
/*import modal from '../../../components/modal'*/
export default {
    name: "calendar-set",
    data(){
        return{
            pageTile:'校历设置',
            //按钮
            model:{
                name:'添加',
                icon:'icon-add'
            },
            //表格
            tableData:[],
            tableColumn:[
                {
                    prop:'index',
                    label:'序号'
                },
                {
                    prop:'orgName',
                    label:'机构'
                },
                {
                    prop:'schoolYear',
                    label:'学年'
                },
                {
                    prop:'schoolTermText',
                    label:'学期'
                },
                {
                    prop:'startDate',
                    label:'开学时间'
                },
                {
                    prop:'holidayDate',
                    label:'放假时间'
                },
                {
                    prop:'statusText',
                    label:'状态'
                }
            ],
            //分页
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status: 0,
            //弹框
            /* dialog */
            dialog: {
                visible:false,
                title: '新建',
            },
            // 当前机构id
            orgId: '',

            // ******* 左上角机构下拉参数 start *******
            rootId: '0',
            // ******* 左上角机构下拉参数 end *******

            // ******* 弹出框中用到的参数 start *******
            schoolYear:[],
            schoolTerm:[],
            polForm:{
                orgId: '',
                schoolYear: '',
                schoolTerm: '',
                startDate: '',
                holidayDate: ''
            },
            formRules:{
                orgId:[{required: true, message: '机构不能为空', trigger: 'blur'}],
                schoolYear:[{required: true, message: '学年不能为空', trigger: 'blur'}],
                schoolTerm:[{required: true, message: '学期不能为空', trigger: 'blur'}],
                startDate:[{required: true, message: '开学时间不能为空', trigger: 'blur'}],
                holidayDate:[{required: true, message: '放假时间不能为空', trigger: 'blur'}],
            },
            // 机构下拉菜单的数据格式定义
            defaultProps: {
                children: 'children',
                label: 'displayName',
                isLeaf: 'isLeaf'
            },
            orgSelectText: '',
            refreshText: false,
            orgData:[],
            // 弹窗的下拉框宽度
            selectMinWidth:0
            // ******* 弹出框中用到的参数 end *******
        }
    },
    components:{
        'bnt-list':bntList,
        'pol-table':table,
        'stateSwitch':stateSwitch,
        'pol-paging':paging,
        'org-menu':orgMenu,
        'org-select':orgSelect,
        /* 'pol-modal':modal*/
    },
    watch: {
    },
    created(){
        this.dictionary();
    },
    methods: {
        // 设置弹窗中下拉框的最小宽度
        setSelectMinWidth(val){
            let target = val.srcElement ? val.srcElement : val.target;
            this.selectMinWidth = target.clientWidth;
        },
        // 加载字典
        dictionary(){
            let sex = {"type": ["school_year",'school_term']};
            this.$api.dictSelect(sex).then(res => {
                if(res.success == true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type == 'school_year'){
                            this.schoolYear = res.data[i].data;
                        }else if(res.data[i].type == 'school_term'){
                            this.schoolTerm = res.data[i].data;
                        }
                    }
                }
            });
        },
        //分页查询
        calendarList(){
            if (this.orgId === '') {
                return;
            }
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                orgId: this.orgId,
                status: this.status
            };
            this.$api.calendarPage(params).then(res => {
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

        // ******* 左上角机构下拉触发方法 start *******
        //点击机构节点事件
        orgSelect(value) {
            this.orgId = value.id;
            this.calendarList();
        },
        // ******* 左上角机构下拉触发方法 end *******
        // ******* 弹框中的机构下拉触发方法 start *******
        // 点击节点事件
        handleOrgSelect(value, callback){
            if(isOrg(value.unitAttr)) { // 可选的机构类型
                this.polForm.orgId = value.id;
                callback(true);
            } else {
                this.$myLayer.errorLayer("请选择机构");
            }
        },
        // ******* 弹框中的机构下拉触发方法 end *******

        //添加
        calendarAdd(){
            let _this = this;
            _this.polForm = {
                holidayDate: '',
                orgId: '',
                schoolTerm: '',
                schoolYear: '',
                startDate: ''
            };
            _this.orgSelectText = '';
            this.$refs["addForm"].resetFields();
            // eslint-disable-next-line no-undef
            this.$myLayer.formLayer("新建", $('.pol-modal-add'), ['422px'], function () {
                _this.$refs["addForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            holidayDate: _this.polForm.holidayDate,
                            orgId: _this.polForm.orgId,
                            schoolTerm: _this.polForm.schoolTerm,
                            schoolYear: _this.polForm.schoolYear,
                            startDate: _this.polForm.startDate
                        };
                        _this.$api.calendarAdd(params).then(res => {
                            if (res.success == true) {
                                _this.calendarList();
                                // TODO 关闭弹窗
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
        //表格
        polStop(row){
            let opText;
            let newStatus;
            if (row.status === 0) {
                opText = "停用";
                newStatus = 1;
            } else {
                opText = "启用";
                newStatus = 0;
            }
            let _this = this;

            this.$myLayer.confirmLayer("确认"+opText+"该校历", function () {
                let params = {
                    id:row.id,
                    status:newStatus
                }
                _this.$api.calendarDis(params).then(res => {
                    if (res.success === true) {
                        _this.calendarList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            });
        },
        polEdit(row){
            this.$refs["editForm"].resetFields();
            let editForm = {
                holidayDate: row.row.holidayDate,
                orgId: row.row.orgId,
                schoolTerm: row.row.schoolTerm,
                schoolYear: row.row.schoolYear,
                startDate: row.row.startDate
            };
            let _this = this;
            this.orgSelectText = row.row.orgName;
            this.refreshText = !this.refreshText;
            this.polForm = editForm;
            this.$myLayer.formLayer("修改", $('.pol-modal-edit'), ['422px'], function () {
                _this.$refs["editForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            holidayDate: _this.polForm.holidayDate,
                            orgId: _this.polForm.orgId,
                            startDate: _this.polForm.startDate,
                            id:row.row.id
                        };
                        _this.$api.calendarEdit(params).then(res => {
                            if (res.success == true) {
                                _this.calendarList();
                                // TODO 关闭弹窗
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
        //状态
        stateList(state){
            this.status = state;
            this.calendarList();
        },
        //分页
        SizeChange(pageSize){//显示多少页
            this.pageSize = pageSize;
            this.calendarList();
        },
        CurrentChange(pageCurrent){//当前页
            this.pageCurrent = pageCurrent;
            this.calendarList();
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
    .pol-modal-add,.pol-modal-edit {
        display: none;
    }
    .modalAdd,.modalEdit {
        padding: 0px 32px;
        margin: 24px 0px;
    }
    .el-div-tree{
        position: absolute;
        top:45px;
        width: 100%;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 9999999;
        overflow: auto;
        height: 130px;
    }
</style>
