<!-- 统一门户首页主体区域 -->
<template>
  <div class="container">
    <!--轮播-->
    <div class="carousel-wrap">
      <img src="../../assets/image/banner-test-1.jpg" alt="">
      <!-- <router-link to="/">
        
      </router-link> -->
      <!-- <el-carousel height="360px">
        <el-carousel-item v-for="item in 4" :key="item">
          <router-link to="/">
            <img src="../../assets/image/banner-test-1.jpg" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel> -->
    </div>
    <div class="content">
      <!--tips-->
      <div class="tips-wrap">
        <el-row :gutter="20">
          <el-col v-for="item in tips" :key="item" :span="6">
            <div class="tip-item">
              <i :style="{color:item.color}" :class="['iconfont',item.icon]"></i>
              <div>
                <p>{{item.number}}</p>
                <span>{{item.title}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--news-->
      <div class="news-wrap">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="news">
              <div class="title">新闻</div>
              <div class="news-content">
                <div class="news-cover"></div>
                <ul class="news-list">
                  <li v-for="n in 16" :key="n">
                    <span class="text-overflow">绿茵点亮梦想，激情舞动青春绿茵点亮梦想，激情舞动青春绿茵点亮梦想，激情舞动青春</span>
                    <span>03-15</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="notice">
              <div class="title">通知</div>
              <ul class="notice-list">
                <li class="text-overflow" v-for="n in 16" :key="n">
                  「校级」高中部“畅想青春”校园十佳歌手大赛决赛通知
                </li>
              </ul>
            </div>
          </el-col>
          <el-col></el-col>
        </el-row>
      </div>

      <!--资源平台-->
      <div class="platform-wrap">
        <div class="title">资源平台</div>
        <el-row :gutter="20" type='flex'>
          <el-col :span="10">
            <div class="plat-charts">
              <div class="item">
                <div class="left">
                  <p>1234</p>
                  <p>资源总数</p>
                </div>
                <div class="right">
                  <img src="./../../assets/image/curve_home_pic_.png" alt="">
                </div>
              </div>
              <div class="item">
                <div class="left">
                  <p>+50</p>
                  <p>本周新增</p>
                </div>
                <div class="right">
                  <img src="./../../assets/image/curve_home_pic_.png" alt="">
                </div>
              </div>
              <div style="width:50%;height:300px" id="platform1-wrap"></div>
              <div style="width:50%;" id="platform2-wrap"></div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="course-boxs">
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
            </div>
          </el-col>
        </el-row>
      </div>

      <!--同步课堂-->
      <div class="sync-wrap">
        <div class="title">同步课堂</div>
        <div class="sync-content">
          <el-row :gutter="20" type="flex">
            <el-col :span="12">
              <div class="map-cover">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="area-info">
                <div class="name">四川省</div>
                <div class="info-wrap">
                  <div>
                    <p>1234</p>
                    <span>总计开课</span>
                  </div>
                  <div>
                    <p>7</p>
                    <span>正在进行</span>
                  </div>
                  <div>
                    <p>98</p>
                    <span>参与学校</span>
                  </div>
                  <div>
                    <p>353</p>
                    <span>参与教室</span>
                  </div>
                </div>
                <div class="rank">
                  <div class="teacher-rank">
                    <div class="title">教师排名</div>
                    <ul class="rank-list">
                      <li v-for="n in 6" :key="n">
                        <span>{{n}}</span>
                        <span>鸡夏蛋</span>
                        <span>195节</span>
                      </li>
                    </ul>
                  </div>
                  <div class="school-rank">
                    <div class="title">学校排名</div>
                    <ul class="rank-list">
                      <li v-for="n in 6" :key="n">
                        <span>{{n}}</span>
                        <span>鸡夏蛋</span>
                        <span>195节</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <!--预约中心-->
      <div class="order-wrap">
        <div class="title">预约中心</div>
        <div class="order-content">
          <el-row :gutter="20" type="flex">
            <el-col :span="4">
              <div class="order-left">
                <div class="top">
                  <p>582</p>
                  <p>累计预约</p>
                </div>
                <img src="./../../assets/image/histogram.png" alt="">
              </div>
            </el-col>
            <el-col :span="20">
              <div style="height:350px"  id="order-charts"></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--直播中心-->
      <div class="live-wrap">
        <div class="title">直播中心</div>
        <div class="live-content">
          <el-row :gutter="20" type="flex">
            <el-col :span="6">
              <div class="live-left">
                <div class="item">
                  <div class="left">
                    <p>1234</p>
                    <p>资源总数</p>
                  </div>
                  <div class="right">
                    <img src="./../../assets/image/curve_home_pic_.png" alt="">
                  </div>
                </div>
                <div class="item">
                  <div class="left">
                    <p>+50</p>
                    <p>本周新增</p>
                  </div>
                  <div class="right">
                    <img src="./../../assets/image/curve_home_pic_.png" alt="">
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="live-right">
                <div class="type-control">
                  <div class="active">正在直播</div>
                  <div>直播报告</div>
                </div>
                <div class="live-box">
                  <res-box></res-box>
                  <res-box></res-box>
                  <res-box></res-box>
                  <res-box></res-box>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <res-footer></res-footer>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
		components: {
				resBox: () => import("@/components/res-box"),
				resFooter: () => import("@/components/res-footer")
    },
    mounted(){
      this.initOrderCharts();
      this.initPlatformCharts1();
      this.initPlatformCharts2();
    },
		data() {
				return {
						orderOption: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告']
                },
								xAxis: {
										type: 'category',
										data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
								},
								yAxis: {
										type: 'value'
								},
								series: [
                  { 
                    name:'邮件营销',
										data: [820, 932, 901, 934, 1290, 1330, 1320],
										type: 'line',
                    smooth: true},
                  {
                    name:'联盟广告',
										data: [1220, 932, 901, 2934, 190, 1330, 130],
										type: 'line',
                    smooth: true},
                  {
                    name:'视频广告',
										data: [820, 2932, 901, 934, 1290, 130, 1320],
										type: 'line',
                    smooth: true}
                    ]
            },
            platformOption:{
              series: [
                  {
                      name:'访问来源',
                      type:'pie',
                      radius: ['50%', '70%'],
                      avoidLabelOverlap: false,
                      label: {
                          normal: {
                              show: false,
                              position: 'center'
                          },
                          emphasis: {
                              show: true,
                              textStyle: {
                                  fontSize: '30',
                                  fontWeight: 'bold'
                              }
                          }
                      },
                      labelLine: {
                          normal: {
                              show: false
                          }
                      },
                      data:[
                          {value:335, name:'直接访问'},
                          {value:310, name:'邮件营销'},
                          {value:234, name:'联盟广告'},
                          {value:135, name:'视频广告'},
                          {value:1548, name:'搜索引擎'}
                      ]
                  }
              ]
          },
          tips:[
            {icon:'icon-apartment',title:'接入系统',number:'4',color:'#684EE6'},
            {icon:'iconxuexiao',title:'学校总数',number:'123',color:'#0A83FF'},
            {icon:'icon-video',title:'录播教室',number:'200',color:'#FA821D'},
            {icon:'icon-user',title:'注册教师',number:'420',color:'#30B89D'},
          ]

				}
		},
		methods: {
      initOrderCharts() {
       let myChart = echarts.init(document.getElementById('order-charts'));
        myChart.setOption(this.orderOption);
      },
      initPlatformCharts1(){
        let myChart = echarts.init(document.getElementById('platform1-wrap'));
        myChart.setOption(this.platformOption);
      },
      initPlatformCharts2(){
        let myChart = echarts.init(document.getElementById('platform2-wrap'));
        myChart.setOption(this.platformOption);
      },
    }
}
</script>

