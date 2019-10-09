<!--资源详情-->
<template>
  <div class="res-detail">
    <!-- 视频部分 -->
    <div class="main-video">
      <div class="main-video-content">
        <!-- video -->
        <div class="main-video-content-video">
          <div class="left">
            <div class="video-wrap">
              <video
              controls
              style="width:100%;height:100%;object-fit:cover;outline: none"
              src="./../../../assets/movie.mp4">
              </video>
            </div>
            <div class="video-control">
              <div> <i class="iconfont icon-eyes"></i> 135</div>
              <div> <i class="iconfont icon-arrow-1"></i> 下载</div>
              <div> <i class="iconfont icon-heart"></i> 收藏</div>
              <div> <i class="iconfont icon-share"></i> 分享</div>
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
        <!-- PDF -->
        <div class="main-video-content-info">
          <div class="title"> 初中数学教学大纲与初中数学知识点总结</div>
          <div class="info">
            <div>林明皓</div>
            <div>成都树德中学</div>
            <div>2019-09-15</div>
            <div>初中  一年级上册  人教版  有理数</div>
          </div>
          <div class="desc">
            本章内容要求学生正确认识有理数的概念，在实际生活和学习数轴的基础上，理解正负数、相反数、 绝对值的意义所在。重点利用有理数的运算法则解决实际问题.体验数学发展的一个重要原因是生活实际的需要.激发学生学习数学的兴趣，教师培养学生的观察、归纳与概括的能力，使学生建立正确的数感和解决实际问题的能力。教师在讲授本章内容时，应该多创设情境，充分体现学生学习的主体性地位 
            概括的能力，使学生建立正确的数感和解决实际问题的能力
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- home work -->
    <div class="home-work">
      <div class="title">
        <div class="project">作业10</div>
        <div class="p-info">附件7</div>
        <div class="more">更多<i class="el-icon-arrow-down"></i></div>
      </div>
      <!-- home -->
      <template>
        <div class="project-content">
          <div v-for="n in 8" :key="n" class="item">
            <img src="./../../../assets/image/school.jpg" alt="">
            <div>宋冠玲</div>
            <div>成都七中（林荫校区）</div>
          </div>
        </div>
      </template>
      <!-- 附件 -->
      <template></template>
    </div>

    <!-- 评论 -->
    <div class="comments">
      <div class="comments-content">
        <div class="main">
          <div class="comments-box">
            <div class="rate"><span>资源评分:</span><el-rate v-model="value1"></el-rate></div>
            <div class="content">
              <el-input
                :rows="8"
                type="text"
                placeholder="说点什么"
                v-model="text"
                maxlength="200"
              >
              </el-input>
              <div class="comments-control">
                <span>0/200</span>
                <span class="comments-btn">发布</span>
              </div>
            </div>
          </div>
          <div class="comments-list">
            <div class="title">全部评论 <span>36</span> </div>
            <resCommendBox></resCommendBox>
          </div>
        </div>
        <div class="more-commend">
            查看更多评论
        </div>
      </div>
      <div class="comments-info">
        <div class="comments-info-active">
          <div class="active-info p-center">
            <p class="name">教研活动</p>
            <p class="btn">发起调研</p>
          </div>
        </div>
        <div class="comments-res">
          <div class="title">相关资源</div>
          <ul class="content">
            <li v-for="n in 6" :key="n">
              <div class="img-wrap">
                <img src="./../../../assets/image/res-index-1.png" alt="">
                <div class="time">3分6秒</div>
              </div>
              <p>初初的利初的利用数学系用步学初初的利用数学系中同步学初初的利用数学系中同习</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <res-footer></res-footer>
  </div>
</template>

<script>
export default {
  components:{
    resFooter: () => import("@/components/res-footer"),
    resCommendBox: () => import("@/components/res-cmdBox"),
  },
  data(){
    return {
      value1:0,
      text:''
    }
  }
}
</script>

