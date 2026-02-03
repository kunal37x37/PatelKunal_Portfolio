// Professional Aurora Galaxy Portfolio JavaScript - OPTIMIZED

// Detect mobile device
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// FIREWORKS SYSTEM - ULTRA SMOOTH
let clickCount = 0;
let fireworksActive = false;
let clickTimeout;
let fireworksTimeout;
let volume = 0.3;
const CLICKS_NEEDED = 10; // Changed from 10 to 5 for faster activation
const FIREWORKS_DURATION = 90000; // 90 seconds

// Tutorial tracking - SIMPLE SESSION BASED
let tutorialShown = false;

// Performance tracking
let lastClickTime = 0;
const CLICK_DELAY = 100; // 100ms between clicks counts

// DOM Elements cache
let audioElement;
let fireworksContainer;
let tutorialNotification;
let counterNotification;
let activeNotification;
let endedNotification;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Initializing...');

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initialize background effects (deferred for performance)
    setTimeout(() => {
        initEnhancedStarfield();
        initFrequentStarfall();
        initShootingStars();
        initMeteorShower();
        initSpaceDebris();
    }, 100);

    // Initialize cursor system (only on desktop)
    if (!isMobile()) {
        document.body.classList.remove('mobile');
        setTimeout(() => initCursorSystem(), 200);
    } else {
        document.body.classList.add('mobile');
    }

    // Initialize theme
    initTheme();

    // Initialize typing effect
    setTimeout(() => initTypewriterEffect(), 500);

    // Initialize navigation
    initNavigation();

    // Initialize form submission
    initFormSubmission();

    // Initialize scroll animations
    setTimeout(() => initScrollAnimations(), 300);

    // Initialize back to top button
    initBackToTop();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize progress bars
    setTimeout(() => initProgressBars(), 1000);

    // Initialize rotating cube
    setTimeout(() => initRotatingCube(), 500);

    // Initialize hover effects
    setTimeout(() => initHoverEffects(), 700);

    // LOAD PROFILE IMAGE FIRST - HIGH PRIORITY
    setTimeout(() => loadProfileImageWithPriority(), 50);

    // Initialize enhanced fireworks system
    setTimeout(() => initEnhancedFireworksSystem(), 100);

    // Show tutorial notification on page load (after 1.5 seconds)
    setTimeout(() => {
        if (!fireworksActive && !tutorialShown) {
            console.log('🎯 Showing tutorial...');
            showTutorial();
        }
    }, 1500);
});

// PROFILE IMAGE LOADING - ULTRA FAST
function loadProfileImageWithPriority() {
    const profileImage = document.querySelector('.profile-image');
    if (!profileImage) return;

    console.log('📸 Loading profile image with priority...');

    // Your profile image sources - LOCAL FIRST
    const yourImageSources = [
        // LOCAL FILE - HIGHEST PRIORITY
        'assets/profile_image.png',

        // Google Drive alternatives
        'https://drive.google.com/thumbnail?id=1hkWWDzJZy8C501FoFcOufxlaIcYT_Aa9&sz=w800',
        'https://drive.google.com/uc?export=view&id=1hkWWDzJZy8C501FoFcOufxlaIcYT_Aa9',

        // Fallback - placeholder
        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23111"/><text x="50" y="50" font-family="Arial" font-size="14" fill="%23FFD700" text-anchor="middle" dy=".3em">GS</text></svg>'
    ];

    let loaded = false;
    let currentIndex = 0;

    function loadImage(source) {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                if (!loaded) {
                    loaded = true;
                    profileImage.src = source;
                    profileImage.classList.add('loaded');
                    profileImage.style.opacity = '1';
                    profileImage.style.transition = 'opacity 0.3s ease';
                    console.log(`✅ Profile image loaded: ${source}`);
                    resolve();
                }
            };

            img.onerror = () => {
                console.log(`❌ Failed to load: ${source}`);
                reject();
            };

            // Set timeout
            setTimeout(() => {
                if (!img.complete && !loaded) {
                    reject();
                }
            }, 2000);

            img.src = source;
        });
    }

    // Try loading images sequentially
    async function tryLoadImages() {
        for (const source of yourImageSources) {
            if (loaded) break;

            try {
                await loadImage(source);
                break;
            } catch (error) {
                currentIndex++;
                if (currentIndex < yourImageSources.length) {
                    console.log(`Trying next source... (${currentIndex + 1}/${yourImageSources.length})`);
                }
            }
        }

        // If nothing loaded, set default
        if (!loaded) {
            profileImage.src = yourImageSources[yourImageSources.length - 1];
            profileImage.classList.add('loaded');
            profileImage.style.opacity = '1';
        }
    }

    tryLoadImages();
}

