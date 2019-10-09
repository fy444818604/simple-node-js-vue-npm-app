<!-- 评论box -->
<template>
  <div class="comment-box">
    <div class="avatar">
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
    </div>
    <div class="info">
      <div class="name">
        <span>黄西如</span>
        <el-rate disabled v-model="value1"></el-rate>
      </div>
      <p class="content">老师介绍的很详细，但是第二段的旁白不明白？
        老师介绍的很详细，但是第二段的旁白不明白？
        老师介绍的很详细，但是第二段的旁白不明白？
        老师介绍的很详细，但是第二段的旁白不明白？
      </p>
      <div class="time">
        <span>12分钟前</span>       
        <i class="iconfont icon-chat"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:3
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-box {
  display: flex;
  margin-top: 30px;
  .avatar {
    width: 48px;
    height: 48px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  .info {
    margin-left: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E0E4EB;
    .name {
      display: flex;
      & > span {margin-right: 20px;color: #303133}
    }
    .content {
      color: #606266;
      margin: 20px 0;
    }
    .time {
      display: flex;
      align-items: center;
      line-height: 24px;
      color: #606266;
      span {
        display: inline-block;
        color: inherit;
        width: 120px;
        }
      i {
        margin-left: 50px;
        font-size: 20px;
        color: inherit;
        cursor: pointer;
      }
    }
  }
}
</style>