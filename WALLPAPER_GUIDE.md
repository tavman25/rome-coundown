# Converting Countdown to Rome to a Live Wallpaper

This guide shows you how to turn your countdown timer into a live Windows wallpaper using several different methods.

## Method 1: Wallpaper Engine (Recommended - Best Quality)

**Wallpaper Engine** is the gold standard for interactive wallpapers on Windows.

### Steps:
1. **Purchase Wallpaper Engine** from Steam (~$4 USD)
2. **Install Wallpaper Engine**
3. **Keep your Go server running** (`go run main.go`)
4. **Create a Web wallpaper** in Wallpaper Engine:
   - Open Wallpaper Engine
   - Click "Create Wallpaper"
   - Select "Web" type
   - Enter URL: `http://localhost:8080/wallpaper`
   - Configure settings (resolution, performance, etc.)
   - Save and apply

### Wallpaper-Optimized Version:
- Access: `http://localhost:8080/wallpaper`
- Features corner-positioned elements
- Optimized for desktop background use
- Minimal overlay that won't interfere with desktop icons

---

## Method 2: Lively Wallpaper (Free Alternative)

**Lively Wallpaper** is a free, open-source alternative to Wallpaper Engine.

### Steps:
1. **Download Lively Wallpaper** from Microsoft Store or GitHub
2. **Install Lively Wallpaper**
3. **Keep your Go server running**
4. **Add Web wallpaper**:
   - Open Lively Wallpaper
   - Click "+" to add wallpaper
   - Select "Web Address"
   - Enter: `http://localhost:8080/wallpaper`
   - Apply to desktop

---

## Method 3: Browser in Kiosk Mode (Simple Solution)

Use a web browser in fullscreen/kiosk mode.

### Steps:
1. **Keep your Go server running**
2. **Open Chrome/Edge** and navigate to `http://localhost:8080/wallpaper`
3. **Press F11** for fullscreen mode
4. **Optional**: Use Chrome in kiosk mode:
   ```bash
   chrome.exe --kiosk --app=http://localhost:8080/wallpaper
   ```

---

## Method 4: Desktop Web App

Create a standalone desktop application.

### Using Chrome/Edge:
1. **Navigate to** `http://localhost:8080/wallpaper`
2. **Install as PWA**:
   - Chrome: Menu → More Tools → Create Shortcut → Check "Open as window"
   - Edge: Menu → Apps → Install this site as an app
3. **Pin to desktop** and run in borderless window mode

---

## Auto-Start Your Server

To make your countdown always available, set up auto-start:

### Option A: Windows Startup (Simple)
1. **Create a batch file** `start-countdown.bat`:
   ```batch
   @echo off
   cd /d "C:\Users\Bill\Documents\Dev2025\RomeCountdown"
   go run main.go
   ```
2. **Copy to Windows Startup folder**:
   - Press `Win + R`, type `shell:startup`
   - Copy the batch file there

### Option B: Windows Service (Advanced)
1. **Install NSSM** (Non-Sucking Service Manager)
2. **Create service**:
   ```bash
   nssm install CountdownToRome
   # Set path to go.exe and arguments
   ```

### Option C: Task Scheduler
1. **Open Task Scheduler**
2. **Create Basic Task**:
   - Trigger: At startup
   - Action: Start program
   - Program: Your batch file or Go executable

---

## Compilation for Better Performance

For better performance, compile your Go app:

```bash
# Navigate to your project directory
cd "C:\Users\Bill\Documents\Dev2025\RomeCountdown"

# Build executable
go build -o countdown-rome.exe main.go

# Run the executable instead
./countdown-rome.exe
```

---

## URLs for Different Versions

- **Full Page**: `http://localhost:8080/`
- **Wallpaper Optimized**: `http://localhost:8080/wallpaper`
- **API Data**: `http://localhost:8080/api/countdown`

---

## Troubleshooting

### Server Not Starting
- Check if port 8080 is available
- Run `netstat -an | findstr :8080` to check port usage
- Change port in `main.go` if needed

### Wallpaper Not Updating
- Ensure Go server is running
- Check if wallpaper software allows localhost connections
- Try using `127.0.0.1:8080` instead of `localhost:8080`

### Performance Issues
- Use compiled executable instead of `go run`
- Lower update frequency in JavaScript if needed
- Close unnecessary browser tabs/applications

---

## Recommended Setup

1. **Use Wallpaper Engine** for the best experience
2. **Compile your Go app** for better performance
3. **Set up auto-start** using Windows Startup folder
4. **Use the wallpaper-optimized version** at `/wallpaper`

This gives you a professional, always-running countdown to Rome as your desktop wallpaper!
