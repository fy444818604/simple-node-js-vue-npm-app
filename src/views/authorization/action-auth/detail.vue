<!-- 功能授权详情 -->
<template>
	 <div class="action-detail">
		 <div class="detail-header">
			 <base-title bread title="功能授权" :breadList="['系统管理员']">
				<template slot="btn">
					<btn-list :model="{icon:'icon-add',name:'保存'}"></btn-list>
				</template>
			 </base-title>
		 </div>
		 <div class="detail-content">
			 <div class="left">
				<div class="menu">
					<el-checkbox-group v-model="checkList">
						<ul>
							<li>
								<el-checkbox label="基础数据平台"></el-checkbox>
							</li>
							<li>
								<el-checkbox label="同步课堂"></el-checkbox>
							</li>
							<li>
								<el-checkbox label="校宣发布系统"></el-checkbox>
							</li>
							<li>
								<el-checkbox label="资源管理平台"></el-checkbox>
							</li>
							<li>
								<el-checkbox label="身份中心"></el-checkbox>
							</li>
							<li>
								<el-checkbox label="人脸引擎"></el-checkbox>
							</li>
						</ul>
					</el-checkbox-group>
				</div>
			 </div>
			 <div class="right">
				<el-tree
					:data="data"
					show-checkbox
					node-key="id"
					:default-expanded-keys="[2, 3]"
					:default-checked-keys="[5]"
					:props="defaultProps">
				</el-tree>
			 </div>
		 </div>
	 </div>
</template>

<script>
export default {
	components:{
		baseTitle:()=>import("@/components/title"),
		btnList:()=>import("@/components/btn-list"),
	},
	data(){
		return {
			checkList:[],
			data: [{
          id: 1,
          label: '首页',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '用户',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '设备',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
      }
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.action-detail {
	height: calc(100% - 52px);
	.detail-header {
		padding: 18px 24px 0;
	}
	.detail-content {
		height: 100%;
		margin-top: 10px;
		margin-right: 24px;
		border-top: 1px solid #E5E7EF;
		display: flex;
		.left {
			width: 210px;
			padding: 20px;
			border-right: 1px solid #E5E7EF;
			.menu {
				li {
					margin-bottom: 20px;
				}
			}
		}
		.right {
			flex:1;
			padding: 20px;
		}
	}
}
</style>
