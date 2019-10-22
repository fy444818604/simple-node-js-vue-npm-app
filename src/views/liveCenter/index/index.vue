<template>
  <div class="live-index">
    <div class="tips flex-between">
      <div v-for="(item,i) in tipList" :key="i" class="tip-item">
          <div class="icon-wrap" :style="{background:item.color}"><i :class="[item.icon,'iconfont']"></i></div>
          <div class="info-wrap">
            <div>{{item.num}}</div>
            <div>{{item.content}}</div>
          </div>
      </div>
    </div>
    <!-- 正在直播 -->
    <div class="live-ing">
      <div class="title">正在直播</div>
      <div class="live-wrap">
        <liveBox></liveBox>
        <liveBox></liveBox>
        <liveBox></liveBox>
        <liveBox></liveBox>
      </div>
    </div>
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
    liveBox:()=>import("@/components/live-box"),
    liveBroad:()=>import("@/components/live-broad")
  },
  data(){
    return {
      tipList: [
        {
          icon:'icon-video2',
          content:'累计直播',
          num:258,
          color:'#43B6F5'
        },
        {
          icon:'icon-video2',
          content:'正在直播',
          num:2,
          color:'#5F44E8'
        },
        {
          icon:'icon-video2',
          content:'直播预告',
          num:8,
          color:'#F77809'
        },
        {
          icon:'icon-video2',
          content:'观看人数',
          num:200,
          color:'#30B394'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.live-index {padding: 32px;min-height: 100%;}
.tips .tip-item {
  display: flex;align-items: center;
  border-radius: 6px;padding-left: 40px;
  height: 140px;background: #fff;
  flex-grow: 1;
  margin-right: 30px;
}
.tips .tip-item:last-child{margin-right: 0}
.icon-wrap {
  width: 68px;height: 68px;text-align: center;
  border-radius: 50%;line-height: 68px;
}
.icon-wrap i {font-size: 40px;color: #fff;}
.info-wrap > div {padding-left: 19px;}
.info-wrap div:nth-child(1) {color: #292C33;font-size: 30px}
.info-wrap div:nth-child(2) {color: #909399;}

.live-ing {margin-top: 32px;}
.live-ing >.title {color: #606266;line-height: 1;padding-bottom: 20px}
.live-ing .live-wrap {margin-left: -15px;margin-right: -15px;display: flex;flex-wrap: wrap;}
.live-ing .live-wrap > div {width: 25%;margin-bottom: 20px;}
</style>