# Android Lock Screen & Wallpaper Setup Guide

## 🔥 **Mobile-Optimized Countdown Created!**

I've created a special Android version of your Rome countdown that includes:
- **Lock screen optimization** with time display
- **Portrait-oriented layout** perfect for phones
- **Touch-friendly interface** with haptic feedback
- **Offline support** (works without internet)
- **Battery-optimized** animations
- **Progress bar** showing journey to Rome

---

## 📱 **Method 1: Live Wallpaper Apps (Recommended)**

### **Option A: KLWP (Kustom Live Wallpaper)**
**Best for**: Fully customizable live wallpapers
1. **Download KLWP** from Google Play Store
2. **Open KLWP** and create new wallpaper
3. **Add Web Component**:
   - URL: `http://YOUR_PC_IP:8080/mobile`
   - Enable "Auto Refresh"
   - Set refresh interval: 1 second
4. **Apply** as live wallpaper

### **Option B: Video Live Wallpaper**
**Best for**: Simple setup
1. **Download "Video Live Wallpaper"** from Play Store
2. **Screen record** your countdown from browser
3. **Set the video** as live wallpaper
4. **Note**: Won't update in real-time

---

## 📱 **Method 2: Browser-Based Solutions**

### **Option A: Chrome Kiosk Mode**
1. **Open Chrome** on your Android
2. **Navigate to**: `http://YOUR_PC_IP:8080/mobile`
3. **Add to Home Screen**:
   - Menu → Add to Home Screen
   - Name it "Rome Countdown"
4. **Open the app** → runs in fullscreen mode

### **Option B: Firefox Focus**
1. **Install Firefox Focus**
2. **Navigate to**: `http://YOUR_PC_IP:8080/mobile`
3. **Set as homepage**
4. **Use with launcher** that supports web widgets

---

## 📱 **Method 3: Lock Screen Widgets**

### **Using KWGT (Kustom Widget)**
1. **Download KWGT** from Play Store
2. **Create new widget**
3. **Add web component** pointing to your countdown
4. **Place on lock screen** (Android 5.0+)

### **Using Zooper Widget Pro**
1. **Download Zooper Widget**
2. **Create web-based widget**
3. **Point to**: `http://YOUR_PC_IP:8080/mobile`
4. **Configure for lock screen**

---

## 🌐 **Step 1: Find Your PC's IP Address**

First, you need your PC's local IP address:

### **On Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" (usually starts with 192.168.x.x)

### **Example URLs:**
- If your PC IP is `192.168.1.100`:
  - Mobile: `http://192.168.1.100:8080/mobile`
  - Desktop: `http://192.168.1.100:8080/wallpaper`

---

## 📱 **Step 2: Test Mobile Version**

1. **Make sure your Go server is running**
2. **On your phone's browser**, visit: `http://YOUR_PC_IP:8080/mobile`
3. **You should see**:
   - Current time at top
   - "Rome Awaits" title
   - 4-box countdown grid
   - Progress bar at bottom
   - Optimized for portrait mode

---

## 🎨 **Mobile Version Features**

### **Lock Screen Optimized:**
- **Current time display** at top
- **Date display** below time
- **Large, readable countdown** in center
- **Progress bar** showing journey progress
- **Touch feedback** with vibration

### **Battery Optimized:**
- **Efficient animations** (low CPU usage)
- **Wake lock** to prevent sleep during viewing
- **Offline mode** (works without PC connection)
- **Service worker** for caching

### **Responsive Design:**
- **Portrait orientation** primary
- **Landscape support** included
- **Multiple screen sizes** supported
- **Touch-friendly** interface

---

## 🔧 **Advanced Setup: PWA (Progressive Web App)**

### **Create Installable App:**
1. **Visit** `http://YOUR_PC_IP:8080/mobile` in Chrome
2. **Menu → Add to Home Screen**
3. **Install** when prompted
4. **Runs like native app** with full-screen mode

### **Offline Support:**
- **Service Worker** included for offline functionality
- **Caches countdown** for when PC is off
- **Local time calculation** as backup

---

## 🎯 **Quick Start Guide**

### **Immediate Setup (5 minutes):**
1. **Get your PC IP**: Run `ipconfig` in terminal
2. **Test mobile version**: Visit `http://YOUR_PC_IP:8080/mobile` on phone
3. **Add to home screen**: Chrome menu → "Add to Home Screen"
4. **Set as wallpaper**: Use any live wallpaper app with web support

### **Advanced Setup (15 minutes):**
1. **Download KLWP** from Play Store
2. **Create web wallpaper** with your mobile URL
3. **Configure auto-refresh** every 1 second
4. **Apply as live wallpaper**
5. **Enjoy real-time countdown** on your home/lock screen!

---

## 📱 **Recommended Apps for Android**

| App | Purpose | Cost | Rating |
|-----|---------|------|--------|
| **KLWP** | Live Wallpapers | Free/$3 Pro | ⭐⭐⭐⭐⭐ |
| **KWGT** | Lock Screen Widgets | Free/$3 Pro | ⭐⭐⭐⭐⭐ |
| **Wallpaper Engine Mobile** | Live Wallpapers | $3 | ⭐⭐⭐⭐ |
| **Video Live Wallpaper** | Simple Setup | Free | ⭐⭐⭐ |

---

## 🔍 **Troubleshooting**

### **Can't Connect from Phone:**
- **Check WiFi**: Both devices on same network
- **Check Firewall**: Allow port 8080 on PC
- **Try different URL**: Use `127.0.0.1` instead of `localhost`

### **Countdown Not Updating:**
- **Check server**: PC server still running?
- **Check cache**: Clear browser cache on phone
- **Offline mode**: Mobile version works without PC too

### **Lock Screen Not Working:**
- **Check permissions**: Allow lock screen widgets
- **Try different app**: Some launchers block lock screen widgets
- **Alternative**: Use as home screen wallpaper instead

---

Your Rome countdown is now mobile-ready! 🏛️📱✨
