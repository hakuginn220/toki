import { app, BrowserWindow, session } from 'electron'
import path from 'path'
import url from 'url'

let mainWindow: BrowserWindow | null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    minWidth: 800,
    width: 800,
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.resolve(app.getAppPath(), 'dist/index.html'),
      protocol: 'file',
      slashes: true,
    })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }
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
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['Origin'] = 'electron://toki'
    callback({ cancel: false, requestHeaders: details.requestHeaders })
  })

  createWindow()
})
