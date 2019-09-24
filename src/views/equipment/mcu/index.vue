<!-- mcu管理列表 -->
<template>
	 <div class="mcu-manage">
		 <div class="header flex-between">
			<div class="title">MCU管理</div>
			<btn-list @btn-click="handleAdd" :model="model"></btn-list>
		 </div>
		 <div class="content">
			 <el-table :data="customData" style="width: 100%">
				 <el-table-column prop="id" align="center" label="显示顺序"></el-table-column>
				 <el-table-column prop="name" align="center" label="名称"></el-table-column>
				 <el-table-column prop="account" align="center" label="管理员账号"></el-table-column>
				 <el-table-column prop="ip" align="center" label="IP"></el-table-column>
				 <el-table-column prop="port" align="center" label="端口"></el-table-column>
				 <el-table-column prop="number" align="center" label="编号"></el-table-column>
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
	components: {
		stateSwitch:()=>import("@/components/state-switch"),
		btnList:()=>import("@/components/btn-list"),
		page:()=>import("@/components/paging")
	},
	data(){
		return {
			model:{
				icon:'icon-add',
				name:'添加'
			},
			customData:[
				{
					id:1,
					name:'xxx',
					account:'yyy',
					ip:'180.11',
					port:'80',
					number:120
				}
			]

		}
	},
	methods:{
		handleAdd(){
			this.$router.push("/equipment/Layout/mcu-edit")
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.mcu-manage {
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
