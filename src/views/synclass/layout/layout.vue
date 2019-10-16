<!--同步课堂layout-->
<template>
  <div class="sync-layout">
    <div class="header"></div>
    <div class="container">
      <div class="left-nav"></div>
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
.container .left-nav {flex-basis: 200px;}
.content {background: #F1F3F8;flex: 1;}
</style>

<script>
export default {
 components: {
 },
 data(){
   return {
   }
 }
}
</script>