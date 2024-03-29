import { CreateWindowOptions } from '@src/core/tools'
import { app, Tray } from 'electron'
import isDev from 'electron-is-dev'

// import { creatAppTray } from './tray'

$tools.log.info(`Application <${$tools.APP_NAME}> launched.`)
const windowOptions: CreateWindowOptions = {
  windowOptions: {
    width: 1200,
    height:800
  },
  createConfig: {
    openDevTools:isDev
  }
}
let tray: Tray

app.allowRendererProcessReuse = true

const appLock = app.requestSingleInstanceLock()

if (!appLock) {
  // 作为第二个实例运行时, 主动结束进程
  app.quit()
}

app.on('second-instance', () => {
  // 当运行第二个实例时, 打开或激活首页
    $tools.createWindow('Home', windowOptions);
})

app.whenReady().then(() => {
    //   tray = creatAppTray()
    $tools.createWindow('Home', windowOptions);
});

app.on('activate', () => {
  if (process.platform === 'darwin') {
      $tools.createWindow('Home', windowOptions);
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('before-quit', () => {
  $tools.log.info(`Application <${$tools.APP_NAME}> has exited normally.`)

  if (process.platform === 'win32') {
    tray.destroy()
  }
})
