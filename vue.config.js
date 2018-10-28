const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
    outputDir: './dist',
    assetsDir: 'dist',
    indexPath: '../src/views/app.html',
    baseUrl: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    css: undefined,
    configureWebpack: {
      plugins: [
        new SpriteLoaderPlugin()
      ]
    },
    chainWebpack: config => {
        config.module.rules.delete('svg')

        config.module
            .rule('svg')
            .test( /\.svg$/)
            .use('svg-spritessssss')
            .loader('svg-sprite-loader')
            .options({
                extract: true,
                spriteFilename: 'dist/icons-[hash:6].svg',
                esModule: false
            })

        config.plugin('svg-sprite')
            .use(require('svg-sprite-loader/plugin'))
    }
}
