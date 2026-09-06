# Amaduce Training Simulator - Setup Guide

## Option 1: Browser
Open `index.html` directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## Option 2: Electron Desktop App (Windows/Mac/Linux)

### Install Dependencies:
```bash
npm install
```

### Run Locally:
```bash
npm start
```

### Build Windows Installer:
```bash
npm run build-win
```
The installer will be generated in the `dist/` directory.

### Build Portable EXE:
```bash
npm run build-portable
```

---

## Option 3: Android APK

### Step 1 - One-Click Auto Builder (Recommended):
Double-click `Start_APK.bat` in the project root folder. It will:
1. Sync all web files (HTML, CSS, JS) to Android assets.
2. Compile and package the APK using Gradle.
3. Place `Amaduce_Training_Simulator.apk` in the root folder and open Explorer.

### Step 2 - Android Studio (Manual):
1. Open Android Studio.
2. Select **File > Open** and choose the `android/` directory.
3. Wait for Gradle sync to complete.
4. Select **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. The generated APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`.

### Android Features:
- Locked in **Landscape mode** for authentic GDS experience.
- Full screen / Immersive mode.
- Screen recording and screenshot capture protection (`FLAG_SECURE`).
- Offline 2-year device-locked licensing system.

---

## Project Structure
```
Amaduce-Training-Mode/
|-- index.html                  # Main Web Terminal Interface
|-- css/
|   `-- style.css               # Clean modular styles
|-- js/
|   |-- airports.js             # 60+ airport catalog
|   |-- flights.js              # Flight schedules & availability generator
|   |-- pnr-state.js            # PNR state management
|   |-- commands.js             # Amadeus command handlers
|   `-- app.js                  # UI & terminal initialization
|-- Admin_License_Generator.html# Admin license generator tool
|-- Generate_License.bat        # Batch launcher for license tool
|-- Start_APK.bat               # One-click APK auto builder
|-- .nojekyll                   # GitHub Pages configuration
`-- android/                    # Android Studio project
```