<!--系统设置-->
<template>
	<div>
		<div class="system ">
			<!--头部-->
			<el-row class="system-title">
				<el-col :span="12"><div class="grid-content bg-purple cha-title">{{ title }}</div></el-col>
				<el-col :span="12"><div class="grid-content bg-purple-light"><i class="iconfont icon-yes"></i></div></el-col>
			</el-row>
			<!--名称/logo-->
			<div class="system-name">
				<div></div>
				<div></div>
			</div>
		</div>

	</div>
</template>

<script>
    export default {
        name: "system",
		data(){
			return{
				title:'系统设置'
			}
		}
    }
</script>

<style scoped>
	.system{
		padding: 18px 24px;
	}
	.system-title{
		border-bottom: 1px solid #E5E7EF;
		height: 32px;

	}
	.system-title .bg-purple-light{
		text-align: right;
		padding-right: 16px;
	}
</style>
