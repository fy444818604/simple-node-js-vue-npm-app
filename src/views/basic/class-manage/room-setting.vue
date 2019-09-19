<!--教室设置-->
<template>
  <div class="room-setting">
    
    <div class="header">
      <div class="left">
        <div>教室设置</div>
        <div>xxxxx</div>
      </div>
      <div @click="dialog.visible = true" class="right">
        <i class="iconfont icon-add"></i>
      </div>
    </div>

    <div class="content">
      <base-table  
        :tableData="tableData" 
        :tableColumn="tableColumn">
      </base-table>
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
      :title="dialog.title"
      :visible="dialog.visible"
      @on-close="handleClose"
      @on-save="handleSave"
    >
      <el-form ref="form" :model="formInfo" label-width="80px" :rules="formRules">
        <el-form-item label="学校" prop="title">
          <el-select v-model="formInfo.title" style="width:100%">
            <el-option label="区域一"  value="shanghai"></el-option>
            <el-option label="区域e"  value="shanghai2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教室名称" prop="name">
          <el-input v-model="formInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="教室类型" prop="area">
          <el-select v-model="formInfo.area" style="width:100%">
            <el-option label="区域一"  value="shanghai"></el-option>
            <el-option label="区域一2"  value="shangha2i"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属建筑">
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
    stateSwitch:() => import("./../../../components/state-switch"),
    baseTable:()=>import("./../../../components/table"),
    baseModal:() => import("./../../../components/modal")
  },
  data(){
    return {
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
      tableData:[
        {
          id:1,
          name:'1号教学楼',
          type:'xxx',
          school:'yyy',
          build:'zzz',
          title:'成都第X中学',
          area:'城南校区',
          desc:'1号教学楼',
          status:'启用'
        }
      ],
      /* 分页 */
      pagination:{
        currentPage:1,
        total:20
      },
      /* dialog */
      dialog:{
        visible:false,
        title:'新建'
      },
      formInfo:{
        title:'',
        name:'',
        area:'',
        desc:'',
        order:''
      },
      formRules:{
        title:[{required: true, message: '请选择学校名称', trigger: 'blur'}],
        name:[{required: true, message: '请输入名称', trigger: 'blur'}],
        area:[{required: true, message: '请选择所属校区', trigger: 'blur'}],
      }
    }
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){},

    handleSwicthState(val){

    },

    /* dialog */
    handleClose(){
      this.dialog.visible = false
    },
    handleSave(){
      /* todo */
      /* judge */
      this.$refs.form.validate((valid) => {
        if(valid) {
          console.log("valid");
        }
      })
      this.handleClose()
    }
  }
}
</script>
<style lang="scss" scoped>
.room-setting {
 padding: 18px 24px;
 .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      .el-dropdown-link {
        margin-left: 22px;
        cursor: pointer;
      }
    }
    .right {
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
