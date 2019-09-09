<!-- 框架右侧侧边栏选项卡组件 -->
<template>
	<el-tabs class="note-card-wrap" v-model="activeName" @tab-click="handleClick" :style="{right:$store.state.offsideConfig.offsideFold?'0':'-340px'}">
		<el-tab-pane label="便签" name="first" v-if="$store.state.offsideConfig.memoShow">
			<fy-memo></fy-memo>
		</el-tab-pane>
		<el-tab-pane label="网站" name="second" v-if="$store.state.offsideConfig.bookmarkShow">
			<fy-bookmark></fy-bookmark>
		</el-tab-pane>
		<div  label="网站" >
			
		</div>
	</el-tabs>
</template>

<script>
	import memo from './memo'
	import bookmark from './bookmark'
	export default {
		data() {
			return {
				activeName: 'first'
			};
		},
		components:{
			'fy-memo':memo,
			'fy-bookmark':bookmark
		},
		methods: {
			handleClick(tab, event) {
				
			}
		},
		mounted() {
			var dom = document.getElementsByClassName('el-tabs__nav')[0];
			var dom1 = document.getElementsByClassName('el-tabs__active-bar')[0];
			dom.removeChild(dom1);
			if(!this.$store.state.offsideConfig.memoShow){
				this.activeName = "second"
			}
			if(!this.$store.state.offsideConfig.bookmarkShow){
				this.activeName = "first"
			}
		}
	};
</script>

<style>
	.note-card-wrap{
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #f4f4f4;
		width: 340px;
		z-index: 1;
		border-left: 1px solid #E4E4E4;
	}
	.el-tabs__nav.is-top{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.el-tabs__nav-wrap{
		height: 48px;
	}
	.el-tabs__nav-wrap::after{
		height: 1px;
	}
	.el-tabs__item{
		line-height: 48px;
		height: 48px;
		padding: 0;
	}
	.el-tabs__item.is-active{
		border-bottom: 2px solid #4889db;
	}
	.el-tabs__content{
		height: calc(100% - 78px);
	}
</style>
