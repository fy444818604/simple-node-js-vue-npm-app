<template>
    <div class="res-page">
        <span>首页</span>
        <el-pagination layout="prev, pager, next" next-text="下一页" prev-text="上一页" :total="100">
        </el-pagination>
        <span>尾页</span>
    </div>
</template>

<script>
export default {};
</script>

<style>
.res-page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
}
.res-page > span {
    cursor: pointer;
    font-size: 13px;
    position: relative;
    top: -2px;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
    background: none;
}
.el-pagination button:disabled {
    background: none;
}
.el-pager li {
    background: none;
    height: 32px;
    width: 32px;
    min-width: 32px;
    line-height: 32px;
    border-radius: 50%;
    padding: 0;
}
.el-pager li.active {
    color: #fff;
    background: #8f9399;
}
.el-pager li:hover {
    color: #8F9399;
    background: rgba(143, 147, 153, 0.2);
}
</style>