// INITIALIZE ENHANCED FIREWORKS SYSTEM - OPTIMIZED
function initEnhancedFireworksSystem() {
    console.log('🎆 Initializing fireworks system...');

    // Cache DOM elements
    audioElement = document.getElementById('fireworksAudio');
    fireworksContainer = document.getElementById('fireworksContainer');
    tutorialNotification = document.getElementById('tutorialNotification');
    counterNotification = document.getElementById('counterNotification');
    activeNotification = document.getElementById('activeNotification');
    endedNotification = document.getElementById('endedNotification');

    // Setup audio element
    if (audioElement) {
        audioElement.loop = true;
        audioElement.volume = volume;
        audioElement.preload = 'auto';
    }

    // Add click counter to the whole document - FAST RESPONSE
    document.addEventListener('click', handleFireworksClick, { passive: true });
    document.addEventListener('touchstart', handleFireworksClick, { passive: true });

    // Initialize sound control button
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.style.cursor = 'pointer';
        soundToggle.style.userSelect = 'none';
        soundToggle.addEventListener('click', toggleSound, { passive: true });
        updateSoundTogglePosition();
        window.addEventListener('resize', updateSoundTogglePosition, { passive: true });
    }

    // Setup tutorial notification buttons - FIXED CLICK HANDLERS
    const startFireworksNowBtn = document.getElementById('startFireworksNow');
    const closeTutorialBtn = document.getElementById('closeTutorial');

    // Setup tutorial buttons with FIXED event handlers
    if (startFireworksNowBtn) {
        startFireworksNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🚀 Start Now clicked - Activating fireworks!');
            clickCount = CLICKS_NEEDED; // INSTANT ACTIVATION
            updateCounter();
            hideNotification(tutorialNotification);
            tutorialShown = true;
            setTimeout(() => activateFireworks(), 100);
        });

        // Add visual feedback
        startFireworksNowBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
        });

        startFireworksNowBtn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });

        startFireworksNowBtn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }

    if (closeTutorialBtn) {
        closeTutorialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✕ Closing tutorial');
            hideNotification(tutorialNotification);
            tutorialShown = true;
            showNotification(counterNotification);
        });

        // Add visual feedback
        closeTutorialBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
        });

        closeTutorialBtn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });

        closeTutorialBtn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }

    // Setup counter notification
    const closeCounterBtn = document.getElementById('closeCounter');
    if (closeCounterBtn) {
        closeCounterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✕ Closing counter');
            hideNotification(counterNotification);
        });

        // Add visual feedback
        closeCounterBtn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
        });

        closeCounterBtn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });

        closeCounterBtn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }

    // Setup active notification controls
    const stopFireworksBtn = document.getElementById('stopFireworksBtn');
    const volumeUpBtn = document.getElementById('volumeUpBtn');
    const volumeDownBtn = document.getElementById('volumeDownBtn');
    const muteBtn = document.getElementById('muteBtn');

    // Setup active notification buttons
    if (stopFireworksBtn) {
        stopFireworksBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            endFireworks();
        });
    }

    if (volumeUpBtn) {
        volumeUpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            volumeUp();
        });
    }

    if (volumeDownBtn) {
        volumeDownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            volumeDown();
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMute();
        });
    }

    // Setup restart button
    const restartFireworksBtn = document.getElementById('restartFireworksBtn');
    if (restartFireworksBtn) {
        restartFireworksBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            restartFireworks();
        });
    }

    // Add firework patterns
    addFireworkPatterns();

    // Initialize notification state
    updateCounter();

    console.log('✅ Fireworks system ready!');
}

// HIDE ALL NOTIFICATIONS
function hideAllNotifications() {
    document.querySelectorAll('.fireworks-notification').forEach(notif => {
        notif.classList.remove('show');
        setTimeout(() => {
            if (!notif.classList.contains('show')) {
                notif.style.display = 'none';
            }
        }, 300);
    });
}

// UPDATE SOUND TOGGLE POSITION
function updateSoundTogglePosition() {
    const soundToggle = document.getElementById('soundToggle');
    const activeNotif = document.getElementById('activeNotification');

    if (soundToggle && activeNotif) {
        const rect = activeNotif.getBoundingClientRect();
        if (activeNotif.classList.contains('show')) {
            soundToggle.style.bottom = `${window.innerHeight - rect.top + 20}px`;
        } else {
            soundToggle.style.bottom = '100px';
        }
    }
}

// SHOW TUTORIAL NOTIFICATION
function showTutorial() {
    if (!fireworksActive && !tutorialShown && tutorialNotification) {
        showNotification(tutorialNotification);
        tutorialShown = true;
    }
}

// SHOW NOTIFICATION - SMOOTH ANIMATION
function showNotification(notification) {
    if (!notification) return;

    // Hide all other notifications first
    document.querySelectorAll('.fireworks-notification').forEach(notif => {
        notif.classList.remove('show');
        notif.style.display = 'none';
    });

    // Show the requested notification with smooth animation
    notification.style.display = 'block';
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    updateSoundTogglePosition();
}

// HIDE NOTIFICATION
function hideNotification(notification) {
    if (!notification) return;
    notification.classList.remove('show');
    setTimeout(() => {
        if (!notification.classList.contains('show')) {
            notification.style.display = 'none';
        }
    }, 300);
    updateSoundTogglePosition();
}

// UPDATE COUNTER DISPLAY - INSTANT UPDATE
function updateCounter() {
    const clickCountElement = document.getElementById('clickCount');
    const progressElement = document.getElementById('clickProgress');

    if (!clickCountElement || !progressElement) return;

    // INSTANT UPDATE - no animation delay
    clickCountElement.textContent = clickCount;
    progressElement.style.width = `${(clickCount / CLICKS_NEEDED) * 100}%`;

    // Show counter notification if we have at least 1 click
    if (clickCount > 0 && !fireworksActive && counterNotification) {
        showNotification(counterNotification);
    }
}

