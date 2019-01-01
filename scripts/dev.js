const { server } = require('electron-connect')
const webpack = require('webpack')
const [renderer_config, main_config] = require('../webpack.config')

const electron = server.create()
const renderer = webpack({ ...renderer_config, mode: 'development' })
const main = webpack({ ...main_config, mode: 'development' })
const options = { aggregateTimeout: 300, poll: true }

electron.start()

renderer.watch(options, (err, stats) => {
  console.log(stats.toString({ colors: true }))
})

main.watch(options, (err, stats) => {
  console.log(stats.toString({ colors: true }))
  electron.restart()
})
