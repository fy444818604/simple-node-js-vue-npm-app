<!--资源详情-->
<template>
  <div class="res-detail">
    <!-- 视频部分 -->
    <div class="main-video">
      <div class="main-video-content">
        <div class="main-video-content-video">
          <div class="left">
            <div class="video-wrap">
              <video 
              controls
              style="width:100%;height:100%;object-fit:contain"
              src="./../../../assets/movie.mp4">
              </video>
            </div>
            <div class="video-control">
              <div> <i class="iconfont icon-eyes"></i> 135</div>
              <div>下载</div>
              <div> <i class="iconfont icon-heart"></i> 收藏</div>
              <div>分享</div>
              <div> <i class="iconfont icon-stars"></i> 4.7</div>
            </div>
          </div>
          <div class="right">
            <div class="title">知识点4</div>
            <el-scrollbar>
              <ul>
                <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
              </ul>
            </el-scrollbar>
          </div>
        </div>
        <!-- <div class="main-video-content-info">
          <div class="title">初中数学教学大纲</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.res-detail {
  padding-top: 30px;
  .main-video{
    background: #fff;
    .main-video-content {
      width: 1200px;
      margin: 0 auto;
      &-video {
        display: flex;
        height: 650px;
        .left {
          flex: 1;
          .video-wrap {
            height: calc(100% - 65px);
            // overflow: hidden;
            video {
              outline: none;
              // height: 100%;
              // width: 100%;
            }
          }
          .video-control {
            height: 65px;
            background: #202020;
            display: flex;
            align-items: center;
            & > div {
              margin-left: 30px;
            }
          }
        }
        .right {
          
          width: 320px;
          height: 650px;
          background: #141414;
          .title {
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            border-bottom: 1px solid #323232;
            color: #c7c7c7;
          }
          ul {
            padding: 15px;
            max-height: 700px;
            li {
              border-bottom: 1px solid #323232;
              padding: 10px 0;
            }
          }
        }
      }

      &-info {
        .title {

        }
      }
    }
  }
}
</style>