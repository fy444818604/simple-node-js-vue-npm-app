<!--同步课堂头部-->
<template>
  <div class="sync-head">
    <div class="logo">
      <img src="./../assets/image/sync-logo.png" alt="">
      <h3>直播中心</h3>
    </div>
    <div class="main">
      <i class="iconfont icon-fold"></i>
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.sync-head {
  height: 72px;
  background: rgba(255,255,255,1);
  display: flex;
}
.logo {
  width: 200px;
  height: 100%;
  img {width: 24px;}
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: #4C84FF;
    font-size: 20px;
    margin-left: 6px;
  }
}
.main {
  height: 100%;
  flex:1;
  padding: 0 42px 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 20px;
    cursor: pointer;
  }
  img {
    width: 26px;
    border-radius: 50%;
  }
}
</style>