import 'source-map-support/register'
import { app, BrowserWindow } from 'electron'

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })

  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
}

app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) {
      win.restore()
    }
    win.focus()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', createWindow)
