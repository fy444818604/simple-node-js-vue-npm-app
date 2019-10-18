<!--作业-->
<template>
  <div class="project">
    <div class="title">学习简笔画</div>
    <div v-for="i in 2" :key="i" class="school-item">
      <div class="school-title">成都树德中学  李婉  10</div>
      <div class="project-box">
        <div v-for="i in 13" :key="i" class="item">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.project {width: 1200px;margin: 0 auto;overflow: hidden;}
.project .title {font-size: 20px;color: #55595C;font-weight: bold;line-height: 1;margin: 32px 0;}

.school-item .school-title {margin-bottom: 24px;color: #55595C;font-weight: bold}
.project-box {padding-bottom: 16px;display: flex;flex-wrap: wrap}
.project-box .item {overflow: hidden;margin-left:30px;margin-bottom: 32px;width: 173px;height: 173px;border-radius: 6px;border: 1px solid #ccc}
.project-box > div:nth-child(6n + 1) {margin-left: 0}
</style>