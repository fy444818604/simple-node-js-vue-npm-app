<!-- 教室类型  -->
<template>
  <div class="room-type">

    <base-title title="教室类型">
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

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
        <page :pageTotal="12"></page>
      </div>
    </div>

    <!-- modal -->
    <div class="room-type-modal">
      <el-form style="width:330px;margin:24px auto" ref="formInfo" :model="formInfo" label-width="80px" :rules="rule">
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
      <div class="form-control">
        <base-btn @on-cancel="handleCancel" type="cancel"></base-btn>
        <base-btn @on-save="handleSave" type="save"></base-btn>
      </div>
    </div>


  </div>
</template>
<script>
import layer from 'layui-layer'
export default {
  components:{
    baseTable:()=>import("./../../../components/table"),
    stateSwitch:() => import("./../../../components/state-switch"),
    baseBtn:() => import("./../../../components/btn"),
    baseTitle:() => import("@/components/title"),
    btnList:() => import("@/components/btn-list"),
    page:() => import("@/components/paging")
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
            label:'显示顺序',
            align:"center",
            width:100
          },
          { 
            prop:'type',
            label:"教室类型",
            align:"center",
            width:100
          },
          {
            prop:'desc',
            align:"center",
            label:'描述'
          },
          {
            prop:'status',
            label:'状态',
            align:"center",
            width:200
          }
        ],
 
      /* modal*/
      modalIndex:0,
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
    handleAdd(){
      alert("12")
    },
    handleSizeChange(){},
    handleCurrentChange(){},
    handleSwicthState(val){},
    /* modal */
    handleShowAdd(){
      let that = this
      this.modalIndex = layer.open({
        type: 1,
        title:"新建教室类型",
        content: $('.room-type-modal'),
        area: ['422px'],
        cancel:function(){
          layer.close(that.modalIndex)
          $('.room-type-modal').hide()
        }
      })
    },
    handleCancel(){
      /* 数据清除 */
      layer.close(this.modalIndex)
      $('.room-type-modal').hide()
    },
    handleSave(){
      /* 数据验证 */

    }
  }
}
</script>
<style lang="scss" scoped>
.room-type {
  padding: 18px 24px;
  // .header {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   .title {
  //     color: #303133;
  //     font-weight: Bold;
  //   }
  //   .add-icon {
  //     margin-right: 24px;
  //     cursor: pointer;
  //     i {
  //       color: #487ff6;
  //     }
  //   }
  // }
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

  .room-type-modal {
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