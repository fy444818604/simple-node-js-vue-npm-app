<!-- base-modal -->
<template>
  <el-dialog
    class="base-dialog"
    :title="title"
    :visible.sync="visible"
    width="30%"
    :before-close="handleClose">
    <slot></slot>
    <div class="form-control" slot="footer">
      <el-button @click="handleClose" size="mini">取消</el-button>
      <el-button @click="handleSave" size="mini" type="primary">保存</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
    props:{
        visible: Boolean,
        title:String
    },
    methods:{
        handleClose(){
            this.$emit("on-close")
        },
        handleSave(){
            this.$emit("on-save")
        }
    }
}
</script>

<style lang="scss" scope>
  .form-control {
    height: 60px;
    line-height: 60px;
    padding-right: 15px;
    background-color: #f5f5f5
  }
</style>

<style>
  .base-dialog .el-dialog__header {
    border-bottom: 1px solid #E5E5E5;
  }
  .base-dialog .el-dialog__footer {
    padding: 0;
  }
</style>
