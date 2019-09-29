<!-- 建筑场所 -->
<template>
	<div class="area">

    <base-title title="建筑场所">
      <template slot="filterTree">
        <slelct-tree @on-change="handleChangeSelect" :currentSelect="currentSelect" :treeList="treeList"></slelct-tree>
      </template>
      <template slot="btn">
        <btn-list @btn-click="handleAdd"  :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

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
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="22"></page>
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
    </div>
    
  </div>
</template>

<script>
export default {
    components:{
        stateSwitch:() => import("./../../../components/state-switch"),
        baseTable:()=>import("./../../../components/table"),
        slelctTree:() => import("./../../../components/select-tree"),
        baseTitle:() => import("@/components/title"),
        btnList:() => import("@/components/btn-list"),
        page:() => import("@/components/paging")
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

                }
            ],
            tableColumn,
            /* switch status */
            status: 0,   //状态:0启动、1停用、全部''
            /* dialog */
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
            }
        }
    },
    methods:{
    /* 点击选择 filter-tree */
        handleChangeSelect(val){
            const {id,label} = val
            this.currentSelect = label
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
            this.status = val;
        },
        /* 打开弹层 */
        handleAdd(){
            this.$myLayer.formLayer("新建",$(".build-area-mdoal"),['422px'])
        },
    }
}
</script>

<style lang="scss" scoped>
.area { padding: 18px 24px; }
.area-content { margin-top: 24px; }
.area-footer { display: flex; justify-content: space-between;margin-top: 24px;}
.build-area-mdoal { display: none; }
</style>