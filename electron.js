const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;
function createWindow () {
  const startUrl = "http://localhost:5000"
  mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false, fullscreen: true });
  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}
app.whenReady().then(() => createWindow())