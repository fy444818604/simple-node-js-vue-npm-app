<!-- 专辑详情 -->
<template>
    <div class="introduce">
        <div class="intro-main">
            <div class="content">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>专辑</el-breadcrumb-item>
                    <el-breadcrumb-item>七年级上册系列</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="bottom">
                    <div class="cover">
                        <div class="bg"></div>
                    </div>
                    <div class="info">
                        <div class="title">七年级上册数学实例举一反三系列</div>
                        <div class="auth">
                            <span>杨皓塔</span>
                            <span>|</span>
                            <span>成都树德中学</span>
                        </div>
                        <div class="basic-info">
                            <span class="time">2019-10-20</span>
                            <span> <i class="iconfont icon-stars"></i> 4.7</span>
                            <span> <i class="iconfont icon-eyes"></i>2582</span>
                            <span> <i class="iconfont icon-heart"></i>收藏</span>
                        </div>
                        <div class="intro">
                            <span>
                                简介
                                <i class="el-icon-arrow-down"></i>
                            </span>
                            <p
                                class="p-overflow"
                            >他他入入境管他入入境管制名单他入入境管制名单他入入境管制名单制名单他入入境管他入入境管制名单他入入境管制名单他入入境管制名单制名单他入入境管他入入境管制名单他入入境管制名单他入入境管制名单制名单他入入境管他入入境管制名单他入入境管制名单他入入境管制名单制名单入入境管他入入境管制名单他入入境管制名单他入入境管制名单制名单。
                          
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="recommend">
            <div class="content">
                <div class="title">共计资源112</div>
                <div class="rec-lists">
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                    <res-box></res-box>
                </div>
                <resPagination></resPagination>
            </div>
        </div>

        <res-footer class="footer"></res-footer>
    </div>
</template>

<script>
export default {
    components: {
        resBox: () => import("./../../../components/res-box"),
        resFooter: () => import("@/components/res-footer"),
        resPagination:()=>import("@/components/res-pagination")
    }
};
</script>

<style lang="scss" scoped>
.introduce {
    min-width: 1200px;
    overflow: hidden;
    .intro-main {
        background: #fff;
        padding-bottom: 30px;
        margin-top: 10px;
        .content {
            width: 80%;
            margin: 0 auto ;
            padding-top: 30px;
            padding-bottom: 30px;
            .bottom {
                display: flex;
                margin-top: 30px;
                .cover {
                    width: 520px;
                    min-width: 520px;
                    .bg {
                        border-radius: 10px;
                        width: 100%;
                        height: 290px;
                        background: url("./../../../assets/image/city-1.jpg")
                            no-repeat;
                        background-size: 100% 100%;
                    }
                }
                .info {
                    margin-left: 30px;
                    width: 50%;
                    .title {
                        font-size: 22px;
                        color: #333;
                    }
                    .auth {
                        margin-top: 15px;
                        span {
                            color: #909399;
                            line-height: 1;
                            &:nth-child(2) {
                                margin: 0 10px;
                            }
                        }
                    }
                    .basic-info {
                        margin-top: 15px;
                        span {
                            color: #909399;
                            margin-right: 30px;
                        }
                    }
                    .intro {
                        margin-top: 30px;
                        position: relative;
                        padding: 20px 15px 10px;
                        border: 1px solid rgba(144, 147, 153, 0.2);
                        border-radius: 4px;

                        p {
                            text-align: justify;
                            line-height: 24px;
                            min-height: 130px;
                        }
                        span {
                            position: absolute;
                            width: 4rem;
                            background: #fff;
                            top: -0.8rem;
                            color: #909399;
                            font-size: 16px;
                            i {
                                color: #909399;
                            }
                        }
                    }
                }
            }
        }
    }

    .recommend {
        background: #f3f5f7;
        .content {
            .title {
              width: 80%;
              line-height: 22px;
              color: #333333;
              font-size: 16px;
              padding: 20px 0;
              margin: 0 auto;
            }
            .rec-lists {
                width: 81.6%;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                & > div{
                    width: 25%;
                }
                @media screen and (min-width: 1520px) {
                    & > div  {
                        width: 20%;
                    }
                }
            }
        }
    }

    .footer {
      background: #F3F5F7;
    }
}
</style>