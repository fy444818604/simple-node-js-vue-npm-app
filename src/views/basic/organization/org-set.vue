<!--组织设置-->
<template>
    <div class="org-set">
        <div class="org-set-left">
            <tree :treeData="treeData" :defaultProps="defaultProps" @list-Tree="listTree"></tree>
        </div>
        <div class="org-set-rnt">
            <div class="org-set-rnt-title"><span class="cha-title">{{ title }}</span>><span>  {{ viceTitel }}</span></div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="名称" prop="name">
                            <span v-show="!editSwitch">{{ ruleForm.name }}</span>
                            <el-input v-show="editSwitch" v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="简称" prop="Jane">
                            <span v-show="!editSwitch">{{ ruleForm.Jane }}</span>
                            <el-input v-show="editSwitch" v-model="ruleForm.Jane"></el-input>
                        </el-form-item>
                        <el-form-item label="上级单位" prop="orgId" >
                            <span v-show="!editSwitch"></span>
                            <org-select v-show="editSwitch" :rootId="rootId" :onlyOrg="onlyOrg" @node-select="handleOrgSelect"></org-select>
                        </el-form-item>
                        <el-form-item label="类型" prop="region">
                            <span  v-show="!editSwitch"></span>
                            <el-select v-show="editSwitch" v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%">
                                <el-option
                                        v-for="item in structure"
                                        @click.native="ruleFormType(item.code)"
                                        :key="item.code"
                                        :label="item.text"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <!--教育厅-->
                        <div v-if="showOne == 1 || showOne == 32"></div>
                        <!--教育局-->
                        <div v-else-if="showOne == 2 || showOne == 4">
                            <el-form-item label="区域" prop="countyArea">
                                <span></span>
                                <el-input
                                        placeholder="输入关键字进行过滤"
                                        v-model="ruleForm.countyArea">
                                    <i slot="suffix" class="el-input__icon el-icon-date" @click="regionFocus"></i>
                                </el-input>
                                <div class="regiona" v-show="regionaShow">
                                    <el-tree
                                            class="filter-tree"
                                            :load="loadNode"
                                            lazy
                                            :props="regionaProps"
                                            ref="tree">
                                    </el-tree>
                                </div>
                            </el-form-item>
                        </div>
                        <!--学校-->
                        <div v-else-if="showOne == 8">
                            <el-form-item label="阶段" prop="schoolPhase">
                                <el-select style="width: 100%"
                                           v-model="ruleForm.schoolPhase"
                                           multiple
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in phase"
                                            :key="item.code"
                                            :label="item.text"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="区域" prop="schoolArea">
                                <span></span>
                                <el-input
                                        placeholder="输入关键字进行过滤"
                                        v-model="ruleForm.schoolArea">
                                    <i slot="suffix" class="el-input__icon el-icon-date" @click="regionFocus"></i>
                                </el-input>
                                <div class="regiona" v-show="regionaShow">
                                    <el-tree
                                            class="filter-tree"
                                            :load="loadNode"
                                            lazy
                                            :props="regionaProps"
                                            ref="tree">
                                    </el-tree>
                                </div>
                            </el-form-item>
                            <el-form-item label="学生账号" prop="schoolAccount">
                                <span v-show="!editSwitch">{{ ruleForm.schoolAccount }}</span>
                                <el-input v-show="editSwitch" v-model="ruleForm.schoolAccount"></el-input>
                            </el-form-item>
                            <el-form-item label="登录密码" prop="schoolPass">
                                <span v-show="!editSwitch">{{ ruleForm.schoolPass }}</span>
                                <el-input type="password"
                                          v-show="editSwitch"
                                          show-password
                                          placeholder="请输入密码"
                                          v-model="ruleForm.schoolPass">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="会控密码" prop="schoolWill">
                                <span v-show="!editSwitch">{{ ruleForm.schoolWill }}</span>
                                <el-input v-show="editSwitch" v-model="ruleForm.schoolWill"></el-input>
                            </el-form-item>
                            <el-form-item label="学区">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="ruleForm.schoolDistrict"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in schoolData"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <!--校区-->
                        <div v-else-if="showOne == 16">
                            <el-form-item label="阶段" prop="campusPhase">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="ruleForm.campusPhase"
                                           multiple
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in phase"
                                            :key="item.code"
                                            :label="item.text"
                                            :value="item.code">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="区域" prop="campusArea">
                                <span></span>
                                <el-input
                                        placeholder="输入关键字进行过滤"
                                        v-model="ruleForm.campusArea">
                                    <i slot="suffix" class="el-input__icon el-icon-date" @click="regionFocus"></i>
                                </el-input>
                                <div class="regiona" v-show="regionaShow">
                                    <el-tree
                                            class="filter-tree"
                                            :load="loadNode"
                                            lazy
                                            :props="regionaProps"
                                            ref="tree">
                                    </el-tree>
                                </div>
                            </el-form-item>
                            <el-form-item label="学区">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="ruleForm.campusDistrict"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in schoolData"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                       <!-- <div v-else-if="showOne == 99999999999999999999">
                            自定义
                        </div>-->
                        <el-form-item label="排序">
                            <span v-show="!editSwitch">{{ ruleForm.sorting }}</span>
                            <el-input v-show="editSwitch" v-model="ruleForm.sorting"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm()">立即创建</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <!---->
                <el-tab-pane label="成员信息" name="second">
                    <!--表格-->
                    <org-table
                        :tableData="tableData"
                        :tableColumn="tableColumn">
                    </org-table>
                </el-tab-pane>
            </el-tabs>
            <!--右上角的按钮-->
            <div class="org-set-rnt-bott" v-if="tableShow">
                <btnList :model="modelAdd" @btn-click="Add(1)"></btnList>
                <btnList :model="modelEditor" @btn-click="Editor(2)"></btnList>
                <btnList :model="modelDisable" @btn-click="Disable"></btnList>
            </div>
        </div>
    </div>
