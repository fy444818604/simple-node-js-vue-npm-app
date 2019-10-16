<!-- 作息时间详情 -->
<template>
    <div class="page-template">
        <!--title-->
        <div><span class="cha-title" style="margin-right: 5px">作息时间</span>><span style="margin-left: 5px">{{titleName}}</span></div>
        <div class="detail-tab-container" @click.stop>
            <div class="btnGroup" v-show="isBtnListShow">
                <btn-list v-show="!edit" @btn-click="btnClick(item)" v-for="(item,index) in btnGroup" :key="'btnGroup'+index" :model="item" ></btn-list>
                <btn-list v-show="edit" @btn-click="baoClick()" v-for="(item,index) in saveBtnGroup" :key="'saveBtnGroup'+index" :model="item" ></btn-list>
            </div>
            <!--选项卡-->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <div class="basic-form">
                        <el-form ref="polForm" :model="polForm" label-width="88px" :rules="formRules">
                            <el-form-item label="机构" prop="orgId" label-width="110px">
                                <span v-show="!edit">{{polForm.orgName}}</span>
                                <org-select v-show="edit" :rootId="rootId" :initText="orgSelectText" :refreshText="refreshText" @node-select="handleOrgSelect"></org-select>
                            </el-form-item>
                            <el-form-item label="作息名称" prop="name" label-width="110px">
                                <span v-show="!edit">{{polForm.name}}</span>
                                <el-input v-show="edit" v-model="polForm.name" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="每天起始时间" prop="dayStartTime" label-width="110px">
                                <span v-show="!edit">{{polForm.dayStartTime}}</span>
                                <el-time-picker v-show="edit"
                                        style="width: 100%"
                                        v-model="polForm.dayStartTime"
                                        format="HH:mm"
                                        value-format="HH:mm:00"
                                        placeholder="选择时间">
                                </el-time-picker>
                            </el-form-item>
                            <el-form-item label="每年开始日期" prop="yearStartDate" label-width="110px">
                                <span v-show="!edit">{{polForm.yearStartDate}}</span>
                                <el-date-picker v-show="edit"
                                        style="width: 100%"
                                        v-model="polForm.yearStartDate"
                                        type="date"
                                        format="MM-dd"
                                        value-format="MM-dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="每年结束日期" prop="yearEndDate" label-width="110px">
                                <span v-show="!edit">{{polForm.yearEndDate}}</span>
                                <el-date-picker v-show="edit"
                                        style="width: 100%"
                                        v-model="polForm.yearEndDate"
                                        type="date"
                                        format="MM-dd"
                                        value-format="MM-dd"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="应用校区" prop="campusId" label-width="110px">
                                <span v-show="!edit">{{polForm.campusesNames}}</span>
                                <el-select v-show="edit" v-model="polForm.campusId" multiple placeholder="请选择" style="width: 100%">
                                    <el-option
                                            v-for="item in campuses"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="应用阶段" prop="stageCode" label-width="110px">
                                <span v-show="!edit">{{polForm.stageTexts}}</span>
                                <el-checkbox-group v-show="edit" v-model="polForm.stageCode">
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
                </el-tab-pane>
                <el-tab-pane label="时间设置" name="second">
                    <div class="temSet">
                        <div class="temSet-left">
                            <ul class="temSet-left-top">
                                <li @click="temSetAdd"><i class="iconfont icon-add"></i></li>
                                <li @click="temSetDell"><i class="iconfont icon-del"></i></li>
                                <li><i class="iconfont icon-arrow"></i></li>
                                <li class="down"><i class="iconfont icon-arrow"></i></li>
                            </ul>
                            <ul class="temSet-left-bnt">
                                <li v-for="(item,index) in addData" :class="{ switchT:index === control }" :key="'temSet'+index" @click="period(item,index)">
                                    <div>{{ index+1 }}.</div>
                                    <div>{{ item.name }}</div>
                                    <div>{{ item.tie }}</div>
                                </li>
                            </ul>

                        </div>
                        <div class="temSet-rnt">
                            <div class="temSet-rnt-cont">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="名称" prop="name">
                                        <el-input v-model="ruleForm.name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="时长" prop="timeLength">
                                        <el-input v-model="ruleForm.timeLength"></el-input>
                                    </el-form-item>
                                    <el-form-item label="时间">
                                        <el-input
                                                placeholder="请输入内容"
                                                v-model="ruleForm.time"
                                                :disabled="true">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="类型" prop="typeId">
                                        <el-select style="width: 100%" v-model="ruleForm.typeId" placeholder="请选择类型">
                                            <el-option
                                                    v-for="item in workRestType"
                                                    :key="item.code"
                                                    :label="item.text"
                                                    :value="item.code">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="顺序" prop="orderIndex">
                                        <el-input
                                                placeholder="请输入内容"
                                                v-model="ruleForm.order"
                                                :disabled="true">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="备注">
                                        <el-input type="textarea" v-model="ruleForm.description"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitForm()">保存</el-button>
                                        <el-button @click="resetForm()">重置</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
