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
								<template v-else-if="false">
									<ul class="rigt-info">
										<li class="item">
											<span>设备厂商:</span>
											<span>网动</span>
										</li>
										<li class="item">
											<span>设备型号:</span>
											<span>标准录播主机</span>
										</li>
										<li class="item">
											<span>设备名称:</span>
											<span>1号录播主机</span>
										</li>
										<li class="item">
											<span>设备IP:</span>
											<span>192.168.32.33</span>
										</li>
										<li class="item">
											<span>端口号:</span>
											<span>8080</span>
										</li>
										<li class="item">
											<span>交互账号:</span>
											<span>bzlbzj010101</span>
										</li>
									</ul>
								</template>
								<!-- 编辑 录播教室管理 -->
								<template v-else-if="true">
									<div class="edit-pay">
										<el-form :model="editPlayForm" :rules="editRules" label-width="80px">
											<el-form-item label="设备厂商" prop="id">
												<el-select v-model="editPlayForm.id" style="width:100%">
													<el-option value="x"></el-option>
												</el-select>
											</el-form-item>
											<el-form-item label="设备名称" prop="name">
												<el-input v-model="editPlayForm.name"></el-input>
											</el-form-item>
											<el-form-item label="设备IP" prop="ip">
												<el-input v-model="editPlayForm.ip"></el-input>
											</el-form-item>
											<el-form-item label="端口号" prop="port">
												<el-input v-model="editPlayForm.port"></el-input>
											</el-form-item>
											<el-form-item label="交互账号" prop="account">
												<el-input v-model="editPlayForm.account"></el-input>
											</el-form-item>
											<el-form-item label="交互密码" prop="password">
												<el-input v-model="editPlayForm.password"></el-input>
											</el-form-item>
											<el-form-item label="设备编号">
												<el-input v-model="editPlayForm.number"></el-input>
											</el-form-item>
											<el-form-item>
												<base-btn type="save"></base-btn>
											</el-form-item>
										</el-form>
									</div>
								</template>
								<!-- 编辑 摄像头 -->
								<template v-else>
									<div class="edit-camera">
										<el-form label-suffix=":" :model="editCameraForm" :rules="editCameraRules" label-width="85px">
											<el-form-item label="设备名称" prop="name">
												<el-input v-model="editCameraForm.name"></el-input>
											</el-form-item>
											<el-form-item label="设备IP" prop="ip">
												<el-input v-model="editCameraForm.ip"></el-input>
											</el-form-item>
											<el-form-item label="端口号" prop="port">
												<el-input v-model="editCameraForm.port"></el-input>
											</el-form-item>
											<el-form-item label="账号" prop="account">
												<el-input v-model="editCameraForm.account"></el-input>
											</el-form-item>
											<el-form-item label="密码" prop="password">
												<el-input v-model="editCameraForm.password"></el-input>
											</el-form-item>
											<el-form-item label="取流地址" prop="address">
												<el-input v-model="editCameraForm.address"></el-input>
											</el-form-item>
											<el-form-item label="设备类型">
												<el-input v-model="editCameraForm.type"></el-input>
											</el-form-item>
											<el-form-item label="设备型号">
												<el-input v-model="editCameraForm.typeNumber"></el-input>
											</el-form-item>
											<el-form-item label="设备编号">
												<el-input v-model="editCameraForm.number"></el-input>
											</el-form-item>
											<el-form-item>
												<base-btn type="save"></base-btn>
											</el-form-item>
										</el-form>
									</div>
								</template>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</template>
		</div>
		<!-- modal -->
		<div class="add-equipment-modal">
			<div class="content">
				<div @click="handleAddPlay" class="item">
					<i class="iconfont icon-live"></i>
					<p>录播主机</p>
				</div>
				<div @click="handleAddCamera" class="item">
					<i class="iconfont icon-live"></i>
					<p>摄像头</p>
				</div>
			</div>
		</div>

		<!-- 新建录播机modal -->
		<div class="create-play-modal">
			<el-form label-suffix=":" style="width:360px;margin:24px auto" :model="editPlayForm" :rules="editRules" label-width="85px">
				<el-form-item label="设备厂商" prop="id">
					<el-select v-model="editPlayForm.id" style="width:100%">
						<el-option value="x"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="设备名称" prop="name">
					<el-input v-model="editPlayForm.name"></el-input>
				</el-form-item>
				<el-form-item label="设备IP" prop="ip">
					<el-input v-model="editPlayForm.ip"></el-input>
				</el-form-item>
				<el-form-item label="端口号" prop="port">
					<el-input v-model="editPlayForm.port"></el-input>
				</el-form-item>
				<el-form-item label="交互账号" prop="account">
					<el-input v-model="editPlayForm.account"></el-input>
				</el-form-item>
				<el-form-item label="交互密码" prop="password">
					<el-input v-model="editPlayForm.password"></el-input>
				</el-form-item>
				<el-form-item label="设备编号">
					<el-input v-model="editPlayForm.number"></el-input>
				</el-form-item>
			</el-form>
			<div class="footer">
				<baseBtn type="cancel"></baseBtn>
				<baseBtn type="save"></baseBtn>
			</div>
		</div>
		<!-- 新建摄像头modal -->
		<div class="create-canmera-modal">
			<el-form label-suffix=":" style="width:360px;margin:24px auto" :model="editCameraForm" :rules="editCameraRules" label-width="85px">
				<el-form-item label="设备名称" prop="name">
					<el-input v-model="editCameraForm.name"></el-input>
				</el-form-item>
				<el-form-item label="设备IP" prop="ip">
					<el-input v-model="editCameraForm.ip"></el-input>
				</el-form-item>
				<el-form-item label="端口号" prop="port">
					<el-input v-model="editCameraForm.port"></el-input>
				</el-form-item>
				<el-form-item label="账号" prop="account">
					<el-input v-model="editCameraForm.account"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="editCameraForm.password"></el-input>
				</el-form-item>
				<el-form-item label="取流地址" prop="address">
					<el-input v-model="editCameraForm.address"></el-input>
				</el-form-item>
				<el-form-item label="设备类型">
					<el-input v-model="editCameraForm.type"></el-input>
				</el-form-item>
				<el-form-item label="设备型号">
					<el-input v-model="editCameraForm.typeNumber"></el-input>
				</el-form-item>
				<el-form-item label="设备编号">
					<el-input v-model="editCameraForm.number"></el-input>
				</el-form-item>
			</el-form>	
			<div class="footer">
				<baseBtn type="cancel"></baseBtn>
				<baseBtn type="save"></baseBtn>
			</div>
		</div>


	</div>
