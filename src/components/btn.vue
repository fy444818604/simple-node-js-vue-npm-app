<template>
  <div class="base-btn" :style="styleObj" @click="handleControl">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    radius:{
      type:String,
      default:"4px"
    },
    width:{
      type:String,
      default:"75px"
    },
    height: {
      type:String,
      default:"36px"
    },
    border:{
      type:String
    },
    color:{
      type:String,
      default:"#fff"
    },
    bg:{
      type:String,
      default:"#4A80F6"
    },
    fs:{
      type:String,
      default:"14px"
    }
  },
  data(){
    return {
      styleObj:{
        width:this.width,
        height:this.height,
        border:this.border,
        color:this.color,
        background:this.bg,
        borderRadius:this.radius,
        lineHeight:this.height,
        fontSize:this.fs
      }
    }
  },
  methods:{
    handleControl(){
      this.$emit("on-change")
    }
  }
}
</script>

<style lang="scss" scoped>
.base-btn {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin-right: 15px;
}
</style>