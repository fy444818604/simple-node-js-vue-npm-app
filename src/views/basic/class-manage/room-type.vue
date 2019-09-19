<!-- 教室类型  -->
<template>
  <div class="room-type">
    <div class="header">
      <div>教室类型</div>
      <div @click="handleShowAdd" class="add-icon">
        <i class="iconfont icon-add"></i>
      </div>
    </div>
    <div class="content">
      <base-table      
        :tableData="tableData" 
        :tableColumn="tableColumn"></base-table>
    </div>

    <div class="footer">
      <div class="type-control">
         <state-switch @switchL="handleSwicthState"></state-switch>
      </div>
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

    <!-- modal -->
    <base-modal 
      @on-close="handleClose"
      @on-save="handleSave"
      :visible="visible"  
      title="新建教室类型">
      <el-form ref="formInfo" :model="formInfo" label-width="80px" :rules="rule">
        <el-form-item label="教室类型" prop="type">
          <el-input v-model="formInfo.type"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="formInfo.desc"></el-input>
        </el-form-item>
        <el-form-item label="显示顺序">
           <el-input v-model="formInfo.order"></el-input>
        </el-form-item>
      </el-form>
    </base-modal>

  </div>
</template>
<script>
export default {
  components:{
    baseTable:()=>import("./../../../components/table"),
    stateSwitch:() => import("./../../../components/state-switch"),
    baseModal:() => import("./../../../components/modal")
  },
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
      tableColumn:[
          {
            prop:'id',
            label:'id'
          },
          { 
            prop:'type',
            label:"教室类型",
          },
          {
            prop:'desc',
            label:'描述'
          },
          {
            prop:'status',
            label:'状态'
          }
        ],
      pagination:{
        currentPage:1,
        total:20
      },
      /* modal*/
      visible: false,
      formInfo:{
        type:'',
        desc:'',
        order:''
      },
      rule:{
        type:[{required: true, message: '请输入教室类型', trigger: 'blur'}]
      }
    }
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){},
    handleShowAdd(){
      this.visible = true
    },
    handleSwicthState(val){},
    /* modal */
    handleClose(){
      /* 数据清楚 */
      this.visible = false
    },
    handleSave(){
      /* 数据验证 */
      this.visible = false
    }
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