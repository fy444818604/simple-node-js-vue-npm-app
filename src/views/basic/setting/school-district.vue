<!--学区管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="school-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i class="iconfont icon-add"></i></div></el-col>
        </el-row>
        <!--表单-->
        <!--表格-->
        <div>
            <school-table :tableData="tableData" :tableColumn="tableColumn" @on-stop="schStop" @on-edit="schEdit">
            </school-table>
        </div>
    </div>
</template>

<script>
    import table from '../../../components/table'
    export default {
        name: "schoolDistrict",
        data(){
            return{
                pageTile:'学区管理',
                tableData:[
                    {
                        id:1,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',

                    },
                    {
                        id:2,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',

                    },
                    {
                        id:3,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',

                    },
                    {
                        id:4,
                        school:'1号教学楼',
                        structure:'武侯区教育局',
                        describe:'学区1',
                        status:'启用',
                    }
                ],
                tableColumn:[
                    {
                        prop:'id',
                        label:'显示顺序'
                    },
                    {
                        prop:'school',
                        label:'学区名称'
                    },
                    {
                        prop:'structure',
                        label:'组织结构'
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
        components:{
            'school-table':table
        },
        method:{
            //表格操作
            schStop(row){
                console.log(row)
            },
            schEdit(row){
                console.log(row)
            }

        }
    }
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .school-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
    }
    .school-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
</style>
