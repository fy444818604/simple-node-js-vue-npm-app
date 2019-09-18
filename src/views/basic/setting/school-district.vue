<!--学区管理-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="school-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"><i class="iconfont icon-add"></i></div></el-col>
        </el-row>
        <query></query>
    </div>
</template>

<script>
    import query from './query'
    export default {
        name: "schoolDistrict",
        data(){
            return{
                pageTile:'学区管理'
            }
        },
        components:{
            'query':query
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
