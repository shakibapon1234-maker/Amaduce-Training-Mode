const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: "Amaduce Training Simulator — Wings Fly Aviation Academy",
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    // Custom titlebar styling
    backgroundColor: "#00437a",
    show: false
  });

  // Load the single-file training simulator
  mainWindow.loadFile("index.html");

  // Show once loaded (prevents white flash)
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Open external links in the system browser, not Electron
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  // ---- Application Menu ----
  const menuTemplate = [
    {
      label: "Simulator",
      submenu: [
        {
          label: "Reset Session",
          accelerator: "CmdOrCtrl+R",
          click: () => {
            mainWindow.webContents.executeJavaScript("resetSimulator()");
          }
        },
        {
          label: "Load Lesson PNR (J99GZO)",
          accelerator: "CmdOrCtrl+L",
          click: () => {
            mainWindow.webContents.executeJavaScript("loadLessonPNR()");
          }
        },
        { type: "separator" },
        {
          label: "Open Seat Map",
          accelerator: "CmdOrCtrl+M",
          click: () => {
            mainWindow.webContents.executeJavaScript("openSeatMap(0)");
          }
        },
        { type: "separator" },
        { role: "quit", label: "Exit" }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload", label: "Reload" },
        { role: "togglefullscreen", label: "Full Screen (F11)" },
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
      label: "Help",
      submenu: [
        {
          label: "WFA Academy Website",
          click: () => shell.openExternal("https://www.wingsflyaviation.com")
        },
        { type: "separator" },
        {
          label: "About",
          click: () => {
            const { dialog } = require("electron");
            dialog.showMessageBox(mainWindow, {
              type: "info",
              title: "About Amaduce Training Simulator",
              message: "Amaduce Training Simulator v1.0",
              detail:
                "Wings Fly Aviation Academy\n" +
                "Independent training simulation for Amadeus GDS practice.\n\n" +
                "Not affiliated with Amadeus IT Group.\n" +
                "No live GDS access."
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
