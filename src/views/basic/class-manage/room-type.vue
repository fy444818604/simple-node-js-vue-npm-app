<!-- 教室类型  -->
<template>
  <div class="room-type">
    <div class="header">
      <div>教室类型</div>
      <div class="add-icon">
        <i class="iconfont icon-add"></i>
      </div>
    </div>
    <div class="content">
      <el-table 
        :data="tableData" stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="显示顺序"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="教室类型"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="desc"
          align="center"
          label="描述"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="100"
        ></el-table-column>
        <el-table-column
          label="操作"
          width="100"
        ></el-table-column>
      </el-table>
    </div>

    <div class="footer">
      <div class="type-control">control</div>
      <div class="page-control">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total">
        </el-pagination>
        <el-button size="mini">确定</el-button>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      tableData:[        
        {
          id:1,
          name:'1号教学楼',
          type:'普通教室',
          desc:'1号教学楼',
          status:'启用'
        }],
        pagination:{
          currentPage:1,
          total:20
        }
    }
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){}
  }
}
</script>
<style lang="scss" scoped>
.room-type {
  padding: 18px 24px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .add-icon {
      color: #487ff6;
      cursor: pointer;
    }
  }
  .content {
     margin-top: 24px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    .page-control {
      display: flex;
      button {
        margin-left: 10px;
      }
    }
  }
}
</style>