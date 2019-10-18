<!--同步课堂首页-->
<template>
  <div class="sync-index">

    <div class="tips-wrap">
      <el-row :gutter="20">
        <el-col v-for="n in 4" :key="n" :span="6">
          <div class="tip-item">
            <div class="tip-item-title">正在进行</div>
            <span class="p-center">3</span>
          </div>
        </el-col>
      </el-row> 
    </div>

    <div class="container">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="static-wrap wrap">
            <div class="title">课程统计</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="school-wrap wrap">
            <div class="title">开课学校</div>
            <div class="logo">
              <img style="height:82px" src="./../../../assets/image/main_icon_school.png" alt="">
              <p>30</p>
            </div>
            <div class="rank-wrap">
              <div class="title"> 学校开课排名 </div>
              <ul>
                <li v-for="i in 8" :key="i">
                  <div class="info">
                    <span>{{i}}</span>
                    <span>成都第A中学</span>
                    <span>79</span>
                  </div>
                  <el-progress :show-text="false" :percentage='i'></el-progress>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="teacher-wrap wrap">
            <div class="title">开课老师</div>
            <div class="logo">
              <img style="height:82px" src="./../../../assets/image/main_icon_teacher.png" alt="">
              <p>137</p>
            </div>
            <div class="rank-wrap">
              <div class="title">
                教师开课排名
              </div>
              <ul>
                <li v-for="i in 8" :key="i">
                  <div class="info">
                    <span>{{i}}</span>
                    <div>
                      <img src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" alt="">
                      <span>龙飞</span>
                    </div>
                    <span>79</span>
                  </div>
                  <el-progress :show-text="false" :percentage='i'></el-progress>
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

}
</script>

<style lang="scss" scoped>
.sync-index {padding: 32px;}

.tips-wrap {
  .tip-item {height: 140px;border-radius: 6px;position: relative;background: #83D9D2;}
  .tip-item .tip-item-title {line-height: 1;color: #fff;padding: 22px 0 0 24px;}
  .tip-item > span {color: #fff;font-size: 48px;}
}

.container {
  margin-top: 32px;
  .wrap { background: #fff; border-radius: 6px; padding: 24px; }
  .wrap > .title {color: #55595C;line-height: 1;}
  .wrap > .logo {
    padding-top: 37px;
    text-align: center;p{color: #606266;font-weight: bold;font-size: 30px;padding-top: 24px}}
  .wrap > .rank-wrap {
    .title {color: #55595C;padding: 40px 0}
    ul li  {margin-bottom: 20px;}
    ul li .info {line-height: 1;height: 56px;display: flex;align-items: center;padding-bottom: 20px}
    ul li .info > span {color: #909399}
    ul li .info > span:nth-child(2){flex:1;padding-left: 30px;}
    ul li .info div:nth-child(2) {flex:1;padding-left: 30px;}
    ul li .info div img {width: 36px;}
    ul li .info div span {padding-left: 5px;color: #909399}
  }
  .static-wrap {

  }
}

</style>