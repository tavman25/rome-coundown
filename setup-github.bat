@echo off
echo ==================================================
echo   Rome Countdown - GitHub Setup Script
echo ==================================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo ✅ Git is available
echo.

REM Navigate to project directory
cd /d "C:\Users\Bill\Documents\Dev2025\RomeCountdown"

echo 📁 Current directory: %CD%
echo.

REM Initialize git if needed
if not exist ".git" (
    echo 🔧 Initializing Git repository...
    git init
    echo ✅ Git initialized
) else (
    echo ✅ Git repository already exists
)

echo.

REM Add all files
echo 📝 Adding all files to Git...
git add .

REM Commit
echo 💾 Committing changes...
git commit -m "Rome Countdown - Ready for Render deployment"

echo.
echo ==================================================
echo   NEXT STEPS:
echo ==================================================
echo.
echo 1. Create a GitHub repository:
echo    - Go to https://github.com
echo    - Click "New Repository"
echo    - Name: rome-countdown
echo    - Make it PUBLIC (for free Render tier)
echo    - DO NOT initialize with README
echo.
echo 2. Copy these commands to push your code:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/rome-countdown.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Deploy on Render.com:
echo    - Go to https://render.com
echo    - Connect GitHub
echo    - Create Web Service from your repository
echo    - Use these settings:
echo      * Build Command: go build -o main .
echo      * Start Command: ./main
echo.
echo ✅ Your code is ready for deployment!
echo.
pause
