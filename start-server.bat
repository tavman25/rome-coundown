@echo off
echo Starting Countdown to Rome Server...
cd /d "C:\Users\Bill\Documents\Dev2025\RomeCountdown"
echo Server will start at http://localhost:8080
echo.
echo Available URLs:
echo - Full Page: http://localhost:8080/
echo - Wallpaper: http://localhost:8080/wallpaper  ^<-- Use this for Wallpaper Engine
echo - Corner:    http://localhost:8080/corner
echo.
echo Press Ctrl+C to stop the server
echo.
go run main.go
pause
