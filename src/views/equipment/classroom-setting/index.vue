<!-- 录播教室管理管理列表 -->
<template>
	<div class="setting">
		<div class="header flex-between">
			<div class="left flex">
				<div class="title">录播教室管理</div>
				<slelct-tree currentSelect="xxxx" :treeList="treeList"></slelct-tree>
			</div>
			<div class="right">
				<btn-list @btn-click="handleAdd" :model="icons[0]"></btn-list>
				<btn-list @btn-click="handleAdd" :model="icons[1]"></btn-list>
				<btn-list @btn-click="handleAdd" :model="icons[2]"></btn-list>
			</div>
		</div>
		<div class="content">
			 <el-table :data="customData" style="width: 100%">
				<el-table-column
					type="selection"
					width="55">
				</el-table-column>
				 <el-table-column width="55" prop="id" align="center" label="序号"></el-table-column>
				 <el-table-column prop="name" align="center" label="名称"></el-table-column>
				 <el-table-column prop="class" align="center" label="教室"></el-table-column>
				 <el-table-column prop="desc" align="center" label="描述"></el-table-column>
				 <el-table-column prop="status" align="center" label="状态"></el-table-column>
				 <el-table-column align="center" label="操作">
					 <template slot-scope="scope">
						 <div>
							  <i class="iconfont icon-more"></i>
						 </div>
					 </template>
				 </el-table-column>
			 </el-table>
		</div>
		<div class="footer flex-between">
			<state-switch></state-switch>
			<page :pageTotal="20"></page>
		</div>
	</div>
</template>

<script>
export default {
	components:{
		stateSwitch:()=>import("@/components/state-switch"),
		btnList:()=>import("@/components/btn-list"),
		page:()=>import("@/components/paging"),
		slelctTree:() => import("./../../../components/select-tree")
	},
	data(){
		return {
			icons:[{icon:'icon-add',name:'添加'},{icon:'icon-stop',name:'stop'},{icon:'icon-enable',name:'√'}],
			customData:[				{
				id:1,
				name:'xxx',
				class:'yyy',
				desc:'180.11',
				status:'80'
				}],
			treeList:[]
		}
	},
	methods:{
		handleAdd(){}
	}
}
</script>

<style lang="scss" scoped="scoped">
.setting {
	padding: 18px 24px;
}
.header{
	.title {
		color: #303133;
		font-weight: bold;
	}
}
.content {
	margin:26px 0;
}
</style>