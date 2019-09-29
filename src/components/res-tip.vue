<!-- 资源平台首页tips -->
<template>
  <div class="tips">
    <div class="t-content p-center">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tips {
  position: relative;
  padding-bottom: 8%;
  height: 0;
  max-height: 96px;
  min-height: 66px;
  border-radius: 10px;
  background: orange;
  flex-shrink: 0;
  width: 24%;
  margin-left: 1%;
  .t-content {
    text-align: center;
  }
}
</style>