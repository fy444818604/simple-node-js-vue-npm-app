<!--页面标题-->
<template>
    <el-row class="system-title">
        <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ list }}</div></el-col>
    </el-row>
</template>

<script>
    export default {
        name: "page-title",
        props: ['list'],
        data(){
            return{

            }
        },
        created() {

        },
    }
</script>

<style scoped>
    /*标题*/
    .system-title{
        border-bottom: 1px solid #E5E7EF;
        height: 32px;
    }
</style>
