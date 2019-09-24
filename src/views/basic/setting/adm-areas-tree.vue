<!--下拉框的树-->
<template>
    <div class="tree">
            <el-tree :data="data" :props="defaultProps" default-expand-all :expand-on-click-node="false"   @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        name:'adm-areas-tree',
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                this.$emit('superiorData',data.label)

            }
        }
    };
</script>

<style scoped>
    .tree{
        height: 100%;
        border-right:1px solid #e5e7ef ;
        background: #fff;
    }

</style>
