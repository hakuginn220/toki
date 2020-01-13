const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: true,
    open: true,
    overlay: true,
    quiet: true,
    proxy: [
      {
        context: ['/auth', '/api'],
        target: 'http://localhost:8081'
      }
    ]
  }
}
