<!-- 头部组件 -->
<template>
	<div class="header" :style="{background:bgColor}">
		<div>
			<img :src="logo" class="logo" alt="" />
			<div class="user-system-name">{{ systemName }}</div>
			<div class="system-name" v-if="systemName1Show"> | {{systemName1}}</div>
		</div>
		<div class="header-right">
			<div class="user-info">
				<img class="userPhoto" src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" style="margin-right: 15px;" alt="" />
				<div class="user-name">管理员</div>
				<i class="iconfont icon-arrow-down"></i>
			</div>
			<div class="heaer-right-arrow" :class="swithch?'':'active'" v-if="swithShow" @click="monoSwich"><i
				 class="iconfont icon-arrow-header" :class="swithch?'':'active'"></i></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopHead',
		data() {
			return {
				logo: 'image/logo.png',
				systemName: '教育局基础数据平台',
				systemName1Show:false,
				systemName1: 'demo副标题',
				bgColor:'#4A80F6',
				swithch: this.$store.state.offsideConfig.offsideFold,
				swithShow:false
			}
		},
		watch: {
			swithch(val) {
				if (val) {
					$('.note-card-wrap').stop().animate({
						right: '0'
					}, 200)
				} else {
					$('.note-card-wrap').stop().animate({
						right: '-340px'
					}, 200)
				}
			}
		},
		methods: {
			monoSwich() {
				this.swithch = !this.swithch;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 60px;
		line-height: 60px;
		background: #4a80f6;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.user-info{
		display: flex;
		align-items: center;
		margin-right: 18px;
		overflow: hidden;
	}

	.logo {
		width: 29px;
		height: 21px;
		display: inline-block;
	}

	.user-system-name {
		font-size: 20px;
		color: #ffffff;
		vertical-align: middle;
		display: inline-block;
	}

	.system-name {
		font-size: 16px;
		color: #adc6fb;
		vertical-align: middle;
		display: inline-block;
	}

	.userPhoto {
		width: 30px;
		height: 30px;
	}

	.iconfont {
		font-size: 20px;
		color: #ffffff;
	}

	.header-right {
		display: flex;
		align-items: center;
	}

	.header-right>i,
	.header-right>div {
		margin-left: 12px;
	}

	.heaer-right-arrow {
		display: inline-block;
		background-color: #4482d0;
	}

	.icon-arrow-header.active {
		transform: rotate(180deg);
		display: inline-block;
	}
	
	.icon-arrow-down{
		transform: rotate(90deg);
		display: inline-block;
		font-size: 16px;
		margin-left: 5px;
	}
	.user-name{
		color: #FFFFFF;
	}
</style>
