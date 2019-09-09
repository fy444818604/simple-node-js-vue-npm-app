<template>
	<div id="layout">
		<fy-head></fy-head>
		<div class="main">
			<div class="main-middle" :style="{ paddingLeft : toggleWidth }">
				<fy-note v-if="$store.state.offsideConfig.offsideShow"></fy-note>
				<el-scrollbar :native="false">
					<router-view></router-view>
				</el-scrollbar>
			</div>
			<div class="main-left" :style="{ width : toggleWidth }">
				<fy-nav ref="leftNav"></fy-nav>
			</div>
		</div>
	</div>
</template>

<script>
	import TopHead from '../../components/head'
	import LeftNav from '../../components/nav'
	import note from '../../components/note'
	import '../../App.scss'
	export default {
		name: 'layout',
		data() {
			return {
				toggleWidth: '240px'
			}
		},
		created() {
			
		},
		components: {
			'fy-head': TopHead,
			'fy-nav': LeftNav,
			'fy-note': note
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

</style>
