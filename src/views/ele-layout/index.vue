<template>
    <div id="ele-layout" class="page-container" @click="test">
        <div class="fy-page-title">Layout 布局</div>
        <div class="box">
            <div class="box-title">基础布局</div>
            <div class="box-title-explain">使用单一分栏创建基础的栅格布局。</div>
            <div class="box-panel">
                <el-row>
                    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
            </div>
        </div>
        <div class="box">
            <div class="box-title">混合布局</div>
            <div class="box-title-explain">通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</div>
            <div class="box-panel">
                <el-row :gutter="20">
                    <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </div>
        </div>
        <div class="box">
            <div class="box-title">分栏间隔</div>
            <div class="box-title-explain">分栏之间存在间隔。</div>
            <div class="box-panel">
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </div>
        </div>
        <div class="box">
            <div class="box-title">分栏偏移</div>
            <div class="box-title-explain">支持偏移指定的栏数。</div>
            <div class="box-panel">
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </div>
        </div>
        <div class="box">
            <div class="box-title">对齐方式</div>
            <div class="box-title-explain">通过 flex 布局来对分栏进行灵活的对齐。</div>
            <div class="box-panel">
                <el-row type="flex" class="row-bg">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="end">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </div>
        </div>
        <div class="box">
            <div class="box-title">响应式布局</div>
            <div class="box-title-explain">参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</div>
            <div class="box-panel">
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        methods:{
            test:function(){
                console.log($('#ele-layout').length)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>