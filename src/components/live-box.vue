<!--正在直播box-->
<template>
  <div class="item">
    <div class="main">
      <div class="main-head">
        <div>
          <i class="p-center iconfont icon-video"></i>
        </div>
      </div>
      <div class="main-footer">
        <div class="title flex-between">
          <div>等式与不等式</div>
          <div><i class="iconfont icon-user"></i>415</div>
        </div>
        <div class="author">
          赵广杰  成都第X中学
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.item { padding: 0 15px}
.item .main {
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  top: 0;
  transition: all .2s linear;
  cursor: pointer;
}
.item .main:hover {
  top: -10px;
}
.main-head {
  position: relative;
  width:100%;
  height: 0;
  padding-bottom: 75%;
  background: url('./../assets/image/city-1.jpg') no-repeat;
  background-size: 100% 100%
}
.main-head:hover div {display: block}
.main-head > div {
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0,.4);
  i {color: #fff;font-size: 60px}
}
.main-footer {
  background: #fff;
  height: 80px;
  padding: 12px
}

.main-footer .title > div {line-height: 1}
.main-footer .title div:nth-child(2) i {margin-right: 5px}
.main-footer .author {line-height: 1;margin-top: 20px;color: #909399}
</style>
