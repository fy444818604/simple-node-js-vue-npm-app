<!--教室设置-->
<template>
  <div class="room-setting">
    
    <div class="header">
      <div class="left">
        <div class="title">教室设置</div>
        <slelct-tree currentSelect="YYYY" :treeList="treeList"></slelct-tree>
      </div>
      <div @click="handleAdd" class="right">
        <el-tooltip class="item" effect="dark" content="添加" placement="top">
          <i class="iconfont icon-add"></i>
        </el-tooltip>
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
    <div class="room-setting-modal">
      <el-form style="width:330px;margin:24px auto" ref="form" :model="formInfo" label-width="80px" :rules="formRules">
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
      <div class="form-control">
        <base-btn @on-change="handleSave">确认</base-btn>
        <base-btn 
          @on-change="handleCancel" 
          border="1px solid #E5E7EF" 
          height="34px" 
          color="#606266" 
          bg="#fff">取消</base-btn>
      </div>
    </div>


  </div>
</template>
<script>
import layer from 'layui-layer'
export default {
  components:{
    stateSwitch:() => import("./../../../components/state-switch"),
    baseTable:()=>import("./../../../components/table"),
    baseBtn:() => import("./../../../components/btn"),
    slelctTree:() => import("./../../../components/select-tree")
  },
  data(){
    return {
      currentSelect:'xxxx',
      treeList:[
        {
          id: 1,
          label: '四川省教育厅',
          children:[
            {
              id: 1-1,
              label: '成都市教育厅',
              children:[
                {
                  id: 1-1-1,
                  label: '成都xxx中学',
                }
              ]
            },
            {
              id: 1-2,
              label: '雅安市教育厅',
              children:[
                {
                  id: 1-2-1,
                  label: '雅安yyy中学',
                }
              ]
            },
            {
              id: 1-3,
              label: '绵阳市教育厅',
              children:[
                {
                  id: 1-3-1,
                  label: '绵阳zzz中学',
                }
              ]
            }
          ]
        }
      ],
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
      modalIndex:0,
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
    handleAdd(){
      let that = this
      this.modalIndex = layer.open({
        type: 1,
        title:"新建",
        content: $('.room-setting-modal'),
        area: ['422px'],
        cancel:function(){
          layer.close(that.modalIndex)
          $('.room-setting-modal').hide()
        }
      })
      
    },
    handleCancel(){
      layer.close(this.modalIndex)
      $('.room-setting-modal').hide()
    },
    handleSave(){
      /* todo */
      /* judge */
      this.$refs.form.validate((valid) => {
        if(valid) {
          console.log("valid");
        }
      })
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
      .title {
        color: #303133;
        font-weight: Bold;
      }
    }
    .right {
      cursor: pointer;
      margin-right: 24px;
      i {
        color: #487ff6;
      }
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

  .room-setting-modal {
    display: none;
    .form-control {
      height: 60px;
      line-height: 60px;
      text-align: right;
      background-color: #f5f5f5
    }
  }
} 
</style>
