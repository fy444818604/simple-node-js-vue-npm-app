<!-- 角色详情 -->
<template>
	<div class="role-detail">
		<base-title bread :breadList="['系统管理员']" title="角色"></base-title>
		<div class="content">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="角色信息" name="first">
					<ul class="role-info">
						<li>
							<span>角色名称:</span>
							<span>系统管理员</span>
						</li>
						<li>
							<span>机构:</span>
							<span>武侯区第X中学</span>
						</li>
						<li>
							<span>描述:</span>
							<span>系统管理员</span>
						</li>
						<li>
							<span>显示顺序:</span>
							<span>1</span>
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="成员列表 2" name="second">
					<el-table style="margin-top:5px" :data="tableData">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop="id" label="序号"></el-table-column>
						<el-table-column prop="gro" label="成员"></el-table-column>
						<el-table-column prop="org" label="机构"></el-table-column>
						<el-table-column label="操作" width="60">
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
			<div class="icon">
				<template v-if="false">
					<btn-list :model="{icon:'icon-edit',name:'编辑'}"></btn-list>
				</template>
				<template v-if="true">
					<btn-list :model="{icon:'icon-add',name:'添加'}"></btn-list>
					<btn-list :model="{icon:'icon-del',name:'删除'}"></btn-list>
				</template>
			</div>
		</div>

		<div class="footer">
 			<page class="page" :pageTotal="23"></page>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            activeName:"first",
            tableData:[{id:1,gro:'何司朗',org:'校长办公室'}]
        }
    },
    components:{
        btnList:()=>import("@/components/btn-list"),
        page:()=>import("@/components/paging"),
        baseTitle:()=>import("@/components/title")
    },
    methods:{
        handleClick(){}
    }
}
</script>

<style lang="scss" scoped="scoped">
.role-detail {
	padding: 18px 24px;
	.content {
		margin-top: 15px;
		position: relative;
		.role-info {
			li {
				margin-top: 30px;
				&:first-child {
					margin-top: 10px;
				}
			}
			span {
				&:first-child {
					display: inline-block;
					min-width: 4rem;
					text-align: right;
					margin-right: 2rem;
				}
			}
		}
		.icon {
			position: absolute;
			right: 0;
			top: 10px;
		}
	}
	.footer {
		text-align: right;
		margin-top: 25px;
		.page {
			display: inline-block
		}
	}
}
</style>
<style>
.role-detail .el-breadcrumb .el-breadcrumb__item.title span {
	color: #303133;
	font-weight: bold;
}
</style>