// HANDLE FIREWORKS CLICK - ULTRA RESPONSIVE
function handleFireworksClick(e) {
    if (fireworksActive) return;

    // Prevent double counting on mobile
    const now = Date.now();
    if (now - lastClickTime < CLICK_DELAY) return;
    lastClickTime = now;

    // Don't count clicks on interactive elements
    if (e.target.closest('a, button, input, textarea, .nav-item, .theme-switch, .sound-control, .fireworks-notification')) {
        return;
    }

    // INSTANT CLICK COUNT - No delay
    clickCount++;
    console.log(`🎯 Click ${clickCount}/${CLICKS_NEEDED}`);
    updateCounter();

    // Show tutorial if this is the first click
    if (clickCount === 1 && !tutorialShown) {
        showTutorial();
    }

    // Clear previous timeout
    if (clickTimeout) {
        clearTimeout(clickTimeout);
    }

    // Reset counter after 2 seconds (not 3) - FASTER
    clickTimeout = setTimeout(() => {
        if (clickCount < CLICKS_NEEDED) {
            console.log('⏰ Click counter reset');
            clickCount = 0;
            updateCounter();
            hideNotification(counterNotification);
        }
    }, 2000);

    // INSTANT ACTIVATION on 5th click
    if (clickCount >= CLICKS_NEEDED && !fireworksActive) {
        console.log('🎉 5 CLICKS REACHED! Activating fireworks...');
        activateFireworks();
    }
}

// ACTIVATE FIREWORKS - SMOOTH TRANSITION
function activateFireworks() {
    if (fireworksActive) return;

    console.log('🎆 ACTIVATING FIREWORKS!');
    fireworksActive = true;
    clickCount = 0;
    updateCounter();

    // Hide all notifications except active
    hideAllNotifications();

    // Add fireworks active class to body
    document.body.classList.add('fireworks-active');

    // Start fireworks sound
    startFireworksSound();

    // Show active notification
    showNotification(activeNotification);

    // Start countdown timer
    startCountdown();

    // Show celebration text
    showCelebrationText();

    // Start fireworks show
    startFireworksShow();

    // End fireworks after duration
    fireworksTimeout = setTimeout(() => {
        endFireworks();
    }, FIREWORKS_DURATION);
}

// START COUNTDOWN TIMER
function startCountdown() {
    let timeLeft = FIREWORKS_DURATION / 1000;
    const timerElement = document.getElementById('fireworksTimer');

    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    const countdownInterval = setInterval(() => {
        if (!fireworksActive) {
            clearInterval(countdownInterval);
            return;
        }

        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// VOLUME CONTROLS - INSTANT RESPONSE
function volumeUp() {
    if (volume < 1) {
        volume = Math.min(1, volume + 0.1);
        updateVolume();
    }
}

function volumeDown() {
    if (volume > 0) {
        volume = Math.max(0, volume - 0.1);
        updateVolume();
    }
}

function toggleMute() {
    const muteBtn = document.getElementById('muteBtn');
    if (!muteBtn) return;

    if (volume === 0) {
        volume = 0.3;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i><span>Mute</span>';
    } else {
        volume = 0;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i><span>Unmute</span>';
    }
    updateVolume();
}

function updateVolume() {
    if (audioElement) {
        audioElement.volume = volume;
    }

    // Update sound toggle button
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        if (volume === 0) {
            soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            soundToggle.classList.add('muted');
        } else if (volume > 0.5) {
            soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            soundToggle.classList.remove('muted');
        } else {
            soundToggle.innerHTML = '<i class="fas fa-volume-down"></i>';
            soundToggle.classList.remove('muted');
        }
    }
}

// TOGGLE SOUND
function toggleSound() {
    const soundToggle = document.getElementById('soundToggle');
    if (!soundToggle) return;

    if (volume === 0) {
        volume = 0.3;
    } else {
        volume = 0;
    }
    updateVolume();
}

// START FIREWORKS SOUND
function startFireworksSound() {
    if (!audioElement) return;

    try {
        audioElement.currentTime = 0;
        audioElement.volume = volume;
        const playPromise = audioElement.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Audio play failed:', error);
            });
        }
    } catch (error) {
        console.log('Error starting sound:', error);
    }
}

// STOP FIREWORKS SOUND
function stopFireworksSound() {
    if (!audioElement) return;

    try {
        audioElement.pause();
        audioElement.currentTime = 0;
    } catch (error) {
        console.log('Error stopping sound:', error);
    }
}

// END FIREWORKS
function endFireworks() {
    if (!fireworksActive) return;

    console.log('🎇 Ending fireworks...');
    fireworksActive = false;
    document.body.classList.remove('fireworks-active');

    // Stop sound
    stopFireworksSound();

    // Clear timeouts
    if (fireworksTimeout) {
        clearTimeout(fireworksTimeout);
    }

    // Hide active notification
    hideNotification(activeNotification);

    // Show ended notification
    showNotification(endedNotification);

    // Clear fireworks container
    if (fireworksContainer) {
        fireworksContainer.innerHTML = '';
    }

    // Auto-hide ended notification after 5 seconds
    setTimeout(() => {
        hideNotification(endedNotification);
    }, 5000);
}

// RESTART FIREWORKS - INSTANT
function restartFireworks() {
    hideNotification(endedNotification);
    clickCount = CLICKS_NEEDED;
    updateCounter();
    setTimeout(() => activateFireworks(), 100);
}

