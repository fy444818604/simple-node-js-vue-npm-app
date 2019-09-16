<!-- 右侧网站组件 -->
<template>
	<div id="bookmark">
		<div class="bookmark-title" v-show="bookmarkRecommend.length != 0">
			推荐
		</div>
		<el-scrollbar id="bookmark-common">
			<ul class="bookmark-re-list" v-show="bookmarkRecommend.length != 0">
				<li v-for="(item,index) in bookmarkRecommend" :key="index">
					<a target="_blank" :href="item.webInfoUrl" class="bookmark-img" :style="{backgroundColor:item.colorNum}">
						<!-- <img :src="item.webInfoIcon" v-if="item.webInfoIcon != ''">
						<span v-else>{{item.webName.substring(0,2)}}</span> -->
						<span>{{item.webName.substring(0,2)}}</span>
					</a>
					<div>
						{{item.webName}}
					</div>
				</li>
			</ul>
		</el-scrollbar>
		<div class="bookmark-common-title">
			<div>常用</div>
			<i class="iconfont icon-add" @click="bookmarkAddLayer"></i>
		</div>
		<el-scrollbar id="bookmark-common-1">
			<ul class="bookmark-re-list" @contextmenu.prevent="boormarkEdit" @click="boormarkEditClose" v-show="bookmarkCommon.length != 0"
			 v-loading="loading">
				<li v-for="(item,index) in bookmarkCommon" :class="bookmarkSwitch?'swing':''">
					<a target="_blank" :href="!bookmarkSwitch?item.webInfoUrl:'javascript:;'" class="bookmark-img" :style="{backgroundColor:item.colorNum}">
						<!-- <img :src="item.webInfoIcon" v-if="item.webInfoIcon != ''">
						<span v-else>{{item.webName.substring(0,2)}}</span> -->
						<span>{{item.webName.substring(0,2)}}</span>
						
						<div class="bookmark-edit" @click.stop.prevent="bookmarkAddLayer(item)">
							<i class="iconfont icon-edit"></i>
						</div>
						<div class="bookmark-del" v-show="bookmarkSwitch" @click.stop.prevent="bookmarkDel(item.webInfoId)">
							<i class="iconfont icon-close"></i>
						</div>
					</a>
					<div>
						{{item.webName}}
					</div>
				</li>
			</ul>
		</el-scrollbar>
		<div class="bookmark-layer">
			<div class="bookmark-layer-title">
				<div>新建</div>
				<i class="icon-add iconfont" @click="bookmarkAddLayerClose"></i>
			</div>
			<div class="bookmark-layer-content">
				<input type="text" placeholder="网址" v-model="bookedit.webInfoUrl">
				<input type="text" placeholder="名称" v-model="bookedit.webName">
				<div class="preview-box">
					<div class="bookmark-color-pick" :style="{background:bookedit.colorNum}">
						{{bookedit.webName != ''?bookedit.webName.substring(0,2):bookedit.webName}}
					</div>
					<div>
						预览
					</div>
				</div>
				<ul class="bookmark-color-list">
					<li v-for="(item,index) in bookmarkLump" :key='index' @click="colorSelect(index)">
						<div class="bookmark-color-radius" :style="{borderColor:item.active?item.color:'transparent'}" v-if="index != bookmarkLump.length - 1">
							<div class="bookmark-color-content" :style="{background:index==bookmarkLump.length - 1?'url('+img+') center':item.color}"></div>
						</div>
						<div class="bookmark-color-radius aaa" :style="{borderColor:item.active?item.color:'transparent',background:'url('+img+') center'}"
						 v-else>
							<el-color-picker v-model="item.color" @change="colorChange"></el-color-picker>
						</div>
					</li>
				</ul>
				<button class="bookmark-layer-btn" @click="bookmarkAdd">完成</button>
			</div>
		</div>
	</div>
</template>

