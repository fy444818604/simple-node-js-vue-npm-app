<!--直播预告-->
<template>
  <div class="live-broad">
    <div class="main">
      <div class="title">平面与平面的关系</div>
      <div class="time">2019/09/24  08:00</div>
      <div class="info">
        <div class="auth">袁枚也  成都第X中学</div>
        <div class="day"><i class="iconfont icon-time"></i><span>12</span>小时</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.live-broad {
  padding: 0 15px;
}
.main {
  background: rgba(76, 132, 255,.8);
  border-radius: 6px;
  padding: 56px 12px 16px;
}
.main .title {text-align: center;color: #fff;line-height: 1;font-weight: bold;font-size: 16px}
.main .time {
  width: 160px;height: 30px;
  margin: 48px auto 50px;border-radius: 15px;text-align: center;line-height: 30px;
  background: rgba(0, 0, 0, .12);color: #fff;
}
.main .info {
  display: flex;justify-content: space-between;
  color: #fff;
  .auth {line-height: 1;color: inherit}
  .day {line-height: 1;color: inherit}
  .day span {color: #FFD200}
}
</style>