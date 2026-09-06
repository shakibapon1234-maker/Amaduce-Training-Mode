@echo off
title Building Amaduce Training APK...
echo ===================================================
echo   Amaduce Training Simulator - APK Auto Builder
echo ===================================================
echo.
echo [1/3] Updating assets (copying latest index.html)...
copy /Y "index.html" "android\app\src\main\assets\index.html" >nul
if errorlevel 1 (
    echo [ERROR] Failed to copy index.html to Android assets!
    pause
    exit /b 1
)
echo Latest index.html successfully copied to Android assets.
echo.
echo [2/3] Building APK with Gradle...
set "JAVA_HOME=D:\Main Branch\android studio\jbr"
set "ANDROID_HOME=C:\Users\Admin\AppData\Local\Android\Sdk"
call gradlew.bat assembleDebug
if errorlevel 1 (
    echo.
    echo ===================================================
    echo [ERROR] Build failed! Please check the error above.
    echo ===================================================
    pause
    exit /b 1
)
echo.
echo [3/3] Exporting APK to main folder...
if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    copy /Y "android\app\build\outputs\apk\debug\app-debug.apk" "Amaduce-Training-Simulator.apk" >nul
    echo.
    echo ===================================================
    echo SUCCESS! APK created successfully!
    echo File: Amaduce-Training-Simulator.apk
    echo ===================================================
    explorer.exe /select,"Amaduce-Training-Simulator.apk"
) else (
    echo [ERROR] Output APK file not found.
)
echo.
pause
