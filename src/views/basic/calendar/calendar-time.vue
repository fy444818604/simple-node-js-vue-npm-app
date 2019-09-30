<!--时间设置-->
<template>
    <div class="page-template">
        <!--页面title-->
        <el-row class="pol-title">
            <el-col :span="12"><div class="grid-content bg-purple cha-title">{{ pageTile }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <bnt-list :model="model" @btn-click="polAdd">
                </bnt-list>
            </div></el-col>
        </el-row>
        <!--表格-->
        <el-table class="base-table"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="order"
                    label="显示顺序"
                   >
            </el-table-column>
            <el-table-column class="base-table-name" label="名称">
                <template slot-scope="scope">
                    <router-link class="main-color" target="_blank" :to="{path:'/basic/Layout/calendar-detail',query:{id:scope.row.id}}">{{scope.row.name}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    label="每天起始时间">
            </el-table-column>
            <el-table-column
                    prop="yearTime"
                    label="每年起始时间">
            </el-table-column>
            <el-table-column
                    prop="yearEndTime"
                    label="每年结束时间">
            </el-table-column>
            <el-table-column
                    prop="institutions"
                    label="机构">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="状态">
            </el-table-column>
            <el-table-column
                    align="center"
                    width="60"
                    label="操作">
                <template slot-scope="scope">
                    <div class="tableColumn-control">
                        <i v-if="!scope.row.showBtn" @mouseenter="handleMouseEnter(scope.row)" class="iconfont icon-more"></i>
                        <div v-else @mouseleave="handleMouseLeave(scope.row)">
                            <span @click="handleStop(scope.row)">停用</span>
                            <span @click="handleEdit(scope.row)">编辑</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <!--分页/启用/停用-->
        <el-row class="pol-bnt">
            <el-col :span="5"><div class="grid-content bg-purple cha-title">
                <stateSwitch @switchL="stateList"></stateSwitch>
            </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple-light">
                <pol-paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></pol-paging>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
import bntList from '../../../components/btn-list'
import stateSwitch from '../../../components/state-switch'
import paging from '../../../components/paging'
export default {
    name: "calendar-set",
    data(){
        return{
            pageTile:'作息时间',
            //按钮
            model:{
                name:'添加',
                icon:'icon-add'
            },
            tableData: [{
                order: '2016-05-02',
                name: '王小虎',
                startTime: '2016-05-02',
                yearTime: '2016-05-02',
                yearEndTime: '2016-05-02',
                institutions:'一中',
                state:'启用'
            }, {
                order: '2016-05-04',
                name: '王小虎',
                startTime: '2016-05-02',
                yearTime: '2016-05-02',
                yearEndTime: '2016-05-02',
                institutions:'二中',
                state:'启用'

            }, {
                order: '2016-05-01',
                name: '王小虎',
                startTime: '2016-05-02',
                yearTime: '2016-05-02',
                yearEndTime: '2016-05-02',
                institutions:'三中',
                state:'启用'
            }, {
                order: '2016-05-03',
                name: '王小虎',
                startTime: '2016-05-02',
                yearTime: '2016-05-02',
                yearEndTime: '2016-05-02',
                institutions:'四中',
                state:'启用'
            }],
            //分页
            pageSize:'',//显示多少页
            pageCurrent:'',//当前页
            pageTotal:300,//总条数
            //弹框
            /* dialog */
            dialog: {
                visible:false,
                title: '新建',
            },
            polForm:{
                political:'',
                describe:'',
                order:''
            },
            formRules:{
                political:[{required: true, message: '不能为空', trigger: 'blur'}],
            },
        }
    },
    components:{
        'bnt-list':bntList,
        'stateSwitch':stateSwitch,
        'pol-paging':paging,
    },
    methods: {
        //添加
        polAdd(){
            this.dialog.visible = true;
        },
        //表格
        polStop(row){
            console.log(row)
        },
        polEdit(row){
            console.log(row)
        },
        //状态
        stateList(state){
            console.log(state)
        },
        //分页
        SizeChange(val){
            console.log(val)
        },
        CurrentChange(val){
            console.log(val)
        },
        /* 鼠标移入移除 */
        handleMouseEnter(row){
            row.showBtn = true;
            this.tableData = [...this.tableData]
        },
        handleMouseLeave(row){
            row.showBtn = false;
            this.tableData = [...this.tableData]
        },
        handleStop(row){
            console.log(row)
        },
        handleEdit(row){
            console.log(row)
        },
    }
}
</script>

<style lang="scss" scoped>
    .page-template{
        padding: 18px 24px;
    }
    .pol-title{
        height: 32px;
        border-bottom: 1px solid #e5e7ef;
        margin-bottom: 26px;
    }
    .pol-title .bg-purple-light{
        text-align: right;
    }
    .pol-bnt{
        margin-top: 14px;
    }
    .pol-bnt .bg-purple-light{
        text-align: right;
    }
    .pol-bnt .bg-purple{
        margin-top: 4px;
    }
    /*表格*/
    .base-table {
        .base-table-name{
            color: #4A80F6;
        }
        .tableColumn-control {
            height: 50px;
            line-height: 50px;
            i {
                color: #487ff6;
                cursor: pointer;
            }
            span {
                display: inline-block;
                cursor: pointer;
                &:last-child {
                    margin-left: 10px;
                }
                &:hover{
                    color: #4A80F6;
                }
            }
            div {
                text-align: center;
                background: #D0E9FF;
                position: absolute;
                z-index: 999;
                left: -60px;
                top: 0;
                width: 120px;
            }
        }
    }
</style>

<style>
    .base-table.el-table td { padding: 0; }
</style>
