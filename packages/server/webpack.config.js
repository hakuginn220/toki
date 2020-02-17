const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  devtool: 'source-map',
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
  plugins: [new FriendlyErrorsWebpackPlugin(), new NodemonPlugin()],
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules')
    })
  ]
}
