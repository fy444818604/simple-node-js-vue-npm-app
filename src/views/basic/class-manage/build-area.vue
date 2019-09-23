<!-- 建筑场所 -->
<template>
	<div class="area">

    <div class="area-title">
      <div class="left">
        <div class="title">建筑场所</div>
        <div class="select-more">
          <div @click.stop="handleShowSelect" class="select-item">{{currentSelect}}</div>
          <div v-clickOutSide="handleHideSelect" class="lists" v-show="isShow">
            <div class="filter-input">
              <el-input v-model="filterText"></el-input>
            </div>
            <div class="list-tree">
              <el-tree
                @node-click="handleSelect"
                class="filter-tree"
                :data="areaList"
                :props="defaultProps"
                :filter-node-method="filterNode"
                ref="tree"
                >
              </el-tree>
            </div>
          </div>
        </div>
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
    <div class="build-area-mdoal">
        <el-form style="width:330px;margin:24px auto" ref="form" :model="formInfo" label-width="80px" :rules="formRules">
          <el-form-item label="机构" prop="title">
            <el-input v-model="formInfo.title" suffix-icon="iconfont icon-apartment"></el-input>
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
import layer from 'layui-layer'
export default {
  components:{
    stateSwitch:() => import("./../../../components/state-switch"),
    baseTable:()=>import("./../../../components/table"),
    baseBtn:() => import("./../../../components/btn")
  },
  data(){
    return {
      isShow:false,
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
      modalIndex:0,
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
  created(){
    /* 初始化表格 */
    this.initTableData();
  },
  methods:{
    /* 初始化表格数据 */
    initTableData(){

    },
    /* 选择建筑场地 */
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1
    },
    handleSelect(value){
      if(!value.children) {
        const {id,label} = value
        this.currentSelect = label
        this.handleHideSelect()
      }
    },
    handleShowSelect(){
      this.isShow = true
    },
    handleHideSelect(){
      this.isShow = false
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
      console.log(val)
    },
    /* 打开弹层 */
    handleAdd(){
      let that = this
      this.modalIndex = layer.open({
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
      .select-more {
        margin-left: 22px;
        position: relative;
        .select-item {
          cursor: pointer;
          color: #606266;
        }
        .lists {
          z-index: 999;
          position: absolute;
          left: 0;
          top: 30px;
          border-radius: 4px;
          border: 1px solid rgba(204, 204, 204, 0.671);
          background: #fff;
          box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.1);

          .filter-input {
            padding: 5px;
          }
          .list-tree {
            width: 254px;
            height: 200px;
            overflow: auto;
            overflow-x: hidden;
          }
        }
      }
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
<style>
  .area .el-tree {
    margin-top: 5px;
    background: #fff;
  }
</style>