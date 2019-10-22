<!--学届管理-->
<template>
  <div class="stu-year">

    <base-title title="学届管理" border>
      <template slot="filterTree">
        <org-menu :rootId="rootId" @node-select="orgSelect" style="margin-left: 15px"></org-menu>
      </template>
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

    <div class="content">
      <div class="search-info">
        <span>阶段:</span>
        <el-select  style="width:80px;margin:0 18px;" v-model="phase" placeholder="不限">
          <el-option
            v-for="item in stage"
            :key="item.code"
            :label="item.text"
            :value="item.code">
          </el-option>
        </el-select>
        <el-button @click="query">查询</el-button>
        <el-button @click="empty" style="color:#606266;text-decoration: underline" type="text">清空</el-button>
      </div>
      <base-table :tableData="tableData"  :tableColumn="tableColumn" @on-stop="schoolStop" @on-edit="schoolEdit"></base-table>
    </div>

    <div class="footer">
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="Total" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></page>
    </div>

    <!-- modal one -->
    <div class="stu-yeaer-modal-add">
     <el-form
        style="width:330px;margin:24px auto"
        ref="formAdd"
        label-width="80px"
        :rules="dialog.formAddRules"
        :model="dialog.formAdd">
        <el-form-item label="学校" prop="rootId">
            <org-selst  :rootId="rootId"    @node-select="handleOrgSelect"></org-selst>
        </el-form-item>
        <el-form-item label="入学时间" prop="time">
          <el-select v-model="dialog.formAdd.time" style="width:100%" @focus="setSelectMinWidth">
              <el-option
                      v-for="item in academic"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                      :style="{'min-width': selectMinWidth + 2 + 'px'}">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" prop="stage">
          <el-select v-model="dialog.formAdd.stage" style="width:100%" @focus="setSelectMinWidth">
            <el-option
                    v-for="item in stage"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                    :style="{'min-width': selectMinWidth + 2 + 'px'}">
            </el-option>
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

          <!--<el-input disabled v-model="dialog.formEdit.name"></el-input>-->
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
import {isSchool} from "../../../assets/javascript/orgType.js"
import orgMenu from '../../../components/org-menu'
import orgSelst from '../../../components/org-select'
export default {
    components:{
        baseTable:()=>import("./../../../components/table"),
        stateSwitch:() => import("./../../../components/state-switch"),
        baseTitle:()=>import("@/components/title"),
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging"),
        'org-menu':orgMenu,
        'org-selst':orgSelst
    },
    data(){
        return {
            rootId: '0',//机构id
            stage:[],//阶段
            academic:[],//学年
            phase:'',//阶段id
            phaseT:'',//传参阶段id
            state:'',//状态
            enable:null,
            refreshText:false,
            // 弹窗的下拉框宽度
            selectMinWidth:0,
            orgSelectText:'',
            pageIndex:1,
            pageSize:10,
            Total:0,
            tableColumn:[
                {
                    prop:'id',
                    label:"序号"
                },
                {
                    prop:'name',
                    label:"学届名称"
                },
                {
                    prop:'schoolStartTime',
                    label:"入学时间"
                },
                {
                    prop:'schoolSystem',
                    label:"学制"
                },
                {
                    prop:'stageIdText',
                    label:"年级别称"
                },
                {
                    prop:'progress',
                    label:"当前进度"
                },
                {
                    prop:'statusText',
                    label:"状态"
                }
            ],
            tableData:[],
            /* dialog */
            dialog: {
                formAdd:{
                    rootId:'', //机构
                    time:'', //时间
                    stage:'', //阶段
                    type:'' //学制
                },
                formAddRules:{
                    rootId:[{required: true, message: '请选择机构', trigger: 'change'}],
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
    created(){
        this.learnList();
        this.dictionary();

    },
    methods:{
        //
        setSelectMinWidth(val){
            let target = val.srcElement ? val.srcElement : val.target;
            this.selectMinWidth = target.clientWidth;
        },
        //字典
        dictionary(){
            let sex = {"type": ['stage']};
            this.$api.dictSelect(sex).then(res => {
                if(res.success == true){
                    let  i = 0;
                    for (i = 0; i < res.data.length; i++) {
                        if(res.data[i].type == 'stage'){
                            this.stage = res.data[i].data;
                        }
                    }
                }
            });
        },
        //学年下拉框数据
        calendarSelect(){
            let sex = {
                orgId:this.dialog.formAdd.rootId
            };
            this.$api.calendarSelect(sex).then(res => {
                if(res.success == true){
                    this.academic = res.data
                }
            });
        },
        /* 增加 */
        handleAdd() {
            let _this = this;
            _this.$refs['formAdd'].resetFields();
            _this.$myLayer.formLayer("新建",$('.stu-yeaer-modal-add'),['422px'],function () {
                _this.$refs["formAdd"].validate((valid) => {
                    if (valid) {
                        let params = {
                            orgId:parseInt(_this.dialog.formAdd.rootId),
                            schoolCalendarId:_this.dialog.formAdd.time,
                            stageId:parseInt(_this.dialog.formAdd.stage),
                            schoolSystem:parseInt(_this.dialog.formAdd.type)
                        };
                        _this.$api.learnAdd(params).then(res => {
                            if(res.success == true){
                                _this.$myLayer.successLayer(res.msg);
                                _this.learnList();
                            }
                        })
                    } else {
                        return false;
                    }
                });
            })
        },
        //筛选学校
        handleOrgSelect(val, callback){
            if(isSchool(val.unitAttr)){
                this.dialog.formAdd.rootId = val.id;
                this.calendarSelect();
                callback(true);
            }else {
                this.$myLayer.errorLayer('请选择学校');
            }
        },
        //停用
        schoolStop(val){
            if(val.status != 0){
                this.enable = 0;
            }else {
                this.enable = 1;
            }
            let params = {
                id:val.id,
                status:this.enable
            };
            this.$api.learnDis(params).then(res => {
                if (res.success == true) {
                    this.$myLayer.successLayer(res.msg)
                    this.learnList();
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })

        },
        //编辑
        schoolEdit(val){
            let _this = this;
            _this.dialog.formAdd.time =val.row.schoolStartTime;
            _this.dialog.formAdd.stage =val.row.stageId;
            _this.dialog.formAdd.type =val.row.schoolSystem;
            _this.$myLayer.formLayer("编辑",$('.stu-yeaer-modal-add'),['422px'],function () {
                _this.$refs["formAdd"].validate((valid) => {
                    if (valid) {
                        let params = {
                            id:val.row.id,
                            orgId:_this.dialog.formAdd.rootId,
                            schoolCalendarId:_this.dialog.formAdd.time,
                            stageId:_this.dialog.formAdd.stage,
                            schoolSystem:_this.dialog.formAdd.type
                        };
                        _this.$api.learnEdit(params).then(res => {
                            if(res.success == true){
                                _this.$myLayer.successLayer(res.msg);
                                _this.learnList();
                            }else {
                                _this.$myLayer.errorLayer(res.msg)
                            }
                        })
                    } else {
                        return false;
                    }
                });
            })
        },
        //分页
        learnList(){
            let params = {
                orgId:this.rootId,
                pageIndex:this.pageIndex,
                pageSize:this.pageSize,
                stageId:this.phaseT,
                status:this.state,
            };
            this.$api.learn(params).then(res => {
                if(res.success == true){
                    this.Total = parseInt(res.totalDatas);
                    this.tableData = res.data;
                }
            })
        },
        SizeChange(val){
            this.pageSize = val;
            this.learnList();
        },
        CurrentChange(val){
            this.pageIndex = val;
            this.learnList();
        },
        orgSelect(value) {
            this.rootId = value.id;
            this.learnList();
        },
        handleSwicthState(val){
            this.state = val;
            this.learnList();
        },
        query(){
            this.phaseT = this.phase;
            this.learnList();
        },
        empty(){
            this.phase = ''
        }
    }
}
</script>
<style>
  .el-select-dropdown,.el-picker-panel{
    z-index: 999999999!important;
    width: auto;
  }
</style>

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
