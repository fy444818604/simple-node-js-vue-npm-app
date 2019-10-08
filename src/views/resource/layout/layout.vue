<!-- 资源平台框架 -->
<template>
	<div id="layout">
		<top-head></top-head>
		<el-scrollbar :native="false">
			<div class="main">
				<router-view></router-view>
			</div>
		</el-scrollbar>
	</div>
</template>

<script>
import TopHead from '../../../components/res-head'

export default {
    data() {
        return {

        }
    },
    components: {
        'top-head': TopHead
    }
}
</script>

<style lang="scss" scoped="scoped">
	#layout{
		min-width: 1200px;
	}
	.main{
		height: calc(100vh - 60px);
	}
</style>
