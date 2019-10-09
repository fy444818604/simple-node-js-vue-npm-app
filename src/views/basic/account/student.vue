<!-- 学生账号 -->
<template>
	<div class="page-container" id="teacher-account">
		<div class="flex-between bt-line pb10">
			<div class="flex">
				<div class="cha-title">学生账号</div>
				<el-dropdown trigger="click" placement="bottom">
					<span class="el-dropdown-link">
						{{currentSelect}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-input v-model="filterText">
						</el-input>
						<el-tree @node-click="handleSelect" style="width:250px" class="filter-tree" :data="areaList" :props="defaultProps" :filter-node-method="filterNode" ref="tree">
						</el-tree>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div class="btnGroup">
				<btn-list v-for="(item,index) in btnGroup" :key="index" :model="item" @btn-click="btnClick"></btn-list>
			</div>
		</div>
		<div class="pt20">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item>
					<el-input v-model="formInline.user" placeholder="请输入账号查询"></el-input>
				</el-form-item>
				<el-form-item label="性别:">
					<el-select v-model="formInline.region" placeholder="不限" style="width: 80px;">
						<el-option label="男" value="1"></el-option>
						<el-option label="女" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="阶段:">
					<el-select v-model="formInline.region" placeholder="不限" style="width: 80px;">
						<el-option label="男" value="1"></el-option>
						<el-option label="女" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="学届">
					<el-select v-model="formInline.region" placeholder="全部" style="width: 80px;">
						<el-option label="男" value="1"></el-option>
						<el-option label="女" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="行政班:">
					<el-select v-model="formInline.region" placeholder="全部" style="width: 80px;">
						<el-option label="男" value="1"></el-option>
						<el-option label="女" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="就读类型:">
					<el-select v-model="formInline.region" placeholder="全部" style="width: 80px;">
						<el-option label="男" value="1"></el-option>
						<el-option label="女" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<button class="primary-btn" @click="search">查询</button>
					<button class="clear-btn" @click="search">清空</button>
				</el-form-item>
			</el-form>
		</div>
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" label="序号" width="120">

			</el-table-column>
			<el-table-column prop="workNum" label="学号" width="120">
			</el-table-column>
			<el-table-column label="姓名">
				<template slot-scope="scope">
					<router-link class="main-color" target="_blank" :to="{path:'/basic/student-detail',query:{id:scope.row.id}}">{{scope.row.name}}</router-link>
				</template>
			</el-table-column>
			<el-table-column label="性别">
				<template slot-scope="scope">
					{{scope.row.sex == 1?'男':'女'}}
				</template>
			</el-table-column>
			<el-table-column prop="org" label="机构">
			</el-table-column>
			<el-table-column prop="stage" label="阶段">
			</el-table-column>
			<el-table-column prop="grade" label="年级">
			</el-table-column>
			<el-table-column prop="className" label="行政班">
			</el-table-column>
			<el-table-column prop="type" label="就读类型">
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					{{scope.row.status == 1?'启用':'停用'}}
				</template>
			</el-table-column>
			<el-table-column prop="id" label="操作" width="60">
				<template slot-scope="scope">
					<i class="iconfont icon-more"></i>
					<!-- <ul>
						<li>停用</li>
						<li>编辑</li>
					</ul> -->
				</template>
			</el-table-column>
		</el-table>
		<div class="flex-between mt20">
			<state-switch @switchL="stateList"></state-switch>
			<paging :pageTotal="pageTotal" @handleSizeChange="SizeChange" @handleCurrentChange="CurrentChange"></paging>
		</div>
	</div>
</template>

<script>
import btnList from '@/components/btn-list'
import stateSwitch from '@/components/state-switch'
import paging from '@/components/paging'
export default {
    data() {
        return {
            btnGroup: [{
                icon: 'icon-add',
                name: '添加',
                alias: 1
            }, {
                icon: 'icon-input',
                name: '导入',
                alias: 2
            }, {
                icon: 'icon-permissions',
                name: '重置密码',
                alias: 3
            }, {
                icon: 'icon-enable',
                name: '启用',
                alias: 4
            }, {
                icon: 'icon-stop',
                name: '停用',
                alias: 5
            }],
            currentSelect: "成都第X中学",
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            filterText: '',
            areaList: [{
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
                }
                ]
            }],
            formInline: {
                user: '',
                sex: ''
            },
            tableData: [{
                id: 123,
                num: 1,
                workNum: 20134490,
                name: '王志山',
                sex: 1,
                org: '元素中学',
                stage:'初中',
                grade:'2019级',
                className:'1班',
                type:'走读',
                status: 1,
            }, {
                id: 123,
                num: 1,
                workNum: 20134490,
                name: '王志山',
                sex: 1,
                org: '元素中学',
                stage:'初中',
                grade:'2019级',
                className:'1班',
                type:'走读',
                status: 1,
            }],
            multipleSelection: [],
            pageSize: '', //显示多少页
            pageCurrent: '', //当前页
            pageTotal: 300 //总条数
        }
    },
    components: {
        'btn-list': btnList,
        'state-switch': stateSwitch,
        'paging': paging
    },
    created(){
        this.dictionary();
        this.studentsList();
    },
    watch: {
        filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    methods: {
    	//性别
        dictionary(){
			let params = {
				"type": [
					"sex"
				]
			};
			this.$api.dictSelect(params).then(res => {
				console.log(res)

			})
        },
        //list列表
        studentsList(){

        },
        //机构查询
        institutions(){

        },
        btnClick(val) {

        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleSelect(value) {
            if (!value.children) {
                const {
                    id,
                    label
                } = value;
                this.currentSelect = label;

            }
        },
        search() {

        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        stateList(state) {
            alert(state)
        },
        SizeChange(pageSize) {
            alert(pageSize)
        },
        CurrentChange(pageCurrent) {
            alert(pageCurrent)
        }
    }
}
</script>

<style>
	.weixin-icon {
		height: 14px;
		width: 16px;
	}
</style>
