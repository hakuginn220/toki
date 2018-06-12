import path from 'path'
import url from 'url'
import { app, BrowserWindow } from 'electron'
import { config } from 'dotenv'
import { OAuth, OAuth2 } from 'oauth'

global.eval = () => {
  throw new Error(`Sorry, this app does not support global.eval().`)
}

const env = config()

if (env.error) {
  app.quit()
}

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = env.parsed

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
)

const oauth2 = new OAuth2(
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  'https://api.twitter.com/',
  null,
  'oauth2/token',
  null
)

global.TWITTER_CONSUMER_KEY = TWITTER_CONSUMER_KEY
global.TWITTER_CONSUMER_SECRET = TWITTER_CONSUMER_SECRET
global.TWITTER_OAUTH = oauth
global.TWITTER_OAUTH2 = oauth2

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
