<!-- 知识点box -->
<template>
  <div class="knowledge-box ">
    <p class="p2-overflow">相反数，实数4它的相反数是一对数（只有符9不同的两个数叫做互为相反数，零的相反数是零），从数</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.knowledge-box {
  position: relative;
  width: 168px;
  height: 64px;
  background: #F5F5F5;
  border-radius: 4px;
  padding: 10px;
  color: #606266;
  cursor: pointer;
  margin: 12px;
  margin-left: 0;
  margin-top: 0;
  overflow: hidden;
}
.active {
  background: #E7F1FF;
  p {color: #4A80F6;}
}
// .active::before {
//   content: '√';
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   color: #fff;
//   z-index: 998;
//   font-size: 8px;
// }
.active::after {
  content: '';
  position: absolute;
  right: -15px;
  bottom: -15px;
  color: #fff;
  width: 30px;
  height: 30px;
  background: #3c8cff;
  font-size: 12px;
  transform: rotate(45deg);
}
</style>