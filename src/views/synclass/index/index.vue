<!--同步课堂首页-->
<template>
  <div class="sync-index">
    <div class="tips-wrap">
      <el-row :gutter="20">
        <el-col v-for="item in tips" :key="item.title" :span="6">
          <div
            class="tip-item"
            :style="{background:'linear-gradient(to top right,' + item.bg + ')'}"
          >
            <div class="tip-item-title">{{item.title}}</div>
            <span class="p-center">{{item.content}}</span>
            <img src="./../../../assets/image/bgpaomo.png" alt />
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="container">
      <el-row :gutter="20">
        <el-col :span="15">
          <div class="static-wrap wrap">
            <div class="title">课程统计</div>
            <syn-calendar :tableData="orderList"></syn-calendar>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="school-wrap wrap">
            <div class="title">开课学校</div>
            <div class="rank-wrap">
              <ul>
                <li v-for="i in 5" :key="i">
                  <div>
                    <span>{{i}}</span>
                    <span>成都第A中学</span>
                  </div>
                  <el-progress :format="format" :percentage="i"></el-progress>
                </li>
              </ul>
            </div>
          </div>

          <div class="teacher-wrap wrap">
            <div class="title">开课老师</div>
            <div class="rank-wrap">
              <ul>
                <li v-for="i in 5" :key="i">
                  <div>
                    <span>{{i}}</span>
                    <img src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" alt />
                    <span>龙飞</span>
                  </div>
                  <el-progress :format="format" :percentage="i"></el-progress>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    synCalendar: () => import("@/components/calendar")
  },
  data() {
    return {
      orderList: [
        {
          x: 1,
          y: 1,
          record: 5,
          syn: 3,
          meeting: 2
        }
      ],
      tips: [
        {
          title: "正在进行",
          content: 3,
          bg: "#83D9D2,#07CDAE"
        },
        {
          title: "累计上课",
          content: 178,
          bg: "#F8D46B,#FDA423"
        },
        {
          title: "课程视频",
          content: 251,
          bg: "#8EC9F8,#4C84FF"
        },
        {
          title: "作业上传",
          content: 122,
          bg: "#FFBE96,#FE7096"
        }
      ]
    };
  },
  methods: {
    format(percentage) {
      return percentage;
    }
  }
};
</script>

<style lang="scss" scoped>
.sync-index {
  padding: 32px;
}

.tips-wrap {
  .tip-item {
    height: 140px;
    border-radius: 6px;
    position: relative;
    // background-image: url('./../../../assets/image/bgpaomo.png');
  }
  .tip-item .tip-item-title {
    line-height: 1;
    color: #fff;
    padding: 22px 0 0 24px;
  }
  .tip-item > span {
    color: #fff;
    font-size: 48px;
  }
  .tip-item img {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.container {
  margin-top: 32px;
  .wrap {
    background: #fff;
    border-radius: 6px;
    padding: 22px 22px 0 22px;
    margin-bottom: 33px;
    overflow: hidden;
  }
  .wrap > .title {
    color: #55595c;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 36px;
  }
  .school-wrap.wrap > .rank-wrap {
    ul li {margin-bottom: 46px;}
  }
  .wrap > .rank-wrap {
    ul li {
      margin-bottom: 30px;
      line-height: 1;
      display: flex;
      align-items: center;
    }
    ul li > div:nth-child(1) {
      width: 140px;
      min-width: 140px;
    }
    ul li > div:nth-child(2) {
      flex: 1;
    }
    ul li span:nth-child(2) {
      padding: 0 20px;
    }
    ul li img {
      width: 36px;
      margin: 0 20px;
    }
  }
  .static-wrap {
    padding-bottom: 22px;
    .title {
      margin-bottom: 36px;
    }
  }
}
</style>

<style lang="scss">
.sync-index .teacher-wrap.wrap {
  .el-progress-bar__inner {background-color: #F8B551}
}
</style>