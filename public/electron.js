const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.webContents.openDevTools();
    // win.loadFile('index.html');
    // win.loadURL(`file://${__dirname}/index.html`);
    // win.loadURL('http://localhost:3000/');
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${__dirname}/index.html`);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
