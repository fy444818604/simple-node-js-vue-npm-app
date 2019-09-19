<!--base-table-->
<template>
  <el-table class="base-table" :data="customData" style="width: 100%" :stripe="stripe">
    <el-table-column
      align="center"
      v-for="item in tableColumn" 
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      >
    </el-table-column>
    <el-table-column
      align="center"
      label="操作">
      <template slot-scope="scope">
        <div class="tableColumn-control">
          <i v-if="!scope.row.showBtn" @click.stop="hanldeChange(scope.row)" class="iconfont icon-more"></i>
          <div v-else>
            <el-button @click="handleStop(scope.row)" type="text" size="small">停用</el-button>
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
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
    }
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
  mounted(){
    let that = this;
    window.addEventListener("click",function(){
      const temp = that.customData.map(item => {
        return Object.assign({},item,{showBtn:false})
      })
      that.customData = [...temp]
    })
  },
  methods:{
    /* 对table数组对象添加showBtn属性 */
    initTable(table){
      table.forEach(element => {
        element.showBtn = false;
      });
       this.customData =  table;
    },
    formatShowBtn(val,row){
      this.customData.filter(item => item.id === row.id)[0].showBtn = val
      this.customData = [...this.customData]
    },
    hanldeChange(row){
      this.customData.forEach(item=>item.showBtn = false)
      this.formatShowBtn(true,row)
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
      button {
        &:first-child {
          color: #606266;
        }
      }
      div {
        background: #D0E9FF;
      }
    }
 }
</style>
<style>
.base-table.el-table td { padding: 0; }

</style>