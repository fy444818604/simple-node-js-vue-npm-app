<!-- 标题 -->
<template>
	<div class="header" :class="{border}">
		<div class="left">
			<div class="title">{{title}}</div>
			<slot name="filterTree"></slot>
			<slot></slot>
		</div>
		<div class="right">
			<slot name="btn"></slot>
		</div>
	</div>
</template>
<style lang="scss" scope>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.left {
		display: flex;
		align-items: center;

		.title {
			color: #303133;
			font-weight: bold;
		}
	}

	.border {
		padding-bottom: 7px;
		border-bottom: 1px solid #E5E7EF;
	}
</style>
<script>
	export default {
		props: {
			title: String,
			border: Boolean
		}
	}
</script>
