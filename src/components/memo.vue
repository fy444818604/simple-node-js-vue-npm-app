<!-- 右边侧边栏便签组件 -->
<template>
	<div class="memo-wrap-total">
		<div class="memo-add">
			<i class="iconfont icon-add" @click="memoAdd"></i>
			<div><span>{{memoList.length}}</span>条</div>
		</div>
		<el-scrollbar :native="false" ref="elscrollbar">
			<div class="memo-wrap">
				<SlickList v-model="memoList" :lockToContainerEdges="true" class="SortableList" :distance="10">
					<SlickItem v-for='(item,index) in memoList' class="SortableItem" :index="index" :key="index" :value='item.noteId'>
						<div class="memo-content" @dblclick="noteZoom(index)">
							<div class="meno-head" :style="{backgroundColor:noteColor(item.colorNumber).head}">
								<div>{{item.noteTitle}}</div>
								<i class="iconfont icon-more" @click.stop='noteOp'></i>
							</div>
							<div class="memo-body" :style="{backgroundColor:noteColor(item.colorNumber).body}" v-html="item.contextStr">

							</div>
							<div class="note-op" @mouseleave="colorClose">
								<div class="color-lump">
									<ul>
										<li v-for="(item1,index1) in colorLump" :style="{backgroundColor:item1}" @click="colorChoose(index,index1)">
											<i class="iconfont icon-yes" v-show='index1 == item.colorNumber'></i>
										</li>
									</ul>
								</div>
								<div class="note-del" @click="bookmarkDelLayer">
									<i class="iconfont icon-del"></i>
									删除
								</div>
							</div>
						</div>
						<div class="memo-layer-del" id="memo-layer-del">
							<p>是否要删除此笔记？</p>
							<div>
								<button type="button" @click="noteDel(index)">删除</button>
								<button type="button">保留</button>
							</div>
						</div>
						<div class="memo-layer-del-shade">
							
						</div>
					</SlickItem>
				</SlickList>
			</div>
		</el-scrollbar>
		<div class="layer-txt-list">
			<div v-for="(item,index) in memoList" class="layer-txt-item">
				<memoEdit :key="index" :item="item" :index="index" @note-del="noteDel(index)"></memoEdit>
			</div>
		</div>
	</div>
</template>

