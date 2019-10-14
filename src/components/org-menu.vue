<!-- 机构菜单组件 -->
<template>
    <el-dropdown trigger="click" placement="bottom">
                                <span class="el-dropdown-link">
                                    {{currentSelectText}}<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
        <el-dropdown-menu slot="dropdown">
            <el-input v-model="filterText">
            </el-input>
            <el-tree
                    @node-click="nodeSelect"
                    style="width:250px"
                    class="filter-tree"
                    :data="orgData"
                    :props="defaultProps"
                    :filter-node-method="filterNode"
                    ref="tree">
            </el-tree>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'org-menu',
    props: {
        rootId: String // 树的根节点id
    },
    data() {
        return {
            // 机构下拉菜单的数据
            orgData: [], 
            // 机构下拉菜单的数据格式定义
            defaultProps: {
                children: 'children',
                label: 'displayName',
                // isLeaf: 'isLeaf'
            },
            // 下拉菜单显示值
            currentSelectText: "请选择机构",
            // 过滤字段
            filterText: ''
        }
    },
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    created: function() {
        this.queryOrg();
    },
    methods: {
        //查询机构
        queryOrg(){
            let params = {
                level : 0,
                onlyOrg :1,
                parentId : this.rootId
            };
            this.$api.institutions(params).then(res => {
                if(res.success === true){
                    // this.areaList = res.data;
                    if (res.data.length > 0) {
                        // res.data.forEach((item) => {
                        //     item.isLeaf = !item.next; // 是否是叶子节点
                        // });
                        this.orgData = res.data;
                    }
                }
            })
        },
        //节点选中事件
        nodeSelect: function(value) {
            this.currentSelectText = value.displayName;
            this.$emit('node-select', value);
        },
        //过滤节点
        filterNode(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
    }
}
</script>

<style scoped="scoped">
</style>
