<!--分页-->
<template>
    <div class="paging">
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageTotal">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "paging",
    data(){
        return{
            currentPage: 1,
        }
    },
    props:['pageTotal'],
    created() {

    },
    methods: {
        handleSizeChange(val) {//每页显示多少条
            this.$emit('handleSizeChange',val)
        },
        handleCurrentChange(val) {//当前页
            this.$emit('handleCurrentChange',val)
        }
    }
}
</script>

<style scoped>

</style>
