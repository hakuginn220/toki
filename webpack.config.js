const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

const isDevelopment = process.argv.some(value => value === 'development')

const option = {
  context: path.resolve('src'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve('bundle')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}

if (isDevelopment) {
  option.devtool = 'source-map'
  option.plugins = [new CheckerPlugin()]
}

module.exports = [
  {
    ...option,
    entry: { renderer: './renderer.tsx' },
    target: 'electron-renderer'
  },
  {
    ...option,
    entry: { main: './main.ts' },
    target: 'electron-main'
  }
]
