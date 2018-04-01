const path = require('path')

const option = {
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

module.exports = [
  {
    ...option,
    target: 'electron-renderer',
    entry: { renderer: './index.js' },
    context: path.resolve('src/renderer')
  },
  {
    ...option,
    target: 'electron-main',
    entry: { main: './index.js' },
    context: path.resolve('src/main')
  }
]