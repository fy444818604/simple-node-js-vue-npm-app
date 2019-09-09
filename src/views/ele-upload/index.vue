<template>
	<div class="page-container">
		<div class="fy-page-title">Upload 上传</div>
		<div class="box">
			<div class="box-title">
				照片墙
			</div>
			<div class="box-title-explain">
				使用 list-type 属性来设置文件列表的样式。
			</div>
			<div class="box-panel">
				<el-row>
					<el-col :span='12'>
						<form action="">
							<el-upload action="" list-type="picture-card" :http-request='imgUpload' :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
								<i class="el-icon-plus"></i>
							</el-upload>
							<el-dialog :visible.sync="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
							<el-button type="primary" @click='aaa' plain>提交</el-button>
						</form>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false
			};
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			imgUpload(item){
				let form = new FormData();
				console.log(form)
				form.append('file',item.file)
				this.$post('/api/file',form)
				.then(res => {
					console.log(res)
				})
			},
			aaa(){
				let form = new FormData();
				this.$post('/api/file',form)
				.then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>