// SHOW CELEBRATION TEXT - SMOOTH
function showCelebrationText() {
    const celebrationText = document.createElement('div');
    celebrationText.className = 'celebration-text';
    celebrationText.textContent = '🎉 FIREWORKS! 🎉';
    celebrationText.style.position = 'fixed';
    celebrationText.style.top = '50%';
    celebrationText.style.left = '50%';
    celebrationText.style.transform = 'translate(-50%, -50%) scale(0.5)';
    celebrationText.style.fontSize = '4rem';
    celebrationText.style.fontWeight = '900';
    celebrationText.style.background = 'linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff)';
    celebrationText.style.webkitBackgroundClip = 'text';
    celebrationText.style.webkitTextFillColor = 'transparent';
    celebrationText.style.zIndex = '10000';
    celebrationText.style.opacity = '0';
    celebrationText.style.pointerEvents = 'none';
    celebrationText.style.textAlign = 'center';
    celebrationText.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

    document.body.appendChild(celebrationText);

    // Animate in
    requestAnimationFrame(() => {
        celebrationText.style.opacity = '1';
        celebrationText.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    // Remove after animation
    setTimeout(() => {
        if (celebrationText.parentNode) {
            celebrationText.style.opacity = '0';
            celebrationText.style.transform = 'translate(-50%, -50%) scale(0.5)';
            setTimeout(() => {
                if (celebrationText.parentNode) {
                    celebrationText.parentNode.removeChild(celebrationText);
                }
            }, 500);
        }
    }, 1500);
}

// ADD FIREWORK PATTERNS
function addFireworkPatterns() {
    if (!fireworksContainer) return;

    const pattern1 = document.createElement('div');
    pattern1.className = 'firework-pattern pattern-1';
    fireworksContainer.appendChild(pattern1);

    const pattern2 = document.createElement('div');
    pattern2.className = 'firework-pattern pattern-2';
    fireworksContainer.appendChild(pattern2);
}

// CREATE FIREWORKS SHOW - OPTIMIZED PERFORMANCE
function startFireworksShow() {
    if (!fireworksContainer || !fireworksActive) return;

    // Clear any existing fireworks
    fireworksContainer.innerHTML = '';

    // Add patterns back
    addFireworkPatterns();

    // Performance-optimized firework creation
    let lastFireworkTime = 0;
    const FIREWORK_INTERVAL = 100; // ms between fireworks

    function createOptimizedFirework() {
        if (!fireworksActive) return;

        const now = Date.now();
        if (now - lastFireworkTime < FIREWORK_INTERVAL) {
            requestAnimationFrame(() => createOptimizedFirework());
            return;
        }
        lastFireworkTime = now;

        // Create multiple fireworks at once for density
        const batchSize = 3;
        for (let i = 0; i < batchSize; i++) {
            setTimeout(() => {
                if (fireworksActive) {
                    createFirework();
                }
            }, i * 50);
        }
    }

    // Start the show
    const fireworksInterval = setInterval(() => {
        if (!fireworksActive) {
            clearInterval(fireworksInterval);
            return;
        }
        createOptimizedFirework();
    }, 300); // Faster firework bursts

    // Special effects at intervals
    setTimeout(() => {
        if (fireworksActive) createSpecialFirework('heart');
    }, 3000);

    setTimeout(() => {
        if (fireworksActive) createSpecialFirework('spiral');
    }, 10000);

    setTimeout(() => {
        if (fireworksActive) createSpecialFirework('star');
    }, 20000);

    setTimeout(() => {
        if (fireworksActive) createSpecialFirework('ring');
    }, 30000);
}

// OPTIMIZED FIREWORK CREATION FUNCTIONS
function createFirework() {
    if (!fireworksContainer || !fireworksActive) return;

    // Use requestAnimationFrame for smoothness
    requestAnimationFrame(() => {
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight;
        const targetX = startX + (Math.random() * 400 - 200);
        const targetY = Math.random() * (window.innerHeight * 0.7) + 100;

        const colors = ['#FF0000', '#FF4500', '#FFD700', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const rocket = document.createElement('div');
        rocket.className = 'firework-tail';
        rocket.style.cssText = `
            left: ${startX}px;
            top: ${startY}px;
            color: ${color};
            transform: rotate(${Math.random() * 360}deg);
            position: absolute;
            width: 2px;
            height: 20px;
            background: linear-gradient(
        to bottom, 
        transparent, 
        ${color} 20%, 
        ${color} 50%, 
        white 80%, 
        transparent
    );
            pointer-events: none;
            filter: drop-shadow(0 0 10px ${color}) 
                     brightness(1.5);
           box-shadow: 0 0 20px ${color};
            transform-origin: center bottom;
        `;

        fireworksContainer.appendChild(rocket);

        // Simple animation
        const animation = rocket.animate([
            { transform: `translateY(0) rotate(${Math.random() * 360}deg)`, opacity: 0 },
            { transform: `translateY(-${startY - targetY}px) rotate(${Math.random() * 360}deg)`, opacity: 1 }
        ], {
            duration: 400 + Math.random() * 200,
            easing: 'cubic-bezier(0.2, 0.9, 0.1, 1)'
        });

        animation.onfinish = () => {
            createExplosion(targetX, targetY, color);
            if (rocket.parentNode) {
                rocket.parentNode.removeChild(rocket);
            }
        };
    });
}

function createExplosion(x, y, color) {
    if (!fireworksContainer || !fireworksActive) return;

    // Create sparkle
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        filter: blur(1px);
        pointer-events: none;
        box-shadow: 0 0 100px ${color};
    `;

    fireworksContainer.appendChild(sparkle);

    // Animate sparkle
    sparkle.animate([

    ], {
        duration: 1500,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    };

    // Create particles
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
        createParticle(x, y, color);
    }
}

function createParticle(x, y, color) {
    if (!fireworksContainer || !fireworksActive) return;

    const particle = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const distance = 150 + Math.random() * 200;
    const size = 3 + Math.random() * 6;

    particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 ${size * 3}px ${color}; /* GLOW EFFECT */
    `;

    fireworksContainer.appendChild(particle);

    // Simple particle animation
    particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
    ], {
        duration: 4000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)'
    }).onfinish = () => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    };
}

