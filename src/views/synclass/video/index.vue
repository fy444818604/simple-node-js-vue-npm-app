<!--视频中心-->
<template>
  <div class="video">
    <div class="title">视频中心</div>
    <div class="container">
      <div class="nav-wrap">
        <div class="nav">
          <div class="title">教材选择</div>
          <el-select value="x" style="width:100%;margin-bottom:16px">
            <el-option value="xx" label="xx"></el-option>
          </el-select>
          <el-select value="x" style="width:100%">
            <el-option value="xx" label="xx"></el-option>
          </el-select>
        </div>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="search">
            <el-input style="width:320px"
              v-model="val" 
              suffix-icon="el-icon-search"
              placeholder="请输入关键字搜索"></el-input>
            <ul>
              <li class="active">全部</li>
              <li>学科</li>
              <li>活动</li>
            </ul>
            <div>
              <span>最热</span>
            </div>
          </div>
          <div class="res-box">
            <div v-for="i in 8" :key="i" class="box-item">
              <div class="box-item-wrap">
                <div class="bg"></div>
                <div class="info">
                  <div class="title">柳树醒了</div>
                  <div>
                    <span>李婉</span>
                    <span> <i class="iconfont icon-eyes"></i>415</span>
                    <span> <i class="icon-stars iconfont"></i>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-wrap">
            <page class="page" :pageTotal="200"></page>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    page:() => import("@/components/paging")
  },

  data(){
    return {
      val:''
    }
  }
}
</script>

<style lang="scss" scoped>
.video {padding: 32px;}
.video > .title {color: #55595C;font-weight: bold;line-height: 1}
.container {margin-top: 20px;}
.container {
  display: flex;
  .nav-wrap {
    flex-basis: 280px;
    margin-right: 30px;
  }
  .nav{
    min-height: 760px;
    background: #fff;
    border-radius: 6px;
    padding: 23px;
    .title {color: #55595C;line-height: 1;font-weight: bold;margin-bottom: 37px}
  }
  .content-wrap { flex: 1; }
  .content-wrap .content {
    .search {display: flex;align-items: center;padding: 0 10px;justify-content: space-between;}
    .search ul {display: flex;}
    .search ul li {cursor: pointer;text-align: center;margin-left: 8px;width: 52px;height: 28px;line-height: 28px;}
    .search ul li.active {color: #fff;background:#4C84FF;border-radius: 14px;}
    .res-box {
      display: flex;
      flex-wrap: wrap;
    }
    .res-box .box-item {
      padding: 0 10px;
      width: 25%;
      margin-top: 20px;
    }
    .res-box .box-item .box-item-wrap {
      border-radius: 6px;
      overflow: hidden;
    }
    .res-box .box-item .bg {
      height: 0;
      padding-bottom: 70%;
      background: url('./../../../assets/image/city-1.jpg') no-repeat;
      background-size: 100% 100%;
      
    }
    .res-box .box-item .info {
      background: #fff;
      padding: 10px 10px 0;
      background: #fff;
      .title {
        color: #606266;font-weight: bold;
      }
      span {color: #909399;line-height: 44px;margin-right: 20px;}
    }
  }
  .page-wrap {text-align: right;margin-top: 24px;}
  .page-wrap .page {display: inline-block;}
}

</style>
<style>
.video .search .el-input input{
  background: #F1F3F8;
  border-radius: 18px;
  border: 1px solid #DCDFE6;
}
.video .search .el-input__icon {
  width: 35px;
  font-size: 20px;
  line-height: 37px;
}
</style>