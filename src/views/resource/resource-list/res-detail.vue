<!--资源详情-->
<template>
  <div class="res-detail">
    <!-- 视频部分 -->
    <div class="main-video">
      <div class="main-video-content">
        <!-- video -->
        <template v-if="true">
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
                <!-- 有知识点 -->
                <template v-if="false">
                  <ul>
                    <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                    <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                    <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                  </ul>
                </template>
                <!-- 没有知识点 -->
                <template>
                  <div>明天在来看</div>
                </template>
              </el-scrollbar>
            </div>
          </div>
        </template>
        <!-- PDF -->
        <!-- <div class=""></div> -->
        <template v-if="false">
          <div class="main-video-content-pdf">
              <div class="pdf-content"></div>
              <div class="video-control">
                <div> <i class="iconfont icon-eyes"></i> 135</div>
                <div> <i class="iconfont icon-arrow-1"></i> 下载</div>
                <div> <i class="iconfont icon-heart"></i> 收藏</div>
                <div> <i class="iconfont icon-share"></i> 分享</div>
                <div> <i class="iconfont icon-stars"></i> 4.7</div>
              </div>
          </div>
        </template>
        <div class="main-video-content-info">
          <div class="title"> 初中数学教学大纲与初中数学知识点总结</div>
          <div class="info">
            <div>林明皓</div>
            <div>成都树德中学</div>
            <div>2019-09-15</div>
            <div>初中  一年级上册  人教版  有理数</div>
          </div>
          <div :class="['desc',{'down':descShow === 'down'}]">
            本章内容要求学生正确认识有理数的概念，在实际生活和学习数轴的基础上，理解正负数、相反数、 绝对值的意义所在。重点利用有理数的运算法则解决实际问题.体验数学发展的一个重要原因是生活实际的需要.激发学生学习数学的兴趣，教师培养学生的观察、归纳与概括的能力，使学生建立正确的数感和解决实际问题的能力。教师在讲授本章内容时，应该多创设情境，充分体现学生学习的主体性地位 
            概括的能力，使学生建立正确的数感和解决实际问题的能力
            <i v-if="true" @click="handleToggleDesc" :class=" descShow === 'down' ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- home work -->
    <div class="home-work">
      <div class="title">
        <div @click="handleToggleWorkType('homework')" class="project" :class="{active:workType==='homework'}">作业10</div>
        <div @click="handleToggleWorkType('attach')" class="p-info" :class="{active:workType==='attach'}">附件7</div>
        <div class="more">更多<i class="el-icon-arrow-down"></i></div>
      </div>
      <!-- home -->
      <template v-if="workType === 'homework'">
        <div class="project-content">
          <div v-for="n in 10" :key="n" class="item">
            <img src="./../../../assets/image/school.jpg" alt="">
            <div class="name text-overflow">宋冠玲</div>
            <div class="text-overflow">成都七中（林荫校区）</div>
          </div>
        </div>
      </template>
      <!-- 附件 -->
      <template v-if="workType === 'attach'">
        <div  class="attach-content">
          <div v-for="n in 10" :key="n" class="item">
            <div class="img-wrap"></div>
            <div class="desc">七年级上第4课《古代诗 歌四首》.word</div>
          </div>
        </div>
      </template>
    </div>

    <!-- 评论 -->
    <div class="comments">
        <div class="comments-content">
          <div class="main">
            <div class="comments-box">
              <div class="rate"><span>资源评分:</span><el-rate v-model="value1"></el-rate></div>
              <div class="content">
                <el-input
                  disabled
                  :rows="2"
                  resize="none"
                  type="textarea"
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
            <!-- 开启评论 -->
            <template v-if="false">
              <div class="comments-list">
                <div class="title">全部评论 <span>36</span> </div>
                <resCommendBox></resCommendBox>
              </div>
            </template>
            <!-- 关闭评论 -->
            <template>
              <div class="close-commend">
                <i class="iconfont iconpinglun_kong"></i>
                <span>主人在神游，评论已关闭</span>
              </div>
            </template>
          </div>
          <!-- 更多评论 评论过多 且 没有关闭评论 -->
          <template v-if="false">
            <div class="more-commend">
                查看更多评论
            </div>
          </template>
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
      text:'',
      /* 课程描述 收起-展开 */
      descShow:'down',
      /* 作业 / 附件  homework attach */ 
      workType:'homework'
    }
  },
  methods:{
    /* 切换课程描述-展开/收起 */
    handleToggleDesc(){
      this.descShow = this.descShow === 'down' ? 'up' : 'down';
    },
    handleToggleWorkType(type){
      this.workType = type
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
      width: 80%;
      min-width: 1200px;
      margin: 0 auto;
      &-video {
        display: flex; height: 650px;
        .left {
          flex: 1;
          .video-wrap { height: calc(100% - 65px); }
          .video-control {
            height: 65px;
            background: #202020;
            display: flex;
            align-items: center;
            & > div { margin-left: 30px; }
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

      &-pdf {
        height: 650px;
        background: #f3f5f7;
        .pdf-content {
          height: 585px;
        }
        .video-control {
          height: 65px;
          display: flex;
          align-items: center;
          background: #f2f2f2;
          & > div { margin-left: 30px; }
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
          overflow: hidden;
          padding-right: 30px;
          &.down {
            height: 20px;
          }
          i {
            position: absolute;
            right: 0;
            top: -1px;
            font-size: 20px;
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
        cursor: pointer;
      }
      .p-info { margin-left: 30px; }
      .more { flex: 1; text-align: right; }
      .project {}
      .active {
        color: #2695FF;
        border-bottom: 2px solid #2695FF;
      }
    }

    .project-content {
      padding: 15px 0 20px;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 12.5%;
        padding: 0 20px;
        text-align: center;
        margin-bottom: 20px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 6px;
        }
        div {
          text-align: left;
          color: #606266;
          &.name {margin-top: 12px;}
        }
      }
    }
    .attach-content {
      padding: 15px 0 20px;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 12.5%;
        padding: 0 20px; 
        text-align: center;
        margin-bottom: 20px;
        .img-wrap {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          border: 1px solid #D7D7D7;
          background: url(./../../../assets/image/school.jpg) no-repeat center center;
          background-size: 80% 80%;
        }
        .desc {
          margin-top: 10px;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;     
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
    .main {padding: 30px;background: #fff;}
    .comments-box {
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
          span { color: #C1C4CC; }
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
      border-top: 1px solid #E0E4EB;
      margin-top: 30px;
      padding-top: 30px;
      .title { font-size: 16px;span{color: #909399 }
      }
    }
    .close-commend {

    }
    .more-commend {
        height: 70px;
        background: #fff;
        line-height: 70px;
        text-align: center;
        color: #606266;
        border-top: 1px solid rgba(224, 228, 235,.5);
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
