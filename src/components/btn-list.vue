<!-- 按钮组件 -->
<template>
	<el-tooltip class="item" effect="dark" :content="list.name" placement="top">
		<button class="icon-btn" @click="btnClick"><i class="iconfont" :class="list.icon"></i></button>
	</el-tooltip>
</template>

<script>
	export default {
		name: 'btnList',
		props: {
			model: Object
		},
		data() {
			return {
				list: this.model
			}
		},
		created: function() {
			
		},
		methods: {
			btnClick: function() {
				this.$emit('btn-click', this.model.alias)
			}
		}
	}
</script>

<style scoped="scoped">
	.icon-btn {
		border: none;
		background: transparent;
		outline: none;
		margin-right: 16px;
	}
	
	.icon-btn {
		color: #4A80F6;
	}
	
</style>
