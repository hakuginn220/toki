import Twitter from '@/twitter'
import { config } from 'dotenv'
import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

declare var __static: string
declare var global: { twitter: Twitter }

const env = config({ path: path.join(__static, '.env') })

global.twitter = new Twitter({
  consumer_key: env.parsed ? env.parsed.TWITTER_CONSUMER_KEY : '',
  consumer_secret: env.parsed ? env.parsed.TWITTER_CONSUMER_SECRET : ''
})

let mainWindow: BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    minWidth: 800,
    width: 800
  })

  let urlObject

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()

    urlObject = {
      hostname: 'localhost',
      port: process.env.ELECTRON_WEBPACK_WDS_PORT,
      protocol: 'http',
      slashes: true
    }
  } else {
    urlObject = {
      pathname: path.resolve(app.getAppPath(), 'dist/index.html'),
      protocol: 'file',
      slashes: true
    }
  }

  mainWindow.loadURL(url.format(urlObject))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
}

app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore()
    }
    mainWindow.focus()
  }
})

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
