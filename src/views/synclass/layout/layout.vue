<!--同步课堂layout-->
<template>
  <div class="sync-layout">
    <div class="header">
      <sync-header></sync-header>
    </div>
    <div class="container">
      <div class="left-nav">
        <sync-nav></sync-nav>
      </div>
      <div class="content">
        <el-scrollbar style="height:100%">
          <router-view></router-view>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sync-layout {height: 100vh;}
.sync-layout .header {height: 72px;}
.container {height: calc(100% - 72px);display: flex;}
.container .left-nav {width: 200px;flex-shrink: 0}
.content {background: #F1F3F8;flex: 1;}
</style>

<script>
export default {
 components: {
   syncHeader:() => import("@/components/sync-header"),
   syncNav:() => import("@/components/sync-nav")
 },
 data(){
   return {
   }
 }
}
</script>