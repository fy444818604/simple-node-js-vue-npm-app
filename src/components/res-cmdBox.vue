<!-- 评论box -->
<template>
    <div class="comment-box">
        <div class="avatar">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt />
        </div>
        <div class="info">
            <div class="name">
                <span>黄西如</span>
                <el-rate disabled v-model="value1"></el-rate>
            </div>
            <p class="content">
                老师介绍的很详细，但是第二段的旁白不明白？
                老师介绍的很详细，但是第二段的旁白不明白？
                老师介绍的很详细，但是第二段的旁白不明白？
                老师介绍的很详细，但是第二段的旁白不明白？
            </p>
            <div class="time">
                <span>2019-05-25</span>
                <i class="iconfont icon-initiate"></i>
            </div>
            <!-- 点击评论 -->
            <template v-if="false">
                <div class="repeat">
                  <el-input
                    resize="none"
                    type="textarea"
                    v-model="text"
                    maxlength="200"
                  ></el-input>
                  <div class="repeat-btn">回复</div>
                </div>
            </template>
            <!-- 若有二级评论 -->
            <template v-if="false">
                <div class="sub-comment">
                    <div v-for="n in 2" :key="n" class="item">
                        <div class="sub-avatar">
                            <img
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                alt
                            />
                        </div>
                        <div class="sub-info">
                            <div class="name">林明皓</div>
                            <div
                                class="content"
                            >回复 李胜利：先看第一段再看联系第二段看容易理解一些先看第一段再看联系第二段看容易理解一些先看第一段再看联系第二段看容易理解一些先看第一段再看联系第二段看容易理解一些</div>
                            <div class="time">
                                <span>2019-05-25</span>
                                <i class="iconfont icon-initiate"></i>
                            </div>
                            <!-- 点击评论 -->
                            <template v-if="true">
                                <div class="repeat">
                                  <el-input
                                    resize="none"
                                    type="textarea"
                                    v-model="text"
                                    maxlength="200"
                                  ></el-input>
                                  <div class="repeat-btn">回复</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 3,
            text:''
        };
    }
};
</script>

<style lang="scss" scoped>
.comment-box {
    display: flex;
    margin-top: 30px;
    .avatar {
        width: 48px;
        height: 48px;
        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }
    .info {
        margin-left: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid #e0e4eb;
        .name {
            display: flex;
            & > span {
                margin-right: 20px;
                color: #303133;
            }
        }
        .content {
            color: #606266;
            margin: 20px 0;
        }
        .time {
            display: flex;
            align-items: center;
            line-height: 24px;
            span {
                color: #606266;
                display: inline-block;
                color: inherit;
                width: 120px;
            }
            i {
                margin-left: 50px;
                font-size: 20px;
                color: inherit;
                cursor: pointer;
            }
        }
        .repeat {
          margin-top: 10px;
          text-align: right;
          .repeat-btn {
            display: inline-block;
            margin-top: 10px;
            cursor: pointer;
            width: 100px;
            height: 36px;
            background: #EBEBEB;
            color: #909399;
            line-height: 36px;
            text-align: center;
            border-radius: 4px;
          }
        }

        .sub-comment {
            position: relative;
            margin-top: 25px;
            padding: 20px 30px 0;
            width: 100%;
            border-radius: 8px;
            background: rgba(242, 243, 244, 0.8);
            & > div:last-child {
                border-bottom: none;
            }
            .item {
                display: flex;
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e0e4eb;
                .sub-avatar {
                    width: 48px;
                    height: 48px;
                    img {
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                    }
                }
                .sub-info {
                    flex: 1;
                    margin-left: 20px;
                    .time {
                        i {
                            margin-left: 0;
                        }
                    }
                }
            }
        }
        .sub-comment::before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border: 20px solid transparent;
            border-bottom-color: rgba(242, 243, 244, 0.8);
            //  background: rgba(242, 243, 244, 0.8);
            left: 30px;
            top: -30px;
        }
    }
}
</style>