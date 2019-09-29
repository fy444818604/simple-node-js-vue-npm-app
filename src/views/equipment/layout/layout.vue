<!-- 框架 -->
<template>
	<div id="layout">
		<fy-head></fy-head>
		<div class="main">
			<div class="main-middle" :style="{ paddingLeft : toggleWidth }">
				<!-- <fy-note v-if="$store.state.offsideConfig.offsideShow"></fy-note> -->
				<el-scrollbar :native="false">
					<router-view></router-view>
				</el-scrollbar>
			</div>
			<div class="main-left" :style="{ width : toggleWidth }">
				<fy-nav ref="leftNav" :menuData1="menuData1"></fy-nav>
			</div>
		</div>
	</div>
</template>

<script>
	import TopHead from '../../../components/head'
	import LeftNav from '../../../components/nav'
	// import note from '../../../components/note'
	export default {
		name: 'layout',
		data() {
			return {
				toggleWidth: '240px',
				menuData1: [{
						menu_id: 1,
						menu_text: 'mcu管理',
						menu_icon: 'icon-square',
						menu_href: '/equipment/Layout/mcu',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 2,
						menu_text: '会议室设置',
						menu_icon: 'icon-grade',
						menu_href: '/equipment/Layout/meeting-setting',
						menu_pid: 0,
						menu_target_type: 0
					},
					{
						menu_id: 3,
						menu_text: '录播教室设置',
						menu_icon: 'icon-video2',
						menu_href: '/equipment/Layout/classroom-setting',
						menu_pid: 0,
						menu_target_type: 0
					}
				]
			}
		},
		created() {

		},
		components: {
			'fy-head': TopHead,
			'fy-nav': LeftNav,
			// 'fy-note': note
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.main {
		height: calc(100% - 60px);
		overflow: hidden;
	}

	.main-middle {
		height: 100%;
		width: 100%;
		background: #ffffff;
		float: left;
		padding-left: 240px;
		// overflow: auto;
		position: relative;
	}

	.main-middle>.el-scrollbar {
		height: 100%;
	}

	#layout {
		height: 100%;
	}

	.main-left {
		height: 100%;
		width: 240px;
		float: left;
		margin-left: -100%;
		background: #f9f9fb;
		border-right: 1px solid #e5e7ef;
		position: relative;
	}

	.main-iframe {
		width: 100%;
		background-color: #ffffff;
		height: 100%;
	}

	.main-middle>.el-scrollbar>.el-scrollbar__wrap {
		height: calc(100% + 17px);
	}
</style>
