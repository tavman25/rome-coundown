# Countdown to Rome

A sophisticated countdown timer web application built with Go, featuring an elegant design counting down to October 16, 2025 at 6:00 AM.

## Features

- **Real-time countdown** with days, hours, minutes, and seconds
- **Elegant Roman-inspired design** with gold and brown color scheme
- **Responsive layout** that works on desktop and mobile devices
- **Live updates** every second via REST API
- **Celebration animation** when the countdown reaches zero
- **Smooth animations** and hover effects

## Project Structure

```
rome-countdown/
├── main.go                 # Go web server and API
├── templates/
│   └── index.html         # HTML template
├── static/
│   ├── css/
│   │   └── style.css      # Elegant styling
│   └── js/
│       └── countdown.js   # Real-time countdown logic
├── go.mod                 # Go module file
└── README.md             # This file
```

## Running the Application

### **Local Development**
1. **Ensure Go is installed** on your system (Go 1.16 or later)

2. **Navigate to the project directory:**
   ```bash
   cd rome-countdown
   ```

3. **Run the application:**
   ```bash
   go run main.go
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

### **Cloud Deployment (Render.com)**
1. **Push to GitHub** (public repository)
2. **Connect to Render.com**
3. **Deploy with these settings**:
   - Build Command: `go build -o main .`
   - Start Command: `./main`
   - Environment: Go

See `RENDER_DEPLOYMENT_GUIDE.md` for detailed instructions.

## API Endpoints

- `GET /` - Main countdown page
- `GET /wallpaper` - Desktop wallpaper optimized version
- `GET /mobile` - Mobile/Android optimized version  
- `GET /standalone` - Self-contained version (works offline)
- `GET /corner` - Corner widget version
- `GET /api/countdown` - JSON API returning countdown data
- `GET /static/*` - Static assets (CSS, JS)

## Available Versions

| Version | URL | Best For |
|---------|-----|----------|
| **Full Page** | `/` | Browser viewing, presentations |
| **Desktop Wallpaper** | `/wallpaper` | Wallpaper Engine, desktop backgrounds |
| **Mobile** | `/mobile` | Phones, tablets, mobile browsers |
| **Standalone** | `/standalone` | Offline use, no server needed |
| **Corner Widget** | `/corner` | Desktop corner display |

## Design Features

- **Typography**: Playfair Display for headings, Crimson Text for body
- **Color Scheme**: Roman-inspired golds, browns, and warm tones
- **Layout**: Centered design with backdrop blur effects
- **Animations**: Smooth transitions and pulse effects
- **Responsive**: Optimized for various screen sizes

## Target Date

**October 16, 2025 at 6:00 AM UTC**

## Development

The application uses:
- Go's built-in `net/http` package for web serving
- HTML templates for server-side rendering
- Vanilla JavaScript for client-side updates
- CSS3 for advanced styling and animations

## Browser Support

Modern browsers with support for:
- CSS Grid and Flexbox
- ES6+ JavaScript features
- CSS backdrop-filter
- CSS custom properties
