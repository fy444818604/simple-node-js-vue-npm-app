<!--班级管理-->
<template>
	<div class="cla-mates">
    <base-title title="班级管理" border>
      <template slot="filterTree">
        <slelct-tree  currentSelect="zzz" :treeList="treeList"></slelct-tree>
      </template>
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>

		<div class="content">
			<div class="search-info">
				<el-input style="width:200px" v-model="search.name" placeholder="请输入班级名称查询"></el-input>
				<div class="item">
					<span>阶段:</span>
					<el-select style="width:80px;margin-left:10px" v-model="search.stage">
						<el-option v-for="item in search.stageList" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div>
					<span>学届:</span>
					<el-select style="width:90px;margin-left:10px" v-model="search.grade">
						<el-option v-for="item in search.gradeList" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="item">
					<span>建筑:</span>
					<el-select style="width:200px;margin-left:10px" v-model="search.area">
						<el-option v-for="item in search.areaList" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<el-button>查询</el-button>
				<el-button style="color:#606266;text-decoration: underline" type="text">清空</el-button>
			</div>
			<base-table :tableData="tableData" :tableColumn="tableColumn">
			</base-table>
		</div>

    <div class="footer">
      <state-switch @switchL="handleSwicthState"></state-switch>
      <page :pageTotal="22"></page>
    </div>

		<!-- modal -->
		<div class="cla-mates-modal">
			<el-form style="width:330px;margin:24px auto" label-width="80px" :model="formInfo" :rules="rules">
				<el-form-item label="学校" prop="school">
					<el-select style="width:100%" v-model="formInfo.school">
						<el-option value="xxx" label="xxx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班名" prop="className">
					<el-input v-model="formInfo.className"></el-input>
				</el-form-item>
				<el-form-item label="学届" prop="classYear">
					<el-select style="width:100%" v-model="formInfo.classYear">
						<el-option value="xxx" label="xxx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班主任" prop="teacher">
					<el-select style="width:100%" v-model="formInfo.teacher">
						<el-option value="xxx" label="xxx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="教室" prop="classRoom">
					<el-select style="width:100%" v-model="formInfo.classRoom">
						<el-option value="xxx" label="xxx"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
    components: {
        baseTable: () => import("./../../../components/table"),
        stateSwitch: () => import("./../../../components/state-switch"),
        slelctTree: () => import("./../../../components/select-tree"),
        baseTitle:()=>import("@/components/title"),
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging")
    },
    data() {
        return {
            treeList: [{
                id: 1,
                label: '四川省教育厅',
                children: [{
                    id: 1 - 1,
                    label: '成都市教育厅',
                    children: [{
                        id: 1 - 1 - 1,
                        label: '成都xxx中学',
                    }]
                },
                {
                    id: 1 - 2,
                    label: '雅安市教育厅',
                    children: [{
                        id: 1 - 2 - 1,
                        label: '雅安yyy中学',
                    }]
                },
                {
                    id: 1 - 3,
                    label: '绵阳市教育厅',
                    children: [{
                        id: 1 - 3 - 1,
                        label: '绵阳zzz中学',
                    }]
                }
                ]
            }],
            search: {
                name: '', //班级名称
                stage: '', //阶段
                grade: '', //学届
                area: '', //建筑
                stageList: [{
                    value: '',
                    label: "不限"
                }],
                gradeList: [{
                    value: '',
                    label: "全部"
                }],
                areaList: [{
                    value: '',
                    label: ""
                }]
            },
            tableColumn: [{
                prop: "id",
                label: "序号"
            },
            {
                prop: "name",
                label: "名称"
            },
            {
                prop: "type",
                label: "类型"
            },
            {
                prop: "desc",
                label: "描述"
            },
            {
                prop: "status",
                label: "状态"
            }
            ],
            tableData: [{
                id: 1,
                name: '1号教学楼',
                type: '普通教室',
                desc: '1号教学楼',
                status: '启用'
            }],
            /* dialog */
            formInfo: {
                school: '',
                classYear: '',
                teacher: '',
                classRoom: '',
                className: ''
            },
            rules: {
                school: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],
                classYear: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],
                teacher: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],
                classRoom: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],
                className: [{
                    required: true,
                    message: '请选择学校名称',
                    trigger: 'blur'
                }],

            }
        }
    },
    methods: {
        /* add */
        handleAdd() {
            this.$myLayer.formLayer("新建",$('.cla-mates-modal'),['422px'])
        },
        handleSwicthState() {},
    }
}
</script>

<style lang="scss" scoped>
	.cla-mates {
		padding: 18px 24px;
		.content {
			.search-info {
				margin-top: 20px;
				margin-bottom: 20px;
				display: flex;
				align-items: center;
				.item {
					margin: 0 15px;
				}
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			margin-top: 24px;
		}
		.cla-mates-modal {
			display: none;
		}
	}
</style>
