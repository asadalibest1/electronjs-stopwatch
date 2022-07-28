const { app, BrowserWindow, Menu } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')
// const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");

// setup the titlebar main process
// setupTitlebar();


require('@electron/remote/main').initialize()

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'logo192.png'),

        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname, "preload.js")
        },

        // frame: false,
    })
    // attach fullscreen(f11 and not 'maximized') && focus listeners
    // attachTitlebarToWindow(win);
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    )

    // require('electron-react-titlebar/main').initialize()

}

Menu.setApplicationMenu(false)


app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
