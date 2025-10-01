package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"time"
)

type CountdownData struct {
	Days    int64 `json:"days"`
	Hours   int64 `json:"hours"`
	Minutes int64 `json:"minutes"`
	Seconds int64 `json:"seconds"`
}

func main() {
	// Serve static files
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	// Health check endpoint
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK - Rome Countdown is running!"))
	})

	// Main page handler
	http.HandleFunc("/", homeHandler)
	
	// Wallpaper version handler
	http.HandleFunc("/wallpaper", wallpaperHandler)
	
	// Corner widget handler
	http.HandleFunc("/corner", cornerHandler)
	
	// Mobile/Android handler
	http.HandleFunc("/mobile", mobileHandler)
	
	// Standalone version handler
	http.HandleFunc("/standalone", standaloneHandler)
	
	// API endpoint for countdown data
	http.HandleFunc("/api/countdown", countdownAPI)

	fmt.Println("Server starting on http://localhost:8080")
	
	// Get port from environment variable (for cloud deployment)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	
	fmt.Printf("Server starting on port %s\n", port)
	fmt.Println("Available routes:")
	fmt.Println("  GET /")
	fmt.Println("  GET /health")
	fmt.Println("  GET /wallpaper") 
	fmt.Println("  GET /mobile")
	fmt.Println("  GET /standalone")
	fmt.Println("  GET /corner")
	fmt.Println("  GET /api/countdown")
	
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Home handler called for path: %s", r.URL.Path)
	tmpl := template.Must(template.ParseFiles("templates/index.html"))
	err := tmpl.Execute(w, nil)
	if err != nil {
		log.Printf("Template error: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func wallpaperHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/wallpaper.html"))
	err := tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func cornerHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/corner.html"))
	err := tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func mobileHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/mobile.html"))
	err := tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func standaloneHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "standalone-rome-countdown.html")
}

func countdownAPI(w http.ResponseWriter, r *http.Request) {
	// Target date: October 16, 2025 at 6:00 AM
	targetDate := time.Date(2025, 10, 16, 6, 0, 0, 0, time.UTC)
	now := time.Now().UTC()
	
	// Calculate remaining time
	remaining := targetDate.Sub(now)
	
	if remaining <= 0 {
		// Event has passed
		data := CountdownData{0, 0, 0, 0}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(data)
		return
	}
	
	// Calculate days, hours, minutes, seconds
	days := int64(remaining.Hours()) / 24
	hours := int64(remaining.Hours()) % 24
	minutes := int64(remaining.Minutes()) % 60
	seconds := int64(remaining.Seconds()) % 60
	
	data := CountdownData{
		Days:    days,
		Hours:   hours,
		Minutes: minutes,
		Seconds: seconds,
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
