<!-- 预约中心首页 -->
<template>
	<div class="container">
		<el-row>
			<el-col :span="8" v-for="(item,index) in statis" :key="index">
				<div class="top-statis">
					<div class="top-statis-name">{{item.name}}</div>
					<div class="top-statis-data">{{item.data}}</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
    data() {
        return {
            statis: [{
                name: '今日预约',
                data: 2
            }, {
                name: '本周预约',
                data: 18
            }, {
                name: '累计预约',
                data: 241
            }]
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.container {
		padding: 0 16px;
		background-color: #F1F3F8;

		.top-statis {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: red;
			margin: 0 16px;
			height: 140px;

			.top-statis-name {
				color: #FFFFFF;
				position: absolute;
				top: 22px;
				left: 24px;
			}

			.top-statis-data {
				color: #FFFFFF;
				font-size: 48px;
			}
		}
	}
</style>
