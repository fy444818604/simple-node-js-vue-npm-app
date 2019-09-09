const webpack = require('webpack');
const path = require('path');
//
module.exports = {
	baseUrl: './',
	publicPath: process.env.NODE_ENV === 'production'
	    ? '/basic/'
	    : '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.resolve(__dirname, './src'))
		//.set('hexToRgb', path.resolve(__dirname, './src/assets/javascript/particles.min.js'))
		//.set('app', path.resolve(__dirname, './src/assets/javascript/app.js'))
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery",
				//hexToRgb: "hexToRgb",
				//"window.hexToRgb": "hexToRgb",
				//app: "app",
				//"window.app": "app"
			})
		]
	},
	lintOnSave: undefined,
	devServer: {
		proxy: {
			'/api': {
				// target: 'http://api.xiaoyangedu.com',
				target: 'http://192.168.10.86:8081',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api', // rewrite path
				}
			}
		}
	}
}