<script>
	import layer from 'layui-layer'
	export default {
		data() {
			return {
				loading: true,
				img: require('@/assets/image/color-picker.png'),
				bookmarkRecommend: [],
				bookmarkCommon: [],
				bookedit: {
					webInfoId: 1,
					webInfoIcon: '',
					webName: '优酷',
					colorNum: '#3498db',
					webInfoUrl: 'https://www.baidu.com/',
					isRecommend: 2
				},
				bookmarkSwitch: false,
				bookmarkIndex: 0,
				bookmarkLump: [{
						color: '#1abc9c',
						active: false
					},
					{
						color: '#2dcc71',
						active: false
					},
					{
						color: '#33c5c5',
						active: false
					},
					{
						color: '#3498db',
						active: true
					},
					{
						color: '#f1c410',
						active: false
					},
					{
						color: '#e57e22',
						active: false
					},
					{
						color: '#e74b3d',
						active: false
					},
					{
						color: 'transparent',
						active: false
					}
				]
			};
		},
		created() {
			this.bookmarkRecommendFun();
			this.bookmarkFun();
		},
		mounted() {
			function push(array, ...items) {
				items.forEach(function(item) {
					array.push(item);
					console.log(item);
				});
				return array
			}
			
			let obj = { a: { b: 1 } };
			let { ...x } = obj;
			// obj.a.b = 2;
			console.log(x.a.b)
		},
		methods: {
			bookmarkRecommendFun() {
				this.$post('/api/bookmarkRecommend').then((res) => {
					this.bookmarkRecommend = res;
				})
			},
			bookmarkFun() {
				this.$post('/api/bookmark').then((res) => {
					this.bookmarkCommon = res;
				})
			},
			boormarkEdit() {
				this.bookmarkSwitch = true;
			},
			//关闭书签操作
			boormarkEditClose() {
				this.bookmarkSwitch = false;
			},
			bookmarkDel(webInfoId) {
				this.$post('/api/bookmarkRomove', {
					id: webInfoId
				}).then((res) => {
					if (res.code == 200) {
						this.bookmarkFun();
						this.$message({
							message: res.msg,
							type: 'success'
						})
					}
				})
			},
			bookmarkAddLayer(para) {
				//多窗口模式，层叠置顶
				var _this = this;
				if ($('.bookmark-layer').css('display') == 'none') {
					$('.bookmark-layer').show();
					this.bookmarkIndex = layer.open({
						type: 1,
						title: false,
						area: ['320px', '372px'],
						shade: false,
						scrollbar: false,
						closeBtn: 0,
						content: $('.bookmark-layer')
					});
					if (para.webName != undefined) {
						$('.bookmark-layer-title>div').text('编辑');
						_this.bookedit = para;
						var array = [];
						_this.bookmarkLump.map((v, i) => {
							array.push(v.color)
						})
						var index = $.inArray(_this.bookedit.colorNum, array);
						if (index == -1) {
							_this.bookmarkLump.map((v, i, n) => {
								if (i == n.length - 1) {
									v.active = true
									v.color = _this.bookedit.colorNum
								} else {
									v.active = false
								}
							})
						} else {
							_this.bookmarkLump.map((v, i) => {
								if (i == index) {
									v.active = true
								} else {
									v.active = false
								}
							})
						}
					} else {
						$('.bookmark-layer-title>div').text('新建');
						_this.bookedit = {
							webInfoId: _this.uuid(),
							webInfoIcon: '',
							webName: '',
							colorNum: '#3498db',
							webInfoUrl: 'https://',
							isRecommend: 2
						};
						_this.bookmarkLump.map((v, i) => {
							if (v.active) {
								this.bookedit.colorNum = this.bookmarkLump[i].color
							}
						})
					}
				}
			},
			bookmarkAddLayerClose() {
				layer.close(this.bookmarkIndex);
				$('.bookmark-layer').hide();
			},
			bookmarkAdd() {
				this.$post('/api/bookmarkAdd', this.bookedit).then((res) => {
					if (res.code == 200) {
						this.bookmarkFun();
						this.bookmarkAddLayerClose();
							this.$message({
							message: res.msg,
							type: 'success'
						})
					}
				})
			},
			colorSelect(index) {
				if (index != 7) {
					this.bookmarkLump.map((v, i) => {
						v.active = false;
					})
					this.bookmarkLump[index].active = true;
					this.bookmarkLump.map((v, i) => {
						if (v.active) {
							this.bookedit.colorNum = this.bookmarkLump[i].color
						}
					})
				}
			},
			colorChange(val) {
				this.bookmarkLump.map((v, i) => {
					v.active = false;
				})
				this.bookmarkLump[7].active = true;
				this.bookmarkLump[7].color = val;
				this.bookedit.colorNum = val;
			},
			uuid() {
				let s = [];
				let hexDigits = "0123456789abcdef";
				for (let i = 0; i < 36; i++) {
					s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
				}
				s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
				s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
				s[8] = s[13] = s[18] = s[23] = "-";

				let uuid = s.join("").replace(/-/g, '');
				return uuid;
			},
		}
	}
