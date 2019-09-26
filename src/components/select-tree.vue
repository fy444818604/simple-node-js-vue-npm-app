<!-- 下拉框 选择树 -->
<template>
  <div class="select-tree">
    <div @click.stop="handleShowSelect" class="select-item">{{currentSelect}}</div>
    <div v-clickOutSide="handleHideSelect" class="lists" v-show="isShow">
      <div class="filter-input">
        <el-input v-model="filterText"></el-input>
      </div>
      <el-scrollbar style="height:200px">
        <div class="list-tree">
            <el-tree
              @node-click="handleSelect"
              class="filter-tree"
              :data="treeList"
              :props="defaultProps"
              :filter-node-method="filterNode"
              ref="tree"
              >
            </el-tree>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    treeList:Array,
    currentSelect:String,
    defaultProps:{
      type: Object,
      default:function(){
        return { children: "children", label: "label"}
      }
    }
  },
  data(){
    return {
      isShow:false,
      filterText:'',
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods:{
    handleSelect(value){
      if(!value.children) {
        this.handleHideSelect()
        this.$emit("on-change",value)
      }
    },
    handleHideSelect(){
      this.isShow = false
    },
    handleShowSelect(){
      this.isShow = true
    },
    filterNode(value, data) {
      if (!value) return true;
      // console.log(data);
      return data.label.indexOf(value) !== -1;
    },
  }
}
</script>
<style lang="scss" scoped>
.select-tree {
  margin-left: 22px;
  position: relative;
  .select-item {
    cursor: pointer;
    color: #606266;
  }
  .lists {
    z-index: 999;
    position: absolute;
    left: 0;
    top: 30px;
    border-radius: 4px;
    border: 1px solid rgba(204, 204, 204, 0.671);
    background: #fff;
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.1);
    .filter-input {
      padding: 5px;
    }
    .list-tree {
      width: 254px;
    }
  }
}
</style>
<style>
.select-tree .el-tree { margin-top: 5px; background: #fff}
</style>