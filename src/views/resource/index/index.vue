<!-- 资源平台首页 -->
<template>
  <div class="resource-index">
    <!-- 轮播 -->
    <!-- <el-carousel class="base-carousel">
      <el-carousel-item>
        <div class="item">
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <!-- <resTitle title="推荐"></resTitle> -->
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
.item {
  width: 100%;
  padding-bottom: 20%;
  background: url(./../../../assets/image/logo.jpeg) no-repeat left top;
  background-size: 100% 100%;
}

</style>
