<!-- 课程预约添加&编辑 -->
<template>
	<div class="container">
		<div class="course-title">
			<div>课程预约</div>
			<div>&nbsp;> 创建同步课堂</div>
		</div>
		<div class="box">
			<div class="form-wrap">
				<el-form ref="form" :model="form" label-width="82px" :rules="rules">
					<el-form-item label="课程名称:" prop="name">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="课程类型:" prop="type">
						<el-select v-model="form.type" placeholder="请选择类型">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="教材:" prop="options">
						<el-cascader placeholder="请选择课文" :options="form.options" filterable></el-cascader>
					</el-form-item>
					<el-form-item label="时间:" required>
						<el-col :span="11">
							<el-form-item prop="date">
								<el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="11" :offset="2">
							<el-form-item prop="num">
								<el-select v-model="form.num" placeholder="请选择节数">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="授课教室:" prop="options1">
						<el-cascader placeholder="请选择教室" :options="form.options1" filterable></el-cascader>
					</el-form-item>
					<el-form-item label="主讲老师:" prop="teacher">
						<el-input v-model="form.teacher"></el-input>
					</el-form-item>
					<el-form-item label="简介:">
						<el-input type="textarea" v-model="form.intro"></el-input>
					</el-form-item>
					<el-form-item label="课件:">
						<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
						 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
							<el-button size="small" type="primary">点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>
					</el-form-item>
					<el-form-item label="开课方式:">
						<el-radio v-model="form.radio" label="1">互动方式</el-radio>
						<el-radio v-model="form.radio" label="2">直播方式</el-radio>
					</el-form-item>
					<el-form-item label="直播:">
						<el-switch v-model="form.value"></el-switch>
					</el-form-item>
					<el-form-item label="录制方式:">
						<el-radio v-model="form.radio1" label="1">本地录制</el-radio>
						<el-radio v-model="form.radio1" label="2">云录制</el-radio>
					</el-form-item>
					<el-form-item label="邀请教室:">
						<div>
							<i class="iconfont icon-add"></i>
						</div>
					</el-form-item>
					<el-form-item>
					    <el-button type="primary">提交</el-button>
					  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }],
            form: {
                name: '',
                type: '',
                option: [],
                date: '',
                num: '',
                options1: [],
                teacher: '',
                intro: '',
                radio: '2',
                value:true,
                radio1:'2'
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入课程名称',
                    trigger: 'blur'
                }],
                type: [{
                    required: true,
                    message: '请输入课程名称',
                    trigger: 'blur'
                }],
                date: [{
                    type: 'date',
                    required: true,
                    message: '请选择日期',
                    trigger: 'change'
                }],
                num: [{
                    required: true,
                    message: '请选择节数',
                    trigger: 'change'
                }],
                teacher: [{
                    required: true,
                    message: '请选择老师',
                    trigger: 'change'
                }]
            }
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
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
