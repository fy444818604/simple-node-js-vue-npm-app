<!-- 资源平台框架 -->
<template>
	<div id="layout">
		<top-head></top-head>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import TopHead from '../../../components/res-head'
	
export default {
    data(){
        return{
				
        }
    },
    components:{
        'top-head':TopHead
    }
}
</script>

<style lang="scss" scoped="scoped">
	
</style>