</template>

<script>
import tree from '../../../components/tree'
import btnList from  '../../../components/btn-list'
import table from '../../../components/table'
import orgSelect from '../../../components/org-select'
import {isBoss,isCity,isArea,isSchool,isSchoolArea,isDepartment,} from "../../../assets/javascript/orgType.js"
import ElSlPanel from "element-ui/packages/color-picker/src/components/sv-panel";
export default {
    name: "org-set",
    data(){
        return{
            title:'机构设置',
            viceTitel:'详情',
            rootId:'0', //TODO 获取当前人的机构id
            onlyOrg:0,
            editSwitch:false,
            //选项卡
            activeName: 'first',
            tableShow:true,
            regionaShow:false,
            regionaProps: {
                label: 'name',
                children: 'children',
            },
            //左边菜单
            modelAdd:{
                name:'添加',
                icon:'icon-add'
            },
            modelEditor:{
                name:'编辑',
                icon:'icon-edit'
            },
            modelDisable:{
                name:'禁用',
                icon:'icon-stop'
            },
            treeData: [],
            defaultProps: {
                children: 'children',
                label: 'displayName'
            },
            //表格
            tableData:[
                {
                    id:1,
                    level:'1号教学楼',
                    describe:'111',
                    status:'启用',

                },
            ],
            tableColumn:[
                {
                    prop:'id',
                    label:'显示顺序'
                },
                {
                    prop:'level',
                    label:'政治面貌'
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
            ruleForm: {
                name: '',
                Jane:'',
                orgId:'',
                region: '',
                sorting:'',
                //教育局
                countyArea:'',
                //学校的数据
                schoolPhase:'',
                schoolArea:'',
                schoolAccount:'',
                schoolPass:'',
                schoolWill:'',
                eduAreaId:'',
                schoolDistrict:'',
                //校区
                campusPhase:'',
                campusArea:'',
                campusDistrict:'',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                orgId:[{ required: true, message: '请选择活动区域', trigger: 'change' }],
                //学校必填项
                schoolPhase: [{type: 'array', required: true, message: '请选择', trigger: 'change' }],
                schoolArea:[{ required: true, message: '请选择活动区域', trigger: 'change' }],
                schoolAccount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                schoolPass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                schoolWill:[{ required: true, message: '请输入密码', trigger: 'blur' }],
                //教育局
                countyArea:[{ required: true, message: '请选择阶段类型', trigger: 'change' }],
                //校区
                campusPhase:[{type: 'array', required: true, message: '请选择', trigger: 'change' }],
                campusArea:[{ required: true, message: '请选择阶段类型', trigger: 'change' }],

            },
            parameter:'',//添加编辑参数
            parameterData:'',//判断值
            options: [],
            value1: [],
            value2: [],
            /*字典数据*/
            structure:[],//类型
            structureAll:[],//类型全量
            phase:[],//阶段
            regionaData:[],//区域
            schoolData:[],//学区
            regionId:0,
            /*类型选择*/
            showOne:undefined,
            /*教育局*/
            burForm:{
                phase:'',
            },
            bntSwitch:null
        }
    },
    components: {
        ElSlPanel,
        'tree':tree,
        'btnList':btnList,
        'org-table':table,
        'org-select':orgSelect
    },
    created(){
        this.leftInstitutions();
        this.dictionary();
    },
    methods: {
        //数据字典
        dictionary(){
            let sex = {"type": ["org_type",'stage']};
            this.$api.dictSelect(sex).then(res => {
                if(res.success == true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type == 'org_type'){
                            this.structureAll = res.data[i].data;
                        }else if(res.data[i].type == 'stage'){
                            this.phase = res.data[i].data;
                        }
                    }
                }
            });
        },
        //区域
        loadNode(node, resolve){
            this.ruleForm.campusArea = node.label;
            this.ruleForm.schoolArea = node.label;
            this.ruleForm.countyArea = node.label;
            this.regionaShow = false;
            this.regionId = node.id;
            let _parentId;
            if (node.level === 0) {
                _parentId = 0;
            }
            if (node.level > 0) {
                _parentId = node.data.id;
            }
            let val = {
                level:1,
                parentId: _parentId
            };
            this.$api.areasTree(val).then(res => {
                if(res.success == true){
                    return resolve(res.data);
                }
            });
            return resolve([]);
        },
        regionFocus(){
            this.regionaShow = !this.regionaShow
        },

        //左边机构
        leftInstitutions(){
            let params = {
                level :0,
                onlyOrg :0,
                parentId :0,
            };
            this.$api.institutions(params).then(res => {
                if(res.success == true){
                    this.treeData = res.data;
                }
            })
        },
        ruleFormType(val){
            this.parameterData = val;
            if(isBoss(val)){
                this.showOne = val;
            }else if(isCity(val)){
                this.showOne = val;
            }else if(isArea(val)){
                this.showOne = val;
            }else if(isSchool(val)){
                this.showOne = val;
            }else if(isSchoolArea(val)){
                this.showOne = val;
            }else if(isDepartment(val)){
                this.showOne = val;
            }else {
                this.showOne = 99999999999999999999;
            }
        },
      /*  ruleForm: {
            name: '',
            Jane:'',
            orgId:'',
            region: '',
            sorting:'',
            //教育局
            countyArea:'',
            //学校的数据
            schoolPhase:'',
            schoolArea:'',
            schoolAccount:'',
            schoolPass:'',
            schoolWill:'',
            eduAreaId:'',
            schoolDistrict:'',
            //校区
            campusPhase:'',
            campusArea:'',
            campusDistrict:'',
        },*/
        //点击树的每一行
        listTree(val){
            let params = {
                id:val.id
            };
            this.$api.insQin(params).then(res => {
                if(res.success == true){
                    console.log(res.data)
                    this.ruleForm.name = res.data.displayName;
                    this.ruleForm.Jane = res.data.subName;
                    this.ruleForm.rootId = res.data.displayName;
                    this.structure = this.structureAll;
                    this.ruleForm.region = res.data.unitAttr+'';
                    this.ruleForm.sorting = res.data.orderIndex;
                    if(res.data.stageIds != null){
                        this.ruleForm.campusPhase = res.data.stageIds.split(',');
                        this.ruleForm.schoolPhase = res.data.stageIds.split(',');
                    }else {
                        this.ruleForm.campusPhase = '';
                        this.ruleForm.schoolPhase = '';
                    }
                    //学区赋值
                    this.ruleForm.orgId = res.data.id;
                    this.schoolSelect();
                    if(res.data.eduAreaId != null){
                        this.ruleForm.schoolDistrict = res.data.eduAreaId;
                        this.ruleForm.campusDistrict = res.data.eduAreaId;

                    }else {
                        this.ruleForm.schoolDistrict = '';
                        this.ruleForm.campusDistrict = '';
                    }
                    if(isBoss(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else if(isCity(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else if(isArea(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else if(isSchool(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else if(isSchoolArea(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else if(isDepartment(res.data.unitAttr+'')){
                        this.showOne = res.data.unitAttr+'';
                    }else {
                        this.showOne = 99999999999999999999;
                    }
                }
            });
        },
        //成员信息
        members(){

        },
        //选项卡
        handleClick(tab) {
            if(tab.label != '基本信息'){
                this.tableShow = false
            }else {
                this.tableShow = true
            }
        },
        //学区
        schoolSelect(){
            let params = {
                orgId:this.ruleForm.orgId
            };
            this.$api.schoolSelect(params).then(res => {
                if(res.success == true){
                    this.schoolData = res.data;
                }
            })
        },
        //点击机构筛选类型
        handleOrgSelect(value, callback){
            console.log(value.id)
            this.ruleForm.orgId = value.id;
            this.showOne = '';
            this.ruleForm.region = '';
            this.schoolSelect();
            let sele = [];
            if (isBoss(value.unitAttr)) {
                this.structureAll.forEach(function(item){
                    if (!isBoss(item.code)) {
                        sele.push(item);
                    }
                });
            } else if (isCity(value.unitAttr)) {
                this.structureAll.forEach(function(item){
                    if (!isBoss(item.code) && !isCity(item.code)) {
                        sele.push(item);
                    }
                });
            } else if (isSchool(value.unitAttr)) {
                this.structureAll.forEach(function(item){
                    if (!isBoss(item.code) && !isCity(item.code) && !isArea(item.code) && !isSchool(item.code)) {
                        sele.push(item);
                    }
                });
            }else if (isArea(value.unitAttr)) {
                this.structureAll.forEach(function(item){
                    if (!isBoss(item.code) && !isCity(item.code) && !isArea(item.code)) {
                        sele.push(item);
                    }
                });
            }else if (isSchoolArea(value.unitAttr)) {
                this.structureAll.forEach(function(item){
                    if (!isBoss(item.code) && !isCity(item.code) && !isArea(item.code) && !isSchool(item.code) && !isSchoolArea(item.code)) {
                        sele.push(item);
                    }
                });
            }
            this.structure = sele;
            callback(true);
        },
        //添加
        Add(val){
            let _this = this;
            _this.editSwitch = true;
            _this.ruleForm={
                name: '',
                Jane:'',
                orgId:'',
                region: '',
                sorting:'',
                //教育局
                countyArea:'',
                //学校的数据
                schoolPhase:'',
                schoolArea:'',
                schoolAccount:'',
                schoolPass:'',
                schoolWill:'',
                eduAreaId:'',
                schoolDistrict:'',
                //校区
                campusPhase:'',
                campusArea:'',
                campusDistrict:'',
            },
            _this.showOne = undefined;
            _this.$refs['ruleForm'].resetFields();
            _this.bntSwitch = val;
            _this.regionId= '';
            _this.ruleForm.orgId = ''
        },
        //编辑
        Editor(val){
            let _this = this;
            _this.bntSwitch = val;
            _this.editSwitch = true;
        },
        //禁用
        Disable(){
            console.log(3)
        },
        //保存按钮
        submitForm() {
            let _this = this;
            //固定参数整理
            let name =  _this.ruleForm.name;
            let Jane =  _this.ruleForm.Jane;
            let orgId =  _this.ruleForm.orgId;
            let region =  _this.ruleForm.region;
            let sorting =  _this.ruleForm.sorting;
            //阶段(学校)
            let  i = 0;
            let schoolPhase = '';
            for (i = 0; i <_this.ruleForm.schoolPhase.length; i++) {
                schoolPhase+=_this.ruleForm.schoolPhase[i]+','
            }
            let newStr=(schoolPhase.substring(schoolPhase.length-1)==',')?schoolPhase.substring(0,schoolPhase.length-1):schoolPhase;
            //阶段(校区)
            let campusPhase = '';
            for (i = 0; i <_this.ruleForm.campusPhase.length; i++) {
                campusPhase+=_this.ruleForm.campusPhase[i]+','
            }
            let newStrCampus=(campusPhase.substring(campusPhase.length-1)==',')?campusPhase.substring(0,campusPhase.length-1):campusPhase;
            //动态参数
            if(_this.parameterData == '1' || _this.showOne == '32'){
                let parameter = {
                    displayName:name,
                    subName:Jane,
                    parentId:orgId,
                    unitAttr:region,
                    orderIndex:sorting,
                }
                _this.parameter = parameter;
            }else if(_this.parameterData == '2' || _this.parameterData == '4'){
                let parameter = {
                    displayName:name,
                    subName:Jane,
                    parentId:orgId,
                    unitAttr:region,
                    orderIndex:sorting,
                    cityId:_this.regionId,
                    address:'成都'
                }
                _this.parameter = parameter;
            }else if(_this.parameterData == '8'){
                let parameter = {
                    displayName:name,
                    subName:Jane,
                    parentId:orgId,
                    unitAttr:region,
                    orderIndex:sorting,
                    stageIds:newStr,
                    cityId:_this.regionId,
                    userName:_this.ruleForm.schoolAccount,
                    password:_this.ruleForm.schoolPass,
                    meetingControlPwd:_this.ruleForm.schoolWill,
                    eduAreaId:_this.ruleForm.schoolDistrict,
                    address:'成都'
                }
                _this.parameter = parameter;
            }else if(_this.parameterData == '16'){
                let parameter = {
                    displayName:name,
                    subName:Jane,
                    parentId:orgId,
                    unitAttr:region,
                    orderIndex:sorting,
                    stageIds:newStrCampus,
                    cityId:_this.regionId,
                    eduAreaId:'',
                    address:''
                };
                _this.parameter = parameter;
            }else {
                let parameter = {
                    displayName:name,
                    subName:Jane,
                    parentId:orgId,
                    unitAttr:region,
                    orderIndex:sorting,
                    address:'成都'
                }
                _this.parameter = parameter;
            }
            if(_this.bntSwitch == 1){
                _this.addList();
            }else if(_this.bntSwitch == 2){
                _this.eidLisr();
            }
        },
        //添加请求
        addList(){
            console.log(1)
            let _this = this;
            _this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    this.$api.insAdd(_this.parameter).then(res => {
                        if(res.success == true){
                            _this.$myLayer.successLayer(res.msg);
                            _this.leftInstitutions();
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        //编辑请求
        eidLisr(){
            let _this = this;
            _this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    this.$api.insEdit(_this.parameter).then(res => {
                        if(res.success == true){
                            console.log(res)
                            _this.$myLayer.successLayer(res.msg);
                            _this.leftInstitutions();
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
    }
}
</script>


<style scoped>
    .el-form-item{
        width: 400px;
    }
    .org-set{
        display: flex;
        height: 100%;
    }
    .org-set-left{
        width: 210px;
    }
    .org-set-rnt{
        width:calc(100% - 210px) ;
        padding: 18px 24px;
    }
    /*右边标题*/
    .org-set-rnt-title{
        margin-bottom: 15px;
    }
    .org-set-rnt-bott{
        width: 109px;
        position: absolute;
        top: 60px;
        right: 15px;
    }
    .regiona{
        position: absolute;
        top: 45px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 9999999;
        overflow: auto;
        max-height: 130px;
    }
</style>
