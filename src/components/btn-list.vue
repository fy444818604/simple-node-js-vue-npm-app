<!-- 按钮组 -->
<template>
	<button class="icon-btn" @click="btnClick" @mouseenter="tip(list.name,list.icon,list.position)" @mouseleave="tipHide"><i
		 class="iconfont" :class="[list.icon,list.position]"></i></button>
</template>

<script>
	export default {
		name: 'btnList',
		props: {
			model: Object,
			start: Number,
			position: String
		},
		data() {
			return {
				list: this.model
			}
		},
		watch: {
			start() {
				if (this.start == 1) {
					if (this.list.name == '启用') {
						var data = {
							name: '停用',
							alias: '停用',
							icon: 'icon-form-stop'
						}
						this.list = data
					}
				} else {
					if (this.list.name == '停用') {
						var data = {
							name: '启用',
							alias: '启用',
							icon: 'icon-form-start'
						}
						this.list = data
					}
				}
			}
		},
		created: function() {
			if (this.start == 1) {
				if (this.list.name == '启用') {
					var data = {
						name: '停用',
						alias: '停用',
						icon: 'icon-form-stop'
					}
					this.list = data
				}
			}
		},
		methods: {
			tip: function(name, type, positon) {
				var that = this;
				if (name != that.change) {
					that.change = name;
					that.tipShow = true
				}
				if (that.tipShow) {
					that.tipShow = false;

					if (positon != undefined) {
						this.$layer.tips(name, '.' + positon, {
							tips: 1,
							time: 200000,
							success: function(layero) {
								var left = parseInt(layero.css('left')) - 10 + "px";
								layero.css({
									'left': left
								})
							},
							end: function() {
								that.tipShow = true
							}
						});
					} else {
						this.$layer.tips(name, '.' + type, {
							tips: 1,
							time: 200000,
							success: function(layero) {
								var left = parseInt(layero.css('left')) - 10 + "px";
								layero.css({
									'left': left
								})
							},
							end: function() {
								that.tipShow = true
							}
						});
					}
				}
			},
			tipHide: function() {
				this.$layer.closeAll('tips')
			},
			btnClick: function() {
				this.$emit('btn-click', this.model.alias)
			}
		}
	}
</script>

<style>
</style>
