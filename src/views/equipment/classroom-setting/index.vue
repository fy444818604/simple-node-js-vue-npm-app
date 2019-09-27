<!-- 录播教室管理管理列表 -->
<template>
	<div class="setting">
    <base-title title="录播教室管理">
			<template slot="filterTree">
				<slelct-tree currentSelect="xxxx" :treeList="treeList"></slelct-tree>
			</template>
      <template slot="btn">
				<btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
				<btn-list @btn-click="handleAdd" :model="{icon:'icon-stop',name:'暂停'}"></btn-list>
				<btn-list @btn-click="handleAdd" :model="{icon:'icon-enable',name:'确认'}"></btn-list>
      </template>
    </base-title>


		<div class="content">
			 <el-table :data="customData" style="width: 100%">
				<el-table-column
					type="selection"
					width="55">
				</el-table-column>
				 <el-table-column width="55" prop="id" align="center" label="序号"></el-table-column>
				 <el-table-column prop="name" align="center" label="名称">
					 <template slot-scope="scope">
						 <router-link style="color:#4A80F6" to="/equipment/Layout/classroom-setting-edit">{{scope.row.name}}</router-link>
					 </template>
				 </el-table-column>
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
		baseTitle:()=>import("@/components/title"),
		stateSwitch:()=>import("@/components/state-switch"),
		btnList:()=>import("@/components/btn-list"),
		page:()=>import("@/components/paging"),
		slelctTree:() => import("@/components/select-tree")
	},
	data(){
		return {
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
.content {
	margin:24px 0;
}
</style>