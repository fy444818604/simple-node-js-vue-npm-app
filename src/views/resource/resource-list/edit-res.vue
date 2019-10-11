<!-- 编辑知识点 -->
<template>
    <div class="edit-res">
        <div class="main">
            <div class="video-info">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>我的资源</el-breadcrumb-item>
                    <el-breadcrumb-item>编辑知识点</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="title">初中数学教学大纲与初中数学知识点总结</div>
                <div class="desc">初中 一年级上册 有理数</div>

                <div class="main-video-content-video">
                    <div class="left">
                        <div class="video-wrap">
                            <video
                                ref="videoSource"
                                controls
                                style="width:100%;height:100%;object-fit:cover;outline: none"
                                src="./../../../assets/movie.mp4"
                            ></video>
                        </div>
                        <div class="video-control">
                            <div>
                                <i class="iconfont icon-eyes"></i> 135
                            </div>
                            <div>
                                <i class="iconfont icon-arrow-1"></i> 下载
                            </div>
                            <div>
                                <i class="iconfont icon-heart"></i> 收藏
                            </div>
                            <div>
                                <i class="iconfont icon-share"></i> 分享
                            </div>
                            <div>
                                <i class="iconfont icon-stars"></i> 4.7
                            </div>
                        </div>
                    </div>
                    <div class="right">
                      <div class="title">知识点4</div>
                      <el-scrollbar>
                        <!-- 有知识点 -->
                        <template v-if="true">
                          <ul>
                            <li>
                              <div class="content">只有符号不同的两个数，我们说其中一个是林外一个只有符号不同的两个数，我们说其中一个是林外一个的a的as</div>
                              <div class="control">
                                <i class="iconfont icon-more"></i>
                                  <div class="control-btn">
                                      <div><i class="iconfont icon-edit p-center"></i> </div>
                                      <div><i class="iconfont icon-del  p-center"></i> </div>
                                  </div>
                              </div>
    
                            </li>
                            <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                            <li>只有符号不同的两个数，我们说其中一个是林外一个的as</li>
                          </ul>
                        </template>
                        <!-- 没有知识点 -->
                        <template v-else>
                          <div>明天在来看</div>
                        </template>
                      </el-scrollbar>
                    </div>
                </div>
            </div>
            <div class="edit-info">
              <div class="title">编辑标记</div>
              <div class="item">
                <span>时间:</span>
                <div class="time-dot">
                  {{tagTime}}
                  <span @click="handleSelectCurrentTime">选择时间点</span>
                </div>
              </div>
              <div class="item">
                <span>相关知识点:</span>
                <div class="know">
                  <div class="add-btn" @click="handleAddKnowledge">+</div>
                  <div class="lists">
                    <div v-for="n in 11" :key="n" class="list-item">
                      <p class="p2-overflow">相反数，实数4它的相反数是一对数的相反数的相反数</p>
                      <span><i class="iconfont icon-close"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <span>说明:</span>
                <div class="desc">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    resize="none"
                    v-model="textarea">
                  </el-input>
                </div>
              </div>
              <div class="sub-btn item">
                <span></span>
                <div>提交</div>
              </div>
            </div>
        </div>
        <res-footer></res-footer>

        <!-- modal 知识 knowledge-->
      <div class="add-knowledge-wrap">
        <el-scrollbar>
          <div class="add-knowledge-content">
            <div class="related">
              <div class="title">相关知识点</div>
              <div class="related-lists">
                <resKnowledgeBox></resKnowledgeBox>
                <resKnowledgeBox></resKnowledgeBox>
                <resKnowledgeBox></resKnowledgeBox>
              </div>
            </div>
            <div class="search">
              <div class="title">搜索知识点</div>
              <div class="search-box">
                <el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="input2">
                </el-input>
              </div>
              <div class="search-lists">
                <resKnowledgeBox></resKnowledgeBox>
                <resKnowledgeBox></resKnowledgeBox>
                <resKnowledgeBox></resKnowledgeBox>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>

<script>
import {formatSeconds} from "@/assets/javascript/ultis.js"
export default {
  components: {
    resFooter: () => import("@/components/res-footer"),
    resKnowledgeBox:() => import("@/components/res-knowledge")
  },
  data(){
    return {
      textarea:'',
      input2:'',
      /* ----- */
      tagTime:'00:00:00'
    }
  },
  mounted(){
    
  },
  methods: {
    /* 增加知识点 */
    handleAddKnowledge() {
      this.$myLayer.formLayer('添加知识点',$(".add-knowledge-wrap"),['960px','577px'])
    },
    handleSelectCurrentTime(){
      let time = this.$refs.videoSource.currentTime
      this.tagTime = formatSeconds(time)
    }
  }
};
</script>

