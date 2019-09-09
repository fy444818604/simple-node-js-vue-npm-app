<!-- 右边侧边栏便签组件弹出编辑 -->
<template>
	<div class="memo-layer-content" v-if="item != null">
		<div class="meno-head" :style="{backgroundColor:noteColor(item.colorNumber).head}">
			<div class="memo-move">
				<div class="meno-title" @click="menoTitleEdit">
					{{item.noteTitle}}
				</div>
				<input class="meno-title-edit" v-model="item.noteTitle" @blur="titleBlur" />
				<div class="memo-move-div"></div>
			</div>
			<div class="memo-layer-title-icon">
				<i class="iconfont icon-more" @click='noteOp'></i>
				<i class="iconfont icon-close" @click='closeNote'></i>
			</div>
		</div>
		<div class="memo-body" :style="{backgroundColor:noteColor(item.colorNumber).body}">
			<quill-editor v-model="item.contextStr" ref="myQuillEditor" :options="editorOption"></quill-editor>
		</div>
		<div class="note-op" @mouseleave="colorClose">
			<div class="color-lump">
				<ul>
					<li v-for='(item1,index1) in colorLump' :style="{backgroundColor:item1}" @click="colorChoose(index1)">
						<i class="iconfont icon-yes" v-show='index1 == item.colorNumber'></i>
					</li>
				</ul>
			</div>
			<div class="note-del" @click='bookmarkDelLayer1'>
				<i class="iconfont icon-del"></i>
				删除
			</div>
		</div>
		<div class="memo-layer-del" id="memo-layer-del-1">
			<p>是否要删除此笔记？</p>
			<div>
				<button type="button" @click="noteDel(index)">删除</button>
				<button type="button">保留</button>
			</div>
		</div>
		<div class="memo-layer-del-shade-1">

		</div>
	</div>
</template>

<script>
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'

	import {
		quillEditor
	} from 'vue-quill-editor'
	export default {
		name: 'memoEdit',
		data() {
			return {
				colorLump: ['#ffe76e', '#fac58b', '#a1ef9b', '#ffafdf', '#d7afff', '#9fdfff', '#d1d1d1'],
				editorOption: {
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike']
						]
					},
					theme: 'snow',
					placeholder: '写点什么吧！'
				}
			}
		},
		props: {
			item: Object,
			index: Number
		},
		components: {
			quillEditor
		},
		mounted() {
			
		},
		methods: {
			noteColor(para) {
				const color = [{
						head: '#ffeb81',
						body: '#fff3ab'
					},
					{
						head: '#f6ddba',
						body: '#fdedd5'
					},
					{
						head: '#afeda5',
						body: '#cbf1c5'
					},
					{
						head: '#ffbbdd',
						body: '#ffcde5'
					},
					{
						head: '#dbb7ff',
						body: '#e7cfff'
					},
					{
						head: '#b7dfff',
						body: '#cde9ff'
					},
					{
						head: '#e5e5e5',
						body: '#f9f9f9'
					}
				]
				return color[para]
			},
			colorClose() {
				event.currentTarget.style.display = "none";
				// $(event.currentTarget).hide();
			},
			bookmarkDelLayer1() {
				let dom = $(event.currentTarget).parents(".memo-layer-content").find("#memo-layer-del-1");
				let height = ($(event.currentTarget).parents(".memo-layer-content").height() - 105) / 2 + "px";
				let width = ($(event.currentTarget).parents(".memo-layer-content").width() - 290) / 2 + "px";
				layer.open({
					type: 1,
					title: false,
					area: ['290px', '105px'],
					offset: [height, width],
					fixed: false,
					shade: 0,
					closeBtn: 0,
					content: dom,
					success: function(layero, index) {
						dom.next().show();
						dom.show();
						dom.find('div>button').click(function() {
							dom.next().hide();
							dom.hide();
							layer.close(index);
						})
					}
				});
			},
			noteDel(index) {
				this.closeNote();
				this.$emit('note-del',index);
			},
			menoTitleEdit() {
				$(event.currentTarget).hide();
				$(event.currentTarget).next().show();
			},
			titleBlur() {
				$(event.currentTarget).hide();
				$(event.currentTarget).prev().show();
			},
			noteOp() {
				$(event.currentTarget).parents('.meno-head').siblings('.note-op').show();
			},
			closeNote() {
				layer.close($(event.currentTarget).parents('.layui-layer').attr('times'));
				// $(event.currentTarget).parents('.memo-layer-content').hide();
			},
			colorChoose(index1) {
				this.item.colorNumber = index1;
				$(event.currentTarget).parents('.note-op').hide();
			},
		}
	}
</script>

<style>
	.memo-layer-content {
		display: none;
		height: 100%;
		position: relative;
		-moz-user-select: none;
		/* 火狐 */
		-webkit-user-select: none;
		/* 谷歌 */
		-ms-user-select: none;
		/* IE */
		user-select: none;
	}

	.layui-layer-content .memo-body {
		height: calc(100% - 32px);
		max-height: none;
		padding: 0;
	}

	.memo-body textarea {
		height: calc(100% - 37px);
		width: 100%;
		outline: none;
		border: none;
		resize: none;
		background: transparent;
		padding: 0 12px;
	}

	.memo-move .meno-title {
		position: absolute;
		z-index: 2147483648;
		height: 26px;
		line-height: 26px;
	}

	.memo-move-div {
		width: 100%;
		height: 100%;
	}

	.meno-title-edit {
		position: absolute;
		background: transparent;
		border: none;
		outline: none;
		width: 120px;
		height: 26px;
		display: none;
	}

	.memo-layer-title-icon {
		display: flex !important;
		align-items: center;
	}

	.memo-layer-title-icon .icon-more {
		margin-right: 12px;
	}

	.memo-btm-icon {
		border-top: 1px solid rgba(0, 0, 0, .1);
		height: 38px;
		display: flex;
		align-items: center;
	}

	.memo-btm-icon>div {
		color: #000000;
		padding: 0 11px;
	}

	.layer-txt-list .icon-more {
		display: block !important;
	}

	.layer-txt-list .icon-close {
		font-size: 20px;
	}

	.quill-editor {
		height: 100%;
		position: relative;
	}

	.ql-toolbar.ql-snow {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.ql-container.ql-snow {
		height: calc(100% - 44px);
		border: none;
	}
</style>
