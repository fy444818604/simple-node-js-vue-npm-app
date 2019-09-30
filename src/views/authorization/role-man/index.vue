<!-- 角色管理设置 -->
<template>
	 <div class="role">
		 <base-title border title="角色设置">
		 	<template slot="btn">
				 <btn-list :model="{icon:'icon-add',name:'添加'}"></btn-list>
				 <btn-list :model="{icon:'icon-del',name:'删除'}"></btn-list>
			</template>
		 </base-title>
		 <div class="content">
			 <div class="search">
				 <span class="title">组织机构:</span>
				 <el-input style="width:200px" placeholder="请选择组织结构"></el-input>
				 <el-button class="sear-btn">查询</el-button>
				 <el-button class="clear-btn" type="text">清空</el-button>
			 </div>
			 <el-table  :data="tableData" style="width: 100%">
				 <el-table-column type="selection" width="55"></el-table-column>
				 <el-table-column prop="id" label="显示顺序"></el-table-column>
				 <el-table-column label="角色名称">
					  <template slot-scope="scope">
							<router-link to="/authorization/Layout/role-man-detail">
								{{ scope.row.name }}
							</router-link>
						</template>
				 </el-table-column>
				 <el-table-column prop="org" label="机构"></el-table-column>
				 <el-table-column prop="desc" label="描述"></el-table-column>
				 <el-table-column prop="number" label="成员数">
					  <template slot-scope="scope">
							<router-link to="">
								{{ scope.row.number }}
							</router-link>
						</template>
				 </el-table-column>
				 <el-table-column label="操作" width="60"></el-table-column>
			 </el-table>
		 </div>
		 <div class="footer">
			 <page class="page" :pageTotal="23"></page>
		 </div>
	 </div>
</template>

<script>
export default {
    components:{
        btnList:()=>import("@/components/btn-list"),
        baseTitle:()=>import("@/components/title"),
        page:()=>import("@/components/paging")
    },
    data(){
        return {
            tableData:[{id:1,name:'系统管理员',org:'成都第X中学',desc:'系统管理员',number:12}]
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
.role {
 padding: 18px 24px;
}
.content {
	.search {
		margin: 20px 0;
		display: flex;
		align-items: center;
		.title {
			padding-right: 5px;
		}
		.sear-btn {
			margin-left: 20px;
			padding: 10px 20px;
		}
		.clear-btn {
			text-decoration: underline;
		}
	}
}
.footer {
	text-align: right;
	margin-top: 25px;
	.page {
		display: inline-block
	}
}
</style>
