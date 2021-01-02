const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame:false
    })
    win.webContents.openDevTools(); //调试用，正式版请删掉这一行
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${__dirname}/index.html`);
    win.on('maximize', () => {
        win.webContents.send('window-maximized');
    })
    win.on('unmaximize', () => {
        win.webContents.send('window-unmaximized');
    })
    ipcMain.on("window-close", (event) => {
        if (win && !win.isDestroyed()) {
            win.close();
            event.preventDefault();
        }
    })
    ipcMain.on("window-minimize", (event) => {
        if (win && !win.isDestroyed()&&!win.isMinimized()) {
            win.minimize();
            event.preventDefault();
        }
    })
    ipcMain.on("window-minimize", (event) => {
        if (win && !win.isDestroyed()&&!win.isMinimized()) {
            win.minimize();
            event.preventDefault();
        }
    })
    ipcMain.on("window-maximize", (event) => {
        if (win && !win.isDestroyed()&&!win.isMaximized()) {
            win.maximize();
            event.preventDefault();
        }
    })
    ipcMain.on("window-unmaximize", (event) => {
        if (win && !win.isDestroyed()&&win.isMaximized()) {
            win.unmaximize();
            event.preventDefault();
        }
    })

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
