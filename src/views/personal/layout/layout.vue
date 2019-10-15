<template>
	<div id="layout">
		<index-head></index-head>
		<div class="main">
			<div class="nav-wrap">
				
			</div>
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import head from '../../../components/index-head'
export default {
    data() {
        return {

        }
    },
    components: {
        'index-head': head
    }
}
</script>

<style lang="scss" scoped="scoped">
	.main{
		min-height: calc(100vh - 60px);
		display: flex;
		
		.nav-wrap{
			width: 240px;
		}
		
		.container{
			width: calc(100% - 240px);
		}
	}
</style>
