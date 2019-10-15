<template>
  <div class="person-nav">
    <div class="person-info">
      <img class="avatar" src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" alt="">
      <div class="name">xxx</div>
      <div class="school">
        <p>成都市泡桐树小学天府校区</p>
        <p>(泡小天府校区)</p>
      </div>
      <div class="contact">
        <div class="attention">
          <p>120</p>
          <span>关注</span>
        </div>
        <div class="fans">
          <p>120</p>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <ul class="nav-list">
      <li>个人中心</li>
      <li>资源</li>
      <li>专辑</li>
      <li>预约</li>
      <li>留言板</li>
      <li>收藏</li>
      <li>设置</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.person-nav {width: 100%;height: 100%;
background: #fff;
box-shadow: 0px 5px 20px 0px rgba(26,27,27,0.05);
}
.person-nav .person-info {
  height: 270px;display: flex;
  flex-direction: column;
  border-bottom: 1px solid #E5E5E5;
  padding: 30px;
  padding-bottom: 0;
  align-items: center;}
.person-info img.avatar {width: 80px;}
.person-info .name {color: #333;font-size: 16px}
.person-info .school {text-align: center;p{color: #909399;}}
.person-info .contact {margin-top: 20px;width:100%;display: flex;justify-content: space-between}

.person-nav .nav-list li {
  height: 48px;color: #606266;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  }
  .person-nav .nav-list li:hover {
    background: #2695FF;
    color: #fff;
  }
</style>