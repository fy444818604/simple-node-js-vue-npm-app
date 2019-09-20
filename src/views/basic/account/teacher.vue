<!-- 教职工账号 -->
<template>
	<!-- <router-link target="_blank" :to="{path:'/basic/Layout/system',query:{id:'1'}}">新页面打开</router-link> -->
	<div class="page-container" id="teacher-account">
		<div class="flex-between bt-line pb10">
			<div class="flex">
				<div class="cha-title">教职工账号</div>
				<el-dropdown trigger="click" placement="bottom">
					<span class="el-dropdown-link">
						{{currentSelect}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-input v-model="filterText">
						</el-input>
						<el-tree @node-click="handleSelect" style="width:250px" class="filter-tree" :data="areaList" :props="defaultProps"
						 :filter-node-method="filterNode" ref="tree">
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
					<el-input v-model="formInline.user" placeholder="请输入工号/姓名查询"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-select v-model="formInline.region" placeholder="不限" style="width: 80px;">
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
			<el-table-column prop="workNum" label="工号" width="120">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="sex" label="性别">
			</el-table-column>
			<el-table-column prop="org" label="机构">
			</el-table-column>
			<el-table-column prop="telphone" label="手机号">
			</el-table-column>
			<el-table-column label="微信">
				<template slot-scope="scope">
					<img :src="require('@/assets/image/weixin.png')" v-show="scope.row.weixin == 1" class="weixin-icon">
				</template>
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					{{scope.row.status == 1?'启用':'停用'}}
				</template>
			</el-table-column>
			<el-table-column prop="id" label="操作">
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
	import stateSwitch from '../../../components/state-switch'
	import paging from '../../../components/paging'
	export default {
		data() {
			return {
				btnGroup: [{
					icon: 'icon-add',
					name: '添加',
					alias: 1
				}, {
					icon: 'icon-edit',
					name: '编辑',
					alias: 2
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
					telphone: 15155552222,
					weixin: 1,
					status: 1,
				}, {
					id: 123,
					num: 1,
					workNum: 20134490,
					name: '王志山',
					sex: 1,
					org: '元素中学',
					telphone: 15155552222,
					weixin: 0,
					status: 2,
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
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		methods: {
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
