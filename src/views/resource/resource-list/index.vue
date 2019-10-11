<!-- 资源主页面 -->
<template>
    <div class="resource">
            <div class="main-content">
                <res-search></res-search>
                <div class="search-type">
                    <div class="left">
                        <span @click="active='all'" :class="{active:active==='all'}">全部</span>
                        <span @click="active='sync'" :class="{active:active==='sync'}">同步课堂</span>
                    </div>
                    <div class="right">
                        <div class="type">
                            <span @click.stop="selectType=1">
                                不限类型
                                <i class="el-icon-arrow-down"></i>
                            </span>
                            <ul v-clickOutSide="handleHideSelect" v-if="selectType===1">
                                <li>不限类型</li>
                                <li>视频</li>
                                <li>文档</li>
                                <li>其他</li>
                            </ul>
                        </div>

                        <div class="status">
                            <span @click.stop="selectType=2">
                                最新
                                <i class="el-icon-arrow-down"></i>
                            </span>
                            <ul v-clickOutSide="handleHideSelect" v-show="selectType===2">
                                <li>最新</li>
                                <li>最热</li>
                                <li>评分</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="res-boxs">
                    <res-box v-for="i in 20" :key="i"></res-box>
                </div>
                <resPagination></resPagination>
            </div>
            <res-footer></res-footer>

        <!-- nav -->
        <div class="nav">
            <ul>
                <li @click.stop="handleSelectNav(0)" :class="{active:navSelect===0}">
                    <i class="icon-user iconfont"></i>
                    <p>全部</p>
                </li>
                <li @click.stop="handleSelectNav(1)" :class="{active:navSelect===1}">
                    <i class="icon-user iconfont"></i>
                    <p>学科</p>
                </li>
                <li @click.stop="handleSelectNav(2)" :class="{active:navSelect===2}">
                    <i class="icon-user iconfont"></i>
                    <p>活动</p>
                </li>
            </ul>
            <div v-clickOutSide="handleHideSubNav" v-if="(navSelect === 1 || navSelect === 2) && showSubNav" class="sub-nav">
              <div class="close"><i @click="showSubNav = false" class="iconfont icon-arrow-header"></i></div>
              <template v-if="navSelect === 1">
                <div class="sub">
                  <el-select value="全部学段" popper-class="popper" style="width:100%;margin-bottom:20px">
                    <el-option value="x" label="x"></el-option>
                  </el-select>
                  <el-select value="全部学科" popper-class="popper" style="width:100%">
                    <el-option value="x" label="x"></el-option>
                  </el-select>
                </div>
              </template>
              <template v-if="navSelect === 2">
                <ul class="active"> 
                  <li>安全教育</li>
                  <li>法制教育</li>
                  <li>艺术节</li>
                  <li>运动会</li>
                  <li>少先队活动</li>
                  <li>共青团活动</li>
                  <li>班会</li>
                </ul>
              </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        resBox: () => import("@/components/res-box"),
        resFooter: () => import("@/components/res-footer"),
        resPagination: () => import("@/components/res-pagination"),
        resSearch: () => import("@/components/res-search")
    },
    data() {
        return {
            selectType: 0, // 0-不限类型,2-最新
            navSelect:0, // 0-all,1-学科,2-活动
            active:'all', // all-全部课堂,sync-同步课堂
            showSubNav:true
        };
    },
    methods: {
        handleHideSelect() {
            this.selectType = 0;
        },

        /* 左边导航 */
        handleSelectNav(type) {
          this.navSelect = type
          this.showSubNav = true
        },
        handleHideSubNav(){
          this.showSubNav = false
        }

    }
};
</script>

<style lang="scss" scoped="scoped">
.resource {
    min-width: 1200px;
    background: #f5f6f8;
    overflow: hidden;
    position: relative;
    .main-content {
        width: 81.6%;
        margin: 0 auto;
    }
    .search-type {
        padding: 0 0.8%;
        display: flex;
        justify-content: space-between;
        .left span {
                display: inline-block;
                background: #dcdee3;
                border-radius: 15px;
                padding: 5px 10px;
                margin-right: 15px;
                cursor: pointer;
                &.active {
                    color: #ffffff;
                    background: #8f9399;
                }
        }

        .right {
            & > div {
                display: inline-block;
                position: relative;
                margin-left: 30px;
                span {
                    cursor: pointer;
                    color: #606166;
                }
                ul {
                    position: absolute;
                    z-index: 998;
                    left: 0;
                    top: 2rem;
                    background: #fff;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
                    li {
                        line-height: 42px;
                        padding-left: 18px;
                        width: 120px;
                        cursor: pointer;
                        color: #606266;
                        &:hover {
                            background: #f3f3f3;
                        }
                    }
                }
            }
        }
    }
    .res-boxs {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > div {
            width: 20%;
        }
        @media screen and (max-width: 1520px) {
            & > div {
                width: 25%;
            }
        }
    }

    .nav {
        position: fixed;
        left: 0; top: 60px;
        bottom: 0; width: 80px;
        background: #181a1e;
        & > ul li { height: 80px; text-align: center;
          padding: 15px 0; cursor: pointer;
          p {color: #a9b6cb}
          &.active { background: #22272d; i, p { color: #2695ff; } }
          i { font-size: 30px; }
        }
        .sub-nav {
          position: absolute;
          left: 80px; top: 0;
          bottom: 0; width: 260px;
          background: #22272d;
          .close {
            text-align: right; padding: 10px;
            i {
              color: #8495AD; transform:rotate(180deg);
              display: inline-block; cursor: pointer;
            }
          }
          .sub { padding: 20px; }
          .active {
            padding: 20px;
            li {
              height: 52px; line-height: 52px;
              text-align: center; cursor: pointer;
              color: #A9B6CB;
              &:hover {
                background: rgba(169, 182, 203, 0.1);
                border-radius: 6px;
                color: #2695FF;
              }
            }
          }
        }
    }
}
</style>
<style>
.resource .el-input__inner {
  background: #22272D;
  border:1px solid rgba(172, 172, 172, 0.5);
}
</style>