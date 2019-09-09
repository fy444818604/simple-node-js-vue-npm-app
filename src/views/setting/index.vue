<template>
	<div class="page-container">
		<div class="fy-page-title">系统设置</div>
		<div class="box">
			<el-row>
				<el-col :span="8">
					<div class="box-title">
						头部设置
					</div>
					<div class="box-panel">
						<el-form>
							<el-form-item label="是否渐变">
								 <el-switch v-model="head.linear" @change="input11"></el-switch>
							</el-form-item>
							<el-form-item label="背景颜色" @change="colorChange" v-show="!head.linear">
								 <el-color-picker v-model="head.color"></el-color-picker>
							</el-form-item>
							<el-form-item label="背景颜色1" @change="colorChange" v-show="head.linear">
								 <el-color-picker v-model="head.color1"></el-color-picker>
							</el-form-item>
							<el-form-item label="背景颜色2" @change="colorChange" v-show="head.linear">
								 <el-color-picker v-model="head.color2"></el-color-picker>
							</el-form-item>
						</el-form>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="box-title">
						右侧边栏设置
					</div>
					<div class="box-panel">
						<el-form label-width="128px">
							<el-form-item label="是否显示右侧边栏:">
								<el-switch v-model="user.offsideShow" @change="input1"></el-switch>
							</el-form-item>
							<el-form-item label="是否显示标签栏:">
								<el-switch v-model="user.memoShow" @change="input2"></el-switch>
							</el-form-item>
							<el-form-item label="是否显示网站:">
								<el-switch v-model="user.bookmarkShow" @change="input2"></el-switch>
							</el-form-item>
							<el-form-item label="默认展开:">
								<el-switch v-model="user.offsideFold" @change="input3"></el-switch>
							</el-form-item>
						</el-form>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		data(){
			return {
				user:{
					offsideShow:this.$store.state.offsideConfig.offsideShow,
					memoShow:this.$store.state.offsideConfig.memoShow,
					bookmarkShow:this.$store.state.offsideConfig.bookmarkShow,
					offsideFold:this.$store.state.offsideConfig.offsideFold,
				},
				head:{
					linear:false,
					color:"#409EFF",
					color1:"#409EFF",
					color2:"#409EFF",
					direction:"top"
				},
				color1:"#409EFF"
			}
		},
		methods:{
			...mapMutations(['changeOffside']),
			input1(val){
				this.user.memoShow = val;
				this.user.bookmarkShow = val;
				this.changeOffside(this.user)
			},
			input2(val){
				if(val){
					this.user.offsideShow = true;
				}else{
					if(this.user.memoShow==false&&this.user.bookmarkShow==false){
						this.user.offsideShow = false
					}
				}
				this.changeOffside(this.user)
			},
			input3(){
				this.changeOffside(this.user)
			},
			input11(){
				
			},
			colorChange(){
				if(this.head.linear){
					
				}else{
					
				}
			}
		}
	}
</script>

<style>
</style>
