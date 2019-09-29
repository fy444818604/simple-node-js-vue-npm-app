<!-- 小标题 -->
<template>
  <div class="res-title">
    <span class="title">{{title}}</span>
    <span @click="handleShowMore" class="more">{{more}}</span>
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    more:{
      type:String,
      default:"更多>"
    }
  },
  methods:{
    handleShowMore(){
      this.$emit("on-more")
    }
  }
}
</script>
<style lang="scss" scoped>
.res-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  line-height: 1;
  .title {
    color: #333;
    font-size: 22px;
  }
  .more {
    color: #333;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>