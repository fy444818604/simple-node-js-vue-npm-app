<!-- 建筑场所 -->
<template>
    <div class="area">
        <base-title title="建筑场所">
            <template slot="filterTree">
                <slelct-tree
                    @on-change="handleChangeSelect"
                    :currentSelect="currentSelect"
                    :treeList="treeList"
                ></slelct-tree>
            </template>
            <template slot="btn">
                <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
            </template>
        </base-title>

        <div class="area-content">
            <base-table
                :tableData="tableData"
                :tableColumn="tableColumn"
                @on-stop="handleStop"
                @on-edit="handleEdit"
            ></base-table>
        </div>

        <div class="area-footer">
            <state-switch @switchL="handleSwicthState"></state-switch>
            <page :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></page>
        </div>

        <!-- modal -->
        <div class="build-area-mdoal">
            <el-form
                style="width:330px;margin:24px auto"
                ref="form"
                :model="formInfo"
                label-width="80px"
                :rules="formRules"
            >
                <el-form-item label="机构" prop="orgId">
                    <el-input v-model="formInfo.orgId" suffix-icon="iconfont icon-apartment"></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="所属校区" prop="campusId">
                    <el-select v-model="formInfo.campusId" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域一2" value="shangha2i"></el-option>
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
    components: {
        stateSwitch: () => import("./../../../components/state-switch"),
        baseTable: () => import("./../../../components/table"),
        slelctTree: () => import("./../../../components/select-tree"),
        baseTitle: () => import("@/components/title"),
        btnList: () => import("@/components/btn-list"),
        page: () => import("@/components/paging")
    },
    data() {
        const tableColumn = [
            {
                prop: "orderIndex",
                label: "显示顺序",
            },
            {
                prop: "name",
                label: "名称",
            },
            {
                prop: "orgName",
                label: "所属机构",
            },
            {
                prop: "campusName",
                label: "校区",
            },
            {
                prop: "description",
                label: "描述",
            },
            {
                prop: "statusText",
                label: "状态",
            }
        ];
        return {
            currentSelect: "成都第X中学",
            treeList: [
                {
                    id: 1,
                    label: "四川省教育厅",
                    children: [
                        {
                            id: 1 - 1,
                            label: "成都市教育厅",
                            children: [
                                {
                                    id: 1 - 1 - 1,
                                    label: "成都xxx中学"
                                }
                            ]
                        },
                        {
                            id: 1 - 2,
                            label: "雅安市教育厅",
                            children: [
                                {
                                    id: 1 - 2 - 1,
                                    label: "雅安yyy中学"
                                }
                            ]
                        },
                        {
                            id: 1 - 3,
                            label: "绵阳市教育厅",
                            children: [
                                {
                                    id: 1 - 3 - 1,
                                    label: "绵阳zzz中学"
                                }
                            ]
                        },
                        {
                            id: 1 - 3,
                            label: "绵阳市教育厅",
                            children: [
                                {
                                    id: 1 - 3 - 1,
                                    label: "绵阳zzz中学"
                                }
                            ]
                        },
                        {
                            id: 1 - 3,
                            label: "绵阳市教育厅",
                            children: [
                                {
                                    id: 1 - 3 - 1,
                                    label: "绵阳zzz中学"
                                }
                            ]
                        },
                        {
                            id: 1 - 3,
                            label: "绵阳市教育厅",
                            children: [
                                {
                                    id: 1 - 3 - 1,
                                    label: "绵阳zzz中学"
                                }
                            ]
                        }
                    ]
                }
            ],
            tableData: [],
            //分页
            pageSize: 10,//显示多少页
            pageCurrent: 1,//当前页
            pageTotal: 0,//总条数
            tableColumn,
            /* switch status */
            status: 0, //状态:0启动、1停用、全部''
            /* dialog */
            formInfo: {
                campusId: 0, // 校区ID
                name: "", // 名称
                orderIndex: 0, // 顺序
                description: "", // 描述
                orgId: 0 // 机构Id
            },
            formRules: {
                orgId: [
                    { required: true, message: "请选择机构", trigger: "blur" }
                ],
                name: [
                    { required: true, message: "请输入名称", trigger: "blur" }
                ],
                campusId: [
                    {
                        required: true,
                        message: "请选择所属校区",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    created() {
        this.areasList();
    },
    methods: {
        /*分页查询*/
        areasList(){
            let params = {
                pageIndex: this.pageCurrent,
                pageSize: this.pageSize,
                status: this.status,
                orgId:'1178138607873990657'
            };
            this.$api.areaList(params).then(res => {
                if (res.success == true) {
                    //赋值分页总数
                    this.pageTotal = parseInt(res.totalDatas);
                    let array = [];
                    let list = res.data;
                    list.map((item,index)=>{
                        array.push(
                            Object.assign({
                                index:index+1
                            },item,{indexNum:'str'})
                        )
                    });
                    //赋值表格数据
                    this.tableData = array;
                } else {
                    this.$myLayer.errorLayer('失败')
                }
            })
        },
        //分页
        SizeChange(val) {
            this.pageSize = val;
            this.areasList();
        },
        CurrentChange(val) {
            this.pageCurrent = val;
            this.areasList();
        },

        /* 点击选择 filter-tree */
        handleChangeSelect(val) {
            const { id, label } = val;
            this.currentSelect = label;
        },
        /* 表格的操作 */
        handleStop(row) {
            let _this = this;
            if(row.status != 0){
                _this.enable = 0;
            }else {
                _this.enable = 1;
            }
            let params = {
                id:row.id,
                status:_this.enable
            };
            this.$api.areaDis(params).then(res => {
                if (res.success == true) {
                    _this.areasList();
                    this.$myLayer.successLayer(res.msg)
                } else {
                    this.$myLayer.errorLayer(res.msg)
                }
            })
        },
        //编辑
        handleEdit(row) {
            let _this = this;
            let data = {
                campusId:row.row.orgName,
                name:row.row.name,
                orderIndex:row.row.orderIndex,
                description:row.row.description,
                orgId:row.row.orgId
            }
            _this.formInfo = data;
            this.$myLayer.formLayer("编辑", $(".build-area-mdoal"), ["422px"],function () {
                let ediData = {
                    id:row.row.id,
                    name: _this.formInfo.name,
                    campusId:'',
                    orderIndex:_this.formInfo.orderIndex,
                    orgId:'1178138607873990657',
                    description:_this.formInfo.description
                };
                _this.$api.areaEdi(ediData).then(res => {
                    if (res.success == true) {
                        _this.areasList();
                        _this.$myLayer.successLayer(res.msg)
                    } else {
                        _this.$myLayer.errorLayer(res.msg)
                    }
                })
            });

        },
        /* 控制状态 */
        handleSwicthState(val) {
            this.status = val;
            this.areasList();
        },
        /* 添加 */
        handleAdd() {
            let _this = this;
            this.$myLayer.formLayer("新建", $(".build-area-mdoal"), ["422px"],function () {
                if(_this.formInfo.name == ''){

                }else {
                    let params = {
                        name: _this.formInfo.name,
                        campusId:'',
                        orderIndex:_this.formInfo.orderIndex,
                        orgId:'1178138607873990657',
                        description:_this.formInfo.description
                    };
                    _this.$api.areaAdd(params).then(res => {
                        if (res.success == true) {
                            _this.areasList();
                            _this.$myLayer.successLayer(res.msg)
                        } else {
                            _this.$myLayer.errorLayer(res.msg)
                        }
                    })
                }
            });
        }
    }
};

</script>

<style lang="scss" scoped>
.area {
    padding: 18px 24px;
}
.area-content {
    margin-top: 24px;
}
.area-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}
.build-area-mdoal {
    display: none;
}
</style>