// Special firework patterns (optimized versions)
function createSpecialFirework(type) {
    if (!fireworksContainer || !fireworksActive) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 3;
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];

    const patterns = {
        heart: (x, y, colors) => {
            for (let i = 0; i < 180; i += 10) {
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = i * Math.PI / 180;
                    const heartX = 16 * Math.pow(Math.sin(angle), 3);
                    const heartY = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
                    createParticle(x + heartX * 6, y + heartY * 6, colors[i % colors.length]);
                }, i * 40);
            }
        },
        spiral: (x, y, colors) => {
            for (let i = 0; i < 360; i += 15) {
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = i * Math.PI / 180;
                    const radius = i * 0.3;
                    createParticle(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, colors[Math.floor(i / 72) % colors.length]);
                }, i * 20);
            }
        },
        star: (x, y, colors) => {
            const points = 5;
            for (let i = 0; i <= points * 2; i++) {
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = (Math.PI / points) * i;
                    const radius = i % 2 === 0 ? 80 : 30;
                    createParticle(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, colors[i % colors.length]);
                }, i * 120);
            }
        },
        ring: (x, y, colors) => {
            for (let i = 0; i < 360; i += 10) {
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = i * Math.PI / 180;
                    const radius = 120;
                    createParticle(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, colors[Math.floor(i / 36) % colors.length]);
                }, i * 25);
            }
        }
    };

    if (patterns[type]) {
        patterns[type](centerX, centerY, colors);
    }
}

// ENHANCED STARFIELD BACKGROUND
function initEnhancedStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Clear existing stars
    starfield.innerHTML = '';

    // Create three layers of stars
    createStarLayer(starfield, 300, 1, 0.8, 'white');
    createStarLayer(starfield, 200, 2, 0.6, '#e2e8f0');
    createStarLayer(starfield, 150, 3, 0.4, '#94a3b8');
    createStarLayer(starfield, 100, 4, 0.3, '#6366f1');
}

function createStarLayer(container, count, size, opacity, color) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random animation properties
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;

        // Apply styles
        star.style.position = 'absolute';
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.borderRadius = '50%';
        star.style.opacity = (Math.random() * 0.5 + opacity).toString();
        star.style.animation = `starTwinkle ${duration}s infinite ${delay}s`;
        star.style.boxShadow = `0 0 ${size * 3}px ${color}`;

        container.appendChild(star);
    }

    // Add twinkle animation
    if (!document.querySelector('#starTwinkle')) {
        const style = document.createElement('style');
        style.id = 'starTwinkle';
        style.textContent = `
            @keyframes starTwinkle {
                0%, 100% { opacity: ${Math.random() * 0.3 + 0.3}; }
                50% { opacity: ${Math.random() * 0.8 + 0.5}; }
            }
        `;
        document.head.appendChild(style);
    }
}

