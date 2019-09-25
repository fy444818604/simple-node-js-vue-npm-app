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
                    <ul class="information">
                        <li>
                            <div>名称：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>简称：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>上级单位：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>类型：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>阶段：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>区域：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>学校账号：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>登录密码：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>会控密码：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>学区：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>排序：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>状态：</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>地址：</div>
                            <div>2</div>
                        </li>
                    </ul>
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
            }
        }
    }
</script>

<style scoped>
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
    /*基本信息*/
    .information{
        line-height: 45px;
    }
    .information>li{
       display: flex;

    }
    .information>li>div:nth-child(1){
        width: 71px;
        text-align: right;
        margin-right: 25px;
    }
</style>
