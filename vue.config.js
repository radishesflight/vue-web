const {defineConfig} = require('@vue/cli-service')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            config.plugin('define').tap((definitions) => {
                Object.assign(definitions[0], {
                    __VUE_OPTIONS_API__: 'true',
                    __VUE_PROD_DEVTOOLS__: 'false',
                    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
                })
                return definitions
            })
    },
    outputDir: "./my_web", //打包的存放路径
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.tfydd.com/api',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        }
    }
})
