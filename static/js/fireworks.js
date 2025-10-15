class FireworksManager {
    constructor() {
        this.container = null;
        this.isActive = false;
        this.autoInterval = null;
        this.colors = [
            'firework-gold',
            'firework-red', 
            'firework-blue',
            'firework-purple',
            'firework-green',
            'firework-rainbow',
            'firework-roman'
        ];
        this.init();
    }

    init() {
        // Create fireworks container
        console.log('Creating fireworks container...');
        this.container = document.createElement('div');
        this.container.className = 'fireworks-container';
        document.body.appendChild(this.container);
        console.log('Fireworks container added to body');
        
        // Start ambient sparkles
        this.createAmbientSparkles();
        
        // Auto-trigger fireworks periodically
        this.startAutoFireworks();
        
        // Trigger fireworks on special events
        this.setupEventTriggers();
    }

    createFirework(x, y, colorClass = null) {
        console.log('Creating firework at:', x, y, 'with class:', colorClass);
        const firework = document.createElement('div');
        firework.className = `firework ${colorClass || this.getRandomColor()}`;
        
        // Random size between 60-120px
        const size = Math.random() * 60 + 60;
        firework.style.width = size + 'px';
        firework.style.height = size + 'px';
        
        // Position
        firework.style.left = (x || Math.random() * window.innerWidth) + 'px';
        firework.style.top = (y || Math.random() * window.innerHeight * 0.6) + 'px';
        
        console.log('Firework positioned at:', firework.style.left, firework.style.top);
        this.container.appendChild(firework);
        console.log('Firework added to container');
        
        // Create additional particles
        this.createParticles(firework);
        
        // Remove after animation
        setTimeout(() => {
            if (firework.parentNode) {
                firework.parentNode.removeChild(firework);
            }
        }, 2500);
    }

    createParticles(firework) {
        const particleCount = Math.random() * 8 + 6;
        const rect = firework.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'sparkle';
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                
                // Random direction and distance
                const angle = (Math.PI * 2 * i) / particleCount;
                const distance = Math.random() * 100 + 50;
                const endX = centerX + Math.cos(angle) * distance;
                const endY = centerY + Math.sin(angle) * distance;
                
                document.body.appendChild(particle);
                
                // Animate particle
                particle.animate([
                    { transform: `translate(0, 0)`, opacity: 1 },
                    { transform: `translate(${endX - centerX}px, ${endY - centerY}px)`, opacity: 0 }
                ], {
                    duration: 1500,
                    easing: 'ease-out'
                });
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1500);
            }, Math.random() * 300);
        }
    }

    createAmbientSparkles() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                const sparkle = document.createElement('div');
                sparkle.className = 'ambient-sparkle';
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                sparkle.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 3000);
            }
        }, 2000);
    }

    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    burst(count = 3) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.createFirework();
            }, i * 200);
        }
    }

    celebration() {
        // Big celebration with many fireworks
        document.body.classList.add('celebration-active');
        
        const celebrationCount = 15;
        for (let i = 0; i < celebrationCount; i++) {
            setTimeout(() => {
                this.createFirework(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight * 0.7,
                    i % 3 === 0 ? 'firework-roman' : null
                );
            }, i * 150);
        }
        
        setTimeout(() => {
            document.body.classList.remove('celebration-active');
        }, 4000);
    }

    startAutoFireworks() {
        // Immediate firework on start
        setTimeout(() => {
            this.burst(3);
        }, 500);
        
        // More frequent fireworks every 3-6 seconds
        this.autoInterval = setInterval(() => {
            const count = Math.random() < 0.5 ? 2 : 1; // More frequent double bursts
            this.burst(count);
        }, Math.random() * 3000 + 3000); // 3-6 seconds instead of 8-15
    }

    stopAutoFireworks() {
        if (this.autoInterval) {
            clearInterval(this.autoInterval);
            this.autoInterval = null;
        }
    }

    setupEventTriggers() {
        // Trigger fireworks on countdown changes
        let lastDays = null;
        setInterval(() => {
            const daysElement = document.getElementById('days');
            if (daysElement) {
                const currentDays = parseInt(daysElement.textContent);
                if (lastDays !== null && currentDays < lastDays) {
                    // Day changed! Celebration
                    this.burst(2);
                }
                lastDays = currentDays;
            }
        }, 1000);

        // Trigger on page interactions
        document.addEventListener('click', (e) => {
            // Always trigger fireworks on click for testing
            this.createFirework(e.clientX, e.clientY);
            console.log('Click firework triggered at:', e.clientX, e.clientY);
        });

        // Special triggers for milestone moments
        this.checkMilestones();
    }

    checkMilestones() {
        setInterval(() => {
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            
            if (daysElement && hoursElement && minutesElement) {
                const days = parseInt(daysElement.textContent);
                const hours = parseInt(hoursElement.textContent);
                const minutes = parseInt(minutesElement.textContent);
                
                // Special celebrations for milestones
                if (days === 0 && hours === 0 && minutes === 0) {
                    // IT'S TIME! MASSIVE CELEBRATION
                    this.celebration();
                } else if (days === 1 && hours === 0 && minutes === 0) {
                    // 1 day left!
                    this.burst(5);
                } else if (days === 0 && hours === 1 && minutes === 0) {
                    // 1 hour left!
                    this.burst(3);
                }
            }
        }, 60000); // Check every minute
    }

    // Manual trigger methods
    romanCelebration() {
        // Special Roman-themed celebration
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.createFirework(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight * 0.6,
                    'firework-roman'
                );
            }, i * 100);
        }
    }

    rainbowBurst() {
        // Rainbow-colored fireworks
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                this.createFirework(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight * 0.6,
                    'firework-rainbow'
                );
            }, i * 200);
        }
    }
}

// Initialize fireworks when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing fireworks...');
    window.fireworks = new FireworksManager();
    
    // Immediate celebration when page loads
    setTimeout(() => {
        console.log('Triggering initial fireworks...');
        window.fireworks.burst(4);
    }, 1000);
    
    // Extra frequent fireworks for testing
    setTimeout(() => {
        window.fireworks.romanCelebration();
    }, 3000);
});

// Export for manual triggering
window.triggerFireworks = () => window.fireworks?.burst(3);
window.celebrateRome = () => window.fireworks?.romanCelebration();
window.rainbowCelebration = () => window.fireworks?.rainbowBurst();
