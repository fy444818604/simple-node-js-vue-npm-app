<!--视频详情-->
<template>
  <div class="detail">
    <div class="video-wrap">
      <div class="item1"></div>
      <div class="video-boxs">
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
    </div>
    <div class="project">
      <span><i class="iconfont icon-eyes"></i>425</span>
      <span><i class="iconfont icon-docment2"></i>作业</span>
    </div>
    <div class="info">
      <div class="info-header">
        <span @click="activeInfo='lesson'" :class="{active:activeInfo === 'lesson'}">课程信息</span>
        <span @click="activeInfo='teacher'" :class="{active:activeInfo === 'teacher'}">老师介绍</span>
      </div>
      <div class="info-content">
        <template v-if="activeInfo === 'lesson'">
          <div class="lesson-info">
            <p><span>课程名称:</span>大青树下的小学</p>
            <p><span>主讲老师:</span>李婉 成都树德中学</p>
            <p><span>课程时间:</span>2019-09-26    09:00-09:30</p>
            <p><span>教材信息:</span>教材信息：小学    语文    人教版    三年级语文上册   一单</p>
            <p><span>课程简介:</span>古老的钟声悠悠不绝，凤尾竹的影子绵绵萦绕，身着鲜艳民族服装的小学生们在五星红旗下共同学习、共同嬉戏。这个充满着欢乐、祥和气氛的学校就是“我们的民族小学”。
课题用“我们的”来修饰“民族小学”，表达了作者的自豪之感和赞美之情。课文紧紧围绕一个“情”字行文，内容与文题相互呼应，浑然一体。</p>
          </div>
        </template>
        <template v-else>
          <div class="teacher-info">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
            <div>
              <p>李婉</p>
              <p>成都树德中学树德</p>
              <p>树德中学一级教师，成都市教科院特约直播教师，参与录制高三专题复习，高中英语绘本阅读系列 等直播课程。四川师范大学基础教育课程研究中心“校地共建”
名师工作室负责人。成都“微师培”中心组成员。中共党员，中学高级教师，四川省泸县第一中学教学副校长、泸州市知名教师。树德中学一级教师，成都市教科院特约直播教师，参与录制高三专题复习，高中英语绘本阅读系列 等直播课程。四川师范大学基础教育课程研究中心“校地共建”
名师工作室负责人。成都“微师培”中心组成员。中共党员，中学高级教师，四川省泸县第一中学教学副校长、泸州市知名教师。树德中学一级教师，成都市教科院特约直播教师，参与录制高三专题复习，高中英语绘本阅读系列 等直播课程。四川师范大学基础教育课程研究中心“校地共建”
名师工作室负责人。成都“微师培”中心组成员。中共党员，中学高级教师，四川省泸县第一中学教学副校长、泸州市知名教师。</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeInfo:'teacher'
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {width: 1200px;margin: 0 auto;overflow: hidden;}
.video-wrap {height: 450px;display: flex;flex-wrap: wrap;margin-top: 32px;}
.video-wrap .item1 {width: 800px;background: rgba(135, 207, 235, 0.158);}
.video-wrap .video-boxs {flex: 1}
.video-wrap .item2 {height: 225px;background: rgba(250, 128, 114, 0.123);}
.video-wrap .item3 {height: 225px;background: rgba(244, 165, 96, 0.205);}
.project {
  height: 56px;display: flex;align-items: center;justify-content: flex-end;
  padding-right: 24px;background: #fff;
  span {margin-left: 20px;i{margin-right: 4px;}}
  span:last-child{
    i {color: inherit;position: relative;top: 1px;}
    color: #4C84FF;
  }
}
.info {background: #fff;border-radius: 6px;}
.info .info-header {height: 56px;
  line-height: 56px;margin-top: 32px;
  border-bottom: 1px solid #EBEEF5;padding-left: 12px
}
.info .info-header span {
  display: inline-block;
  width: 80px;height: 28px;line-height: 28px;text-align: center;
  color: #55595C;border-radius: 14px;
  margin-right: 30px;font-weight: bold;cursor: pointer;
}
.info .info-header span.active {
  background: #EBEEF5;color: #4C84FF;
}
.info .info-content {
  padding: 23px;
  margin-bottom: 40px;
  min-height: 335px;
}
.info .info-content .lesson-info {
  p {margin-bottom: 20px;line-height: 2}
  p span {color: #909399;margin-right: 10px;}
}

.info .teacher-info {
  display: flex;
  img {width: 120px;height: 120px;border-radius: 8px;}
  div {padding-left: 20px;}
  p {line-height: 2;color: #909399;margin-bottom: 10px;}
  p:first-child {color: #606266;font-weight: bold}
}
</style>