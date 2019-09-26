// 弹出层
import layer from 'layui-layer'

/**
 * 表单弹出层
 * @param {String} title [弹出层标题]
 * @param {String} src [弹出层dom]
 * @param {Array} area [弹出层尺寸]
 * @param {function} callback [弹出层回调函数]
 */
export const formLayer = (title, src, area, callback) => {
	let index = layer.open({
		type: 1,
		title: title,
		content: src,
		area: area,
		btn: ['确认', '取消'],
		btnAlign: 'c',
		resize: false,
		yes: function(index, layero) {
			if (callback()) {
				src.hide();
				layer.close(index)
			}
		},
		btn2: function(index, layero) {
			src.hide();
			layer.close(index)
		},
		cancel:function(){
			src.hide();
		}
	})
}	
				

/**
 * 成功提示
 * @param {String} msg [提示内容]
 */
export const successLayer = (msg) => {
	let html =
		`<div class="window-cont"><i class="fy-windows-icon icon-success"></i><p>${msg}</p><button>知道了</button></div>`;
	let index = layer.open({
		type: 1,
		title: false,
		closeBtn: 0,
		area: '280px',
		content: html
	});
	document.querySelector('.window-cont>button').addEventListener('click', function() {
		layer.close(index)
	})
}

/**
 * 警告提示
 * @param {String} msg [提示内容]
 */
export const dangerLayer = (msg) => {
	let html =
		`<div class="window-cont"><i class="fy-windows-icon icon-danger"></i><p>${msg}</p><button>知道了</button></div>`;
	let index = layer.open({
		type: 1,
		title: false,
		closeBtn: 0,
		area: '280px',
		content: html
	});
	document.querySelector('.window-cont>button').addEventListener('click', function() {
		layer.close(index)
	})
}

/**
 * 错误提示
 * @param {String} msg [提示内容]
 */
export const errorLayer = (msg) => {
	let html =
		`<div class="window-cont"><i class="fy-windows-icon icon-error"></i><p>${msg}</p><button>知道了</button></div>`;
	let index = layer.open({
		type: 1,
		title: false,
		closeBtn: 0,
		area: '280px',
		content: html
	});
	document.querySelector('.window-cont>button').addEventListener('click', function() {
		layer.close(index)
	})
}

/**
 * 确认提示
 * @param {String} msg [提示内容]
 * @param {Function} callback [确认回调函数]
 */
export const confirmLayer = (msg, callback) => {
	let html = `<div class="confirm-cont"><i class="fy-windows-icon icon-confirm"></i><p>${msg}</p></div>`;
	let index = layer.open({
		type: 1,
		title: false,
		closeBtn: 0,
		area: '360px',
		btn: ['确认', '取消'],
		skin: 'confirm',
		content: html,
		yes: function(index, layero) {
			if (typeof callback == "object") {
				switch (callback.length) {
					case 2:
						callback[0](callback[1]);
						break;
					case 3:
						callback[0](callback[1], callback[2]);
						break;
				}
			} else {
				callback()
			}
			layer.close(index)
		},
		btn2: function(index, layero) {
			layer.close(index)
		}
	});
}
