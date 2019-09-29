<!-- mcu管理添加&编辑 -->
<template>
	<div class="mcu-addEdit">

		<base-title title="MCU管理" border bread :breadList="['新建']"></base-title>

		<div class="content">
			<el-form :model="formInfo" :rules="formRules" label-width="90px" label-suffix=":" style="width:360px">
				<el-form-item label="设备厂商">
					<el-select v-model="formInfo.id" style="width:100%">
						<el-option value="xx"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="设备名称" prop="name">
					<el-input v-model="formInfo.name"></el-input>
				</el-form-item>
				<el-form-item label="设备IP" prop="ip">
					<el-input v-model="formInfo.ip"></el-input>
				</el-form-item>
				<el-form-item label="端口号" prop="port">
					<el-input v-model="formInfo.port"></el-input>
				</el-form-item>
				<el-form-item label="账号" prop="account">
					<el-input v-model="formInfo.account"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="formInfo.password"></el-input>
				</el-form-item>
				<el-form-item label="版本号" prop="version">
					<el-input v-model="formInfo.version"></el-input>
				</el-form-item>
				<el-form-item label="设备编号">
					<el-input v-model="formInfo.number"></el-input>
				</el-form-item>
				<el-form-item>
					<div class="save-btn">保存</div>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
    components:{
 		baseTitle:()=>import("@/components/title"),
    },
    data(){
        return {
            formInfo:{
                name:''
            },
            formRules:{
                name:[{ required: true, message: '设备名称不能为空', trigger: 'blur' }],
                ip:[{ required: true, message: 'ip不能为空', trigger: 'blur' }],
                port:[{ required: true, message: '端口号不能为空', trigger: 'blur' }],
                account:[{ required: true, message: '账户不能为空', trigger: 'blur' }],
                password:[{ required: true, message: '密码不能为空', trigger: 'blur' }],
                version:[{ required: true, message: '版本号不能为空', trigger: 'blur' }]
            }
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
.mcu-addEdit {
	padding: 18px 24px;
}
.content {
	margin-top: 20px;
}

.save-btn {
	width: 64px;
	height: 36px;
	line-height: 36px;
	text-align: center;
	color: #fff;
	background: #3489FF;
	border-radius: 4px;
	cursor: pointer;
}
</style>
