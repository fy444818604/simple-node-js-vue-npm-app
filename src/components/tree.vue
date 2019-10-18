<template>
    <div class="tree">
        <div class="tree-top">
            <el-tree :data="treeData" :props="defaultProps" default-expand-all :expand-on-click-node="false"  @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="tree-bnt">
            <el-switch
                    v-model="stateSwitch"
                    active-color="#4a80f6"
                    inactive-color="#BABABA"
                    @change="switchChange">
            </el-switch>
        </div>
    </div>
</template>
<script>
export default {
    name:'tree',
    props: ['treeData','defaultProps'],
    data() {
        return {
            stateSwitch:false,

        };
    },
    methods: {
        handleNodeClick(data) {
            this.$emit("list-Tree",data)
        },
        switchChange(val){ //开关监听
            this.$emit("tree-switch",val)
        }
    }
};
</script>

<style scoped>
    .tree{
        height: 100%;
        border-right:1px solid #e5e7ef ;
        background: #F9FBFC;
    }
    .tree-top{
        height: calc(100% - 44px);
        padding-top: 8px;
        padding-left: 5px;
        overflow: auto;
    }
    .tree-bnt{
        height: 44px;
        line-height: 44px;
        text-align: center;
    }
</style>
