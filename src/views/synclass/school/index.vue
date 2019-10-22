<!--学校课表-->
<template>
  <div class="school">
    <div class="title">学校课表</div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="school-nav">
            <div class="title">学校选择</div>
            <div class="select-school">
              <el-scrollbar style="height:100%">
                <syncTree></syncTree>
              </el-scrollbar>
            </div>
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
    synCalendar:() => import("@/components/calendar"),
    syncTree:() => import("@/components/sync-tree"),
  }
}
</script>

<style lang="scss" scoped>
.school {padding: 32px;height: 100%;}
.school > .title {color: #55595C;font-weight: bold;line-height: 1}
.container {
  padding-top: 20px;
  height: calc(100% - 34px);
  .school-nav {
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    height: 700px;
    .title {
      color: #55595C;font-weight: bold;
      margin-bottom: 23px;
      line-height: 1;}
    .select-school {height: calc(100% - 37px)}
  }
  .content {
    min-height: 100%;
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    padding-top: 7px;
    .top {display: flex;align-items: center;justify-content: space-between;margin-bottom: 7px;}
    .top .title {color: #55595C;font-weight: bold;}
  }
}

</style>