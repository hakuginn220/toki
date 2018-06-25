const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

const isDevelopment = process.argv.some(value => value === 'development')

const option = {
  context: path.resolve('src'),
  output: {
    filename: '[name].js',
    path: path.resolve('bundle')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
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
    target: 'electron-renderer',
    entry: { renderer: './renderer.tsx' }
  },
  {
    ...option,
    target: 'electron-main',
    entry: { main: './main.ts' }
  }
]
