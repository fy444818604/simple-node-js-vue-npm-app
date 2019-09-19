<!--班级管理-->
<template>
  <div class="cla-mates">

      <div class="header">
        <div class="left">
          <div>班级管理</div>
          <div>xxxxxxx</div>
        </div>
        <div @click="handleAdd" class="add-icon">
          <i class="iconfont icon-add"></i>
        </div>
    </div>

    <div class="content">
      <div class="search-info">
        <el-input style="width:200px" v-model="search.name" placeholder="请输入班级名称查询"></el-input>

        <div class="item">
          <span>阶段:</span>
          <el-select  style="width:80px;margin-left:10px" 
            v-model="search.stage">
            <el-option
              v-for="item in search.stageList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div>
          <span>学届:</span>
          <el-select style="width:90px;margin-left:10px" 
            v-model="search.grade">
            <el-option
              v-for="item in search.gradeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="item">
          <span>建筑:</span>
            <el-select style="width:200px;margin-left:10px" 
            v-model="search.area">
            <el-option
              v-for="item in search.areaList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <el-button>查询</el-button>
        <el-button style="color:#606266;text-decoration: underline" type="text">清空</el-button>
      </div>

      <base-table :tableData="tableData" :tableColumn="tableColumn">
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
      @on-close="handleClose"
      @on-save="handleSave"
      :visible="dialog.visible"
      :title="dialog.title"
    >
      <el-form label-width="80px" :model="formInfo" :rules="rules">
        <el-form-item label="学校" prop="school">
          <el-select style="width:100%" v-model="formInfo.school">
            <el-option value="xxx" label="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班名" prop="className">
          <el-input v-model="formInfo.className"></el-input>
        </el-form-item>
        <el-form-item label="学届" prop="classYear">
          <el-select style="width:100%" v-model="formInfo.classYear">
            <el-option value="xxx" label="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班主任" prop="teacher">
          <el-select style="width:100%" v-model="formInfo.teacher">
            <el-option value="xxx" label="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="教室" prop="classRoom">
          <el-select style="width:100%" v-model="formInfo.classRoom">
            <el-option value="xxx" label="xxx"></el-option>
          </el-select>
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
      search:{
        name:'',//班级名称
        stage:'',//阶段
        grade:'',//学届
        area:'', //建筑
        stageList:[{value:'',label:"不限"}],
        gradeList:[{value:'',label:"全部"}],
        areaList:[{value:'',label:""}]
      },
      tableColumn:[
        {
          prop:"id",
          label:"序号"
        },
        {
          prop:"name",
          label:"名称"
        },
        {
          prop:"type",
          label:"类型"
        },
        {
          prop:"desc",
          label:"描述"
        },
        {
          prop:"status",
          label:"状态"
        }
      ],
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
      },
      /* dialog */
      dialog:{
        title:'新建',
        visible:false
      },
      formInfo:{
        school:'',
        classYear:'',
        teacher:'',
        classRoom:'',
        className:''
      },
      rules:{
        school:[{required: true, message: '请选择学校名称', trigger: 'blur'}],
        classYear:[{required: true, message: '请选择学校名称', trigger: 'blur'}],
        teacher:[{required: true, message: '请选择学校名称', trigger: 'blur'}],
        classRoom:[{required: true, message: '请选择学校名称', trigger: 'blur'}],
        className:[{required: true, message: '请选择学校名称', trigger: 'blur'}],

      }
    }
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){},
    /* add */
    handleAdd(){
      this.dialog.visible = true
    },
    handleSwicthState(){},
    handleClose(){
      this.dialog.visible = false
    },
    handleSave(){}
  }
}
</script>

<style lang="scss" scoped>
.cla-mates {
  padding: 18px 24px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E5E7EF;
    padding-bottom: 10px;
    .left {
      display: flex;
    }
    .add-icon {
      color: #487ff6;
      cursor: pointer;
    }
  }

  .content {
    .search-info {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;     
      .item {
        margin:0 15px;
      } 
    }
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
  .form-control {
    height: 60px;
    line-height: 60px;
    padding-right: 15px;
    background-color: #f5f5f5
  }
}
</style>