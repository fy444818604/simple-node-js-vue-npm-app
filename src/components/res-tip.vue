<!-- 资源平台首页tips -->
<template>
  <div class="tips">
    <div class="t-content p-center">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:['bg']
}
</script>
<style lang="scss" scoped>
.tips {
  position: relative;
  height: 0;
  max-height: 96px;
  min-height: 66px;
  border-radius: 10px;
  flex-shrink: 0;
  // width: 24%;
  // margin-left: 1%;
  margin: 0 1%;
  padding-bottom: 8%;
  .t-content {
    text-align: center;
  }
}
</style>