@echo off
title Amaduce Training Simulator - APK Builder
color 0b

echo ================================================================
echo       AMADUCE TRAINING SIMULATOR - APK AUTO BUILDER
echo ================================================================
echo.

set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

echo [1/4] Syncing latest HTML/JS/CSS assets to Android project...
copy /Y "index.html" "android\app\src\main\assets\index.html" >nul
if not exist "android\app\src\main\assets\css" mkdir "android\app\src\main\assets\css"
xcopy /Y /E /I "css" "android\app\src\main\assets\css" >nul
if not exist "android\app\src\main\assets\js" mkdir "android\app\src\main\assets\js"
xcopy /Y /E /I "js" "android\app\src\main\assets\js" >nul
if %ERRORLEVEL% NEQ 0 (
    color 0c
    echo [ERROR] Failed to sync assets to android project!
    pause
    exit /b 1
)
echo [OK] All assets (HTML, CSS, JS) synced successfully!
echo.

echo [2/4] Setting up Java and Android environment...
if exist "D:\Main Branch\android studio\jbr\bin\java.exe" (
    set "JAVA_HOME=D:\Main Branch\android studio\jbr"
) else if exist "C:\Program Files\Android\Android Studio\jbr\bin\java.exe" (
    set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
) else (
    echo [WARNING] Default Android Studio JBR path not found, trying system JAVA...
)

if defined JAVA_HOME (
    set "PATH=%JAVA_HOME%\bin;%PATH%"
    echo [OK] Java environment detected: %JAVA_HOME%
)
echo.

echo [3/4] Compiling and packaging APK with Gradle...
cd android
call gradlew.bat assembleDebug
if %ERRORLEVEL% NEQ 0 (
    color 0c
    echo.
    echo ================================================================
    echo [ERROR] APK Build Failed! Please check the error messages above.
    echo ================================================================
    cd /d "%SCRIPT_DIR%"
    pause
    exit /b 1
)
cd /d "%SCRIPT_DIR%"
echo [OK] Gradle build completed successfully!
echo.

echo [4/4] Copying fresh APK to main folder...
set "SRC_APK=android\app\build\outputs\apk\debug\app-debug.apk"
set "OUT_APK=Amaduce_Training_Simulator.apk"

if exist "%SRC_APK%" (
    copy /Y "%SRC_APK%" "%OUT_APK%" >nul
    color 0a
    echo.
    echo ================================================================
    echo       SUCCESS! YOUR APK IS READY AND UPDATED!
    echo ================================================================
    echo  File Name: %OUT_APK%
    echo  Location : %SCRIPT_DIR%%OUT_APK%
    echo ================================================================
    echo.
    echo Opening output folder...
    explorer.exe /select,"%SCRIPT_DIR%%OUT_APK%"
) else (
    color 0c
    echo [ERROR] Output APK file not found at: %SRC_APK%
)

echo.
echo Press any key to exit.
pause >nul