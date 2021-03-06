const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  devtool: 'source-map',
  stats: 'minimal',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'babel-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: true,
    port: 10000,
    open: true,
    overlay: true,
    quiet: true,
    proxy: [{ context: ['/auth'], target: 'http://localhost:10001' }]
  }
}
