<!--系统设置-->
<template>
	<div>
		<div class="system ">
			<!--头部-->
			<el-row class="system-title">
				<el-col :span="12"><div class="grid-content bg-purple cha-title">{{ title }}</div></el-col>
			</el-row>
			<!--名称/logo-->
			<ul class="system-name con-size">
				<li class="system-name-top">
					<div class="system-name-left">{{ sysName }}</div>
					<div class="system-name-rnt">{{ sysVal }}</div>
				</li>
				<li class="system-name-bnt">
					<div class="system-name-left">{{ logo }}</div>
					<div class="system-name-rnt log-bg">
						<img src="../../../assets/image/sys-log-bg.png" alt="">
					</div>
				</li>
			</ul>
			<!--系统升级-->
			<div class="sys-upgrade con-size">
				<div>{{ version }}</div>
				<div class="online">{{ online }}</div>
				<div class="offline">{{ offline }}</div>
			</div>
			<!--授权信息-->
			<ul class="authorization con-size">
				<li class="cha-title">
					授权信息
				</li>
				<li>
					<div class="authorization-left">{{ userKey }}</div>
					<div class="authorization-rnt">{{ userVal }}</div>
				</li>
				<li>
					<div class="authorization-left">{{ biggestKey }}</div>
					<div class="authorization-rnt">{{ biggestVal }}</div>
				</li>
				<li>
					<div class="authorization-left">{{ highestKey }}</div>
					<div class="authorization-rnt">{{ highestVal }}</div>
				</li>
				<li>
					<div class="authorization-left">{{ tiemKey }}</div>
					<div class="authorization-rnt">{{ tiemVal }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
        name: "system",
		data(){
			return{
				title:'系统设置',
				sysName:'系统名称：',
				sysVal:'基础数据平台',
				logo:'logo：',
				logoSrc:'../../../assets/image/sys-log-bg.png',
				version:'系统版本：V1.0.1',
				online:'在线升级',
				offline:'离线升级',
				userKey:'授权用户：',
				userVal:'成都元素科技',
				biggestKey:'最大用户数：',
				biggestVal:'100',
				highestKey:'最高并发数：',
				highestVal:'1000',
				tiemKey:'授权时间：',
				tiemVal:'2019-09-17'
			}
		},
		created() {

		},
    }
</script>

<style scoped>
	.system{
		padding: 18px 24px;
	}
	/*标题*/
	.system-title{
		border-bottom: 1px solid #E5E7EF;
		height: 32px;
	}
	/*名称/logo*/
	.system-name{
		border-bottom: 1px solid #E5E7EF;
		padding: 20px 18px 33px 18px;
	}
	.system-name>li{
		display: flex;
	}
	.system-name-top{
		height: 36px;
		line-height: 36px;
		margin-bottom: 18px;
	}
	.system-name-left{
		width: 80px;
		text-align: right;
	}
	.system-name-rnt{
		margin-left: 20px;
	}
	.log-bg{
		width: 70px;
		height: 70px;
		background: #F8F9FA;
		border: 1px dashed  #DCDFE6;
		border-radius:4px;
		line-height: 70px;
		text-align: center;
	}
	/*系统升级*/
	.sys-upgrade{
		display: flex;
		padding: 32px 49px;
		border-bottom: 1px solid #E5E7EF;
	}
	.sys-upgrade>.online{
		margin-left: 70px;
		color: #4a80f6;
	}
	.sys-upgrade>.offline{
		margin-left: 50px;
		color: #4a80f6;
	}
	/*授权信息*/
	.authorization{
		padding: 15px 0px;
	}
	.authorization>li{
		display: flex;
		height: 40px;
		line-height: 40px;
	}
	.authorization-left{
		width: 120px;
	}
</style>
