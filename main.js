const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

function createWindow() {
  const iconPath = path.join(__dirname, "icon.ico");
  const iconOptions = fs.existsSync(iconPath) ? { icon: iconPath } : {};

  mainWindow = new BrowserWindow({
    width: 1366,
    height: 840,
    minWidth: 960,
    minHeight: 640,
    title: "Amaduce Training Simulator - Wings Fly Aviation Academy",
    ...iconOptions,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    },
    backgroundColor: "#00437a",
    show: false
  });

  mainWindow.loadFile("index.html");

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    mainWindow.maximize();
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  const menuTemplate = [
    {
      label: "Simulator",
      submenu: [
        {
          label: "Reset Session",
          accelerator: "CmdOrCtrl+N",
          click: () => { mainWindow.webContents.executeJavaScript("resetSimulator()"); }
        },
        {
          label: "Load Lesson PNR (J99GZO)",
          accelerator: "CmdOrCtrl+L",
          click: () => { mainWindow.webContents.executeJavaScript("loadLessonPNR()"); }
        },
        {
          label: "Load Thai Airways PNR (OGJZJ9)",
          accelerator: "CmdOrCtrl+T",
          click: () => { mainWindow.webContents.executeJavaScript("loadThaiAirwaysPNR()"); }
        },
        { type: "separator" },
        {
          label: "Open Seat Map",
          accelerator: "CmdOrCtrl+M",
          click: () => { mainWindow.webContents.executeJavaScript("openSeatMap(0)"); }
        },
        { type: "separator" },
        { role: "quit", label: "Exit" }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "togglefullscreen" },
        { type: "separator" },
        { role: "zoomin" },
        { role: "zoomout" },
        { role: "resetzoom" },
        { type: "separator" },
        {
          label: "Developer Tools",
          accelerator: "F12",
          click: () => mainWindow.webContents.openDevTools()
        }
      ]
    },
    {
      label: "GDS Commands",
      submenu: [
        {
          label: "Price and Rebook (FXR)",
          click: () => { mainWindow.webContents.executeJavaScript("runCommand('FXR')"); }
        },
        {
          label: "Display PNR (IR)",
          accelerator: "CmdOrCtrl+I",
          click: () => { mainWindow.webContents.executeJavaScript("runCommand('IR')"); }
        },
        {
          label: "Save and End (ET)",
          accelerator: "CmdOrCtrl+S",
          click: () => { mainWindow.webContents.executeJavaScript("runCommand('ET')"); }
        },
        {
          label: "Issue Ticket (TTP)",
          click: () => { mainWindow.webContents.executeJavaScript("runCommand('TTP')"); }
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Commands Cheat Sheet on GitHub",
          click: () => shell.openExternal("https://github.com/shakibapon1234-maker/Amaduce-Training-Mode")
        },
        { type: "separator" },
        {
          label: "About",
          click: () => {
            const { dialog } = require("electron");
            dialog.showMessageBox(mainWindow, {
              type: "info",
              title: "About Amaduce Training Simulator",
              message: "Amaduce GDS Training Simulator v1.0",
              detail: "Wings Fly Aviation Academy\nProfessional Amadeus GDS training simulation.\n\nNot affiliated with Amadeus IT Group SA.\nNo live GDS access - training environment only."
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", () => { mainWindow = null; });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});