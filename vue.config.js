const path = require('path')
module.exports = {
  devServer: {
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://123.56.134.30',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, 'src/pages/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        http: path.resolve(__dirname, 'src/http/'),
      },
    },
  },
}
