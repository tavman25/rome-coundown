# Deploy Countdown to Rome on Render.com

## 📋 **Prerequisites**
- ✅ Your Go project (you have this!)
- ✅ GitHub account
- ✅ Render.com account (free)

---

## 🚀 **Step-by-Step Deployment**

### **Step 1: Push to GitHub**
1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rome Countdown"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name: `rome-countdown`
   - Make it **Public** (for free Render tier)
   - Click "Create Repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rome-countdown.git
   git branch -M main
   git push -u origin main
   ```

### **Step 2: Deploy on Render**
1. **Go to** [render.com](https://render.com)
2. **Sign Up/Login** (free account)
3. **Connect GitHub**: 
   - Click "Connect GitHub"
   - Authorize Render to access your repositories

4. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Select your `rome-countdown` repository
   - Click "Connect"

### **Step 3: Configure Deployment**
Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `rome-countdown` |
| **Environment** | `Go` |
| **Region** | `Oregon (US West)` or closest to you |
| **Branch** | `main` |
| **Build Command** | `go build -o main .` |
| **Start Command** | `./main` |

### **Step 4: Environment Variables**
- **PORT**: `10000` (Render sets this automatically)
- No other variables needed!

### **Step 5: Deploy**
1. **Click "Create Web Service"**
2. **Wait for build** (2-3 minutes first time)
3. **Get your URL**: `https://rome-countdown-XXXX.onrender.com`

---

## 🌐 **Your Live URLs**

Once deployed, you'll have:
- **Desktop**: `https://your-app.onrender.com/`
- **Wallpaper**: `https://your-app.onrender.com/wallpaper`
- **Mobile**: `https://your-app.onrender.com/mobile`
- **Standalone**: `https://your-app.onrender.com/standalone`
- **Corner**: `https://your-app.onrender.com/corner`
- **API**: `https://your-app.onrender.com/api/countdown`

---

## 🔧 **Quick Commands for GitHub Setup**

### **Option A: Using Git Bash/Terminal**
```bash
# Navigate to your project
cd "C:\Users\Bill\Documents\Dev2025\RomeCountdown"

# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Rome Countdown - Initial deployment"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rome-countdown.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Option B: Using GitHub Desktop**
1. **Download GitHub Desktop** 
2. **Add Local Repository** → Browse to your folder
3. **Publish Repository** → Make it public
4. **Commit and Push**

---

## 🎯 **Render.com Settings Summary**

**When creating the web service, use exactly these settings:**

```
Repository: YOUR_USERNAME/rome-countdown
Name: rome-countdown
Environment: Go
Build Command: go build -o main .
Start Command: ./main
```

**Leave everything else as default!**

---

## 🔍 **Troubleshooting**

### **Build Fails?**
- Check that `go.mod` is in the root directory
- Ensure all your files are committed to GitHub
- Verify the build command: `go build -o main .`

### **App Doesn't Start?**
- Check start command: `./main`
- Look at Render logs for error messages
- Ensure PORT environment variable support (already added)

### **Static Files Not Loading?**
- Ensure `static/` and `templates/` folders are in GitHub
- Check file paths in your code
- Verify all files are committed

---

## 💡 **Pro Tips**

### **Free Tier Limitations:**
- ✅ **Always free** for public repositories
- ⏰ **Sleeps after 15 min** of inactivity (wakes on first request)
- 🔄 **Auto-deploys** on GitHub push
- 📊 **500 hours/month** free usage

### **Keep It Awake:**
- Use a service like **UptimeRobot** to ping your URL every 14 minutes
- Or upgrade to paid plan ($7/month) for always-on

### **Custom Domain:**
- Free custom domain support on paid plans
- Can use `romecountdown.yourname.com`

---

## 📱 **Mobile Usage After Deploy**

Once live on Render:
1. **Visit**: `https://your-app.onrender.com/mobile`
2. **Add to Home Screen** on your phone
3. **Works anywhere** in the world!
4. **Share the URL** with friends/family

---

## 🎉 **You're Done!**

After following these steps, your Rome countdown will be:
- ✅ **Live on the internet**
- ✅ **Accessible from anywhere**
- ✅ **No home network dependency**
- ✅ **Free hosting**
- ✅ **Auto-updates** when you push to GitHub

Your countdown to October 16th, 2025 at 6:00 AM is now globally accessible! 🏛️🌍✨