// FREQUENT STARFALL EFFECT
function initFrequentStarfall() {
    const container = document.getElementById('starfall');
    if (!container) return;

    function createStarfall() {
        // Create multiple starfalls at once for dense effect
        const starCount = Math.floor(Math.random() * 3) + 2;

        for (let i = 0; i < starCount; i++) {
            const starfall = document.createElement('div');
            starfall.className = 'starfall';

            // Random starting position
            const startX = Math.random() * 100;
            const startY = -30;

            // Random properties
            const length = Math.random() * 150 + 100;
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 2;

            // Random color with golden bias
            const colors = ['#ffffff', '#e2e8f0', '#cbd5e1', '#FFD700', '#FFEC8B'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Apply styles
            starfall.style.left = `${startX}%`;
            starfall.style.top = `${startY}px`;
            starfall.style.background = `linear-gradient(to bottom, transparent, ${color}, transparent)`;
            starfall.style.opacity = (Math.random() * 0.6 + 0.3).toString();
            starfall.style.filter = 'blur(1px)';

            container.appendChild(starfall);

            // Animate
            const animation = starfall.animate([{
                    transform: `translateY(0)`,
                    opacity: 0
                },
                {
                    transform: `translateY(${length}px)`,
                    opacity: 1
                },
                {
                    transform: `translateY(${length * 2}px)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                delay: delay * 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            // Remove after animation
            animation.onfinish = () => {
                if (starfall.parentNode) {
                    starfall.parentNode.removeChild(starfall);
                }
            };
        }
    }

    // Create frequent starfall
    function starfallLoop() {
        createStarfall();
        setTimeout(starfallLoop, Math.random() * 1000 + 500);
    }

    // Start after delay
    setTimeout(starfallLoop, 1000);
}

// SHOOTING STARS
function initShootingStars() {
    const container = document.getElementById('shootingStars');
    if (!container) return;

    function createShootingStar() {
        // Create multiple shooting stars
        const starCount = Math.floor(Math.random() * 2) + 1;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'shooting-star';

            // Random starting position
            const startX = -150;
            const startY = Math.random() * 60 + 20;

            // Random angle and distance
            const angle = Math.random() * 25 + 15;
            const distance = Math.random() * 400 + 300;

            // Random color with golden bias
            const colors = ['#ffffff', '#FFD700', '#22d3ee', '#818cf8'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Apply styles
            star.style.left = `${startX}px`;
            star.style.top = `${startY}%`;
            star.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
            star.style.opacity = (Math.random() * 0.6 + 0.3).toString();
            star.style.transform = `rotate(${angle}deg)`;

            container.appendChild(star);

            // Calculate end position
            const endX = startX + distance * Math.cos(angle * Math.PI / 180);
            const endY = startY + distance * Math.sin(angle * Math.PI / 180);

            // Animate
            const animation = star.animate([{
                    transform: `translate(0, 0) rotate(${angle}deg)`,
                    opacity: 0
                },
                {
                    transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 2500 + 1500,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            // Remove after animation
            animation.onfinish = () => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            };
        }
    }

    // Create shooting stars frequently
    function shootingStarsLoop() {
        createShootingStar();
        setTimeout(shootingStarsLoop, Math.random() * 3000 + 2000);
    }

    // Start after delay
    setTimeout(shootingStarsLoop, 1500);
}

// METEOR SHOWER
function initMeteorShower() {
    const container = document.getElementById('meteorShower');
    if (!container) return;

    function createMeteor() {
        // Create meteor shower
        const meteorCount = Math.floor(Math.random() * 3) + 1;

        for (let i = 0; i < meteorCount; i++) {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';

            // Random starting position
            const startX = Math.random() * 100 + 100;
            const startY = -20;

            // Random angle and distance
            const angle = Math.random() * 15 + 10;
            const distance = Math.random() * 500 + 400;

            // Apply styles
            meteor.style.left = `${startX}%`;
            meteor.style.top = `${startY}px`;
            meteor.style.opacity = (Math.random() * 0.5 + 0.4).toString();
            meteor.style.transform = `rotate(${angle}deg)`;

            container.appendChild(meteor);

            // Calculate end position
            const endX = startX + distance * Math.cos(angle * Math.PI / 180);
            const endY = startY + distance * Math.sin(angle * Math.PI / 180);

            // Animate
            const animation = meteor.animate([{
                    transform: `translate(0, 0) rotate(${angle}deg)`,
                    opacity: 0
                },
                {
                    transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            // Remove after animation
            animation.onfinish = () => {
                if (meteor.parentNode) {
                    meteor.parentNode.removeChild(meteor);
                }
            };
        }
    }

    // Create meteor shower periodically
    function meteorLoop() {
        createMeteor();
        setTimeout(meteorLoop, Math.random() * 5000 + 3000);
    }

    // Start after delay
    setTimeout(meteorLoop, 3000);
}

// SPACE DEBRIS
function initSpaceDebris() {
    const container = document.getElementById('spaceDebris');
    if (!container || isMobile()) return;

    const debrisCount = 30;

    for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement('div');
        debris.className = 'debris';

        // Random properties
        const size = Math.random() * 5 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;

        // Apply styles
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.left = `${x}%`;
        debris.style.top = `${y}%`;
        debris.style.opacity = (Math.random() * 0.3 + 0.1).toString();

        // Animation
        debris.style.animation = `debrisFloat ${duration}s linear infinite ${delay}s`;

        container.appendChild(debris);
    }

    // Add debris float animation
    if (!document.querySelector('#debrisFloat')) {
        const style = document.createElement('style');
        style.id = 'debrisFloat';
        style.textContent = `
            @keyframes debrisFloat {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg);
                }
                50% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg);
                }
                75% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// PROFESSIONAL CURSOR SYSTEM
function initCursorSystem() {
    const cursorTriangle = document.getElementById('cursorTriangle');
    const cursorCircle = document.getElementById('cursorCircle');
    const cursorTrail = document.getElementById('cursorTrail');

    if (!cursorTriangle || !cursorCircle || !cursorTrail) return;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let trailX = 0;
    let trailY = 0;
    let triangleRotate = 0;

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop
    function animateCursor() {
        // Smooth movement for circle
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;

        // Smooth movement for trail
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;

        // Rotate triangle based on movement
        const dx = mouseX - circleX;
        const dy = mouseY - circleY;
        triangleRotate = Math.atan2(dy, dx) * 180 / Math.PI + 90;

        // Update positions
        cursorTriangle.style.left = mouseX + 'px';
        cursorTriangle.style.top = mouseY + 'px';
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg)`;

        cursorCircle.style.left = circleX + 'px';
        cursorCircle.style.top = circleY + 'px';

        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';

        requestAnimationFrame(animateCursor);
    }

    // Hover effects
    const hoverElements = document.querySelectorAll(
        'a, button, .cta-button, .project-card, .education-card, .feature-card, ' +
        '.social-item, .tech-icon, .certificate-card, .nav-item, .view-all-btn, .submit-button'
    );

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorTriangle.style.borderBottomColor = 'var(--primary)';
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1.3)`;
            cursorCircle.style.width = '60px';
            cursorCircle.style.height = '60px';
            cursorCircle.style.borderColor = 'var(--primary)';
            cursorTrail.style.opacity = '0.6';
            cursorTrail.style.width = '30px';
            cursorTrail.style.height = '30px';
        });

        element.addEventListener('mouseleave', () => {
            cursorTriangle.style.borderBottomColor = 'var(--golden-primary)';
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1)`;
            cursorCircle.style.width = '40px';
            cursorCircle.style.height = '40px';
            cursorCircle.style.borderColor = 'var(--accent)';
            cursorTrail.style.opacity = '0.3';
            cursorTrail.style.width = '20px';
            cursorTrail.style.height = '20px';
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(0.8)`;
        cursorCircle.style.width = '35px';
        cursorCircle.style.height = '35px';
    });

    document.addEventListener('mouseup', () => {
        cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1)`;
        cursorCircle.style.width = '40px';
        cursorCircle.style.height = '40px';
    });

    // Start animation
    animateCursor();
}

// THEME MANAGEMENT
function initTheme() {
    const themeSwitch = document.querySelector('.theme-switch');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeColors(true);
    }

    // Toggle theme
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            const isLight = !document.body.classList.contains('light-theme');
            document.body.classList.toggle('light-theme');

            // Update theme colors
            updateThemeColors(isLight);

            // Save preference
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

function updateThemeColors(isLight) {
    if (isLight) {
        // Light theme colors
        document.documentElement.style.setProperty('--cosmic-dark', '#ffffff');
        document.documentElement.style.setProperty('--cosmic-darker', '#f8fafc');
        document.documentElement.style.setProperty('--cosmic-light', '#f1f5f9');
        document.documentElement.style.setProperty('--cosmic-lighter', '#e2e8f0');
        document.documentElement.style.setProperty('--text-primary', '#1e293b');
        document.documentElement.style.setProperty('--text-secondary', '#475569');
        document.documentElement.style.setProperty('--text-muted', '#64748b');
        document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
        document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
    } else {
        // Dark theme colors
        document.documentElement.style.setProperty('--cosmic-dark', '#050511');
        document.documentElement.style.setProperty('--cosmic-darker', '#020208');
        document.documentElement.style.setProperty('--cosmic-light', '#0a0a1a');
        document.documentElement.style.setProperty('--cosmic-lighter', '#11112e');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#e2e8f0');
        document.documentElement.style.setProperty('--text-muted', '#94a3b8');
        document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
        document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    }
}

// TYPEWRITER EFFECT
function initTypewriterEffect() {
    const typewriterText = document.getElementById('typewriterText');
    if (!typewriterText) return;

    const texts = [
        'Full Stack Developer',
        'GoldenSparrow',
        'Problem Solver',
        'Tech Enthusiast',
        'Creative Thinker'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
        if (isPaused) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            // Deleting text
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Typing speed
        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        // Pause at the end of typing
        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                isDeleting = true;
                setTimeout(type, 500);
            }, 2000);
            return;
        }

        // Move to next text when deletion complete
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
            return;
        }

        // Continue typing
        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, 1000);
}

// NAVIGATION
function initNavigation() {
    const navHamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    // Mobile menu toggle
    if (navHamburger && navMenu) {
        navHamburger.addEventListener('click', () => {
            navHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;

        navItems.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });

        // Update header background on scroll
        const header = document.querySelector('.cosmic-nav');
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(5, 5, 17, 0.98)';
                header.style.backdropFilter = 'blur(30px)';
            } else {
                header.style.background = 'rgba(5, 5, 17, 0.9)';
                header.style.backdropFilter = 'blur(20px)';
            }
        }
    });

    // Close menu when clicking on a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navHamburger && navMenu) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// FORM SUBMISSION WITH FORMSPREE
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const submitButton = contactForm.querySelector('.submit-button');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        // Show loading state
        submitButton.classList.add('loading');
        formResponse.className = 'form-response';
        formResponse.textContent = '';

        try {
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Validate form
            if (!data.name || !data.email || !data.subject || !data.message) {
                throw new Error('Please fill in all fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Send email using Formspree
            await sendEmailFormspree(data);

            // Success
            formResponse.textContent = '✅ Thank you! Your message has been sent successfully.';
            formResponse.className = 'form-response success';

            // Reset form
            contactForm.reset();

        } catch (error) {
            // Error
            formResponse.textContent = `❌ ${error.message || 'Oops! There was a problem sending your message.'}`;
            formResponse.className = 'form-response error';
        } finally {
            // Reset loading state
            submitButton.classList.remove('loading');

            // Hide message after 5 seconds
            setTimeout(() => {
                formResponse.className = 'form-response';
                formResponse.textContent = '';
            }, 5000);
        }
    });
}

// FORMSPREE EMAIL FUNCTION
async function sendEmailFormspree(formData) {
    try {
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meegkrwa';

        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _replyto: formData.email
            })
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Email sent successfully via Formspree');
            return result;
        } else {
            throw new Error(result.error || 'Failed to send email');
        }

    } catch (error) {
        console.error('Formspree Error:', error);

        // Fallback: Simple mailto link
        const mailtoLink = `mailto:patelkunal3737@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        // For demo - open email client
        window.open(mailtoLink, '_blank');
        
        // Return success for demo purposes
        return { success: true, message: 'Opening email client...' };
    }
}

// SCROLL ANIMATIONS
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.hero-content, .hero-visual, .about-intro, .about-features, .stats-container, ' +
        '.skill-category, .project-card, .timeline-item, .education-card, ' +
        '.info-card, .form-card, .certificate-card'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add(`delay-${(index % 4) + 1}`);
        observer.observe(el);
    });
}