import orgSelect from "../../../components/org-select"
import {isOrg} from "../../../assets/javascript/orgType.js"
import btnList from '../../../components/btn-list'
export default {
    data() {
        return {
            isBtnListShow: true,
            titleName: '',
            activeName: 'first',
            //基本信息的表单
            polForm: {
                orgId:'',
                orgName: '',
                name:'',
                dayStartTime:'',
                yearStartDate: '',
                yearEndDate: '',
                campusId:[],
                campusNames: '',
                stageCode:[],
                stageTexts: ''
            },
            formRules:{
                orgId:[{required: true, message: '机构不能为空', trigger: 'change'}],
                name:[{required: true, message: '作息名称不能为空', trigger: 'blur'}],
                dayStartTime:[{required: true, message: '每天起始时间不能为空', trigger: 'blur'}],
                yearStartDate:[{required: true, message: '每年开始日期不能为空', trigger: 'blur'}],
                yearEndDate:[{required: true, message: '每年结束日期不能为空', trigger: 'blur'}],
            },
            rootId: '0',// TODO 根机构应该过滤为当前登录用户的机构
            orgSelectText: "",
            refreshText:false,
            campuses:[],
            stages:[],
            btnGroup: [ {
                icon: 'icon-edit',
                name: '编辑',
                alias: 1
            }],
            saveBtnGroup:[ {
                icon: 'icon-save',
                name: '保存',
                alias: 1
            }],
            edit: false,
            //时间设置的表单
            workRestType: [],
            ruleForm: {
                name: '',
                duration: '',
                time: '',
                order: '',
                delivery: false,
                type: '',
            },
            addData:[
                // {
                //     name:'第一节',
                //     tie:'09-21'
                // },
                // {
                //     name:'第二节',
                //     tie:'09-22'
                // }
            ],
            custom:{
                name:'示例',
                tie:'14:30'
            },
            customIndex:'',
            control:-1,
            rules: {
                name: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                timeLength: [
                    { required: true, message: '不能为空', trigger: 'change' }
                ],
                orderIndex: [
                    {  required: true, message: '不能为空', trigger: 'change' }
                ],
                typeId: [
                    { required: true, message: '请选择作息时间类型', trigger: 'change' }
                ],
            }
        };
    },
    components:{
        'org-select':orgSelect,
        'btn-list': btnList
    },
    created() {
        this.schoolTimeId = this.$route.query.id;
        this.dictionary();
        this.querySchoolTime();
    },
    methods: {
        // 右上角按钮是否显示
        showBtnList(val) {
            this.isBtnListShow = val;
        },
        // 加载字典
        dictionary(){
            let _this = this;
            let sex = {"type": ["stage", "work_rest"]};
            this.$api.dictSelect(sex).then(res => {
                if(res.success === true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type === 'stage'){
                            _this.stages = res.data[i].data;
                        } else if(res.data[i].type === 'work_rest'){
                            _this.workRestType = res.data[i].data;
                        }
                    }
                }
            });
        },
        querySchoolTime() {
            let _this = this;
            let params = {
                id: this.schoolTimeId
            };
            _this.$api.calendarTimeById(params).then(res => {
                if (res.success === true) {
                    _this.titleName = res.data.name;
                    _this.orgSelectText = "";
                    _this.$refs["polForm"].resetFields();
                    let _stageCodes = [];
                    let _stageTexts = '';
                    if (res.data.stages && res.data.stages.length > 0) {
                        res.data.stages.forEach(function(item) {
                            _stageCodes.push(item.stageCode);
                            _stageTexts = _stageTexts + '、' + item.stageText;
                        });
                        _stageTexts = _stageTexts.substring(1, _stageTexts.length);
                    }
                    let _campuses = [];
                    let _campusesNames = '';
                    if (res.data.campuses && res.data.campuses.length > 0) {
                        res.data.campuses.forEach(function(item) {
                            _campuses.push(item.campusId);
                            _campusesNames = _campusesNames + '、' + item.campusName;
                        });
                        _campusesNames = _campusesNames.substring(1, _campusesNames.length);
                    }
                    _this.polForm = {
                        orgId:res.data.orgId,
                        name:res.data.name,
                        dayStartTime:res.data.dayStartTime,
                        yearStartDate: res.data.yearStartDate,
                        yearEndDate: res.data.yearEndDate,
                        stageCode: _stageCodes,
                        campusId: _campuses,
                        orgName: res.data.orgName,
                        stageTexts: _stageTexts,
                        campusesNames: _campusesNames
                    };
                    _this.queryCampus(false);
                    _this.orgSelectText = res.data.orgName;
                    _this.refreshText = !_this.refreshText;

                } else {
                    _this.$myLayer.errorLayer(res.msg)
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
        // 点击节点事件
        handleOrgSelect(value, callback){
            if(isOrg(value.unitAttr)) {
                this.polForm.orgId = value.id;
                this.queryCampus(true);
                callback(true);
            } else {
                this.$myLayer.errorLayer("请选择机构");
            }
        },
        btnClick(val) {
            if(val.alias  === 1){
                this.edit = true;
            }
        },
        baoClick(){
            let _this = this;
            _this.$refs["polForm"].validate((valid) => {
                if (valid) {
                    let params = {
                        id: _this.schoolTimeId,
                        orgId: _this.polForm.orgId,
                        name: _this.polForm.name,
                        dayStartTime: _this.polForm.dayStartTime,
                        yearStartDate: _this.polForm.yearStartDate,
                        yearEndDate: _this.polForm.yearEndDate,
                        campusId: _this.polForm.campusId,
                        stageCode: _this.polForm.stageCode
                    };
                    _this.$api.calendarTimeEdit(params).then(res => {
                        if (res.success === true) {
                            _this.querySchoolTime();
                            _this.edit = false;
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
        },
        // 切换tab
        handleClick(tab) {
            if (tab.name === "first") {
                this.showBtnList(true);
            } else {
                this.showBtnList(false);
            }
        },
        //提交
        submitForm() {
            let _this = this;
            _this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    let params = {
                        description: _this.ruleForm.description,
                        name: _this.ruleForm.name,
                        orderIndex: _this.ruleForm.orderIndex,
                        timeLength: _this.ruleForm.timeLength,
                        typeId: _this.ruleForm.typeId,
                        workRestId: _this.schoolTimeId
                    };
                    _this.$api.calendarTimeSetAdd(params).then(res => {
                        if (res.success === true) {
                            // _this.calendarTimeList();
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
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //左边li
        period(item,index){
            this.control = index;
        },
        temSetAdd(){
            this.addData.push(this.custom);
        },
        temSetDell(){
            if(this.control < 0){
                console.log('请选择你想要删除啊的对象')
            }else {
                this.addData.splice(this.control,1);
            }
        }
    }
};
</script>

<style scoped lang="scss">
    .detail-tab-container {
        position: relative;
    }
    .btnGroup {
        position: absolute;
        right: 30px;
        top: 10px;
        z-index: 9999;
    }
    .el-checkbox {
        margin-right: 30px!important;
        margin-left: 0px!important;
    }
    .page-template{
        padding: 18px 24px;
    }
    .page-template>div:nth-child(1){
        margin-bottom: 15px;
    }
    /*基本信息*/
    .basic-form{
        width: 379px;
        /*display: none;*/
    }
    .basic-form-bnt{
        li{
            height: 50px;
            line-height: 50px;
            display: flex;
            div:nth-child(1){
                width: 97px;
                margin-right: 25px;
                text-align: right;
            }
        }
    }
    .addButton{
        position: absolute;
        top: 57px;
        right: 39px;
        width: 30px;
        z-index: 9999;
    }
    /*时间设置*/
    .temSet{
        display: flex;

    }
    .temSet-left{
       width: 258px;
        .temSet-left-top{
            display: flex;
            li{
                width: 40px;
                height: 36px;
                border: 1px solid #e5e7ef;
                text-align: center;
                line-height: 32px;
                cursor: pointer;
                margin-right: 10px;

            }
            li:hover{
                border-color: #4A80F6;
                .iconfont:before{
                    color: #4A80F6;
                }
            }
            .down{
                transform:rotate(180deg);
                -ms-transform:rotate(180deg); /* Internet Explorer */
                -moz-transform:rotate(180deg); /* Firefox */
                -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
                -o-transform:rotate(180deg); /* Opera */
            }
        }
        .temSet-left-bnt{
            margin-top: 15px;
            li{
                width: 202px;
                height: 44px;
                line-height: 44px;
                background: #fafafa;
                border-left: 1px solid #e5e7ef;
                border-right: 1px solid #e5e7ef;
                border-bottom: 1px solid #e5e7ef;
                display: flex;
                padding: 0 15px;
                div:nth-child(1){
                    width: 28px;
                }
                div:nth-child(2){
                    width: 97px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                div:nth-child(3){
                    display: inline-block;
                    vertical-align: middle;
                }
                &:hover{
                    cursor: pointer;
                }
            }
            li:nth-child(1){
                border-top: 1px solid #e5e7ef;
            }
            .switchT:nth-child(1){
                border-top: 1px solid #4A80F6;
            }
            .switchT{
                border: 1px solid #4A80F6;
                div{
                    color: #4A80F6;
                }
            }

        }
    }
    .temSet-rnt{
        .temSet-rnt-cont{
            padding: 20px 0px;
            padding-left: 30px;
            border-left: 1px solid #e5e7ef;
            width: 409px;
        }
    }
</style>
