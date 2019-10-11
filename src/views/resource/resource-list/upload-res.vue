<!--上传资源-->
<template>
  <div class="upload-res">
    <div class="content">
      <div class="current-video">当前视频：再别康桥课间.mp4</div>
      <!-- 资源封面 -->
      <div class="res-cover">
        <div class="title">
          <span class="name red-dot">资源封面：</span>
          <span class="size">建议尺寸: 288*162</span>
        </div>
        <div class="upload-wrap">
          <div class="upload">
            <el-upload
              class="avatar-uploader"
              :show-file-list="false"
              action="https://jsonplaceholder.typicode.com/posts/"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="cover-select">
            <div class="note">可以选择以下封面</div>
            <div class="covers">
              <div class="cover-item"></div>
              <div class="cover-item"></div>
              <div class="cover-item"></div>
              <div class="cover-item"></div>
            </div>
          </div>
        </div>
        <div class="res-info">
          <div class="left">
            <div class="res-name">
              <span class="red-dot">资源名称：</span>
              <el-input></el-input>
            </div>
            <div class="res-type">
              <span class="red-dot">资源类型：</span>
              <template>
                <el-radio v-model="radio" label="1">学科教育</el-radio>
                <el-radio v-model="radio" label="2">教育活动</el-radio>
              </template>
            </div>
            <!-- 相关课程 -->
            <div class="relate-course">
              <span class="red-dot">相关课程：</span>
              <el-input style="width:475px" v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="right">
            <el-input
              type="textarea"
              placeholder="讲讲这个资源的故事，让更多人了解"
              v-model="textarea"
              :rows="5"
              resize="none"
              maxlength="300"
              show-word-limit
            >
            </el-input>
          </div>
        </div>

        <!-- 高级 -->
        <div class="advance-course">
          <div class="title">高级选项 <i class="el-icon-arrow-down"></i> </div>
          <div class="advance-content">
            <div class="authty">
              <div class="visited">
                <span>访问权限：</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    label="label"
                    value="value">
                  </el-option>
                </el-select>
                <el-select style="margin-left:15px;width:260px" v-model="value" placeholder="请选择">
                  <el-option
                    label="label"
                    value="value">
                  </el-option>
                </el-select>
              </div>
              <div class="down">
                <span>下载权限：</span>
                <el-switch
                  v-model="value1"
                  active-color="#409EFF"
                  inactive-color="#ccc">
                </el-switch>
              </div>
            </div>
            <div class="res-upload">
              <span>资源附件:</span>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <div class="upload-btn">上传</div>
              </el-upload>
            </div>
          </div>
        </div>

        <div class="save">
          保存发布
        </div>
        <resFooter></resFooter>
      </div>
    </div>

    <!-- transfer 穿梭框 -->
    <div class="transfer">
      <el-transfer
        filterable
        v-model="value2"
        filter-placeholder="请输机构名筛选"
        :data="data"
        :filter-method="filterMethod"
        >
      </el-transfer>
    </div>

  </div>
</template>

<script>
export default {
  components:{
    resFooter:() => import("@/components/res-footer")
  },
  data(){
    const generateData = _ => {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      radio:'1',
      textarea:'',
      input:'',
      imageUrl:'',
      value:'',
      value1:true,
      data: generateData(),
      value2: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-res {
  padding-top: 10px;
  min-width: 1200px;
  .content {
    width: 1200px;
    margin: 34px auto 0;
    background: #fff;
    .current-video {
      height: 88px;
      background: #F5F5F5;
      line-height: 88px;
      color: #303133;
      font-size: 16px;
      padding-left: 40px;
    }
    .res-cover {
      .title {
        line-height: 1;
        margin: 29px 0 22px 0;
        .name {position: relative;padding-left: 10px;}
        .size {color: #909399}
      }
      .upload-wrap {
        display: flex;
        .upload {
          width: 288px;height: 162px;
        }
        .cover-select {
          flex:1;
          margin-left: 40px;
          padding: 15px 30px;
          border: 1px solid  #e5e5e5;
          border-radius: 6px;
          .note {
            color: #909399;
          }
          .covers {
            margin-top: 8px;
            display: flex;
            &>div:last-child{margin-right: 0}
            .cover-item {
              margin-right: 28px;
              flex: 1;
              height: 104px;
              background: #F8F8F8;
            }
          }
        }
      }
      .res-info {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .left {
          width: 560px;
          .res-name {
            & > span {width: 100px;display: inline-block;position: relative;padding-left: 10px;}
            display: flex;align-items: center;
            margin-bottom: 34px;
          }
          .res-type {
            margin-bottom:34px;
            & > span {position: relative;padding-left: 10px}
          }
          .relate-course {
            & > span {position: relative;padding-left: 10px}
          }
        }
        .right {
          position: relative;
          width: 520px;
          height: 120px;
          &::before{
            content:'简介:';
            position: absolute;
            left: -40px;
            top: 0;
            color: #606266;
          }
        }
      }
      .advance-course {
        margin-top: 34px;
        .title {
          padding-left: 10px;
          i {cursor: pointer;}
         }
        .advance-content {
          border-top: 1px solid #E5E5E5;
          border-bottom: 1px solid #E5E5E5;
          padding: 30px 0;
          margin-left: 10px;
          .authty {
            display: flex;
            align-items: center;
            .down {
              margin-left: 90px;
            }
          }
          .res-upload {
            margin-top: 28px;
            display: flex;
            align-items: center;
            .upload-btn {
              margin-left: 10px;
              width: 66px;
              height: 36px;
              background: #f9fafb;
              border-radius: 4px ;
              line-height: 36px;
              text-align: center;
              color: #606266;
              border: 1px solid #DCDFE6;
            }
          }
        }
      }
      .save {
        cursor: pointer;
        margin: 48px auto 90px;
        // margin-top: 48px;
        width: 360px;
        height: 42px;
        color: #fff;
        border-radius: 4px;
        line-height: 42px;
        text-align: center;
        background: rgba(52,137,255,1);
      }
    }
  }
}

.red-dot::before {
  content: '*';
  position: absolute;
  left: 0;
  top: 3px;
  color: red;
}

.transfer {
  display: none;
}


</style>

<style>
  .upload-res .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .upload-res .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .upload-res .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 288px;
    height: 162px;
    line-height: 162px;
    text-align: center;
  }
  .upload-res .avatar {
    width: 288px;
    height: 162px;
    display: block;
  }
  /* transfer */
  .transfer .el-transfer-panel__header {display: none}
  .transfer .el-transfer-panel__filter {margin: 0}
  .transfer .el-transfer-panel__filter .el-input__inner {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #E5E5E5;
  }
  .transfer .el-input__prefix {
    left: 160px;
  }
  .transfer .el-transfer__button {
    border-radius: 4px;
    width: 45px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    
  }
  .transfer .el-transfer__button span i {color: #fff}
  .transfer .el-transfer__button.is-disabled span i {color: #b5b5b5}
</style>