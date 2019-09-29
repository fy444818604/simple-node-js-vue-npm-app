<!--组织设置-->
<template>
    <div class="org-set">
        <div class="org-set-left">
            <tree :treeData="treeData"></tree>
        </div>
        <div class="org-set-rnt">
            <div class="org-set-rnt-title"><span class="cha-title">{{ title }}</span>><span>  {{ viceTitel }}</span></div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="简称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="上级单位" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类型" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="阶段" prop="region">
                            <el-select
                                    v-model="value2"
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
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
                <btnList :model="modelAdd" @btn-click="Add"></btnList>
                <btnList :model="modelEditor" @btn-click="Editor"></btnList>
                <btnList :model="modelDisable" @btn-click="Disable"></btnList>
            </div>
        </div>
    </div>
</template>

<script>
import tree from '../../../components/tree'
import btnList from  '../../../components/btn-list'
import table from '../../../components/table'
export default {
    name: "org-set",
    data(){
        return{
            title:'机构设置',
            viceTitel:'详情',
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
            treeData: [{
                label: '中国',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
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
                region: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],

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
            value2: []
        }
    },
    components: {
        'tree':tree,
        'btnList':btnList,
        'org-table':table
    },
    methods: {
        //选项卡
        handleClick(tab) {
            if(tab.label != '基本信息'){
                this.tableShow = false
            }else {
                this.tableShow = true
            }
        },
        //添加
        Add(){
            console.log(1)
        },
        //编辑
        Editor(){
            console.log(2)
        },
        //禁用
        Disable(){
            console.log(3)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
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
    .el-input,.el-select {
        width: 280px;
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
