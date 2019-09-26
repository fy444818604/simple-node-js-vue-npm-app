<!-- 作息时间详情 -->
<template>
    <div class="page-template">
        <!--title-->
        <div><span class="cha-title" style="margin-right: 5px">作息时间</span>><span style="margin-left: 5px">夏季</span></div>
        <!--选项卡-->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <div class="basic-form">
                    <el-form ref="form" :model="form" :rules="validation" label-width="110px">
                        <el-form-item label="机构" prop="institutions">
                            <el-input v-model="form.institutions"></el-input>
                        </el-form-item>
                        <el-form-item label="作息名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="每天起始时间" prop="every">
                            <el-col :span="11" style="width: 100%">
                                <el-date-picker style="width: 100%" v-model="form.every" type="date"  format="MM - dd " value-format="MM-dd">
                                </el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="每年开始时间" prop="yearStart">
                            <el-col :span="11" style="width: 100%">
                                <el-date-picker style="width: 100%" v-model="form.yearStart" type="date"  format="MM - dd " value-format="MM-dd">
                                </el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="每年结束时间" prop="endStart">
                            <el-col :span="11" style="width: 100%">
                                <el-date-picker style="width: 100%" v-model="form.endStart" type="date" format="MM - dd " value-format="MM-dd">
                                </el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="应用校区" prop="campus">
                            <el-select style="width: 100%" v-model="ruleForm.campus" >
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="应用阶段" prop="phase">
                            <el-radio-group v-model="form.phase">
                                <el-radio label="小学"></el-radio>
                                <el-radio label="中学"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <!--详情-->
                <ul class="basic-form-bnt">
                   <li><div>机构</div><div>2</div></li>
                    <li><div>作息名称</div><div>2</div></li>
                    <li><div>每天起始时间</div><div>2</div></li>
                    <li><div>每年开始时间</div><div>2</div></li>
                    <li><div>每年结束时间</div><div>2</div></li>
                    <li><div>应用校区</div><div>2</div></li>
                    <li><div>应用阶段</div><div>2</div></li>
                </ul>

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
                            <li v-for="(item,index) in addData" :class="{ switchT:index == control }" @click="period(item,index)">
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
                                <el-form-item label="时长" prop="duration">
                                    <el-input v-model="ruleForm.duration"></el-input>
                                </el-form-item>
                                <el-form-item label="时间">
                                    <el-input
                                            placeholder="请输入内容"
                                            v-model="ruleForm.time"
                                            :disabled="true">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="类型" prop="type">
                                    <el-select style="width: 100%" v-model="ruleForm.type" placeholder="请选择类型">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="顺序" prop="order">
                                    <el-input
                                            placeholder="请输入内容"
                                            v-model="ruleForm.order"
                                            :disabled="true">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="备注">
                                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <!--按钮-->
        <div class="addButton">
            111
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
                //基本信息的表单
                form: {
                    institutions: '',
                    name:'',
                    every: '',
                    yearStart: '',
                    endStart: '',
                    campus: '',
                    phase: '',
                },
                validation: {
                    institutions: [
                        { required: true, message: '不能为空', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '不能为空', trigger: 'change' }
                    ],
                    every: [
                        {  required: true, message: '请选择左侧需要修改或添加的选项', trigger: 'change' }
                    ],
                    yearStart: [
                        { required: true, message: '请选择作息时间类型', trigger: 'change' }
                    ],
                    endStart: [
                        { required: true, message: '请选择作息时间类型', trigger: 'change' }
                    ],
                    campus: [
                        { required: true, message: '请选择作息时间类型', trigger: 'change' }
                    ],
                },
                //时间设置的表单
                ruleForm: {
                    name: '',
                    duration: '',
                    time: '',
                    order: '',
                    delivery: false,
                    type: '',
                },
                addData:[
                    {
                        name:'第一节',
                        tie:'09-21'
                    },
                    {
                        name:'第二节',
                        tie:'09-22'
                    }
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
                    duration: [
                        { required: true, message: '不能为空', trigger: 'change' }
                    ],
                    order: [
                        {  required: true, message: '请选择左侧需要修改或添加的选项', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择作息时间类型', trigger: 'change' }
                    ],
                }
            };
        },
        methods: {
            //
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //提交
            onSubmit() {
                console.log('submit!');
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
    .page-template{
        padding: 18px 24px;
    }
    .page-template>div:nth-child(1){
        margin-bottom: 15px;
    }
    /*基本信息*/
    .basic-form{
        width: 379px;
        display: none;
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
