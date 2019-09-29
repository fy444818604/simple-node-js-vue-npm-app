<!-- 标题 -->
<!--
页面标题部分 分为左边内容 和 右边图标部分
左边分为 普通单标题 和 面包屑 通过是否传递bread来区分
右边icon 通过slot 传递
-->
<template>
	<div class="base-header" :class="{border}">
		<div class="left">
			<template v-if="bread">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item class="title">{{title}}</el-breadcrumb-item>
					<el-breadcrumb-item :key="item" v-for="item in breadList">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
			</template>
			<div v-else class="singleTitle">{{title}}</div>
			<slot name="filterTree"></slot>
		</div>
		<div class="right">
			<slot name="btn"></slot>
		</div>
	</div>
</template>
<style lang="scss" scope>
	.base-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left {
			display: flex;
			align-items: center;

			.singleTitle {
				color: #303133;
				font-weight: bold;
			}
		}

		&.border {
			padding-bottom: 10px;
			border-bottom: 1px solid #E5E7EF;
		}
	}
</style>
<style>
	.base-header .el-breadcrumb .el-breadcrumb__item.title span {
		color: #303133;
		font-weight: bold;
	}
</style>
<script>
export default {
    props: {
        title: String,
        border: Boolean,
        bread: Boolean,
        breadList: Array
    }
}
</script>
