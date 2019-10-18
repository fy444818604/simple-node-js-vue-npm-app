<!--数据统计-->
<template>
  <div class="static">
    <div class="title">数据统计</div>

    <div class="container">

      <div class="header">
        <div></div>
        <div class="nav">
          <ul>
            <li class="active">教师</li>
            <li>学校</li>
            <li>区域</li>
          </ul>
        </div>
        <div class="btn-list">
          <div class="display"> <i class="iconfont icon-real"></i> 大数据展示</div>
          <div class="export"> <i class="iconfont icon-real"></i> 导出</div>
        </div>
      </div>

      <div class="main">
          <div class="main-header">
            <el-input size='mini' style="width:200px" v-model="searchObj.teacher" placeholder="请输入教师姓名"></el-input>
            <div class="school" style="margin-left:18px">
              学校：
              <el-select size='mini' v-model="searchObj.school">
                <el-option label="成都一中" value="xxx"></el-option>
              </el-select>
            </div>
            <div class="start-time" style="margin-left:18px">
              开始日期：
              <el-select size='mini' v-model="searchObj.start">
                <el-option label="2018.9.9" value="xxx"></el-option>
              </el-select>
            </div>
            <div class="end-time" style="margin-left:18px">
              结束日期：
              <el-select size='mini' v-model="searchObj.end">
                <el-option label="2019.9.9" value="xxx"></el-option>
              </el-select>
            </div>
            <el-button style="margin-left:18px" size='mini'>查询</el-button>
            <span style="margin-left:18px;">清空</span>
          </div>
          <div class="main-table">
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  align="center"
                  >
                </el-table-column>
                <el-table-column
                  prop="address"
                  align="center"
                  label="地址">
                </el-table-column>
              </el-table>
            </template>
          </div>
          <div class="page-wrap">
            <page class="page" :pageTotal="200"></page>
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
      searchObj:{
        teacher:'',
        school:'',
        area:'',
        start:'',
        end:''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.static {padding: 32px;}
.static > .title {color: #55595C;font-weight: bold;line-height: 1}
.container {margin-top: 24px;}
.container > .header {display: flex;justify-content: space-between;align-items: center;}
.header .nav {
  ul li {
    display: inline-block;
    width: 52px;height: 28px;
    text-align: center;line-height: 28px;
    color: #909399;
    margin-right: 37px;
    cursor: pointer;
    &.active {color: #fff;background: #4C84FF;border-radius: 14px;}
  }
}
.header .btn-list div {display: inline-block;color: #4C84FF;
border: 1px solid #4C84FF;height: 28px;line-height: 26px;cursor: pointer;
padding: 0 10px;border-radius: 14px;margin-left: 16px;
i {color: inherit}}

.container .main {
  margin-top: 24px;
  padding: 24px 24px 34px;
  border-radius: 6px;
  background: rgba(255,255,255,1);
  box-shadow: 0px 5px 20px 0px rgba(23,38,71,0.05);
} 
.container .main .main-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.page-wrap {text-align: right;margin-top: 66px;}
.page-wrap .page {display: inline-block;}
</style>