<script>
import {
    SlickList,
    SlickItem
} from 'vue-slicksort'
import memoEdit from './memo-edit'
import layer from 'layui-layer'
export default {
    data() {
        return {
            memoList: [],
            colorLump: ['#ffe76e', '#fac58b', '#a1ef9b', '#ffafdf', '#d7afff', '#9fdfff', '#d1d1d1']
        };
    },
    components: {
        SlickItem,
        SlickList,
        memoEdit
    },
    created() {
        this.getNote();
    },
    methods: {
        getNote() {
            this.$post('/api/getNote').then(res => {
                this.memoList = res;
            })
        },
        memoAdd() {
            this.memoList.unshift({
                noteId: this.uuid(),
                noteTitle: this.nowTime(),
                colorNumber: this.monoColor(),
                contextStr: ""
            });
            let div = this.$refs['elscrollbar'].$refs['wrap'];
            this.$nextTick(() => {
                div.scrollTop = 0
            })
            this.noteZoom(0)
        },
        noteZoom(index) {
            if($('.layer-txt-list>.layer-txt-item').eq(index).find('.layui-layer').length == 0){
                let _this = this;
                let id = $('.memo-wrap>.SortableList>.SortableItem').eq(index).attr('value');
                let content = $('.layer-txt-list>.layer-txt-item').eq(index).find('.memo-layer-content');
                let left = _this.randomFrom(30,40)/100 * $(window).height();
                let right = _this.randomFrom(30,40)/100 * $(window).width();
                console.log(_this.randomFrom(30,40))
                //多窗口模式，层叠置顶
                layer.open({
                    type: 1,
                    title: false,
                    area: ['420px', '320px'],
                    shade: 0,
                    offset: [ //为了演示，随机坐标
                        left, right
                    ],
                    closeBtn: 0,
                    move: '.memo-move-div',
                    content: content,
                    zIndex: layer.zIndex,
                    success: function(layero) {
                        layer.setTop(layero);
                    }
                });
            }
        },
        noteOp() {
            $(event.currentTarget).parents('.meno-head').siblings('.note-op').show();
        },
        noteDel(index) {
            $('.note-op').hide();
            this.memoList.splice(index, 1)
        },
        bookmarkDelLayer() {
            let dom = $(event.currentTarget).parents(".memo-content").parent().find("#memo-layer-del");
            let height = ($(event.currentTarget).parents(".memo-content").height() - 105)/2 + "px";
            layer.open({
                type: 1,
                title: false,
                area: ['307px', '105px'],
                offset: [height, '0px'],
                fixed:false,
                shade: 0,
                closeBtn: 0,
                content: dom,
                success: function(layero,index){
                    layero.next().show();
                    layero.find('#memo-layer-del>div>button').click(function(){
                        layero.next().hide();
                        layero.find('#memo-layer-del').hide();
                        layer.close(index);
                    })
                }
            });
        },
        colorChoose(index, index1) {
            this.memoList[index].colorNumber = index1;
            $(event.currentTarget).parents('.note-op').hide();
        },
        colorClose() {
            $(event.currentTarget).hide();
        },
        uuid() {
            let s = [];
            let hexDigits = "0123456789abcdef";
            for (let i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            let uuid = s.join("").replace(/-/g, '');
            return uuid;
        },
        nowTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            let day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();
            let hour = date.getHours() <= 9 ? '0' + date.getHours() : date.getHours();
            let minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
            let format = year + "-" + month + "-" + day + " " + hour + ":" + minutes
            return format
        },
        randomFrom(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        monoColor() {
            return Math.floor(Math.random() * 7);
        },
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
    },
    mounted() {

    }
};
</script>

<style>
	.SortableItem {
		position: relative;
		z-index: 66;
		margin-bottom: 16px;
	}

	.SortableList>.SortableItem:last-child {
		margin-bottom: 0;
	}

	.memo-wrap-total .el-scrollbar {
		height: calc(100% - 32px);
	}

	.memo-wrap-total {
		padding: 0 16px;
		height: calc(100vh - 140px);
	}

	.memo-add {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
	}

	.memo-add>.icon-add {
		font-size: 20px;
		color: #666666;
	}

	.memo-add>.icon-add:hover {
		color: #4889bd;
	}

	.meno-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 32px;
		padding: 0 8px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}

	.meno-head>.memo-move {
		width: calc(100% - 20px);
		max-width: none;
		height: 26px;
	}

	.meno-title,
	.meno-head>div {
		color: #888;
		max-width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		vertical-align: middle;
	}

	.memo-body {
		color: #666;
		line-height: 24px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
		padding: 8px 10px;
		min-height: 73px;
		max-height: 157px;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
		overflow: hidden;
	}

	.note-card-wrap {
		border-left: 1px solid #E4E4E4;
	}

	.memo-wrap {
		position: relative;
	}

	/* .memo-wrap>ul>li {
		margin-bottom: 16px;
		position: relative;
	} */

	.memo-wrap>ul>li:last-child {
		margin-bottom: 0;
	}

	.memo-add>div,
	.memo-add>div>span {
		color: #999;
	}

	.meno-head .icon-more {
		transform: rotate(90deg);
		display: none;
		font-size: 24px;
	}

	.memo-wrap>.SortableList>.SortableItem>.memo-content:hover .icon-more {
		display: block;
	}

	.note-op {
		position: absolute;
		top: 0;
		right: 0;
		height: 105px;
		z-index: 1;
		background-color: #FFFFFF;
		border-radius: 4px;
		display: none;
	}

	.color-lump>ul {
		display: flex;
		height: 52px;
	}

	.color-lump>ul>li:first-child {
		border-top-left-radius: 4px;
	}

	.color-lump>ul>li:last-child {
		border-top-right-radius: 4px;
	}

	.color-lump>ul>li {
		width: 34.2px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.memo-content .color-lump>ul>li {
		width: 14.28%;
	}

	.memo-content .note-op {
		width: 100% !important;
	}

	.note-del {
		height: 47px;
		display: inline-flex;
		align-items: center;
	}

	.note-op .icon-del {
		font-size: 20px;
		color: #666;
		margin: 0 10px;
	}

	.note-op .icon-del:hover {
		color: #4889bd;
	}

	.color-lump .icon-yes {
		font-size: 20px;
		color: rgba(0, 0, 0, .3);
	}
	.memo-layer-del {
		display: none;
	}
	
	.memo-layer-del>p {
		color: #333333;
		text-align: center;
		margin: 20px 0;
	}
	
	.memo-layer-del>div>button:first-child {
		background: #4889db;
		color: #FFFFFF;
		border: none;
		outline: none;
		width: 80px;
		height: 30px;
		line-height: 30px;
		border-radius: 2px;
		margin-right: 10px;
	}
	
	.memo-layer-del>div {
		text-align: center;
	}
	
	.memo-layer-del>div>button:last-child {
		background: #efefef;
		color: #999;
		border: none;
		outline: none;
		width: 80px;
		height: 30px;
		line-height: 30px;
		border-radius: 2px;
	}
	
	.memo-layer-del-shade,
	.memo-layer-del-shade-1 {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .2);
		display: none;
	}
	
	.memo-layer-del-shade-1 {
		right: 0;
	}
	
	#memo-layer-del-1 {
		position: absolute;
		width: 224px;
		height: 99px;
		z-index: 99999999999999999;
		top: 50%;
		left: 50%;
		margin: -50px 0 0 -112px;
		background: #FFFFFF;
	}
	.layer-txt-list{
		margin-top: 10px;
	}
</style>