<style lang="scss" scoped>
.res-detail {
  background: #f3f5f7;
  .main-video{
    background: #fff;
    padding: 30px 0;
    .main-video-content {
      // width: 1200px;
      width: 80%;
      min-width: 1200px;
      margin: 0 auto;
      &-video {
        display: flex;
        height: 650px;
        .left {
          flex: 1;
          .video-wrap {
            height: calc(100% - 65px);
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
          font-size: 20px;
         
          margin: 23px 0 12px 0;
        }
        .info {
          display: flex;
          margin-bottom: 16px;
          & > div {
            line-height: 1;
            margin-right: 15px;
            padding-right: 15px;
            border-right: 1px solid #ccc;
            &:last-child {border-right: none}
          }
        }
        .desc {
          position: relative;
          max-width: 880px;
          text-align: justify;
          color: #909399;
          height: 20px;
          overflow: hidden;
          padding-right: 20px;
          i {
            position: absolute;
            right: 3px;
            top: 3px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

/* home work */
.home-work {
    width: 80%;
    min-width: 1200px;
    background: #fff;
    margin: 20px auto 0;
    .title {
      display: flex;
      padding: 15px 20px 0;
      & > div {
        color: #303133;
        font-size: 16px;
        padding-bottom: 5px;
      }
      .p-info {
        margin-left: 30px;
        flex: 1;
      }
    }

    .project-content {
      padding: 15px 0 20px;
      display: flex;
      .item {
        width: 12.5%;
        padding: 0 20px;
        img {
          width: 110px;
          height: 110px;
        }
        
      }
    }
}

.comments {
  width: 80%;
  min-width: 1200px;
  margin: 20px auto 65px;
  display: flex;
  .comments-content {
    flex: 1;
    background: #fff;
    .main {padding: 30px;}
    .comments-box {
      border-bottom: 1px solid #E0E4EB;
      .rate {
        display: flex;
        align-items: center;
        & > span {margin-right: 10px;}
      }
      .content {
        margin-top: 20px;
        .comments-control {
          text-align: right;
          margin: 16px 0 25px;
          span {
            color: #C1C4CC;
          }
          .comments-btn {
            display: inline-block;
            width: 128px;
            height: 36px;
            border-radius: 18px;
            background: #CACBCC;
            color: #fff;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
            margin-left: 20px;
          }
        }
      }
    }
    .comments-list {
      margin-top: 30px;
      .title {
        font-size: 16px;
        span{color: #909399}
      }
    }
    .more-commend {
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #606266;
        border-top: 1px solid #E0E4EB;
    }
  }
  .comments-info {
    width: 300px;
    margin-left: 24px;
    .comments-info-active {
      position: relative;
      height: 140px;
      background: #fff;
      margin-bottom: 24px;
      .active-info {
        text-align: center;
        p.name {color: #606266;font-size: 16px;}
        p.btn{
          width: 120px;
          height: 36px;
          background: rgba(38,149,255,1);
          color: #fff;
          border-radius: 4px;
          margin-top: 15px;
          line-height: 36px;
          padding: 0;
        }
      }
    }
    .comments-res {
      padding: 20px;
      background: #fff;
      .title {color: #303133;font-size: 16px;}
      .content {
        li {
          cursor: pointer;
          margin-top: 20px;
          height: 70px;
          .img-wrap {
            position: relative;
            display: inline-block;
            width: 124px;
            height: 70px;
            overflow: hidden;
            border-radius: 6px;
            margin-right: 10px;
            .time {position: absolute;right: 5px;bottom: 5px;
              padding: 0 5px;background: rgba(0, 0, 0, 0.2);color: #fff;
              border-radius: 9px;
            }
          }
          p {
            width: 126px;
            overflow: hidden;
            display: -webkit-inline-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>


<style>
.res-detail .el-input__inner {
  height: 60px;
}
</style>