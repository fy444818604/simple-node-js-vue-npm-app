<!-- 发现主页 -->
<template>
  <div class="discover">
    <div class="main-content">
      <res-search></res-search>
      <!-- 学校 -->
      <template>
        <div class="search-type">
          <div class="area">
            <span> 区域: 不限
                <i class="el-icon-arrow-down"></i>
            </span>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="district">
                    <span @click.stop="handleShowDis"> 学区: 不限
                        <i class="el-icon-arrow-down"></i>
                    </span>
            <div v-if="dropObj.district" v-clickOutSide="handleHideDrop">
              <el-scrollbar style="height:100%">
                <div v-for="n in 50" :key="n" class="item text-overflow">不限
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
      </template>

      <div class="res-boxs">
        <res-school v-for="i in 24" :key="i"></res-school>
      </div>
      <resPagination></resPagination>
    </div>
    <res-footer></res-footer>

    <!-- 侧边栏 -->
    <div class="nav">

      <div @click="handleSelectNav('school')" :class="{active:navSelect === 'school'}">
        <i class="icon-user iconfont"></i>
        <p>学校</p>
      </div>

      <div @click="handleSelectNav('teacher')" :class="{active:navSelect === 'teacher'}">
        <i class="icon-user iconfont"></i>
        <p>教师</p>
      </div>

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
    },
    data() {
        return {
            /* nav导航 school teacher*/
            navSelect: 'school',
            /* 下拉控制显示 */
            dropObj: {
                district: false,
                area: false
            }
        }
    },
    methods: {
        /* 显示学区下拉 */
        handleShowDis() {
            this.dropObj.district = true;
        },
        // 隐藏下拉
        handleHideDrop() {
            this.dropObj = {district: false};
        },
        // nav 选择
        handleSelectNav(type) {
            this.navSelect = type;
        }
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
      .district > div {
        width: 128px;
        height: 196px;
        position: absolute;
        top: 30px;
        left: 0;
        background: #fff;
        overflow: hidden;
        z-index: 998;
        box-shadow: 0 0 7.2px 0.8px rgba(0, 0, 0, .1);
      }
      .district > div .item {
        cursor: pointer;
        padding-left: 10px;
        line-height: 36px;
      }
      .district > div .item:hover {
        background: #f5f6f9;
        color: #2695ff
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
        & > div {
          width: 20%;
        }
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
  }
  .nav > div {
    text-align: center;
    color: #A9B6CB;
    cursor: pointer;
    margin: 15px 0;
    height: 80px
  }
  .nav > div p {
    color: #A9B6CB
  }
  .nav > div.active {
    i, p {
      color: #2695FF;
    }
  }
  .nav > div i {
    font-size: 30px;
  }
</style>
