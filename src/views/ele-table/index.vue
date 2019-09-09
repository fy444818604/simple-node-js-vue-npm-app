<template>
	<div class="page-container" id="ele-table">
		<div class="fy-page-title">tbale 表格</div>
		<div class="box">
			<el-row>
				<el-col :span="12">
					<div class="box-title">
						基本用法
					</div>
					<div class="box-panel">
						<el-table :data="tableData" v-loading="loading" style="width: 100%">
							<el-table-column prop="date" label="日期" width="180">
							</el-table-column>
							<el-table-column prop="name" label="姓名" width="180">
							</el-table-column>
							<el-table-column prop="address" label="地址">
							</el-table-column>
						</el-table>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-button type="primary" icon="el-icon-edit"></el-button>
				<el-button type="primary" icon="el-icon-share"></el-button>
				<el-button type="primary" icon="el-icon-delete"></el-button>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				loading: true
			}
		},
		created() {
			this.getData()
		},
		methods: {
			//获取数据
			getData() {
				this.$post('/api/tableDemo').then(res => {
					this.tableData = this.dataFormat(res.data);
					this.loading = false;
				}).catch(err => {

				});
			},
			dataFormat(data){
				data.map((v,i) => {
					v.date = v.date.substring(0,10)
				});
				return data;
			}
		},
	}
</script>

<style>
	
</style>
