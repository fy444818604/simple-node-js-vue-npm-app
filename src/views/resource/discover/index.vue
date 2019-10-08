<!-- 发现主页 -->
<template>
    <div class="discover">
        <div class="main-content">
            <res-search></res-search>
            <div class="search-type">
                <div class="area">
                    <span>区域: 不限  <i class="el-icon-arrow-down"></i></span>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="district">
                    <span>区域: 不限  <i class="el-icon-arrow-down"></i></span>
                </div>
            </div>
            <div class="res-boxs">
                <res-school v-for="i in 24" :key="i"></res-school>

            </div>
            <resPagination></resPagination>
        </div>
        <res-footer></res-footer>
    </div>
</template>

<script>
export default {
    components: {
        resSearch: () => import("@/components/res-search"),
        resFooter: () => import("@/components/res-footer"),
        resPagination:()=>import("@/components/res-pagination"),
        resSchool:()=>import("@/components/res-school")
    }
};
</script>

<style lang="scss" scoped="scoped">
.discover {
    min-width: 1200px;
    background: #F5F6F8;
    overflow: hidden;
    .main-content {
        width: 80%;
        margin: 0 auto;
    }
    .search-type {
        display: flex;
        span {
            cursor: pointer;
        }
        .area {
            position: relative;
        }
        .district {
            position: relative;
            margin-left: 30px;
        }
    }
    .res-boxs {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &>div:nth-child(6n+1) {
            margin-left: 0;
        }
    }
}
</style>
