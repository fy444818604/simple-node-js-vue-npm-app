<template>
	<div style="height: 100%;overflow: hidden">
		<div id="particles-js">
			<div class="login">
				<div class="login-top">
					登录
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
			<div class="sk-rotating-plane"></div>
		</div>
		<!-- 粒子漂浮物 -->
		<vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="30" shapeType="star" :particleSize="5"
		 linesColor="#fff" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
		 :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
		</vue-particles>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	import '../../assets/style/style.css';
	import '../../assets/style/reset.css';
	export default {
		name: "signin",
		data() {
			return {
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
