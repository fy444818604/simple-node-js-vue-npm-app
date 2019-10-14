<!-- 统一门户首页框架 -->
<template>
	<div id="layout">
		<index-head></index-head>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import head from '../../components/index-head'
export default {
    data(){
        return {
				
        }
    },
    components:{
        'index-head':head
    }
}
</script>

<style lang="scss" scoped="scoped">
	
</style>
