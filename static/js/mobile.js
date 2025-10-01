class MobileCountdownTimer {
    constructor() {
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        this.clockElement = document.getElementById('clock');
        this.dateElement = document.getElementById('date');
        this.progressElement = document.getElementById('progress');
        this.progressTextElement = document.getElementById('progress-text');
        
        this.targetDate = new Date(2025, 9, 16, 6, 0, 0); // October 16, 2025 at 6:00 AM
        this.startDate = new Date(2025, 0, 1); // January 1, 2025
        
        this.init();
    }
    
    init() {
        // Update immediately
        this.updateAll();
        
        // Update every second
        setInterval(() => {
            this.updateAll();
        }, 1000);
        
        // Update clock every second
        this.updateClock();
        setInterval(() => {
            this.updateClock();
        }, 1000);
        
        // Prevent sleep mode
        this.preventSleep();
    }
    
    async updateAll() {
        try {
            // Try to get data from server first
            const response = await fetch('/api/countdown');
            const data = await response.json();
            
            this.animateUpdate(this.daysElement, data.days);
            this.animateUpdate(this.hoursElement, data.hours);
            this.animateUpdate(this.minutesElement, data.minutes);
            this.animateUpdate(this.secondsElement, data.seconds);
            
            this.updateProgress();
            
            // Check if countdown has ended
            if (data.days === 0 && data.hours === 0 && data.minutes === 0 && data.seconds === 0) {
                this.showEventReached();
            }
            
        } catch (error) {
            // Fallback to client-side calculation if server unavailable
            console.log('Using offline mode');
            this.updateCountdownOffline();
        }
    }
    
    updateCountdownOffline() {
        const now = new Date();
        const remaining = this.targetDate - now;
        
        if (remaining <= 0) {
            this.showEventReached();
            return;
        }
        
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        
        this.animateUpdate(this.daysElement, days);
        this.animateUpdate(this.hoursElement, hours);
        this.animateUpdate(this.minutesElement, minutes);
        this.animateUpdate(this.secondsElement, seconds);
        
        this.updateProgress();
    }
    
    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        });
        
        this.clockElement.textContent = timeString;
        this.dateElement.textContent = dateString;
    }
    
    updateProgress() {
        const now = new Date();
        const totalTime = this.targetDate - this.startDate;
        const elapsed = now - this.startDate;
        const progress = Math.min(Math.max((elapsed / totalTime) * 100, 0), 100);
        
        this.progressElement.style.width = progress + '%';
        
        const remaining = this.targetDate - now;
        const totalDays = Math.ceil(remaining / (1000 * 60 * 60 * 24));
        
        if (remaining > 0) {
            this.progressTextElement.textContent = `${totalDays} days until Rome`;
        } else {
            this.progressTextElement.textContent = 'Welcome to Rome!';
        }
    }
    
    animateUpdate(element, value) {
        const currentValue = parseInt(element.textContent) || 0;
        const newValue = value;
        
        if (currentValue !== newValue) {
            element.classList.add('updating');
            
            setTimeout(() => {
                element.textContent = this.formatTime(newValue);
                element.classList.remove('updating');
            }, 150);
        }
    }
    
    formatTime(value) {
        return value.toString().padStart(2, '0');
    }
    
    showEventReached() {
        document.querySelector('.main-content').innerHTML = `
            <div class="celebration">
                <h1 class="title">🎉 Roma! 🎉</h1>
                <p class="subtitle">Benvenuti nella Città Eterna!</p>
                <div class="celebration-text">
                    <p>Welcome to Rome!</p>
                    <p>Your journey begins now!</p>
                </div>
            </div>
        `;
        
        // Add celebration styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes celebrate {
                0%, 100% { transform: scale(1) rotate(0deg); }
                25% { transform: scale(1.05) rotate(1deg); }
                75% { transform: scale(1.05) rotate(-1deg); }
            }
            .celebration {
                animation: celebrate 2s ease-in-out infinite;
            }
            .celebration-text p {
                font-size: 1.2rem;
                color: #ffd700;
                margin: 0.5rem 0;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
    }
    
    preventSleep() {
        // Keep screen awake on mobile devices
        let wakeLock = null;
        
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(lock => {
                wakeLock = lock;
                console.log('Screen wake lock active');
            }).catch(err => {
                console.log('Wake lock failed:', err);
            });
        }
        
        // Fallback: periodic activity
        setInterval(() => {
            // Tiny invisible movement to prevent sleep
            document.body.style.transform = 'translateZ(0)';
            setTimeout(() => {
                document.body.style.transform = '';
            }, 1);
        }, 30000); // Every 30 seconds
    }
}

// Touch interactions for mobile
document.addEventListener('touchstart', function(e) {
    // Add haptic feedback if available
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Prevent context menu and zooming
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MobileCountdownTimer();
    
    // Hide address bar on mobile
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 100);
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 100);
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/static/js/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
