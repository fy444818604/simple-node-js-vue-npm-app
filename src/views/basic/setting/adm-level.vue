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
    </div>
</template>

<script>
    export default {
        name: "adm-level",
        data(){
            return{
                pageTile:'行政级别设置'
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
</style>
