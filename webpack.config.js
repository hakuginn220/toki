const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: { '@': path.resolve(__dirname, 'src/renderer') }
  }
}

const main = {
  ...common,
  name: 'main',
  entry: { main: './src/main/main.ts' },
  target: 'electron-main',
  plugins: [new CheckerPlugin()]
}

const renderer = {
  ...common,
  name: 'renderer',
  target: 'electron-renderer',
  entry: { renderer: './src/renderer/main.tsx' },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html'
    })
  ]
}

module.exports = [main, renderer]
