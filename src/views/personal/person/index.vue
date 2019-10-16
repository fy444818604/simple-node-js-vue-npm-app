<!--个人中心-->
<template>
  <div class="person">
    <div class="banner"></div>
    <div class="container">
      <div class="main-wrap" ref="mainContent">
        <div class="main" >

          <div class="res">
            <div class="title">资源</div>
            <div class="res-boxs">
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
              <res-box></res-box>
            </div>
          </div>

          <div class="page">
            <div class="title">文章</div>
            <div class="page-box">
              <div v-for="i in 6" :key="i" class="item">
                <div class="text-overflow">第十九届体育文化节教工男子篮球赛圆满落幕第十九届体育文化节教工男子篮球赛圆满落幕</div>
                <span>2019-06-15</span>
                <span> <i class="iconfont icon-eyes"></i> 15</span>
                <span><i class="iconfont icon-chat"></i>3</span>
              </div>
            </div>
          </div>

          <div class="photo">
            <div class="title">相册</div>
            <div class="photo-box">
              <div v-for="(item,index) in photoList" :key="index" class="item" >
                <div :style="{backgroundImage:'url('+ item.url +')'}" class="item-bg"></div>
                <div class="title text-overflow">{{item.title}}</div>
              </div>
            </div>
          </div>

          <div class="album">
            <div class="title">专辑</div>
            <div class="album-boxs">
              <res-box show></res-box>
              <res-box show></res-box>
              <res-box show></res-box>
            </div>
          </div>

        </div>
        <div class="main-right">
          <div class="recent-visitor" :class="{fix:fixed}">
              <div class="top">最近访客</div>
              <div class="visitor-box">
                <div v-for="n in 8" :key="n" class="item">
                  <img class="avatar" src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" alt="">
                  <div class="name">李梦琪</div>
                  <span>07-20</span>
                </div>
              </div>
              <div class="bottom">
                <div>今日浏览:7</div>
                <div>总浏览:85</div>
              </div>
          </div>
        </div>
      </div>
      <res-footer></res-footer>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      photoList:[
        {url:require('@/assets/image/组1.jpg'),title:'揭秘王牌武器，洞察科学揭秘王牌武器，洞察科学'},
        {url:require('@/assets/image/组2.jpg'),title:'初中新概念二册精讲'},
        {url:require('@/assets/image/组3.jpg'),title:'自然拼读新手提升班'},
        {url:require('@/assets/image/组4.jpg'),title:'初一科学名师精讲课程'},
      ],
      fixed:false,
      scrollNum:0
    }
  },
  components:{
    resBox: () => import("@/components/res-box"),
    resFooter: () => import("@/components/res-footer")
  },
  mounted(){
    // this.handleScroll()
  },
  methods:{
    // handleScroll(){
    //   let scrollBarEl = this.$parent.wrap;
    //   scrollBarEl.onscroll = _ => {
    //     if(scrollBarEl.scrollTop > 299) {
    //       this.fixed = true;
    //     } else {
    //       this.fixed = false;
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped="scoped">
// .fix {
//   position: fixed;
//   width: 240px; 
//   right: calc(10vw - 24px);
//   top: 90px;
// }
// @media screen and (max-width:1740px) {
//   .fix {
//     right: calc(50vw - 720px);
//   }
// }

.person {
  width: 100%;
  min-width: 1260px;
  .banner {
    height: 270px;
    width: 100%;
    background: url('./../../../assets/image/bg.jpg') no-repeat center center;
    background-size: 100% 100%;
  }
  .container  {
    width: 100%;
  }
  .container .main-wrap {
    min-width: 1200px;
    width: 80%;
    margin: 30px auto 0;
    display: flex;
  }
  .main-right {
    flex-shrink: 0;
    position: relative;
    width: 240px;margin-left: 20px;
  }
  .recent-visitor {
    padding: 24px 24px 18px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 5px 20px 0px rgba(26,27,27,0.05);
    .top {
      margin-bottom: 10px;
      color: #333;
      font-size: 16px;
    }
    .visitor-box {
      display: flex;
      flex-wrap: wrap;
      // margin: 10px 0;
      .item {
        flex-basis: 50%;
        margin-bottom: 10px;
        img {width: 64px;}
        text-align: center;
        .name {color: #333;margin: 2px 0}
        span {color: #909399}
      }
    }
    .bottom {
      padding-top: 15px;
      border-top: 1px solid #E5E5E5;
      display: flex;
      justify-content: space-between;
      div {color: #909399}
    }
  }
  .main { flex:1 }
  /* 资源 */
  .main .res {padding: 20px 10px 20px 10px;background: #fff;border-radius: 8px}
  .main .res .title {
    padding-left: 10px;
    margin-bottom: 10px; color: #333; font-size: 16px;
  }
  .main .res-boxs { display: flex; flex-wrap: wrap;justify-content: space-between; }
  .main .res-boxs > div{ width: 33%;}
  /* 专辑 */
  .main .album {padding: 20px 10px 20px 10px;background: #fff;
  border-radius: 8px;margin-top: 24px;
  margin-bottom: 56px;
  }
  .main .album .title {
    padding-left: 10px;
    margin-bottom: 10px; color: #333; font-size: 16px;
  }
  .main .album-boxs { display: flex; flex-wrap: wrap;justify-content: space-between; }
  .main .album-boxs > div{ width: 33%;}

  /* 文章 */
  .page {padding: 20px;background: #fff;border-radius: 8px;
        margin-top: 24px}
  .page .title { margin-bottom: 10px; color: #333; font-size: 16px;}
  .page .page-box {
    .item {
      margin-bottom: 20px;
      cursor: pointer;
      display: flex;justify-content: space-between;
      padding-right: 20px;
      }
    .item div {max-width: 280px;}
    .item:hover div {color: #2695FF}
  }
  /* 相册 */
  .photo {padding: 20px 10px 20px 10px;background: #fff;
  border-radius: 8px;margin-top: 24px;}
  .photo > .title { padding-left: 10px;margin-bottom: 18px;line-height: 1; color: #333; font-size: 16px;}
  .photo .photo-box {
    display: flex;
    justify-content: space-between;
    .item {width: 25%;padding: 0 1%;}
    .item .item-bg {width: 100%;height: 0;padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    }
    .item .title {text-align: left;margin-top: 12px;color: #333;font-size: 16px}
  }
}
</style>
