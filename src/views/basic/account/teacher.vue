<!-- 教职工账号 -->
<template>
	<!-- <router-link target="_blank" :to="{path:'/basic/Layout/system',query:{id:'1'}}">新页面打开</router-link> -->
	<div class="page-container" id="teacher-account">
		<div class="flex-between">
			<div>
				<div>教职工账号</div>
				<div></div>
			</div>
			<div class="btnGroup">
				<btn-list v-for="(item,index) in btnGroup" :key="index" :model="item" @btn-click="btnClick"></btn-list>
			</div>
		</div>
	</div>
</template>

<script>
	import btnList from '@/components/btn-list'
	export default {
		data() {
			return {
				btnGroup: [{
					icon: 'icon-add',
					name: '添加',
					alias: 1
				},{
					icon: 'icon-edit',
					name: '编辑',
					alias: 2
				},]
			}
		},
		components: {
			'btn-list': btnList
		},
		methods:{
			btnClick(val){
				
			}
		}
	}
</script>

<style>
</style>
