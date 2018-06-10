import path from 'path'
import url from 'url'
import { config } from 'dotenv'
import { app, BrowserWindow } from 'electron'

global.eval = () => {
  throw new Error(`Sorry, this app does not support global.eval().`)
}

const result = config()

if (result.error) {
  throw result.error
}

const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = result.parsed

global.TWITTER_CONSUMER_KEY = TWITTER_CONSUMER_KEY
global.TWITTER_CONSUMER_SECRET = TWITTER_CONSUMER_SECRET

let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    nodeIntegration: false
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.resolve('index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV === 'development') {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer')

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(() => {
        mainWindow.webContents.openDevTools()
      })
      .catch(() => {
        mainWindow.webContents.openDevTools()
      })
  }
}

const isSecondInstance = app.makeSingleInstance(() => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  }
})

if (isSecondInstance) {
  app.quit()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('ready', () => {
  createWindow()
})