<style lang="scss" scoped>
.main-video-content-video {
    width: 1200px; margin: 0 auto; display: flex; height: 650px;
    .left {
        flex: 1;
        .video-wrap { height: calc(100% - 65px); }
        .video-control {
            height: 65px; background: #202020; display: flex; align-items: center;
            & > div { margin-left: 30px; }
        }
    }
    .right {
        width: 320px; height: 650px;
        background: #141414;
        .title {
            height: 45px; line-height: 45px; padding-left: 15px;
            border-bottom: 1px solid #323232; color: #c7c7c7;
        }
        ul {
            padding: 15px; padding-top: 0; max-height: 700px;
            li {display: flex;padding: 10px 0;color: #c7c7c7;
                border-bottom: 1px solid #323232;position: relative;}
            li .content {padding-right: 10px;color: #C7C7C7;}
            li .control {position: relative;}
            li .control > i {color: #7A7A7A;font-size: 20px;}
            li .control-btn {position: absolute;right: -15px;top: -10px;bottom: -10px;width: 100px;display: flex;}
            li .control-btn > div {position: relative;flex: 1;background: #292929;}
            li .control-btn > div:hover {background: #1F1F1F}
            li .control-btn > div i {font-size: 20px;color: #2695FF;cursor: pointer;}
        }
    }
}
.edit-res {padding-top: 20px;overflow: hidden;background: #F3F5F7;}
.main {
  width: 1200px;  margin: 0 auto;
  .video-info > .title { color: #303133;font-size: 20px; margin: 10px 0; }
  .video-info > .desc {color: #606266;margin-bottom: 10px;}
}
.main {
  .edit-info {background: #fff;padding: 10px 20px 60px;}
  .edit-info .title {padding-bottom: 8px; color: #303133;font-size: 16px;border-bottom: 1px solid #E4E8ED}
  .edit-info .item { display: flex; margin-top: 20px; }
  .edit-info .item > span { display: block; width: 80px; text-align: right; margin-right: 15px; flex-shrink: 0;}
  .edit-info .item .time-dot {
    width: 236px; height: 36px;border-radius: 4px;
    border: 1px solid #E5E5E5;color: #606165;line-height: 36px;
    padding-left:14px;position: relative;
    > span {position: absolute;right: 0;top: 0;border-left: 1px solid #E5E5E5;
    text-align: center;cursor: pointer;width: 94px;height: 36px;color: #606165;line-height: 36px;}
  }
  .edit-info .item .know {
    .add-btn {border: 1px dashed #E5E5E5;background: #F8F9FA;border-radius: 4px;width: 72px;height: 36px;
     color: #999; cursor: pointer;font-size: 20px;text-align: center;line-height: 32px; }
    .lists { display: flex;flex-wrap: wrap; }
    .lists .list-item {width: 168px;height: 64px;background: #E7F1FF;border-radius: 4px;
     padding: 10px;position: relative;margin: 20px 20px 10px 0;}
    .lists .list-item  p {color: #4A80F6;}
    .lists .list-item  span {display: inline-block;width: 18px;height: 18px;
      background: #ACCDFB;line-height: 18px;text-align: center;color: #fff;
      border-radius: 50%;position:absolute;right:-8px;top:-8px;
      i {color: inherit;cursor: pointer;}
    }
  }
  .edit-info .item .desc {width: 640px;}
  .edit-info .sub-btn > div{
    width: 88px; height: 36px;
    background: rgba(38,149,255,1);
    border-radius: 4px;cursor: pointer;
    color:#fff;line-height: 36px;text-align: center; 
  }
}
.add-knowledge-wrap {display: none}
.add-knowledge-content {
  padding: 20px;
  .related .title {margin-bottom: 10px;}
  .related .related-lists {display: flex;flex-wrap: wrap;}

  .search .title {margin-top: 10px;margin-bottom: 16px;}
  .search .search-box {width: 280px;margin-bottom: 16px;}
  .search .search-lists {display: flex;flex-wrap: wrap;}
}
</style>