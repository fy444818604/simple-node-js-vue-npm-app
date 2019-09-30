<!--教室设置-->
<template>
  <div class="room-setting">
  
    <base-title title="教室设置">
      <template slot="filterTree">
        <slelct-tree :currentSelect="currentSelect" :treeList="treeList"></slelct-tree>
      </template>
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

    <div class="content">
      <base-table  
        :tableData="tableData" 
        :tableColumn="tableColumn">
      </base-table>
    </div>

    <div class="footer">
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="22"></page>
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
    </div>


  </div>
</template>
<script>
export default {
    components:{
        stateSwitch:() => import("@/components/state-switch"),
        baseTable:()=>import("@/components/table"),
        slelctTree:() => import("@/components/select-tree"),
        baseTitle:()=>import("@/components/title"),
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging")
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

            /* dialog */
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
        handleSwicthState(val){
        },
        /* dialog */
        handleAdd(){
            this.$myLayer.formLayer("新建",$('.room-setting-modal'),['422px'])      
        }
    }
}
</script>
<style lang="scss" scoped>
.room-setting {
 padding: 18px 24px;
 .content {
   margin-top: 24px;
 }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  .room-setting-modal {
    display: none;
  }
} 
</style>
