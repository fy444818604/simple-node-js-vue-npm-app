<!--学届管理-->
<template>
  <div class="stu-year">

    <div class="header">
      <div>学届管理</div>
      <div @click="handleAdd" class="add-icon">
        <i class="iconfont icon-add"></i>
      </div>
    </div>

    <div class="content">
      <div class="search-info">
        <span>阶段:</span>
        <el-select size='mini' style="width:80px;margin:0 18px;" v-model="value" placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button size="mini">查询</el-button>
        <el-button style="color:#606266;text-decoration: underline" type="text">清空</el-button>
      </div>
      <base-table :tableData="tableData" :tableColumn="tableColumn"></base-table>
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

    <!-- modal 不base-modal -->
<!--     <el-dialog      
      :visible.sync="dialog.visible"
      :title="dialog.title"
      width="30%"
      :before-close="handleClose">
      <el-form 
        v-if="dialog.type==='add'"
        ref="formAdd"  
        label-width="80px"
        :rules="dialog.formAddRules" 
        :model="dialog.formAdd">
        <el-form-item label="机构" prop="name">
          <el-select v-model="dialog.formAdd.name" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入学时间" prop="time">
          <el-select v-model="dialog.formAdd.time" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" prop="stage">
          <el-select v-model="dialog.formAdd.stage" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学制" prop="type">
          <el-input v-model="dialog.formAdd.type"></el-input>
        </el-form-item>
      </el-form>
      <el-form v-else
        ref="formEdit"  
        label-width="80px"
        :rules="dialog.formEditRules" 
        :model="dialog.formEdit">
        <el-form-item label="学届名称" prop="name">
          <el-input disabled v-model="dialog.formEdit.name"></el-input>
        </el-form-item>
        <el-form-item label="第一学年" prop="one">
          <el-input v-model="dialog.formEdit.one"></el-input>
        </el-form-item>
        <el-form-item label="第二学年" prop="two">
          <el-input v-model="dialog.formEdit.two"></el-input>
        </el-form-item>
        <el-form-item label="第三学年" prop="three">
          <el-input v-model="dialog.formEdit.three"></el-input>
        </el-form-item>
        </el-form>
      <div class="form-control" slot="footer">
        <el-button @click="handleClose" size="mini">取消</el-button>
        <el-button @click="handleSave" size="mini" type="primary">保存</el-button>
      </div>
    </el-dialog> -->
    <!-- modal one -->
    <div class="stu-yeaer-modal-add">
     <el-form 
        style="width:330px;margin:24px auto"
        ref="formAdd"  
        label-width="80px"
        :rules="dialog.formAddRules" 
        :model="dialog.formAdd">
        <el-form-item label="学校" prop="name">
          <el-select v-model="dialog.formAdd.name" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入学时间" prop="time">
          <el-select v-model="dialog.formAdd.time" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" prop="stage">
          <el-select v-model="dialog.formAdd.stage" style="width:100%">
            <el-option label="xxx" value="xxx"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学制" prop="type">
          <el-input v-model="dialog.formAdd.type"></el-input>
        </el-form-item>
      </el-form>
      <div class="form-control">
        <base-btn 
          @on-change="handleCancel" 
          border="1px solid #E5E7EF" 
          height="34px" 
          color="#606266" 
          bg="#fff">取消</base-btn>
          <base-btn @on-change="handleSave">保存</base-btn>
      </div>
    </div>
    <!-- modal two -->
    <div class="tu-yeaer-modal-edit">
      <el-form
        style="width:330px;margin:24px auto"
        ref="formEdit"  
        label-width="80px"
        :rules="dialog.formEditRules" 
        :model="dialog.formEdit">
        <el-form-item label="学届名称" prop="name">
          <el-input disabled v-model="dialog.formEdit.name"></el-input>
        </el-form-item>
        <el-form-item label="第一学年" prop="one">
          <el-input v-model="dialog.formEdit.one"></el-input>
        </el-form-item>
        <el-form-item label="第二学年" prop="two">
          <el-input v-model="dialog.formEdit.two"></el-input>
        </el-form-item>
        <el-form-item label="第三学年" prop="three">
          <el-input v-model="dialog.formEdit.three"></el-input>
        </el-form-item>
      </el-form>
      <div class="form-control">
        <base-btn 
          @on-change="handleCancel" 
          border="1px solid #E5E7EF" 
          height="34px" 
          color="#606266" 
          bg="#fff">取消</base-btn>
          <base-btn @on-change="handleSave">保存</base-btn>
      </div>
    </div>
  </div>
</template>
<script>
import layer from "layui-layer"
export default {
  components:{
    baseTable:()=>import("./../../../components/table"),
    stateSwitch:() => import("./../../../components/state-switch"),
    baseBtn:() => import("./../../../components/btn")
  },
  data(){
    return {
      value:'',
      options:[{label:"阶段一",value:"阶段一"}],
      tableColumn:[
        {
          prop:'id',
          label:"序号"
        },
        {
          prop:'type',
          label:"学届名称"
        },
        {
          prop:'desc',
          label:"入学时间"
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
      modalIndexAdd:0,
      modalIndexEdit:0,
      dialog: {
        formAdd:{
          name:'', //机构
          time:'', //时间
          stage:'', //阶段
          type:'' //学制
        },
        formAddRules:{
          name:[{required: true, message: '请选择机构', trigger: 'change'}],
          time:[{required: true, message: '请选择时间', trigger: 'change'}],
          stage:[{required: true, message: '请选择阶段', trigger: 'change'}],
          type:[{required: true, message: '请输入学制', trigger: 'blur'}]
        },
        formEdit:{
          name:'',
          one:'',
          two:'',
          three:''
        },
        formEditRules:{
          one:[{required: true, message: '请输入第一学年', trigger: 'blur'}],
          two:[{required: true, message: '请输入第二学年', trigger: 'blur'}],
          three:[{required: true, message: '请输入第三学年', trigger: 'blur'}]
        }
      }
    }
  },
  methods:{

    handleSizeChange(){},
    handleCurrentChange(){},

    /* modal */
    /* 增加 */
    handleAdd() {
      let that = this
      this.modalIndexAdd = layer.open({
        type: 1,
        title:"新建",
        content: $('.stu-yeaer-modal-add'),
        area: ['422px'],
        cancel:function(){
          layer.close(that.modalIndexAdd)
          $('.stu-yeaer-modal-add').hide()
        }
      })
    },
    handleCancel(){
      layer.close(this.modalIndexAdd)
      $('.stu-yeaer-modal-add').hide()
    },
    handleSave(){
      /* 判断是add 还是 edit */
    },
    handleSwicthState(){

    }
  }
}
</script>

<style lang="scss" scoped>
.stu-year {
  padding: 18px 24px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E5E7EF;
    padding-bottom: 10px;
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
  .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
    display: none;
  }
  .form-control {
    height: 60px;
    line-height: 60px;
    text-align: right;
    background-color: #f5f5f5
  }
}
</style>