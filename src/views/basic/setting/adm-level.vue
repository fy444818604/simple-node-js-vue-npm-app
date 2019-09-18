<!--行政级别-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="level-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i class="iconfont icon-add"></i></div></el-col>
        </el-row>
        <!--表格-->
        <div>
            表格
        </div>
        <!--分页/启用/停用-->
        <el-row class="level-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <state-switch @switchL="stateList"></state-switch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></paging>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import stateSwitch from '../../../components/state-switch'
    import paging from '../../../components/paging'
    export default {
        name: "adm-level",
        data(){
            return{
                pageTile:'行政级别设置',
                pageSize:'',//显示多少页
                pageCurrent:'',//当前页
                pageTotal:300//总条数
            }
        },
        components: {
            'state-switch': stateSwitch,
            'paging':paging
        },
        methods: {
            stateList(state){//状态开关
                alert(state)
            },
            SizeChange(pageSize){//显示多少页
                alert(pageSize)
            },
            CurrentChange(pageCurrent){//当前页
                alert(pageCurrent)
            }
        }
    }
</script>

<style scoped>
    .page-template{
        padding: 18px 24px;
    }
    .level-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
    }
    .level-title .bg-purple-light{
        text-align: right;
        padding-right: 24px;
    }
    .level-bnt{
        margin-top: 14px;
    }
    .level-bnt .bg-purple-light{
        text-align: right;
    }
    .level-bnt .bg-purple{
        margin-top: 4px;
    }
</style>
