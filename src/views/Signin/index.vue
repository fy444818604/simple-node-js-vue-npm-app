<template>
	<div style="height: 100%;overflow: hidden">
		<div id="particles-js">
			<div class="login">
				<div class="login-top">
					{{type == 1?'管理员登录':'用户登录'}}
				</div>
				<div class="login-center clearfix">
					<div class="login-center-img"><img src="../../assets/image/name.png" /></div>
					<div class="login-center-input">
						<input type="text" name="" value="" placeholder="请输入您的用户名" v-model="user" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的用户名'" />
						<div class="login-center-input-text">用户名</div>
					</div>
				</div>
				<div class="login-center clearfix">
					<div class="login-center-img"><img src="../../assets/image/password.png" /></div>
					<div class="login-center-input">
						<input type="password" name="" value="" placeholder="请输入您的密码" v-model="password" onfocus="this.placeholder=''"
						 onblur="this.placeholder='请输入您的密码'" />
						<div class="login-center-input-text">密码</div>
					</div>
				</div>
				<div class="login-button" @click="login">
					登陆
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import '../../assets/style/style.css';
	export default {
		name: "signin",
		data() {
			return {
				type:1,
				user: 'admin',
				password: '123456'
			}
		},
		created() {

		},
		mounted() {
			
		},
		methods: {
			...mapMutations(['changeLogin']),
			login() {
				var params = {
					username: this.user,
					password: this.password
				};
				this.$post('/api/login', params).then(res => {
					if (res.status == 200) {
						this.changeLogin({
							Authorization: res.token
						});
						this.$router.push({
							path: '/Layout'
						});
					} else {
						alert('密码错误')
					}
				}).catch(err => {

				});
			}
		}
	}
</script>
<style scoped lang="css">
	body {
		overflow: hidden;
	}
</style>
