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
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="12"></page>
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
    </div>


  </div>
</template>
<script>

export default {
    components:{
        baseTable:()=>import("./../../../components/table"),
        stateSwitch:() => import("./../../../components/state-switch"),
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
            this.$myLayer.formLayer('新建教室类型',$('.room-type-modal'),['422px'])
        },
        handleSwicthState(val){},
    }
}
</script>
<style lang="scss" scoped>
.room-type {
  padding: 18px 24px;
  .content {
    margin-top: 24px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
  .room-type-modal {
    display: none;
  }
}
</style>