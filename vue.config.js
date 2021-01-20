// const path = require('path')
// const debug = process.env.NODE_ENV !== 'production'
// const name = defaultSettings.title
process.env.VUE_APP_VERSION = require('./package.json').version
module.exports = {
    // 根域上下文目录
    publicPath: '/',
    // 如果当前的地址是 生产环境 ? 是的地址 : 不是的地址
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/': '/'
    // 构建输出目录 打包目录
    outputDir: 'dist',
    // 静态资源目录 (js, css, img, fonts)
    assetsDir: 'assets',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    // indexPath:'index.html',

    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    lintOnSave: false,
    // 运行时版本是否需要编译
    runtimeCompiler: true,
    // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    transpileDependencies: [],
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    productionSourceMap: false,

    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置.
        } else {
            // 为开发环境修改配置...
        }
    },

    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }
    },
    devServer: {
        proxy: {
            '/': {
                //接口
                target: "http://localhost",
                // 是否代理websockets
                ws: false,
                //是否跨域
                changeOrigin: true
            },
        },
        // 第三方插件配置
        pluginOptions: {
        },


        // chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        //     if (debug) {
        //         // 本地开发配置
        //     } else {
        //         // 生产开发配置
        //     }
        // },
        // parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译

        // pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
        // },
        // devServer: {
        //     //     open: true,
        //     //     host: 'localhost',
        //     //     port: 8080,
        //     //     https: false,
        //     //     hotOnly: false,
        //     proxy: { // 配置跨域
        //         '/': {
        //             target: 'http://localhost:8080',	//接口域名
        //             //             //是否代理websockets
        //             //             ws: false,
        //             //             //是否跨域
        //             //             changOrigin: true,
        //             //             //重置路径
        //             //             pathRewrite: {
        //             //                 '^/api': ''
        //             //             }
        //         }
        //     },
        //     before: app => { }
    }
}

