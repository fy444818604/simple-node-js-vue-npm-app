<!-- 资源平台 box -->
<template>
    <div class="res-box">
        <div class="res-bg">
            <div class="play-time">12集</div>
        </div>
        <div class="content">
            <div class="title text-overflow">让孩子爱读经典名著”的第著”的著”的一堂课</div>
            <div v-if="show" class="show">星期、季节、月份、国际通用的节假日、三餐、学科、语言、球类及棋类名词前用零冠词等等,并归纳总结了</div>
            <div class="info">
                <span>朱韶涵</span>
                <span class="watch-number">
                    <i class="icon-eyes iconfont"></i>358
                </span>
                <span>
                    <i class="icon-stars iconfont"></i>3.5
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show:Boolean
    }
}
</script>
<style lang="scss" scoped>
.res-box {
    padding: 0 1%;
    margin-bottom: 20px;
    .res-bg {
        cursor: pointer;
        height: 0;
        position: relative;
        top:0;
        border-radius: 8px;
        padding-bottom: 56%;
        background: url(./../assets/image/city-1.jpg) no-repeat;
        background-size: 100% 100%;
        transition: all .1s linear;
        .play-time {
            position: absolute;
            right: 10px;
            bottom: 10px;
            color: #fff;
            border-radius: 15px;
            padding: 1px 8px;
            background: rgba(0, 0, 0, 0.4);
        }
    }
    .res-bg:hover {
      top:-6px;
      
    }
    .content {
        .title {
            font-size: 16px;
            color: #333333;
            line-height: 40px;
            cursor: pointer;
        }
        .title:hover {color: #4A80F6}
        .show {
            color: #909399;
            font-size: 14px;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 0.5rem;
        }
        .info {
            font-size: 14px;
            span {
              color: #8F9399;
              i {vertical-align: middle;margin-right: 3px;color:#8F9399}
            }
            .watch-number {
                margin: 0 10px;
            }
        }
    }
}
</style>