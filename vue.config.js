module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        change0rigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/'},
      }
    }
  }
}
