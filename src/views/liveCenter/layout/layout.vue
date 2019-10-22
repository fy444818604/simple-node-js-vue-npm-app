<template>
  <div class="live-layout">
    <live-header></live-header>
    <div class="content">
      <live-nav class="nav-wrap"></live-nav>
      <el-scrollbar style="height:100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    liveHeader:()=>import("@/components/live-header"),
    liveNav:()=>import("@/components/live-nav"),
  }
}
</script>

<style lang="scss" scoped>
.live-layout {
  min-width: 1400px;
}
.content {
  display: flex;
  height: calc(100vh - 72px);
}
.content .nav-wrap {
  flex-basis: 200px;
} 
</style>
<style lang="scss">
.live-layout 
.content 
.el-scrollbar {
  flex: 1;
  background: #F1F3F8;
}
</style>