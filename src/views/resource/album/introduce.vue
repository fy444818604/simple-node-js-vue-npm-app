<!-- 资源详情 -->
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
                        <span>4.7</span>
                        <span>2582</span>
                        <span>收藏</span>
                    </div>
                    <div class="intro">
                        <span>简介<i class="el-icon-arrow-down"></i> </span>
                        <p class="p-overflow">上月中旬，香港海关在机场搜查一名抵港的台湾男子，在他身上搜到面罩、滤罐、胡椒喷雾及“光复香港”的贴纸等，后交给负责反恐情报的警方保安科跟进调查。9月，香港海关又在机场搜查3名抵港的台湾男子，在他们身上查获一批面罩、滤罐和眼罩等物资，已将其数据交给入境处，可能将列入入境管制名单。上月中旬，香港海关在机场搜查一名抵港的台湾男子，在他身上搜到面罩、滤罐、胡椒喷雾及“光复香港”的贴纸等，后交给负责反恐情报的警方保安科跟进调查。9月，香港海关又在机场搜查3名抵港的台湾男子，在他们身上查获一批面罩、滤罐和眼罩等物资，已将其数据交给入境处，可能将列入入境管制名单。上月中旬，香港海关在机场搜查一名抵港的台湾男子，在他身上搜到面罩、滤罐、胡椒喷雾及“光复香港”的贴纸等，后交给负责反恐情报的警方保安科跟进调查。9月，香港海关又在机场搜查3名抵港的台湾男子，在他们身上查获一批面罩、滤罐和眼罩等物资，已将其数据交给入境处，可能将列入入境管制名单。</p>
                    </div>
                </div>
            </div>
          </div>
      </div>

      <div class="recommend">
          <div class="title">

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.introduce {
    min-width: 1200px;
    .intro-main{
        background: #fff;
        padding-bottom: 30px;
        .content {
            width: 80%;
            margin: 0 auto;
            .bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                .cover {
                    width: 49%;
                    border-radius: 10px;
                    overflow: hidden;
                    .bg {
                        height: 0;
                        padding-bottom: 60%;
                        background: url('./../../../assets/image/city-1.jpg') no-repeat;
                        background-size: 100% 100%;
                    }
                }
                .info {
                    width: 49%;
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
                        border: 1px solid rgba(144, 147, 153,.2);
                        border-radius: 4px;
                        
                        p {
                            text-align: justify;
                            line-height: 24px;
                        }
                        span {
                            position: absolute;
                            width: 4rem;
                            background: #fff;
                            top: -.8rem;
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
}
</style>