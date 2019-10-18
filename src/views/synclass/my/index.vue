<!--我的课表-->
<template>
  <div class="school">
    <div class="title">我的课表</div>
    <div class="container">
      <el-row>
        <el-col :span="24">
          <div class="content">
            <div class="top">
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
.container {margin-top: 20px;}
.container {
  .content {
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    padding-top: 13px;
    .top {text-align: center;margin-bottom: 37px}
    .top .time-select {display: inline-block;margin: 0;}
  }
}

</style>