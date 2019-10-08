<!-- 资源平台首页 -->
<template>
    <div class="res-index">
        <!-- 轮播 -->
        <el-carousel class="base-carousel" height="360px">
            <el-carousel-item>
                <div class="banner-1"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="banner-2"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="banner-3"></div>
            </el-carousel-item>
        </el-carousel>
        <!-- tips -->
        <div class="tips">
            <div class="tip-content">
                <resTip class="tip-1">
                    <div class="item">
                        <p>2000</p>
                        <p>总计访问量</p>
                    </div>
                </resTip>
                <resTip class="tip-2">
                    <div class="item">
                        <p>200,585,51</p>
                        <p>资源总数</p>
                    </div>
                </resTip>
                <resTip class="tip-3">
                    <div class="item">
                        <p>+84</p>
                        <p>本周新增</p>
                    </div>
                </resTip>
                <resTip class="tip-4">
                    <div class="item">
                        <p>
                            <i class="iconfont icon-upload-cloud"></i> 上传资源
                        </p>
                    </div>
                </resTip>
            </div>
        </div>
        <div class="recommend">
            <div class="recommend-content content-center">
                <res-title title="精品推荐"></res-title>
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
        </div>
        <div class="latest">
            <div class="latest-content content-center">
                <res-title title="最新资源"></res-title>
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
        </div>
        <div class="popular">
            <div class="popular-content content-center">
                <res-title title="热门资源"></res-title>
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
        </div>
        <div class="album">
            <div class="album-content content-center">
                <res-title title="精选专辑"></res-title>
                <res-box show></res-box>
                <res-box show></res-box>
                <res-box show></res-box>
                <res-box show></res-box>
            </div>
        </div>
        <div class="sync">
            <div class="sync-content content-center">
                <res-title title="同步课堂"></res-title>
                <res-box></res-box>
                <res-box></res-box>
                <res-box></res-box>
                <res-box></res-box>
                <res-box></res-box>
            </div>
        </div>
        <res-footer></res-footer>
    </div>
</template>

<script>
export default {
    components: {
        resTip: () => import("@/components/res-tip"),
        resTitle: () => import("@/components/res-title"),
        resBox: () => import("@/components/res-box"),
        resFooter: () => import("@/components/res-footer")
    }
};
</script>

<style lang="scss" scoped="scoped">
.content-center {
    width: 81.6%;
    margin: 0 auto;
}

.res-index {
    min-width: 1200px;

    .base-carousel {
        .banner-1 {
            width: 100%;
            height: 100%;
            background: url(./../../../assets/image/banner-test-1.jpg) no-repeat;
            background-size: 100% 100%;
        }
        .banner-2 {
            width: 100%;
            height: 100%;
            background: url(./../../../assets/image/banner-test-2.jpg) no-repeat;
            background-size: 100% 100%;
        }
        .banner-3 {
            width: 100%;
            height: 100%;
            background: url(./../../../assets/image/banner-test-3.jpg) no-repeat;
            background-size: 100% 100%;
        }
    }

    .tips {
        .tip-content {
            width: 82%;
            margin: 30px auto;
            display: flex;
            justify-content: space-between;
            & > div {
                width: 23%;
            }
            .item {
                p {
                    color: #fff;
                    &:first-child {
                        font-size: 26px;
                        font-weight: bold;
                    }
                    &:last-child {
                        font-size: 16px;
                    }
                }
            }

            .tip-1 {
                background: url(./../../../assets/image/res-index-1.png)
                    no-repeat;
                background-size: 100% 100%;
            }
            .tip-2 {
                background: url(./../../../assets/image/res-index-2.png)
                    no-repeat;
                background-size: 100% 100%;
            }
            .tip-3 {
                background: url(./../../../assets/image/res-index-3.png)
                    no-repeat;
                background-size: 100% 100%;
            }
            .tip-4 {
                background: #409fff;
            }
        }
    }

    .recommend {
        padding-bottom: 30px;

        .recommend-content {
            display: flex;
            flex-wrap: wrap;
            & > div:not(:first-child) {
                width: 25%;
            }
            @media screen and (min-width: 1520px) {
                & > div:not(:first-child) {
                    width: 20%;
                }
            }
        }
    }

    .latest {
        background: #f7f8fb;
        padding-bottom: 30px;

        .latest-content {
            display: flex;
            flex-wrap: wrap;
            & > div:not(:first-child) {
                width: 25%;
            }
            @media screen and (min-width: 1520px) {
                & > div:not(:first-child) {
                    width: 20%;
                }
            }
        }
    }

    .popular {
        padding-bottom: 30px;

        .popular-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            & > div:not(:first-child) {
                width: 20%;
            }
        }
    }

    .album {
        background: #f7f8fb;
        padding-bottom: 30px;

        .album-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            & > div:not(:first-child) {
                width: 25%;
            }
        }
    }

    .sync {
        padding-bottom: 30px;

        .sync-content {
            display: flex;
            flex-wrap: wrap;
            & > div:not(:first-child) {
                width: 25%;
            }
            @media screen and (min-width: 1520px) {
                & > div:not(:first-child) {
                    width: 20%;
                }
            }
        }
    }
}
</style>
