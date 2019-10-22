<!--系统设置-->
<template>
  <div class="sys-setting">
    <div class="title">系统设置</div>
    <div class="container">
      <div>
        <span>登陆后观看：</span>
        <el-switch
          v-model="value"
          active-color="#3489FF"
          inactive-color="#ccc">
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:false
    }
  }
}
</script>

<style lang="scss" scoped>
.sys-setting {padding: 32px;min-height: 100%;height: 100%}
.sys-setting .title {line-height: 1;}
.container {
  margin-top: 23px;
  height: calc(100% - 37px);
  background: #fff;
  border-radius: 6px;
  padding: 36px 32px;
}
</style>