// BACK TO TOP BUTTON
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// SMOOTH SCROLLING
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.cosmic-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// PROGRESS BARS ANIMATION
function initProgressBars() {
    const progressCircles = document.querySelectorAll('.circular-progress');

    progressCircles.forEach(circle => {
        const value = circle.getAttribute('data-value') || 88;
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - value / 100);

        const progressFill = circle.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
            progressFill.style.strokeDashoffset = offset;
        }

        // Create gradient for progress circle
        const svg = circle.querySelector('svg');
        if (svg) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', `gradient-${Math.random().toString(36).substr(2, 9)}`);
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '100%');
            gradient.setAttribute('y2', '100%');

            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#FFD700');

            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#6366f1');

            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);

            if (progressFill) {
                progressFill.style.stroke = `url(#${gradient.id})`;
            }
        }
    });
}

// ROTATING CUBE INTERACTION
function initRotatingCube() {
    const rotatingCube = document.querySelector('.rotating-cube');
    if (!rotatingCube) return;

    let isHovering = false;
    let rotationSpeed = 1;
    let currentRotation = 0;

    // Mouse enter/leave events
    rotatingCube.addEventListener('mouseenter', () => {
        isHovering = true;
        rotatingCube.style.animationPlayState = 'paused';
    });

    rotatingCube.addEventListener('mouseleave', () => {
        isHovering = false;
        rotatingCube.style.animationPlayState = 'running';
    });

    // Mouse move for manual rotation
    rotatingCube.addEventListener('mousemove', (e) => {
        if (!isHovering) return;

        const rect = rotatingCube.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Calculate rotation based on mouse position
        const rotationX = (deltaY / rect.height) * 180;
        const rotationY = (deltaX / rect.width) * 180;

        rotatingCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
}

// HOVER EFFECTS
function initHoverEffects() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card, .certificate-card, .info-card, .form-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Add glow effect to interactive elements
    const interactiveElements = document.querySelectorAll('.tech-icon, .social-item, .project-link');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))';
        });

        element.addEventListener('mouseleave', () => {
            element.style.filter = 'none';
        });
    });
}

