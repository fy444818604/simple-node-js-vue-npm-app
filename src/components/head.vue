<!-- 头部组件 -->
<template>
	<div class="header" :style="{background:`linear-gradient(to right, ${$store.state.headConfig.back} , ${$store.state.headConfig.back1})`}">
		<div>
			<img :src="logo" class="logo" alt="" />
			<div class="user-system-name">{{ systemName }}</div>
			<div class="system-name"> | {{systemName1}}</div>
		</div>
		<div class="header-right">
			<img class="userPhoto" src="http://cdn.admui.com/demo/pjax/2.0.0/images/avatar.svg" style="margin-right: 15px;" alt="" />
			<div class="heaer-right-arrow" :class="swithch?'':'active'" v-if="$store.state.offsideConfig.offsideShow" @click="monoSwich"><i
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
				systemName: 'demo主标题',
				systemName1: 'demo副标题',
				swithch: this.$store.state.offsideConfig.offsideFold
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
</style>
