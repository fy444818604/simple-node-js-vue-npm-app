<!-- 标题 -->
<template>
  <div class="header">
    <div class="left">
      <div class="title">{{title}}</div>
      <slot name="filterTree"></slot>
    </div>
    <div class="right">
      <slot name="btn"></slot>
    </div>
  </div>
</template>
<style lang="scss" scope>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  .title {
    color: #303133;
    font-weight: bold;
  }
}
  
</style>
<script>
export default {
  props:{
    title:String
  }
}
</script>