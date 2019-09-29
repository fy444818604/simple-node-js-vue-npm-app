<!-- 资源平台首页 -->
<template>
	<div class="res-index">
    <!-- 轮播 -->
    <div class="swiper"></div>
    <div class="tips"></div>
    <div class="recommend"></div>
    <div class="late-res"></div>
  </div>
</template>

<script>
export default {
  components:{
    resTitle:()=>import("@/components/res-title")
  }
}
</script>

<style lang="scss" scoped="scoped">
.res-index {}
// .item {
//   width: 100%;
//   padding-bottom: 20%;
//   background: url(./../../../assets/image/logo.jpeg) no-repeat left top;
//   background-size: 100% 100%;
// }

</style>
