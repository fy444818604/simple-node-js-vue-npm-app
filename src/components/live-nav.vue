<!--同步课堂导航-->
<template>
  <ul>
    <router-link :class="{active:currentPath===item.path}" v-for="item in navList" :key="item.path" tag='li' :to="item.path">
      <i :class="['iconfont',item.icon]"></i>
      <span>{{item.content}}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      navList:[
        {
          path:"/liveCenter/Layout/index",
          icon:'icon-home',
          content:'首页'
        },
        {
          path:"/liveCenter/Layout/living",
          icon:'icon-video2',
          content:'正在直播'
        },
        {
          path:"/liveCenter/Layout/livebroad",
          icon:'icon-schedule',
          content:'直播预告'
        },
        {
          path:"/liveCenter/Layout/liveSetting",
          icon:'icon-video1',
          content:'直播设置'
        },
        {
          path:"/liveCenter/Layout/systemSetting",
          icon:'icon-setup',
          content:'系统设置'
        }
      ],
      currentPath:''
    }
  },
  created(){
    this.$watch('$route',_ => {
      this.currentPath = this.$route.path;
    },{immediate:true})
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {height: 48px;display: flex;align-items: center;cursor: pointer;
  padding-left: 18px;
  i {margin-right: 6px;font-size: 20px}
  span{color: #303133;font-weight: bold;}
  }
  li:hover {color: #4C84FF;span{color: inherit};i{color: inherit}}
  li.active {background: #F1F3F8}
}
</style>