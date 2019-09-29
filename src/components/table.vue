<!--base-table-->
<template>
  <el-table class="base-table" :data="customData" style="width: 100%" :stripe="stripe">
    <el-table-column
      v-if="showSelect"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      v-for="item in tableColumn"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :align="item.align"
      empty-text="暂无数据"
      >
    </el-table-column>
    <el-table-column
      align="center"
      width="60"
      label="操作">
      <template slot-scope="scope">
        <div class="tableColumn-control">
          <i v-if="!scope.row.showBtn" @mouseenter="handleMouseEnter(scope.row)" class="iconfont icon-more"></i>
          <div :class="{single:single}" v-else @mouseleave="handleMouseLeave(scope.row)">
            <span v-if="!single" @click="handleStop(scope.row)">停用</span>
            <span @click="handleEdit(scope)">编辑</span>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    tableData: {
      type:Array,
      required:true
    },
    /* 数组里面对象，需要传递prop,label */
    tableColumn: {
      type:Array,
      required:true
    },
    stripe: {
      type:Boolean,
      default: true
    },
    showSelect:Boolean,
    single:Boolean
  },
  data(){
    return {
      customData:[]
    }
  },
  watch:{
    tableData:{
      handler:function(val){
        this.initTable(val);
      },
      immediate:true
    }
  },
  methods:{
    /* 初始化 table add showBtn */
    initTable(table){
      const temp = table.map(item=>Object.assign({},item,{showBtn:false}))
      this.customData = [...temp]
    },
    /* 鼠标移入移除 */
    handleMouseEnter(row){
      row.showBtn = true
      this.customData = [...this.customData]
    },
    handleMouseLeave(row){
      row.showBtn = false
      this.customData = [...this.customData]
    },
    handleStop(row){
      this.$emit("on-stop",row)
    },
    handleEdit(row){
      this.$emit("on-edit",row)
    },
  }

}
</script>

<style lang="scss" scoped>
  .base-table {
    .tableColumn-control {
      height: 50px;
      line-height: 50px;
      i {
        color: #487ff6;
        cursor: pointer;
      }
      span {
        display: inline-block;
        cursor: pointer;
        &:last-child {
          color: #487ff6;
          margin-left: 10px;
        }
      }
      div {
        text-align: center;
        background: #D0E9FF;
        position: absolute;
        z-index: 999;
        left: -40px;
        top: 0;
        width: 100px;
        &.single {
          width: 60px;
          left: 0;
          span {
            margin-left: 0px;
          }
        }
      }
    }
 }
</style>
<style>
.base-table.el-table td { padding: 0; }
</style>
