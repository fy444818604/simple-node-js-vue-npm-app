<!-- 统一门户头部 -->
<template>
	<div id="index-head">
		<div class="logo-wrap">
			<img src="../assets/image/res-logo.png" alt="">
			<div>{{name}}</div>
		</div>
		<ul>
			<li v-for="(item,index) in systemList" :key="index">
				<router-link to="/layout/index">{{item.name}}</router-link>
			</li>
		</ul>
		<div class="login-info">
			<img src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" alt="">
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            name:'统一门户系统',
            systemList:[
                {name:'资源平台',url:''},
                {name:'同步课堂',url:''},
                {name:'预约中心',url:''},
                // {name:'直播中心',url:''},
                // {name:'优课评选',url:''},
                // {name:'空中课堂',url:''},
                // {name:'录播管理',url:''},
                {name:'个人空间',url:''}
            ]
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	#index-head{
		height: 60px;
		padding: 0 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.logo-wrap{
			display: flex;
			align-items: center;
			
			div{
				font-size: 22px;
				color: #333333;
			}
			
			img {
				width: 32px;
				height: 32px;
				margin-right: 6px;
			}
		}
		
		ul{
			display: flex;
			
			li{
				margin-right: 50px;
				color:#303133
			}
		}
		
		.login-info{
			img{
				width: 32px;
				height: 32px;
			}
		}
	}
</style>
