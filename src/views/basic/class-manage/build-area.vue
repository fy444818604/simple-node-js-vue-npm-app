<!-- 建筑场所 -->
<template>
	<div class="area">

    <div class="area-title">
      <div class="left">
        <div class="title">建筑场所</div>
        <slelct-tree currentSelect="xxxx" :treeList="treeList"></slelct-tree>
      </div>
      <div @click="handleAdd" class="right">
        <el-tooltip class="item" effect="dark" content="添加" placement="top">
          <i class="iconfont icon-add"></i>
        </el-tooltip>
      </div>
    </div>

    <div class="area-content">
      <base-table
        :tableData="tableData"
        :tableColumn="tableColumn"
        @on-stop="handleStop"
        @on-edit="handleEdit"
        >
      </base-table>
    </div>

    <div class="area-footer">
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
    <div class="build-area-mdoal">
        <el-form style="width:330px;margin:24px auto" ref="form" :model="formInfo" label-width="80px" :rules="formRules">
          <el-form-item label="机构" prop="orgId">
            <el-input v-model="formInfo.orgId" suffix-icon="iconfont icon-apartment"></el-input>
          </el-form-item> 
          <el-form-item label="名称" prop="name">
            <el-input v-model="formInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="所属校区" prop="campusId">
            <el-select v-model="formInfo.campusId" style="width:100%">
              <el-option label="区域一"  value="shanghai"></el-option>
              <el-option label="区域一2"  value="shangha2i"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="formInfo.description"></el-input>
          </el-form-item>
          <el-form-item label="显示顺序">
            <el-input v-model="formInfo.orderIndex"></el-input>
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
// import layer from 'layui-layer'
export default {
  components:{
    stateSwitch:() => import("./../../../components/state-switch"),
    baseTable:()=>import("./../../../components/table"),
    baseBtn:() => import("./../../../components/btn"),
    slelctTree:() => import("./../../../components/select-tree")
  },
  data(){
    const tableColumn = [{
          prop:'id',
          label:'显示顺序',
          align:"center"
        },
        {
          prop:'name',
          label:'名称',
          align:"center"
        },
        {
          prop:'title',
          label:'所属机构',
          align:"center"
        },
        {
          prop:'area',
          label:'校区',
          align:"center"
        },
        {
          prop:'desc',
          label:'描述',
          align:"center"
        },
        {
          prop:'status',
          label:'状态',
          align:"center"
        }];
    return {
      currentSelect:"成都第X中学",
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
      tableData:[
        {
          id:1,
          name:'1号教学楼',
          title:'成都第X中学',
          area:'城南校区',
          desc:'1号教学楼',
          status:'启用',

        },
        {
          id:2,
          name:'1号教学楼',
          title:'成都第X中学',
          area:'城南校区',
          desc:'1号教学楼',
          status:'启用',

        },
        {
          id:3,
          name:'1号教学楼',
          title:'成都第X中学',
          area:'城南校区',
          desc:'1号教学楼',
          status:'启用',

        },
        {
          id:4,
          name:'1号教学楼',
          title:'成都第X中学',
          area:'城南校区',
          desc:'1号教学楼',
          status:'启用',

        }
      ],
      tableColumn,
      /* 分页 */
      pagination:{
        currentPage:1,
        total:10
      },
      /* switch status */
      status: 0,   //状态:0启动、1停用、全部''
      /* dialog */
      modalIndex:0,
      formInfo:{
        campusId:0,        // 校区ID
        name:'',           // 名称
        orderIndex:0,      // 顺序 
        description:'',    // 描述
        orgId:0            // 机构Id
      },
      formRules:{
        orgId:[{required: true, message: '请选择机构', trigger: 'blur'}],
        name: [{required: true, message: '请输入名称', trigger: 'blur'}],
        campusId: [{required: true, message: '请选择所属校区', trigger: 'blur'}],
      },
      
    }
  },
  created(){
    /* 初始化表格 */
    this.initTableData();
  },
  methods:{
    /* 初始化表格数据 */
    initTableData(){

    },
    /* 分页相关 */
    handleCurrentChange(){},
    handleSizeChange(){},
    /* 表格的操作 */
    handleStop(row){
      console.log(row);
    },
    handleEdit(row){
      console.log(row);
    },
    /* 控制状态 */
    handleSwicthState(val) {
      this.status = val;
    },
    /* 打开弹层 */
    handleAdd(){
      let that = this
      this.modalIndex = this.$layer.open({
        type: 1,
        title:"新建",
        content: $('.build-area-mdoal'),
        area: ['422px'],
        cancel:function(){
          layer.close(that.modalIndex)
          $('.build-area-mdoal').hide()
        }
      });  
    },
    /* 关闭弹层 */
    handleCancel(){
      layer.close(this.modalIndex)
      $('.build-area-mdoal').hide()
    },
    handleSave(){
      console.log("save");
    }
  }
}
</script>

<style lang="scss" scoped>
  .area {
    padding: 18px 24px;
  }
  .area-title {
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
      margin-right: 24px;
      cursor: pointer;
      i {
        color: #487ff6;
      }
    }
  }

  .area-content {
    margin-top: 24px;
  }

  .area-footer {
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

  .build-area-mdoal {
    display: none;
    .form-control {
      height: 60px;
      line-height: 60px;
      text-align: right;
      background-color: #f5f5f5
    }
  }
</style>