<style lang="scss" scoped="scoped">
  .container {
    min-width: 1200px
  }
  .carousel-wrap {
    height: 360px;
    img {width: 100%;}
  }
  .content {
    width: 80%;
    margin: 0 auto;
  }
  .tips-wrap {
    padding: 30px 0 18px;
  }
  .tips-wrap .tip-item {
    height: 128px;
    background: #F5F7FB;
    border-radius: 8px;
    display:flex;
    align-items: center;
    padding-left: 50px;
  }
  .tips-wrap .tip-item i {font-size: 60px;margin-right: 5px}
  .tips-wrap .tip-item div p {color: #333333;font-size: 28px}
  .tips-wrap .tip-item div span {
    color: #909399;
    position: relative;top: -5px;
    }
  .news-wrap .title {
    border-bottom: 1px solid #E5E5E5;
    color: #333;
    font-size: 18px;
    line-height: 48px;
  }
  .news-wrap .news .news-content {
    margin: 20px 0;
    display: flex;
    .news-cover {
      width: 420px;
      height: 236px;
      overflow: hidden;
      background: url(./../../assets/image/city-1.jpg) no-repeat center center;
      background-size: 100% 100%;
      border-radius: 8px;
    }
    .news-list {
      flex: 1;
      max-height: 236px;
      overflow: hidden;
      margin-left: 25px;
      vertical-align: top;
      li {
        color: #666;
        cursor: pointer;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
      }
      li span:last-child {
        flex-shrink: 0
      }
    }
  }
  .news-wrap .notice .notice-list {
    margin: 20px 0;
    max-height: 236px;
    overflow: hidden;
    > li {
      margin-bottom: 10px;
    }
  }
  .platform-wrap {
  }
  .platform-wrap .title {
    border-bottom: 1px solid #E5E5E5;
    color: #333;
    font-size: 18px;
    line-height: 48px;
  }
  .platform-wrap .plat-charts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height:100px;
    }
    .item p {
      text-align: center;
    }
    .item p:first-child {
      font-size: 16px;
      color: #333333
    }
    .item p:last-child {
      color: #909399;
    }
    .item .right {
      margin-left: 15px;
    }
  }
  .platform-wrap .course-boxs {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    & > div {
      width: 33%
    }
  ;
  }
  .sync-wrap > .title {
    border-bottom: 1px solid #E5E5E5;
    color: #333;
    font-size: 18px;
    line-height: 48px;
  }
  .sync-wrap .sync-content {
    margin-top: 30px
  }
  .sync-wrap .sync-content .map-cover {
    height: 0;
    padding-bottom: 74%;
    background: url("../../assets/image/Map.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .sync-wrap .sync-content .area-info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;
    .name {
      font-size: 36px;
      color: #333;
    }
    .info-wrap {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      text-align: center;
      p {
        color: #333333;
        font-size: 30px;
      }
      span {
        color: #909399;
      }
    }
    .rank {
      display: flex;
      justify-content: space-between
    }
    .rank .teacher-rank, .school-rank {
      flex: 1;
      .title {
        color: #333;
      }
      .rank-list {
        margin-top: 20px;
        li {
          margin-bottom: 10px;
        }
        li span:nth-child(1) {
          color: #909399
        }
        li span:nth-child(2) {
          margin: 0 60px 0 30px
        }
        li span:nth-child(3) {
          color: #909399
        }
        li:nth-child(1) {
          span:first-child {
            color: red
          }
        }
      }
    }
  }
  .order-wrap {
    margin-top: 30px;
  }
  .order-wrap > .title {
    border-bottom: 1px solid #E5E5E5;
    color: #333;
    font-size: 18px;
    line-height: 48px;
  }
  .order-wrap .order-content {
    margin-top: 30px;
  }
  .order-wrap .order-content .order-left {
    height:100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top p:first-child {
      color: #333;
      font-size: 30px
    }
    .top p:last-child {
      color: #909399;
    }
  }
  .live-wrap {
    margin-top: 30px;
  }
  .live-wrap > .title {
    border-bottom: 1px solid #E5E5E5;
    color: #333;
    font-size: 18px;
    line-height: 48px;
  }
  .live-wrap .live-content {
    margin: 30px 0;
    .live-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      .item {
        display: flex;
        text-align: center;
        .left {
          margin-right: 15px;
        }
        p {
          &:first-child {
            color: #333333;
            font-size: 30px;
          }
          &:last-child {
            color: #909399
          }
        }
      }
    }
    .live-right {
      .type-control {
        div {
          cursor: pointer;
          display: inline-block;
          border-bottom: 2px solid transparent;
          padding-bottom: 3px;
          margin-bottom: 15px;
          &:last-child {
            margin-left: 40px;
          }
          &:first-child {
            margin-left: 10px;
          }
          &.active {
            color: #2695FF;
            border-bottom-color: #2695FF
          }
        }
      }
      .live-box {
        display: flex;
        & > div {
          width: 25%
        }
      }
    }
  }
</style>
