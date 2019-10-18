<!-- 时间选择 -->
<template>
	<div class="time-selected-wrap">
		<i class="iconfont icon-arrow-down icon-arrow-left"></i>
		<el-date-picker v-model="value" type="date" :clearable="false"></el-date-picker>
		<i class="iconfont icon-arrow-down"></i>
	</div>
</template>

<script>
export default {
    data(){
        return{
            value: '2019-10-10',
        }
    }
}
</script>

<style>
	.time-selected-wrap .el-icon-date{
		display: none;
	}
	.time-selected-wrap .el-date-editor--date{
		width: 78px!important;
		padding: 0!important;
	}
	.time-selected-wrap .el-input__inner{
		padding: 0!important;
		border: none;
	}
</style>
<style lang="scss" scoped="scoped">
	.icon-arrow-left{
		display: inline-block;
		transform: rotate(180deg);
	}
	.time-selected-wrap{
		display: flex;
		align-items: center;
	}
</style>
