class CountdownTimer {
    constructor() {
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        
        this.init();
    }
    
    init() {
        // Update immediately
        this.updateCountdown();
        
        // Update every second
        setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }
    
    async updateCountdown() {
        try {
            const response = await fetch('/api/countdown');
            const data = await response.json();
            
            this.animateUpdate(this.daysElement, data.days);
            this.animateUpdate(this.hoursElement, data.hours);
            this.animateUpdate(this.minutesElement, data.minutes);
            this.animateUpdate(this.secondsElement, data.seconds);
            
            // Check if countdown has ended
            if (data.days === 0 && data.hours === 0 && data.minutes === 0 && data.seconds === 0) {
                this.showEventReached();
            }
            
        } catch (error) {
            console.error('Error fetching countdown data:', error);
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
        // Replace countdown with celebration message
        const countdownContainer = document.querySelector('.countdown-container');
        const eventDate = document.querySelector('.event-date');
        
        countdownContainer.innerHTML = `
            <div class="celebration">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: #ffd700; margin: 2rem 0;">
                    🎉 Welcome to Rome! 🎉
                </h2>
                <p style="font-size: 1.5rem; color: #e6d7c3;">
                    The eternal city awaits your arrival!
                </p>
            </div>
        `;
        
        eventDate.style.display = 'none';
        
        // Add celebration animation
        document.body.style.animation = 'celebration 2s ease-in-out infinite alternate';
        
        // Add celebration style
        const style = document.createElement('style');
        style.textContent = `
            @keyframes celebration {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(30deg); }
            }
            .celebration {
                animation: bounce 1s ease-in-out infinite alternate;
            }
            @keyframes bounce {
                0% { transform: translateY(0); }
                100% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Error handling for network issues
function handleNetworkError() {
    const timeValues = document.querySelectorAll('.time-value');
    timeValues.forEach(element => {
        element.textContent = '--';
    });
    
    console.warn('Network error - countdown updates paused');
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CountdownTimer();
    
    // Add smooth loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard shortcuts for fun
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        // Force refresh countdown
        new CountdownTimer().updateCountdown();
    }
});

// Add visual feedback for interactions
document.querySelectorAll('.time-block').forEach(block => {
    block.addEventListener('click', () => {
        block.style.transform = 'scale(0.95)';
        setTimeout(() => {
            block.style.transform = '';
        }, 150);
    });
});
