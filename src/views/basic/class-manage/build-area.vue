<!-- 建筑场所 -->
<template>
	<div class="area">

    <div class="area-title">
      <div class="left">
        <div>建筑场所</div>
        <el-dropdown trigger="click" placement="bottom">
        <span class="el-dropdown-link">
          {{currentSelect}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-input
              v-model="filterText">
            </el-input>
              <el-tree
                @node-click="handleSelect"
                style="width:250px"
                class="filter-tree"
                :data="areaList"
                :props="defaultProps"
                :filter-node-method="filterNode"
                ref="tree">
              </el-tree>
          </el-dropdown-menu>
      </el-dropdown>
      </div>
      <div @click="handleAdd" class="right">
        <i class="iconfont icon-add"></i>
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
    <base-modal   
      :title="dialog.title"
      @on-close="handleClose"
      @on-save="handleSave"
      :visible="dialog.visible">
        <el-form ref="form" :model="formInfo" label-width="80px" :rules="formRules">
          <el-form-item label="学校" prop="title">
            <el-select v-model="formInfo.title" style="width:100%">
              <el-option label="区域一"  value="shanghai"></el-option>
              <el-option label="区域e"  value="shanghai2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="formInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="所属校区" prop="area">
            <el-select v-model="formInfo.area" style="width:100%">
              <el-option label="区域一"  value="shanghai"></el-option>
              <el-option label="区域一2"  value="shangha2i"></el-option>
            </el-select>
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
    stateSwitch:() => import("./../../../components/state-switch"),
    baseTable:()=>import("./../../../components/table"),
    baseModal:() => import("./../../../components/modal")
  },
  data(){
    return {
      currentSelect:"成都第X中学",
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      filterText:'',
      areaList:[
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
      tableColumn:[
        {
          prop:'id',
          label:'显示顺序'
        },
        {
          prop:'name',
          label:'名称'
        },
        {
          prop:'title',
          label:'所属机构'
        },
        {
          prop:'area',
          label:'校区'
        },
        {
          prop:'desc',
          label:'描述'
        }
      ],
      /* 分页 */
      pagination:{
        currentPage:1,
        total:10
      },
      /* dialog */
      dialog: {
        visible:false,
        title: '新建',
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
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods:{
    /* 选择建筑场地 */
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
    },
    handleSelect(value){
      if(!value.children) {
        const {id,label} = value;
        this.currentSelect = label;

      }
    },
    /* 分页相关 */
    handleCurrentChange(){},
    handleSizeChange(){},

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
    },
    /* 表格的操作 */
    handleStop(row){
      console.log(row);
    },
    handleEdit(row){
      console.log(row);
    },
    /* 控制状态 */
    handleSwicthState(val) {
      console.log(val)
    },
    handleAdd(){
      this.$layer.open({
         title: '在线调试',
         content: '可以填写任意的layer代码',
         area: ['422px', '434px']
      });  
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
</style>
