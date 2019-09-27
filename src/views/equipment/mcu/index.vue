<!-- mcu管理列表 -->
<template>
	 <div class="mcu-manage">
    <base-title title="MCU管理">
      <template slot="btn">
        <btn-list @btn-click="handleAdd" :model="{icon:'icon-add',name:'添加'}"></btn-list>
      </template>
    </base-title>
		 <div class="content">
			 <base-table 
			 :tableData="customData" 
			 :tableColumn="tableColumn" single></base-table>
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
		baseTable:()=>import("./../../../components/table"),
		stateSwitch:()=>import("@/components/state-switch"),
		btnList:()=>import("@/components/btn-list"),
		page:()=>import("@/components/paging"),
		baseTitle:()=>import("@/components/title")
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
			],
			tableColumn:[
					{prop:'id',label:'显示顺序'},
					{prop:'name',label:'名称'},
					{prop:'account',label:'管理员账号'},
					{prop:'ip',label:'IP'},
					{prop:'port',label:'端口'},
					{prop:'number',label:'编号'}
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
.content {
	margin:24px 0;
}
</style>
