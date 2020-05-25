const path = require('path')
module.exports = {
  devServer: {
    port: '80',
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      }
    }
  },
  configureWebpack: {
    
    resolve: {
      alias: {
        pages: path.resolve(__dirname, 'src/pages/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        http: path.resolve(__dirname, 'src/http/'),
      }
    }
  }
}