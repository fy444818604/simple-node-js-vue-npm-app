<template>
	<el-tree :data="data" :props="defaultProps"></el-tree>
</template>

<script>
	export default {
		data() {
			return {
				data: [],
				defaultProps: {
					children: 'children',
					label: 'text'
				}
			};
		},
		created() {
			this.getdata();
		},
		methods: {
			getdata() {
				this.$post("/api/menu",{typeId:0}).then(res => {
					console.log(res)
					this.data = res
				})
			}
		},
	};
</script>

<style>

</style>
