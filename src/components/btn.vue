<!-- 保存 编辑 按钮-->
<template>
  <div class="base-btn">
    <template v-if="type==='cancel'">
      <div class="cancel">取消</div>
    </template>
    <template v-if="type==='save'">
      <div class="save">保存</div>
    </template>
  </div>

</template>

<script>
export default {
    props: {
        type:{
            style:String
        }
    },
    methods:{
        handleCancel(){
            this.$emit("on-cancel")
        },
        handleSave(){
            this.$emit("on-save")
        }
    }
}
</script>

<style lang="scss" scoped>
.base-btn {
  display: inline-block;
  margin-right: 15px;
}
.save {
  width: 75px;
  height: 36px;
  border-radius: 4px;
  background: #4A80F6;
  line-height: 36px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.cancel {
  width: 75px;
  height: 34px;
  color: #606266;
  line-height: 34px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #e5e7ef;
  cursor: pointer;
  background: #fff;
}
</style>