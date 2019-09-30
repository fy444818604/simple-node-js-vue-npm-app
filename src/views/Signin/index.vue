<template>
	<div style="height: 100%;overflow: hidden">
		<div id="particles-js">
			<div class="login">
				<div class="type-change">
					<img :src="type == 1?userIcon:adminIcon" alt="">
				</div>
				<div class="login-top">
					{{type == 1?'管理员登录':'用户登录'}}
				</div>
				<div class="login-center">
					<div class="login-center-img"><img src="../../assets/image/name.png" /></div>
					<div class="login-center-input">
						<input type="text" name="" value="" placeholder="请输入用户名" v-model="user" />
					</div>
				</div>
				<div class="login-center">
					<div class="login-center-img"><img src="../../assets/image/password.png" /></div>
					<div class="login-center-input">
						<input :type="passwordShow?'text':'password'" name="" value="" placeholder="请输入密码" v-model="password" />
					</div>
					<img class="pass-img" :src="passwordShow?wordHide:wordShow" @click="passwordShow = !passwordShow">
				</div>
				<div class="login-code">
					<div class="code-input">
						<img src="../../assets/image/code.png" />
						<input type="text" name="" value="" placeholder="请输入验证码" v-model="code"/>
					</div>
					<div class="code-wrap">

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
            userIcon:require('@/assets/image/user.png'),
            adminIcon:require('@/assets/image/admin.png'),
            wordShow:require('@/assets/image/eye.png'),
            wordHide:require('@/assets/image/eye-close.png'),
            passwordShow:false,
            type:1,
            user: 'administrator',
            password: '123456789',
            code:''
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        ...mapMutations(['changeLogin']),
        login() {
            let params = {
                userName: this.user,
                password: this.password
            };
            this.$api.apiLogin(params).then(res => {
                if (res.success) {
                    this.changeLogin({
                        Authorization: res.data.userToken.accessToken
                    });
                    this.$router.push({
                        path: '/basic/Layout'
                    });
                } else {
                    alert('密码错误')
                }
            })
        }
    }
}
</script>
<style scoped lang="css">
	body {
		overflow: hidden;
	}
</style>
