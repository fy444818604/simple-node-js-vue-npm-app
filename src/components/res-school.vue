<!-- 学校box -->
<template>
  <div class="school-box">
      <div class="bg">
        <div class="title p-center text-overflow">四川理工学院</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.school-box {
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 0 1%;
    .bg {
        height: 0;
        padding-bottom: 70%;
        position: relative;
        background: #fff url(./../assets/image/school.jpg) no-repeat center 15px;
        background-size: 45%;
    }
    .title {
        top: 88%;
    }
}
</style>