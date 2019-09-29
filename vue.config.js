const webpack = require('webpack');
const path = require('path');
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ?
        '/' : '/',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src'))
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    lintOnSave: undefined,
    devServer: {
        // proxy: {
        // 	'/base': {
        // 		// target: 'http://api.xiaoyangedu.com',
        // 		target: 'http://192.168.38.100:8088',
        // 		ws: true,
        // 		changeOrigin: true,
        // 		pathRewrite: {
        // 			'^/base': '/base', // rewrite path
        // 		}
        // 	}
        // }
    }
}
