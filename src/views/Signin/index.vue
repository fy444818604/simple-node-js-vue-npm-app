<template>
	<div style="height: 100%;overflow: hidden">
		<div id="particles-js">
			<div class="login">
				<div class="type-change">
					<img @click="nameSwitch(type)" :src="type == 1?adminIcon:userIcon" alt="">
				</div>
				<div class="login-top">
					{{type == 0?'管理员登录':'用户登录'}}
				</div>
				<div class="login-center" v-if="type == 1">
					<div class="login-center-img"><img src="../../assets/image/log-school.png" /></div>
					<div class="login-center-input" @click="schoolClick()">
						<input type="text" name="" value="" placeholder="请选择学校"  v-model="treeInput"/>
						<div class="login-school" v-show="loginSchool">
							<el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
						</div>
					</div>
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
						<img @click="logINIMG" :src="img.checkCodeImageData" alt="">
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
            type:0,
			params:{},
            user: 'administrator',
            password: '123456789',
            code:'',
            img:'',
			loginSchool:false,
			treeId:'',
			treeInput:'',
			treeData: [],
			defaultProps: {
				children: 'children',
				label: 'displayName'
			}
        }
    },
    created() {
        this.loginImg();
        this.schoolList();
    },
    mounted() {

    },
    methods: {
        ...mapMutations(['changeLogin']),
        login() {
        	let params = { };
			if(this.type == 0){
				params = {
					userName: this.user,
					password: this.password,
					loginType:this.type,
					checkCode:this.code,
					checkCodeSessionId:this.img.checkCodeSessionId,
				};
			}else if(this.type == 1){
				params = {
					userName: this.user,
					password: this.password,
					loginType:this.type,
					checkCode:this.code,
					checkCodeSessionId:this.img.checkCodeSessionId,
					orgId:this.treeId
				};
			};
            this.$api.apiLogin(params).then(res => {
                if (res.success) {
                    this.changeLogin({
                        Authorization: 'Bearer ' + res.data.userToken.accessToken
                    });
                    this.$router.push({
                        path: '/basic/Layout'
                    });
                } else {
                    this.$myLayer.dangerLayer(res.msg);
                    this.loginImg();
                }
            })
        },
        loginImg(){
            let params = {};
            this.$api.loginImg(params).then(res => {
                if(res.success == true){
                    this.img = res.data
                }
            })
        },
        nameSwitch(type){
            if(type == 0){
                this.type = 1;
            }else {
                this.type = 0;
            }
        },
        logINIMG(){
            this.loginImg();
        },
		schoolList(){
			let params = {
				level:0,
				onlyOrg:1,
				parentId:0
			};
			this.$api.institutions(params).then( res => {
				if(res.success == true){
					this.treeData = res.data;
				}
			})
		},
		schoolClick(){
			this.loginSchool = !this.loginSchool
		},
		handleNodeClick(val){
			if(val.unitAttr == 8||val.unitAttr == '8'){
				this.treeId = val.id;
				this.treeInput = val.displayName;
				this.loginSchool = false;
			}else {
				this.$myLayer.errorLayer('请选择学校哦')
			}
		}
    }
}
</script>
<style scoped lang="scss">
	body {
		overflow: hidden;
		.code-wrap{
			img {
				width: 100%;
				height: 100%;
			}
		}
		.login-school{
			position: absolute;
			top: 43px;
			left: 0px;
			width: 100%;
			z-index: 999999;
			background-color: #fff;
			border: 1px solid #ebeef5;
			border-radius: 4px;
			-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			max-height: 200px;
			overflow: auto;
		}
	}
</style>
