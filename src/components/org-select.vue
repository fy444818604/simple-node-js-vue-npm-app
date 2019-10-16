<!-- 机构下拉框组件 -->
<template>
    <div>
        <el-input
                v-model="showText"
                placeholder="请选择或输入"
                @focus="isShow(true)">
            <i slot="suffix" @click="isShow(!orgSelectIsShow)" class="iconfont icon-apartment"></i>
        </el-input>
        <div class="el-div-tree" v-if="orgSelectIsShow">
            <el-tree
                    @node-click="nodeSelect"
                    class="filter-tree"
                    :props="defaultProps"
                    :filter-node-method="filterNode"
                    ref="orgSelect"
                    :data="orgData">
            </el-tree>
        </div>
    </div>
</template>

<script>
export default {
    name: 'org-select',
    props: {
        rootId: String, // 树的根节点id
        initText: String, // 初始显示文字
        refreshText: Boolean,
        onlyOrg:Number
    },
    data() {
        return {
            // 机构下拉的数据
            orgData: [],
            // 机构下拉的数据格式定义
            defaultProps: {
                children: 'children',
                label: 'displayName',
                // isLeaf: 'isLeaf'
            },
            orgSelectIsShow: false,
            // 默认显示值
            showText: "",
            defaultText: "",
            orgId:"",
            onlyOrgT:1,
        }
    },
    watch: {
        showText(val) {
            if (this.$refs.orgSelect) {
                this.$refs.orgSelect.filter(val);
            }
        },
        // initText(val) {
        //     this.showText = val;
        // },
        refreshText() {
            this.defaultText = this.initText;
            this.showText = this.initText;
        },
        rootId() {
            this.queryOrg();
        }
    },
    created: function() {
        if(this.onlyOrg != undefined){
            this.onlyOrgT = 0;
        }
        this.queryOrg();
    },
    methods: {
        //查询机构
        queryOrg(){
            let params = {
                level : 0,
                onlyOrg :this.onlyOrgT,
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
            this.$emit('node-select', value, ret => {
                if (ret) { // 回调结果为true，才选中成功
                    this.showText = value.displayName;
                    this.defaultText = this.showText;
                    this.orgId = value.id;
                    this.isShow(!this.orgSelectIsShow);
                }
            });
        },
        //过滤节点
        filterNode(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
        // 显示切换
        isShow(val){
            this.orgSelectIsShow = val;
            if (!this.orgSelectIsShow) {
                this.showText = this.defaultText;
            }
        }
    }
}
</script>
<style scoped="scoped">
    .el-div-tree{
        position: absolute;
        top:45px;
        width: 100%;
        background-color: #fff;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 9999999;
        overflow: auto;
        max-height: 130px;
    }
</style>
