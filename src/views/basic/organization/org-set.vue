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
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="简称" prop="Jane">
                            <el-input v-model="ruleForm.Jane"></el-input>
                        </el-form-item>
                        <el-form-item label="上级单位" prop="orgId" >
                            <org-select :rootId="rootId" :onlyOrg="onlyOrg" @node-select="handleOrgSelect"></org-select>
                        </el-form-item>
                        <el-form-item label="类型" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 100%">
                                <el-option
                                        v-for="item in structure"
                                        @click.native="ruleFormType(item.code)"
                                        :key="item.code"
                                        :label="item.text"
                                        :value="item.code">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <!--教育局-->
                    <!--    <div v-show="showOne">

                        </div>-->
                        <!--教育厅-->
                        <div v-if="showOne == 1">
                           教育厅
                        </div>
                        <!--教育-->
                        <div v-else-if="showOne == 2 || showOne == 4">
                            <el-form-item label="区域" prop="schoolArea">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.schoolArea"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div v-else-if="showOne == 8">
                            <el-form-item label="阶段" prop="schoolPhase">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.phase"
                                           multiple
                                           collapse-tags
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="区域" prop="schoolArea">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.schoolArea"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="学生账号" prop="schoolAccount">
                                <el-input v-model="ruleForm.schoolAccount"></el-input>
                            </el-form-item>
                            <el-form-item label="登录密码" prop="schoolPass">
                                <el-input v-model="ruleForm.schoolPass" v-m placeholder="请输入密码" show-password></el-input>
                            </el-form-item>
                            <el-form-item label="会控密码" prop="schoolWill">
                                <el-input v-model="ruleForm.schoolWill"></el-input>
                            </el-form-item>
                            <el-form-item label="学区">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.schoolDistrict"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div v-else-if="showOne == 16">
                            <el-form-item label="阶段" prop="schoolPhase">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.phase"
                                           multiple
                                           collapse-tags
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="区域" prop="schoolArea">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.schoolArea"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="学区">
                                <span></span>
                                <el-select style="width: 100%"
                                           v-model="burForm.schoolDistrict"
                                           placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div v-else-if="showOne == 99999999999999999999">
                            自定义
                        </div>
                        <el-form-item label="排序">
                            <el-input v-model="ruleForm.sorting"></el-input>
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
export default {
    name: "org-set",
    data(){
        return{
            title:'机构设置',
            viceTitel:'详情',
            rootId:'0', //TODO 获取当前人的机构id
            onlyOrg:0,
            //选项卡
            activeName: 'first',
            tableShow:true,
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
                //学校的数据
                schoolPhase:'',
                schoolArea:'',
                schoolAccount:'',
                schoolPass:'',
                schoolWill:'',
                schoolDistrict:'',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                orgId:[{ required: true, message: '请选择活动区域', trigger: 'change' }],
                //学校必填项
                schoolPhase:[{ required: true, message: '请选择阶段类型', trigger: 'change' }],
                schoolArea:[{ required: true, message: '请选择活动区域', trigger: 'change' }],
                schoolAccount: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                schoolPass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                schoolWill:[{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value1: [],
            value2: [],
            /*字典数据*/
            structure:[],//类型
            phase:[],//阶段
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
                            this.structure = res.data[i].data;
                            console.log(res.data)
                        }else if(res.data[i].type == 'stage'){
                            console.log(res)
                        }
                    }
                }
            });
        },
        //行政树
        areasTree(){
            let val = {
                level:1,
                parentId:0
            };
            this.$api.areasTree(val).then(res => {
                if(res.success == true){
                    console.log(res.data);
                    this.treeData = res.data;
                }else {
                    console.log('请求失败')
                }
            })
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
            console.log(val)
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
        //点击树的每一行
        listTree(val){
            console.log(val);
            // this.rootId = val.id
            console.log(this.rootId)
        },

        //选项卡
        handleClick(tab) {
            if(tab.label != '基本信息'){
                this.tableShow = false
            }else {
                this.tableShow = true
            }
        },
        handleOrgSelect(value, callback){
            this.ruleForm.orgId = value.id;
            if (isBoss(value.unitAttr)) {
            
                return;
            } else if (isArea(value.unitAttr)) {

            }
            console.log(value)
            callback(true);
        },
        //添加
        Add(val){
            let _this = this;
            _this.showOne = undefined;
            _this.$refs['ruleForm'].resetFields();
            _this.bntSwitch = val;
        },
        //编辑
        Editor(val){
            let _this = this;
            _this.bntSwitch = val;
        },
        //禁用
        Disable(){
            console.log(3)
        },
        //保存按钮
        submitForm() {
            let _this = this;
            if(_this.bntSwitch == 1){
                _this.addList();

            }else if(_this.bntSwitch == 2){
                console.log('我是编辑')
            }

        },
        //添加请求
        addList(){
            let _this = this;
            _this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    console.log(1)
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
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
</style>
