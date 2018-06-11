const path = require('path')

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

if (isDevelopment) {
  option.devtool = 'source-map'
}

module.exports = [
  {
    ...option,
    target: 'electron-renderer',
    entry: { renderer: ['babel-polyfill', './entry-renderer.js'] }
  },
  {
    ...option,
    target: 'electron-main',
    entry: { main: ['babel-polyfill', './entry-main.js'] }
  }
]
