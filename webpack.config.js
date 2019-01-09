const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = {
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: { '@': path.resolve(__dirname, 'src/renderer') },
    plugins: [new TsconfigPathsPlugin()]
  }
}

const renderer = {
  ...common,
  name: 'renderer',
  target: 'electron-renderer',
  entry: { renderer: './src/renderer/main.tsx' },
  plugins: [new HtmlWebpackPlugin({ template: './static/index.html' })]
}

const main = {
  ...common,
  name: 'main',
  entry: { main: ['./src/main/main.ts'] },
  target: 'electron-main'
}

module.exports = [renderer, main]
