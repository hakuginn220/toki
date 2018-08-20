const path = require('path')

const development = process.argv.some(value => value === 'development')

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
        use: 'ts-loader'
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

if (development) {
  option.devtool = 'source-map'
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
