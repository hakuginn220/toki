import { app, BrowserWindow, session } from 'electron'
import path from 'path'
import url from 'url'

let mainWindow: BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    minWidth: 800,
    width: 800
  })

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.loadURL(
    url.format({
      pathname: path.resolve(app.getAppPath(), 'dist/index.html'),
      protocol: 'file',
      slashes: true
    })
  )

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
  if (session.defaultSession) {
    const { webRequest } = session.defaultSession

    webRequest.onBeforeSendHeaders((details: any, callback: any) => {
      details.requestHeaders.Origin = 'electron://toki-client'
      callback({ cancel: false, requestHeaders: details.requestHeaders })
    })
  }

  createWindow()
})
