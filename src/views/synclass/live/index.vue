<!--同步课直播-->
<template>
  <div class="live">
    <div class="title">同步课直播</div>
    <div class="container">
      <div class="living">
        <div class="title">正在直播 4</div>
        <div class="living-box">

          <div v-for="i in 4" :key="i" class="box-item-wrap">
            <div class="box-item">
              <div class="bg"></div>
              <div class="info">
                <div class="title">
                  <span>柳树醒了</span>
                  <span>415</span>
                </div>
                <div class="author">
                  <span>赵广杰</span>
                  <span>成都第X中学</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="notice">
        <div class="title">直播预告  4</div>
        <div class="notice-box">
          <div v-for="i in 4" :key="i" class="item-wrap">
            <div class="item">
              <div class="title">平面与平面的关系</div>
              <div class="time">2019/09/24  08:00</div>
              <div class="info">
                <div>袁枚也  成都第X中学</div>
                <div>12 小时</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },

  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.live {padding: 32px;padding-left: 22px}
.live > .title {padding-left: 10px;color: #55595C;font-weight: bold;line-height: 1}
.container {margin-top: 20px;}
.container {

}

.container .living {
  & > .title {margin-bottom: 10px;padding-left: 10px;}
  .living-box {
    display: flex;
    flex-wrap: wrap;
  }
  .living-box .box-item-wrap {
    width: 25%;
    padding: 0 10px;
   
  }
  .box-item-wrap .box-item {
    border-radius: 6px;overflow: hidden;
  }
  .box-item-wrap .bg {
    height: 0;
    padding-bottom: 70%;
    background: url('./../../../assets/image/city-1.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .box-item-wrap .info {background: #fff;padding: 10px;}
  .info > .title {display: flex;justify-content: space-between;}
  .info > .author {margin-top: 10px;}
  .info > .author > span {color: #909399;margin-right: 10px;}
}


.container .notice {
  margin-top: 30px;
  & > .title {margin-bottom: 10px;padding-left: 10px;}
  .notice-box {
    display: flex;
    flex-wrap: wrap;
  }
  .notice-box .item-wrap {
    width: 25%;
    padding: 0 10px;
    .item {
      border-radius: 6px;
      overflow: hidden;
      background: rgba(76, 133, 255, 0.8);
      height: 228px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        text-align: center;
        margin-top: 15%;
        color: #fff;
        font-size: 16px;
      }
      .time {
        color: #fff;
        background: rgba(0, 0, 0, 0.1);
        width: 160px;
        margin: 0 auto;
        border-radius: 15px;
        text-align: center;
        height: 30px;
        line-height: 30px;
      }
      .info {
        display: flex;justify-content: space-between;
        div {color: #fff}
      }
    }
  }
}

</style>