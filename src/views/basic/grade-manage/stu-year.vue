<!--学届管理-->
<template>
  <div class="stu-year">

    <base-title title="学届管理" border>
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

    <div class="content">
      <div class="search-info">
        <span>阶段:</span>
        <el-select  style="width:80px;margin:0 18px;" v-model="value" placeholder="不限">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button >查询</el-button>
        <el-button style="color:#606266;text-decoration: underline" type="text">清空</el-button>
      </div>
      <base-table :tableData="tableData" :tableColumn="tableColumn"></base-table>
    </div>

    <div class="footer">
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="22"></page>
    </div>

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
    </div>
  </div>
</template>
<script>
export default {
    components:{
        baseTable:()=>import("./../../../components/table"),
        stateSwitch:() => import("./../../../components/state-switch"),
        baseTitle:()=>import("@/components/title"),
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging")
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
            /* dialog */
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
    /* modal */
    /* 增加 */
        handleAdd() {
            this.$myLayer.formLayer("新建",$('.stu-yeaer-modal-add'),['422px'])
        },
        handleSwicthState(){

        }
    }
}
</script>

<style lang="scss" scoped>
.stu-year {
  padding: 18px 24px;
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
  }
  .stu-yeaer-modal-add, .tu-yeaer-modal-edit {
    display: none;
  }
}
</style>
