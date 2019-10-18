<!--系统设置-->
<template>
  <div class="setting">
    <div class="title">系统设置</div>
    <div class="container">
      <div class="name">
        <span>系统名称:</span>
        <el-input style="width:480px" v-model="name" placeholder="请输入系统名称"></el-input>
      </div>
      <div class="center">
        <span>视频中心:</span>
        <el-switch
          class="switch"
          v-model="value"
          active-color="#4c84ff"
          inactive-color="#ccc">
        </el-switch>
        <el-checkbox v-model="checked">登录观看资源</el-checkbox>
      </div>
      <div class="live">
        <span>同步课直播:</span>
        <el-switch
          v-model="value1"
          active-color="#4c84ff"
          inactive-color="#ccc">
        </el-switch>
      </div>
      <div class="logo">
        <span>系统logo:</span>
        <div class="upload-wrap">
          <input type="file">
        </div>
      </div>
      <div class="save">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      value:false,
      value1:false,
      checked:false
    }
  }
}
</script>

<style lang="scss" scoped>
.setting {padding: 32px;height: 100%}
.setting > .title {color: #55595C;font-weight: bold;line-height: 1}
.container {
  min-height: calc(100% - 28px);
  margin-top: 24px;
  border-radius: 6px;
  background: #fff;padding: 24px;
}
.container > div {
  display: flex;
  margin-bottom: 30px;
  & > span {
    text-align: right;
    display: inline-block;
    min-width: 80px;
    margin-right: 10px;
  }
}
.container .name {
  align-items: center;
}
.container .center .switch {
  margin-right: 24px;
}
.container .logo .upload-wrap {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 4px;
  border: 1px dashed #DCDFE6;
  background: #F8F9FB url('./../../../assets/image/sys-log-bg.png') no-repeat center center;
  cursor: pointer;
  &:hover{
    border-color: #4C84FF;
  }
  input {
    width: 70px;
    height: 70px;
    cursor: pointer;
    opacity: 0;
  }
  &::after {
    content: '建议图片高度：30 宽度：30';
    width: 200px;
    position: absolute;
    left:110%;
    bottom: 0;
  }
}
.container > div.save  {
  width: 80px;
  height: 42px;
  background: #4c84ff;
  border-radius: 4px;
  line-height: 42px;
  color: #fff;
  margin-left: 90px;
  justify-content: center;
  cursor: pointer;
}
</style>
<style lang="scss">
.setting {
  .el-input__inner {padding-left: 5px!important;}
}
</style>