// PRELOAD IMAGES
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// PARALLAX EFFECTS
function initParallaxEffects() {
    const auroraLayers = document.querySelectorAll('.aurora-layer');
    const nebulaClouds = document.querySelectorAll('.nebula-cloud');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Parallax for aurora layers
        auroraLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.8;
            const x = (mouseX - 0.5) * 50 * speed;
            const y = (mouseY - 0.5) * 50 * speed;

            layer.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Parallax for nebula clouds
        nebulaClouds.forEach((cloud, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * 100 * speed;
            const y = (mouseY - 0.5) * 100 * speed;

            cloud.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// WINDOW RESIZE HANDLER - OPTIMIZED
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Reinitialize effects on resize
        initEnhancedStarfield();
        updateSoundTogglePosition();

        // Update cursor system if on desktop
        if (!isMobile()) {
            initCursorSystem();
        }
        
        // If fireworks are active, adjust patterns
        if (fireworksActive && fireworksContainer) {
            fireworksContainer.innerHTML = '';
            addFireworkPatterns();
        }
    }, 250);
});

// PERFORMANCE OPTIMIZATION
let lastScrollTime = 0;
const scrollInterval = 150;

window.addEventListener('scroll', () => {
    const now = Date.now();

    if (now - lastScrollTime > scrollInterval) {
        lastScrollTime = now;

        // Update scroll-based effects
        updateScrollEffects();
    }
});

function updateScrollEffects() {
    // Update progress bars when in view
    const progressSection = document.querySelector('.about-section');
    if (progressSection) {
        const rect = progressSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isInView) {
            initProgressBars();
        }
    }
}

// Initialize scroll effects
updateScrollEffects();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const navHamburger = document.querySelector('.nav-hamburger');

        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navHamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Also hide notifications
        document.querySelectorAll('.fireworks-notification.show').forEach(notif => {
            notif.classList.remove('show');
        });
    }

    // Arrow keys for navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();

        const currentSection = getCurrentSection();
        const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
        const currentIndex = sections.indexOf(currentSection);

        let nextIndex;
        if (e.key === 'ArrowDown') {
            nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
        } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        }

        const nextSection = document.getElementById(sections[nextIndex]);
        if (nextSection) {
            const headerHeight = document.querySelector('.cosmic-nav').offsetHeight;
            const targetPosition = nextSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Spacebar to stop fireworks
    if (e.key === ' ' && fireworksActive) {
        e.preventDefault();
        endFireworks();
    }
});

function getCurrentSection() {
    const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];
    const scrollPos = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                return section;
            }
        }
    }

    return 'home';
}

// Add loading state for better UX
window.addEventListener('load', () => {
    // Remove any loading indicators if present
    const loadingElements = document.querySelectorAll('.loading-indicator');
    loadingElements.forEach(el => el.remove());

    // Add loaded class to body for transition effects
    document.body.classList.add('loaded');
    
    console.log('✅ Portfolio fully loaded!');
});

// Initialize performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        const timing = performance.getEntriesByType('navigation')[0];
        if (timing) {
            console.log(`📊 Page loaded in ${timing.domContentLoadedEventEnd - timing.fetchStart}ms`);
        }
    }
}

// Call performance monitoring
setTimeout(monitorPerformance, 1000);
