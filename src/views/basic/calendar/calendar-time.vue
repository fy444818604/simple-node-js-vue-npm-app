<!--时间设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="pol-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">
                <span>{{ pageTile }}</span>
                <span style="margin-left: 22px; font-weight: normal;">
                    <org-menu :rootId="rootId" @node-select="orgSelect"></org-menu>
                </span>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="polAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" class="base-table">
            <el-table-column type="index" label="序号" width="120">
            </el-table-column>
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <span class="main-color" style="cursor: pointer;" @click="polEdit(scope.row)">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="dayStartTime" label="每天起始时间">
            </el-table-column>
            <el-table-column prop="yearStartDate" label="每年开始日期">
            </el-table-column>
            <el-table-column prop="yearEndDate" label="每年结束日期">
            </el-table-column>
            <el-table-column prop="orgText" label="机构" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="statusText" label="状态">
            </el-table-column>
            <el-table-column prop="id" label="操作" width="60">
                <template slot-scope="scope">
                    <div class="tableColumn-control">
                        <i v-if="!scope.row.showBtn" @mouseenter="handleMouseEnter(scope.row)" class="iconfont icon-more"></i>
                        <div v-else @mouseleave="handleMouseLeave(scope.row)">
                            <span @click="polStop(scope.row)">
                                <a v-if="scope.row.status == 0">停用</a>
                                <a v-else>启用</a>
                            </span>
                            <span @click="polEdit(scope.row)">编辑</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <!--分页/启用/停用-->
        <el-row class="pol-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <pol-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></pol-paging>
            </div></el-col>
        </el-row>
        <!-- 弹窗 -->
        <div class="pol-modal-add">
            <div class="modalAdd">
                <el-form ref="polForm" :model="polForm" label-width="88px" :rules="formRules">
                    <el-form-item label="机构" prop="orgId" label-width="110px">
                        <org-select :rootId="rootId" :initText="orgSelectText" :refreshText="refreshText" @node-select="handleOrgSelect"></org-select>
                    </el-form-item>
                    <el-form-item label="作息名称" prop="name" label-width="110px">
                        <el-input v-model="polForm.name" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="每天起始时间" prop="dayStartTime" label-width="110px">
                        <el-time-picker
                                style="width: 100%"
                                v-model="polForm.dayStartTime"
                                format="HH:mm"
                                value-format="HH:mm:00"
                                placeholder="选择时间">
                        </el-time-picker>
                    </el-form-item>
                    <el-form-item label="每年开始日期" prop="yearStartDate" label-width="110px">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.yearStartDate"
                                type="date"
                                format="MM-dd"
                                value-format="MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="每年结束日期" prop="yearEndDate" label-width="110px">
                        <el-date-picker
                                style="width: 100%"
                                v-model="polForm.yearEndDate"
                                type="date"
                                format="MM-dd"
                                value-format="MM-dd"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="应用校区" prop="campusId" label-width="110px">
                        <el-select v-model="polForm.campusId" multiple @focus="setSelectMinWidth" placeholder="请选择" style="width: 100%">
                            <el-option :style="{'min-width': selectMinWidth + 2 + 'px'}"
                                       v-for="item in campuses"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="应用阶段" prop="stageCode" label-width="110px">
                        <el-checkbox-group v-model="polForm.stageCode">
                            <el-checkbox
                                    v-for="item in stages"
                                    :label="item.code"
                                    :key="item.code">
                                {{item.text}}
                            </el-checkbox>
                        </el-checkbox-group>
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
import orgMenu from "../../../components/org-menu"
import orgSelect from "../../../components/org-select"
import {isOrg} from "../../../assets/javascript/orgType.js"
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
            tableData: [],
            //分页
            pageSize:10,//显示多少页
            pageCurrent:1,//当前页
            pageTotal:0,//总条数
            status: 0,
            // ****** 弹框 start *****
            orgSelectText: "",
            refreshText:false,
            polForm:{
                orgId:'',
                name:'',
                dayStartTime:'',
                yearStartDate: '',
                yearEndDate: '',
                campusId:[],
                stageCode:[]
            },
            formRules:{
                orgId:[{required: true, message: '机构不能为空', trigger: 'change'}],
                name:[{required: true, message: '作息名称不能为空', trigger: 'blur'}],
                dayStartTime:[{required: true, message: '每天起始时间不能为空', trigger: 'blur'}],
                yearStartDate:[{required: true, message: '每年开始日期不能为空', trigger: 'blur'}],
                yearEndDate:[{required: true, message: '每年结束日期不能为空', trigger: 'blur'}],
            },
            // 弹窗的下拉框宽度
            selectMinWidth:0,
            campuses:[],
            initCampuses:[],
            stages:[],
            // ****** 弹框 end *****

            // 当前机构id
            orgId: '',

            rootId: '0',// TODO 根机构应该过滤为当前登录用户的机构
        }
    },
    components:{
        'org-menu':orgMenu,
        'bnt-list':bntList,
        'stateSwitch':stateSwitch,
        'pol-paging':paging,
        'org-select':orgSelect,
    },
    created(){
        this.dictionary();
    },
    methods: {
        // 加载字典
        dictionary(){
            let _this = this;
            let sex = {"type": ["stage"]};
            this.$api.dictSelect(sex).then(res => {
                if(res.success === true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type === 'stage'){
                            _this.stages = res.data[i].data;
                        }
                    }
                }
            });
        },
        // 查询校区
        queryCampus(isClear){
            let _this = this;
            if (_this.polForm.orgId === '') {
                return;
            }
            let params = {"schoolOrgId": _this.polForm.orgId};
            this.$api.campusBySchool(params).then(res => {
                if(res.success === true){
                    let _campuses = [];
                    res.data.forEach(function(val) {
                        _campuses.push({
                            id: val.id,
                            name: val.displayName
                        })
                    });
                    this.campuses = _campuses;
                    if (isClear) {
                        this.polForm.campusId = [];
                    }
                }
            });
        },
        calendarTimeList() {
            if (this.orgId === '') {
                return;
            }
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                orgId: this.orgId,
                status: this.status
            };
            this.$api.calendarTimePage(params).then(res => {
                if (res.success == true) {
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    let array = res.data;
                    array.forEach(function(item,index) {
                        item.index = index+1;
                        let campuses = item.campuses;
                        let campusName = "";
                        campuses.forEach(function(val){
                            campusName = campusName + "、" + val.campusName;
                        });
                        if (campusName !== "") {
                            campusName = campusName.substring(1, campusName.length);
                            item.orgText = item.orgName + "/" + campusName;
                        } else {
                            item.orgText = item.orgName;
                        }
                        item.showBtn = false;
                    });
                    //赋值表格数据
                    this.tableData = array;
                } else {
                    this.$myLayer.errorLayer('失败')
                }
            })
        },
        orgSelect(val) {
            this.orgId = val.id;
            this.calendarTimeList();
        },
        // ******* 弹框中触发方法 start *******
        // 设置弹窗中下拉框的最小宽度
        setSelectMinWidth(val){
            let target = val.srcElement ? val.srcElement : val.target;
            this.selectMinWidth = target.clientWidth;
        },
        // 点击节点事件
        handleOrgSelect(value, callback){
            if(isOrg(value.unitAttr)) {
                this.polForm.orgId = value.id;
                // this.orgSelectText = value.displayName;
                this.queryCampus(true);
                callback(true);
            } else {
                this.$myLayer.errorLayer("请选择机构");
            }
        },
        // ******* 弹框中触发方法 end *******

        //添加
        polAdd(){
            let _this = this;
            _this.polForm = {
                orgId:'',
                name:'',
                dayStartTime:'',
                yearStartDate: '',
                yearEndDate: '',
                campusId:[],
                stageCode:[]
            };
            _this.orgSelectText = '';
            this.$refs["polForm"].resetFields();
            // eslint-disable-next-line no-undef
            this.$myLayer.formLayer("新建", $('.pol-modal-add'), ['472px'], function () {
                _this.$refs["polForm"].validate((valid) => {
                    if (valid) {
                        let params = {
                            orgId: _this.polForm.orgId,
                            name: _this.polForm.name,
                            dayStartTime: _this.polForm.dayStartTime,
                            yearStartDate: _this.polForm.yearStartDate,
                            yearEndDate: _this.polForm.yearEndDate,
                            campusId: _this.polForm.campusId,
                            stageCode: _this.polForm.stageCode
                        };
                        _this.$api.calendarTimeAdd(params).then(res => {
                            if (res.success === true) {
                                _this.calendarTimeList();
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

            this.$myLayer.confirmLayer("确认"+opText+"该作息时间", function () {
                let params = {
                    id:row.id,
                    status:newStatus
                }
                _this.$api.calendarTimeDis(params).then(res => {
                    if (res.success === true) {
                        _this.calendarTimeList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            });
        },
        polEdit(row){
            this.$router.push({path:'/basic/Layout/calendar-detail',query:{id:row.id}});
        },
        //状态
        stateList(state){
            this.status = state;
            this.calendarTimeList();
        },
        //分页
        SizeChange(pageSize){//显示多少页
            this.pageSize = pageSize;
            this.calendarTimeList();
        },
        CurrentChange(pageCurrent){//当前页
            this.pageCurrent = pageCurrent;
            this.calendarTimeList();
        },
        /* 鼠标移入移除 */
        handleMouseEnter(row){
            row.showBtn = true;
        },
        handleMouseLeave(row){
            row.showBtn = false;
        },
    }
}
</script>

<style lang="scss" scoped>
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
    .tableColumn-control {
        height: 50px;
        line-height: 50px;
        i {
            color: #487ff6;
            cursor: pointer;
        }
        span {
            display: inline-block;
            cursor: pointer;
            &:last-child {
                color: #487ff6;
                margin-left: 10px;
            }
        }
        div {
            text-align: center;
            background: #D0E9FF;
            position: absolute;
            z-index: 999;
            left: -40px;
            top: 0;
            width: 100px;
            &.single {
                width: 60px;
                left: 0;
                span {
                    margin-left: 0px;
                }
            }
        }
    }
</style>

<style>
    .el-select-dropdown,.el-picker-panel,.el-time-panel{
        z-index: 999999999!important;
        width: auto;
    }
    .el-checkbox {
        margin-right: 30px!important;
        margin-left: 0px!important;
    }
    .base-table.el-table td { padding: 0; }
</style>
