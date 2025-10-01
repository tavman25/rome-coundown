# How to Set Up Countdown to Rome in Wallpaper Engine

## Step-by-Step Guide

### 🛒 **Step 1: Get Wallpaper Engine**
1. **Open Steam** on your computer
2. **Search for "Wallpaper Engine"** in the Steam Store
3. **Purchase and install** Wallpaper Engine (~$4 USD)
4. **Launch Wallpaper Engine** after installation

### 🚀 **Step 2: Start Your Countdown Server**
1. **Keep your Go server running** (it should be running now)
2. **Verify it works** by opening: http://localhost:8080/wallpaper
3. **If not running**, open terminal and run: `go run main.go`

### 🎨 **Step 3: Create Web Wallpaper in Wallpaper Engine**

#### Method A: Using URL Import (Most Common)
1. **Open Wallpaper Engine**
2. **Click "Browse Wallpapers"** (main interface)
3. **Look for "Open from URL"** button (usually top-right or in menu)
4. **OR try right-clicking** in the wallpaper browser area
5. **Enter URL**: `http://localhost:8080/wallpaper`
6. **Click "Subscribe" or "Apply"**

#### Method B: If No URL Option - Use File Method
1. **Open Wallpaper Engine**
2. **Click "Create Wallpaper"**
3. **Look for these options** (may vary by version):
   - **"Application"** - Choose this if available
   - **"Web"** - If this appears, use it
   - **"Scene"** - This might work too
4. **If none work**, try **Method C** below

#### Method C: Alternative - HTML File Method
1. **Create a local HTML file** that redirects to your server:
   - Save this as `countdown.html` in a folder
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta http-equiv="refresh" content="0; URL=http://localhost:8080/wallpaper">
   </head>
   <body>
       <script>window.location.href="http://localhost:8080/wallpaper";</script>
   </body>
   </html>
   ```
2. **In Wallpaper Engine**, create wallpaper and select this HTML file

#### Method D: Use Wallpaper Engine Editor
1. **Open Wallpaper Engine**
2. **Click "Wallpaper Editor"** (if available)
3. **Create New Project**
4. **Add Web Layer** or **Browser Component**
5. **Set URL**: `http://localhost:8080/wallpaper`

### ⚙️ **Step 4: Recommended Settings**

In Wallpaper Engine settings for your countdown:

**Performance Settings:**
- **Quality**: High
- **FPS**: 30
- **Pause when fullscreen**: Off (so countdown keeps running)
- **Pause when maximized**: Off

**Display Settings:**
- **Fit to screen**: Stretch or Fill
- **Monitor**: Select your primary monitor

**Audio Settings:**
- **Mute audio**: On (unless you add audio later)

### 🔧 **Step 5: Auto-Start Your Server**

To make sure your countdown is always available when Windows starts:

#### Option A: Simple Startup Script
1. **Create a new file** called `start-countdown.bat`:
   ```batch
   @echo off
   cd /d "C:\Users\Bill\Documents\Dev2025\RomeCountdown"
   go run main.go
   ```

2. **Save it** in your RomeCountdown folder

3. **Add to Windows Startup**:
   - Press `Win + R`
   - Type: `shell:startup`
   - Press Enter
   - **Copy your .bat file** to this folder

#### Option B: Compiled Version (Better Performance)
1. **Compile your Go app**:
   ```bash
   go build -o countdown-rome.exe main.go
   ```

2. **Create startup script** that runs the .exe instead:
   ```batch
   @echo off
   cd /d "C:\Users\Bill\Documents\Dev2025\RomeCountdown"
   countdown-rome.exe
   ```

### 🌐 **Available URLs for Wallpaper Engine**

Choose the version that works best for you:

- **Centered (Recommended)**: `http://localhost:8080/wallpaper`
- **Corner Widget**: `http://localhost:8080/corner`
- **Full Page**: `http://localhost:8080/`

### 🔍 **Troubleshooting - No Web Option**

#### **Different Wallpaper Engine Versions:**
- **Newer versions**: Look for "Open from URL" in browser
- **Older versions**: May have "Web" in create menu
- **Some versions**: Web feature might be disabled

#### **What to Look For:**
1. **In Browse Wallpapers**:
   - "Open from URL" button
   - "Add from URL" option
   - Right-click menu with URL option

2. **In Create Wallpaper**:
   - "Web" type
   - "Application" type
   - "HTML" type

#### **If Nothing Works - Use This Method:**
1. **Use the HTML redirect file** I created: `wallpaper-redirect.html`
2. **In Wallpaper Engine**:
   - Click "Create Wallpaper"
   - Select "Scene" or "Application"
   - Browse to your `wallpaper-redirect.html` file
   - This will redirect to your live countdown

#### **Alternative Software (Free):**
If Wallpaper Engine doesn't support web wallpapers:

**Lively Wallpaper (Free):**
1. Download from Microsoft Store
2. Install and open
3. Click "+" → "Web Address"
4. Enter: `http://localhost:8080/wallpaper`
5. Apply to desktop

**Upscayl (Alternative):**
1. Take a screenshot of your countdown
2. Use as static wallpaper (updates when you refresh)

### 🔍 **Troubleshooting**

#### If Wallpaper Engine shows "Cannot connect":
1. **Check if server is running**: Open http://localhost:8080 in browser
2. **Try different URL**: Use `http://127.0.0.1:8080/wallpaper`
3. **Check Windows Firewall**: Allow Go through firewall if prompted
4. **Restart Wallpaper Engine**: Close and reopen the application

#### If countdown doesn't update:
1. **Check JavaScript console**: Right-click wallpaper → Inspect
2. **Verify API works**: Visit http://localhost:8080/api/countdown
3. **Restart both**: Stop Go server, restart, then refresh wallpaper

#### If wallpaper looks wrong:
1. **Try different resolution**: Match your screen exactly
2. **Adjust scaling**: In Wallpaper Engine display settings
3. **Clear browser cache**: In Wallpaper Engine web settings

### 🎯 **Pro Tips**

1. **Use the compiled version** for better performance
2. **Set FPS to 30** (countdown only updates every second)
3. **Enable "Keep running when unfocused"** in Wallpaper Engine
4. **Create a desktop shortcut** to quickly restart your server
5. **Pin Wallpaper Engine to taskbar** for easy access

### 📱 **Alternative: Lively Wallpaper (Free Option)**

If you don't want to buy Wallpaper Engine:

1. **Download Lively Wallpaper** from Microsoft Store
2. **Install and open** Lively Wallpaper
3. **Click "+" to add wallpaper**
4. **Select "Web Address"**
5. **Enter**: `http://localhost:8080/wallpaper`
6. **Apply to desktop**

---

Your elegant "Countdown to Rome" will now be live on your desktop, updating every second as you approach October 16th! 🏛️✨
