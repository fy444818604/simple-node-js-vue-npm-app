<!--组织设置-->
<template>
    <div class="org-set">
        <div class="org-set-left">
            <tree :treeData="treeData"></tree>
        </div>
        <div class="org-set-rnt">
            <div class="org-set-rnt-title"><span class="cha-title">{{ title }}</span>><span>  {{ viceTitel }}</span></div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
                <el-tab-pane label="成员信息" name="second">
                    <!--表格-->
                    <org-table
                        :tableData="tableData"
                        :tableColumn="tableColumn">
                    </org-table>
                </el-tab-pane>
            </el-tabs>
            <div class="org-set-rnt-bott">
                <btnList :model="modelAdd"></btnList>
                <btnList :model="modelEditor"></btnList>
                <btnList :model="modelDisable"></btnList>
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
            handleClick(tab, event) {
                console.log(tab, event);
            },
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
</style>
