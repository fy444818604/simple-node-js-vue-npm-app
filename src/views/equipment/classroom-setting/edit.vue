<!-- mcu管理添加&编辑 -->
<template>
	<div class="setting-edit">
		<div class="header flex">
			<div class="title">录播教室管理</div>
			<i class="iconfont icon-arrow-down"></i>
			<div>1号录播教室</div>
		</div>
		<div class="content">
			<div class="icon">
				<btn-list v-if="activeName === 'first'" @btn-click="handleAdd" :model="icons.first"></btn-list>
				<div v-else>
					<btn-list @btn-click="handleAdd" :model="icons.second[0]"></btn-list>
					<btn-list @btn-click="handleAdd" :model="icons.second[1]"></btn-list>
					<btn-list @btn-click="handleAdd" :model="icons.second[2]"></btn-list>
				</div>
			</div>
			<template>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="教室信息" name="first">
						<ul class="class-info">
							<li class="item">
								<span>学校:</span>
								<span>成都第X中学</span>
							</li>
							<li class="item">
								<span>教室:</span>
								<span>101/1号教学楼/城南校区</span>
							</li>
							<li class="item">
								<span>名称:</span>
								<span>1号录播教室</span>
							</li>
							<li class="item">
								<span>描述:</span>
								<span>1号录播教室</span>
							</li>
						</ul>
					</el-tab-pane>
					<el-tab-pane label="设备信息" name="second">
						<div class="equipment-info flex">
							<div class="left">
								<template v-if="false">
									<span>暂无设备信息</span>
								</template>
								<template v-else>
									<ul class="equip-nav">
										<li @click="handleSelect(n)" :class="{active:n === active}" v-for="n in 4" :key="n" >
											<i class="iconfont icon-live"></i>
											<span>成都第x中学1号录播主机</span>
										</li>
									</ul>
									<div class="control">
										显示停用 <el-switch v-model="value">
										</el-switch>
									</div>
								</template>
							</div>
							<div class="right">
								<template v-if="false"></template>
								<template v-else>
									<ul class="rigt-info">
										<li class="item">
											<span>学校:</span>
											<span>成都第X中学</span>
										</li>
										<li class="item">
											<span>教室:</span>
											<span>101/1号教学楼/城南校区</span>
										</li>
										<li class="item">
											<span>名称:</span>
											<span>1号录播教室</span>
										</li>
										<li class="item">
											<span>描述:</span>
											<span>1号录播教室</span>
										</li>
									</ul>
								</template>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	components:{
		btnList:()=>import("@/components/btn-list"),
	},
	data(){
		return {
			icons:{first:{icon:'icon-edit',name:'添加'},second:[
				{icon:'icon-add',name:'添加'},{icon:'icon-edit',name:'编辑'},
				{icon:'icon-stop',name:'停用'}
			]},
			activeName:'first',
			active:3,
			value: true
		}
	},
	methods:{
		handleClick(){},
		handleAdd(){},
		handleSelect(n){
			this.active = n;
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.setting-edit {
	padding: 18px 24px;
	height: 100%;
}
.header{
	align-items: center;
	color: #303133;
	i {
		font-size: 12px;
	}
	.title {
		color: #303133;
		font-weight: bold;
	}
}
.content {
	margin-top: 10px;
	position: relative;
	height:calc(100% - 70px);
	.icon {
		z-index: 999;
		position: absolute;
		right: 0;
		top: 10px;
	}

	.class-info {
		.item {
			line-height: 36px;
			margin-top: 20px;
			color: #606266;
			span{
				&:first-child{
					display: inline-block;
					width: 60px;
				}
			}
		}
	}
	.equipment-info {
		height: 100%;
		.left {
			position: relative;
			width: 250px;
			border-right: 1px solid #E5E7EF;
			.equip-nav {
				li {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 220px;
					height:44px;
					border: 1px solid #E4E7F0;
					color: #606266;
					border-bottom-color: transparent;
					cursor: pointer;
					i{
						padding-right: 5px;
					}
					&:last-child {
						border-bottom-color: #E4E7F0;
					}
					&.active {
						color: #4A80F6;
						border-color: #4A80F6;
					}
				}
			}
			.control {
				position: absolute;
				left: 45px;
				bottom: 5px;
			}
		}
		.right {
			flex: 1;
		}
	}
}
</style>
<style>
.setting-edit .el-tabs__content {
	height: 100%;
}
.setting-edit .el-tabs {
	height: 100%;
}
.setting-edit .el-tabs  #pane-second {
	height: 100%;
}
</style>