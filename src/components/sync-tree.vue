<!--同步课堂tree-->
<template>
  <el-tree
    class="sync-tree"
    :data="data" 
    :props="defaultProps" 
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
export default {
  data(){
    return {
      defaultProps: {
        children: 'children',
        label: 'label',
        value:'value'
      },
      data:[
        {
          label:'成都市教育局',
          value:'1',
          children:[
            {
              label:'成都四中',
              value:'1-1',
            },
            {
              label:'成都七中',
              value:'1-2',
            },
            {
              label:'成都九中',
              value:'1-3',
            }
          ]
        },
        {
          label:'雅安市教育局',
          value:'2',
          children:[
            {
              label:'雅安四中'
            },
            {
              label:'雅安七中'
            },
            {
              label:'雅安九中'
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleNodeClick(data){
      console.log(data);
    }
  }
}
</script>

<style lang="scss">
.sync-tree.el-tree {
  background: #fff;
}
</style>