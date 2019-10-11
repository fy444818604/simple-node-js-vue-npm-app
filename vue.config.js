const webpack = require('webpack');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
            }),
			// new BundleAnalyzerPlugin()
        ]
    },
    lintOnSave: undefined,
    devServer: {
        // proxy: {
        // 	'/api': {
        // 		// target: 'http://api.xiaoyangedu.com',
        // 		target: 'http://192.168.10.86:8081',
        // 		ws: true,
        // 		changeOrigin: true,
        // 		pathRewrite: {
        // 			'^/api': '/api', // rewrite path
        // 		}
        // 	}
        // }
    }
}
