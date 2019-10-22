<!--直播预告-->
<template>
  <div class="living">
    <!-- 直播预告 -->
    <div class="live-ing">
      <div class="title">直播预告</div>
      <div class="live-wrap">
        <liveBroad></liveBroad>
        <liveBroad></liveBroad>
        <liveBroad></liveBroad>
        <liveBroad></liveBroad>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    liveBroad:()=>import("@/components/live-broad")
  },
}
</script>

<style lang="scss" scoped>
.living {padding: 32px;min-height: 100%;}
.live-ing >.title {color: #606266;line-height: 1;padding-bottom: 20px}
.live-ing .live-wrap {margin-left: -15px;margin-right: -15px;display: flex;flex-wrap: wrap;}
.live-ing .live-wrap > div {width: 25%;margin-bottom: 20px;}
</style>