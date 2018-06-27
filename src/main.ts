import { config } from 'dotenv'
import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'
import Twitter from './twitter'

global.eval = () => {
  throw new Error('Sorry, this app does not support global.eval().')
}

const env = config()

if (env.error) {
  app.quit()
}

export interface IMain {
  twitter: Twitter
}

export const twitter = new Twitter({
  consumer_key: env.parsed ? env.parsed.TWITTER_CONSUMER_KEY : '',
  consumer_secret: env.parsed ? env.parsed.TWITTER_CONSUMER_SECRET : ''
})

let mainWindow: BrowserWindow | null = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    minWidth: 800,
    width: 800
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
    mainWindow.webContents.openDevTools()
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
