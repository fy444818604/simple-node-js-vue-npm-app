<!-- 预约设置 -->
<template>
	<div class="container">
		<div class="course-title">
			<div>设置</div>
		</div>
		<div class="box">
			<el-form ref="form" :model="form" label-width="128px">
				<el-form-item label="系统logo:">
					<div>
						<img src="" alt="">
					</div>
					<div>建议图片高度:30 宽度:30</div>
				</el-form-item>
				<el-form-item label="同步课堂自动呼叫:">
					<el-switch v-model="phone"></el-switch>
					<span>开启呼叫开关后，创建“交互方式”的同步课，必须选择邀请教室</span>
				</el-form-item>
				<el-form-item label="同步课堂开课方式:">
					<el-checkbox-group v-model="type" :min="1" :max="2">
						<el-checkbox label="交互方式"></el-checkbox>
						<el-checkbox label="直播方式"></el-checkbox>
					</el-checkbox-group>
					<el-radio v-model="radio" label="1">默认选项</el-radio>
					<el-radio v-model="radio" label="2">默认选项</el-radio>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            phone:true,
            radio:2,
            type:['交互方式']
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 32px;
		background-color: #F1F3F8;
		min-height: calc(100vh - 60px);
	
		.course-title {
			padding-top: 20px;
			margin-bottom: 24px;
			display: flex;
	
			div {
				&:first-child {
					color: #55595C;
					font-weight: bold;
				}
			}
		}
	
		.box {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 5px 20px 0px rgba(23, 38, 71, 0.05);
			border-radius: 6px;
			padding: 22px 24px;
			width: 100%;
	
			.form-wrap {
				width: 564px;
			}
		}
	}
</style>
