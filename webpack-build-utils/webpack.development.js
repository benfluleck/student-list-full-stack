module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '*': 'http://localhost:4000',
      'secure': false,
      'changeOrigin': true
    }
  }
}
