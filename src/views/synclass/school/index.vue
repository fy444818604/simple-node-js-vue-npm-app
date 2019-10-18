<!--学校课表-->
<template>
  <div class="school">
    <div class="title">学校课表</div>
    <div class="container">
      <el-row :gutter="20" type="flex">
        <el-col :span="4">
          <div class="school-nav">
            <div class="title">学校选择</div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="content">
            <div class="top">
              <div class="title">西川学校</div>
              <timeSelect class="time-select"></timeSelect>
             
            </div>
            <syn-calendar></syn-calendar>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    timeSelect:() => import("@/components/time-selected"),
    synCalendar:() => import("@/components/calendar")
  }
}
</script>

<style lang="scss" scoped>
.school {padding: 32px;}
.school > .title {color: #55595C;font-weight: bold;line-height: 1}
.container {margin-top: 20px;}
.container {
  .school-nav {
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    padding-top: 13px;
    min-height: 700px;
    .title {color: #55595C;font-weight: bold;height: 36px;line-height: 36px;}
  }
  .content {
    min-height: 100%;
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    padding-top: 13px;
    .top {margin-bottom: 37px;display: flex;align-items: center;justify-content: space-between;}
    .top .title {color: #55595C;font-weight: bold}
    .top .time-select {display: inline-block;margin: 0;}
  }
}

</style>