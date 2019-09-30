<!-- 学校box -->
<template>
  <div class="school-box w16">
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
    margin-left: 1%;
    margin-bottom: 20px;
    background: #fff;
    .bg {
        height: 0;
        padding-bottom: 70%;
        position: relative;
        background: url(./../assets/image/school.jpg) no-repeat center 15px;
        background-size: 45%;
    }
    .title {
        top: 88%;
    }
}
.w20{
    width: 19%;
}
.w16{
    width: 15%;
}
</style>