</template>

<script>
export default {
	components:{
		btnList:()=>import("@/components/btn-list"),
		baseBtn:() => import("@/components/btn")
	},
	data(){
		return {
			icons:{first:{icon:'icon-edit',name:'添加'},second:[
				{icon:'icon-add',name:'添加'},{icon:'icon-edit',name:'编辑'},
				{icon:'icon-stop',name:'停用'}
			]},
			activeName:'first',
			active:3,
			value: true,
			/* edit */
			editPlayForm:{
				id:'',
				name:'',
				ip:'',
				port:'',
				account:'',
				password:'',
				number:''
			},
			editRules: {
				id:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				name:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				ip:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				port:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				account:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				password:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
			},
			editCameraForm:{
				name:'',
				ip:'',
				port:'',
				account:'',
				password:'',
				number:'',
				type:'',
				typeNumber:'',
				address:''
			},
			editCameraRules: {
				name:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				ip:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				port:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				account:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				password:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
				address:[{ required: true, message: '请输入活动名称', trigger: 'blur' }],
			},
		}
	},
	methods:{
		handleClick(){},
		handleAdd(){},
		handleSelect(n){
			this.active = n;
		},
		handleAdd(){
			const that = this
			this.equipIndex = this.$layer.open({
				type:1,
				title:['添加设备',
				`background-color:#fff;
				 border-bottom:none;
				 text-align:center;
				 padding:0;font-size:16;position:relative;top:20px;font-weight:Bold;
				 color:#606266;`],
				content:$(".add-equipment-modal"),
				area: ['384px','242px'],
				cancel:function(){
					that.$layer.close(that.equipIndex)
					$('.add-equipment-modal').hide()
				}
			})
		},
		handleAddPlay(){
			const that = this
			this.playIndex = this.$layer.open({
				type:1,
				title:'新建',
				area: ['422px','554px'],
				content:$(".create-play-modal"),
				cancel:function(){
					that.$layer.close(that.playIndex)
					$('.create-play-modal').hide()
				}
			})
		},
		handleAddCamera(){
			const that = this
			this.cameraIndex = this.$layer.open({
				type:1,
				title:'新建',
				area: ['422px'],
				content:$(".create-canmera-modal"),
				cancel:function(){
					that.$layer.close(that.cameraIndex)
					$('.create-canmera-modal').hide()
				}
			})
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
.setting-edit .content {
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
				overflow: scroll;
				overflow-x: hidden;
			.rigt-info {
				color: #606266;
				padding-left: 50px;
				li {
					line-height: 36px;
					margin-bottom: 6px;
					span {
						&:first-child {
							display: inline-block;
							min-width: 4rem;
							text-align: right;
						}
						&:last-child {
							display: inline-block;
							padding-left: 2rem;
						}
					}
				}
			}
			.edit-pay {
				padding-left: 50px;
				width: 410px;
			}
			.edit-camera {
				padding-left: 50px;
				width: 410px;
			}
		}
	}
}
	.add-equipment-modal {
		display: none;
		.content {
			display: flex;
			justify-content: space-between;
			margin-top: 35px;
			padding: 0 72px;
			.item {
				width: 88px;
				height: 88px;
				border-radius: 50%;
				text-align: center;
				line-height: 88px;
				background: #F3F5F7;
				position: relative;
				cursor: pointer;
				i {
					color: #C0C4CC;
					font-size: 40px;
				}
				p {
					position: absolute;
					left: 0;
					bottom: -65px;
					width: 100%;
				}
				&:hover {
					background: #EEF2FE;
					i {
						color: #4A80F6;
					}
				}
			}
		}
	}
	.create-play-modal,.create-canmera-modal {
		display: none;
		.footer {
			height: 60px;
			background: #F5F5F5;
			line-height: 60px;
			text-align: right;
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