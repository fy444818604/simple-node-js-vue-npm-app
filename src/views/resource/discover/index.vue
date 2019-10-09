<!-- 发现主页 -->
<template>
    <div class="discover">
        <div class="main-content">
            <res-search></res-search>
            <div class="search-type">
                <div class="area">
                    <span>
                        区域: 不限
                        <i class="el-icon-arrow-down"></i>
                    </span>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="district">
                    <span>
                        区域: 不限
                        <i class="el-icon-arrow-down"></i>
                    </span>
                </div>
            </div>
            <div class="res-boxs">
                <res-school v-for="i in 24" :key="i"></res-school>
            </div>
            <resPagination></resPagination>
        </div>
        <res-footer></res-footer>

        <!-- 侧边栏 -->
        <div class="nav">
          <div class="active"><i class="icon-user iconfont"></i><p>学校</p></div>
          <div><i class="icon-user iconfont"></i><p>教师</p></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        resSearch: () => import("@/components/res-search"),
        resFooter: () => import("@/components/res-footer"),
        resPagination: () => import("@/components/res-pagination"),
        resSchool: () => import("@/components/res-school")
    }
};
</script>

<style lang="scss" scoped="scoped">
.discover {
    min-width: 1200px;
    background: #f5f6f8;
    overflow: hidden;
    position: relative;
    .search-type {
        width: 80%;
        margin: 0 auto;
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
        width: 81.6%;
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        & > div {
            width: 25%;
        }
        @media screen and (min-width: 1520px) {
            & > div{
                width: 20%;
            }
        }
    }

    .nav {
      position: fixed;
      left: 0;
      top: 60px;
      bottom: 0;
      width: 80px;
      background: #181A1E;
      div {
        text-align: center;
        color: #A9B6CB;
        cursor: pointer;
        margin: 20px 0;
        i {
          font-size: 30px;
        }
        &.active {
          i,p{
            color: #2695FF;
          }
        }
      }
    }
}
</style>
