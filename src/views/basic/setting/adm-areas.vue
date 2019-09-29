<!--行政区域-->
<template>
    <div class="adm-areas">
        <div class="adm-areas-left">
            <tree :treeData="treeData"></tree>
        </div>
        <div class="adm-areas-rnt">
            <!--标题-->
            <!--页面title-->
            <el-row class="level-title">
                <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">
                    <i class="iconfont icon-add"></i>
                    <i class="iconfont icon-edit" @click="editor()"></i>
                    <i class="iconfont icon-stop"></i>
                </div></el-col>
            </el-row>
            <!--内容详情/修改/编辑-->
            <div class="adm-areas-rnt-cont con-size">
                <!--详情-->
                <ul class="details" v-if="detailsShow">
                    <li><div>全称：</div><div>{{ nodeName }}</div></li>
                    <li><div>简称：</div><div>{{ referred }}</div></li>
                    <li><div>上级：</div><div>{{ superior }}</div></li>
                    <li><div>行政级别：</div><div>{{ level }}</div></li>
                    <li><div>显示顺序：</div><div>{{ order }}</div></li>
                    <li><div>状态：</div><div>{{ state }}</div></li>
                </ul>
                <!--编辑-->
                <ul class="editor" v-if="editorShow">
                    <li>
                        <div>全称：</div>
                        <div><el-input v-model="nodeName" placeholder="请输入内容"></el-input></div>
                    </li>
                    <li>
                        <div>简称：</div>
                        <div><el-input v-model="referred" placeholder="请输入内容"></el-input></div>
                    </li>
                    <li>
                        <div>上级：</div>
                        <div>
                            <div class="superior-top" @click="superiorClisk">{{ superior }}</div>
                            <div class="superior-bnt" v-show="admTree">
                                <adm-areas-tree @superiorData="superiorData"></adm-areas-tree>
                            </div>
                        </div>
                    </li>
                    <li><div>行政级别：</div><div>
                        <el-select v-model="level" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div></li>
                    <li><div>显示顺序：</div><div><el-input v-model="order" placeholder="请输入内容"></el-input></div></li>
                    <li>
                        <div></div>
                        <div><el-button type="primary" @click="confirmEditor()">保存</el-button></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import tree from '../../../components/tree'
    import admAreasTree from './adm-areas-tree'
    export default {
        name: "adm-areas",
        data(){
            return{
                //标题
                pageTile:'行政区域设置',
                //详情和编辑切换
                editorShow:false,
                detailsShow:true,
                //自定义树下拉
                admTree:false,
                //数据
                nodeName:'中国',
                referred:'中',
                superior:'无',
                level:'国家',
                order:1,
                state:'启用',
                options: [{
                    value: '1',
                    label: '国家'
                }, {
                    value: '2',
                    label: '省'
                }, {
                    value: '3',
                    label: '市'
                }, {
                    value: '4',
                    label: '县'
                }, {
                    value: '5',
                    label: '镇'
                }],
                treeData: [],
            }
        },
        components:{
           'tree':tree,
            'adm-areas-tree':admAreasTree
        },
        //初始化
        created(){
            this.areasTree();
        },
        methods: {
            areasTree(){
                var val = {
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
            editor() {  //编辑
                this.editorShow = !this.editorShow;
                this.detailsShow = !this.detailsShow
            },
            confirmEditor(){//编辑保存
                this.editorShow = false;
                this.detailsShow = !this.detailsShow
            },
            superiorClisk(){//展开收缩自定义下拉
                this.admTree = !this.admTree
            },
            superiorData(data){//自定义下拉选中数据
                this.superior = data;
                this.admTree = false
            }
        }
    }
</script>

<style scoped>
    .adm-areas{
        height: 100%;
        display: flex;
    }
    .adm-areas-left{
        width: 210px;
    }
    .adm-areas-rnt{
        width:calc(100% - 210px) ;
        padding: 18px 24px;
    }
    /*标题*/
    .level-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
    }
    .level-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    /*字体图标*/
    .iconfont{
        color: #4a80f6;
        font-size: 18px;
        margin-left: 8px;
    }
    /*内容*/
    .adm-areas-rnt-cont>ul>li{
        display: flex;
        height: 36px;
        line-height: 36px;
        margin-top: 30px;
    }
    .adm-areas-rnt-cont>ul>li>div:nth-child(1){
          width: 80px;
    }
    .adm-areas-rnt-cont>ul>li>div:nth-child(2){
        width: 290px;
    }
    .el-button{
        padding: 9px 12px;
    }
    .el-select{
        width: 290px;
    }
    /*自定义下拉框*/
    .superior-top{
        height: 36px;
        width: 290px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        padding: 0 15px;
    }
    .superior-bnt{
        height: 200px;
        width: 290px;
        overflow: auto;
        position: relative;
        z-index: 999;
        top: 6px;
        left: 0px;
        border: 1px solid #e4e7ed;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