</script>

<style>
	.bookmark-title {
		padding: 0px 16px 12px;
		color: #999;
	}

	.bookmark-img {
		width: 56px;
		height: 56px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5px;
		cursor: pointer;
		position: relative;
	}

	.bookmark-img>span {
		color: #FFFFFF;
	}

	.bookmark-re-list {
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #E4E4E4;
		align-content: space-between;
	}

	.bookmark-re-list:last-child {
		border-bottom: none;
	}

	.bookmark-re-list>li {
		width: 33%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
		height: 79px;
		align-content: space-between;
	}

	.bookmark-re-list>li>div {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 80%;
	}

	.bookmark-common-title {
		padding: 0px 16px;
		display: flex;
		justify-content: space-between;
	}

	.bookmark-common-title>div {
		color: #999999;
	}

	.bookmark-common-title .icon-add {
		font-size: 20px;
		color: #666666;
	}

	.bookmark-common-title .icon-add:hover {
		color: #4889bd
	}

	.bookmark-layer {
		display: none;
	}

	.bookmark-layer-title {
		display: flex;
		justify-content: space-between;
		padding: 12px;
	}

	.bookmark-layer-title .icon-add {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		font-size: 20px;
		color: #999;
	}

	.bookmark-layer-content {
		padding: 8px 12px 24px;
	}

	.bookmark-layer-content>input[type='text'] {
		border-radius: 4px;
		background-color: #eff2f3;
		border: none;
		outline: none;
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
		width: 100%;
		margin-bottom: 16px;
	}

	.bookmark-layer-content>input[type='text']::-webkit-input-placeholder {
		color: #999;
	}

	.bookmark-layer-content>input[type='text']::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #999;
	}

	.bookmark-layer-content>input[type='text']:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #999;
	}

	.bookmark-layer-content>input[type='text']:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #999;
	}

	.bookmark-color-pick {
		width: 72px;
		height: 72px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}

	.bookmark-layer-btn {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #4889DB;
		outline: none;
		border: none;
		cursor: pointer;
		color: #FFFFFF;
		border-radius: 4px;
	}

	.bookmark-layer-btn:hover {
		background-color: #3d7ec5;
	}

	.bookmark-color-list {
		display: flex;
		justify-content: space-between;
		margin: 20px 0 18px 0;
	}

	.bookmark-color-list>li {
		width: 28px;
		height: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bookmark-color-radius {
		flex-shrink: 0;
		width: 26px;
		height: 26px;
		border-radius: 100%;
		padding: 4px;
		border-width: 1px;
		border-style: solid;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bookmark-color-list>li:hover {
		transform: scale(1.1);
	}

	.bookmark-color-content {
		flex-shrink: 0;
		width: 18px;
		height: 18px;
		border-radius: 100%;
	}

	.preview-box {
		display: flex;
		align-items: center;
	}

	.preview-box>div:last-child {
		color: #999999;
		margin-left: 20px;
	}

	.note-card-body>ul,
	.note-card-body>ul>li {
		height: 100%;
	}

	#bookmark-common {
		height: 185px;
	}

	#bookmark-common-1 {
		height: calc(100vh - 375px);
	}

	#bookmark-common-1 .bookmark-re-list {
		padding-top: 15px;
	}

	@-webkit-keyframes icondel {
		0% {
			-webkit-transform: rotate(0deg);
		}

		25% {
			-webkit-transform: rotate(2deg);
		}

		50% {
			-webkit-transform: rotate(0deg);
		}

		75% {
			-webkit-transform: rotate(-2deg);
		}

		100% {
			-webkit-transform: rotate(0deg);
		}
	}

	.swing {
		-webkit-animation: icondel 0.4s infinite linear;
	}

	.bookmark-del {
		position: absolute;
		top: -5px;
		right: -5px;
		width: 18px;
		height: 18px;
		background: rgba(0, 0, 0, .2);
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.bookmark-del>.icon-close {
		color: #FFFFFF;
		font-size: 14px;
	}

	.bookmark-edit {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(255, 255, 255, .6);
		z-index: 1;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bookmark-edit>.icon-edit {
		font-size: 32px;
		color: #666666;
	}

	.bookmark-edit {
		display: none;
	}

	.swing>a:hover .bookmark-edit {
		display: flex;
	}

	.bookmark-color-radius .el-color-picker {
		opacity: 0;
	}

	.aaa {
		background-size: 18px 18px !important;
		background-repeat: no-repeat !important;
	}
</style>
