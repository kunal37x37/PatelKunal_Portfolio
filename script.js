// Professional Aurora Galaxy Portfolio JavaScript - ULTRA OPTIMIZED FOR MOBILE

// Detect mobile device - IMPROVED
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
};

// Performance optimization
let isPerformanceMode = false;
let lastAnimationFrame = 0;
const ANIMATION_THROTTLE = 1000 / 60; // 60fps

// FIREWORKS SYSTEM - MOBILE OPTIMIZED
let clickCount = 0;
let fireworksActive = false;
let clickTimeout;
let fireworksTimeout;
let volume = 0.3;
const CLICKS_NEEDED = 3; // Reduced for mobile
const FIREWORKS_DURATION = 45000; // Reduced to 45 seconds for mobile

// Tutorial tracking
let tutorialShown = false;

// Performance tracking
let lastClickTime = 0;
const CLICK_DELAY = 150; // Increased for mobile touch

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
    
    // Detect performance mode
    isPerformanceMode = isMobile();
    console.log(`📱 Mobile: ${isMobile()}, Performance Mode: ${isPerformanceMode}`);

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initialize background effects (SIMPLIFIED FOR MOBILE)
    setTimeout(() => {
        initEnhancedStarfield();
        if (!isMobile()) {
            initFrequentStarfall();
            initShootingStars();
            initMeteorShower();
            initSpaceDebris();
        } else {
            // Mobile-optimized background
            initMobileBackground();
        }
    }, 100);

    // Initialize cursor system (only on desktop)
    if (!isMobile()) {
        document.body.classList.remove('mobile');
        setTimeout(() => initCursorSystem(), 200);
    } else {
        document.body.classList.add('mobile');
        // Disable hover effects on mobile
        document.body.classList.add('touch-device');
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

    // Initialize rotating cube (desktop only)
    if (!isMobile()) {
        setTimeout(() => initRotatingCube(), 500);
    }

    // Initialize hover effects (desktop only)
    if (!isMobile()) {
        setTimeout(() => initHoverEffects(), 700);
    }

    // LOAD PROFILE IMAGE FIRST - HIGH PRIORITY
    setTimeout(() => loadProfileImageWithPriority(), 50);

    // Initialize enhanced fireworks system
    setTimeout(() => initEnhancedFireworksSystem(), 100);

    // Show tutorial notification on page load
    setTimeout(() => {
        if (!fireworksActive && !tutorialShown) {
            console.log('🎯 Showing tutorial...');
            showTutorial();
        }
    }, 2000); // Increased for mobile
});

// MOBILE OPTIMIZED BACKGROUND
function initMobileBackground() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Reduced star count for mobile
    createStarLayer(starfield, 100, 1, 0.8, 'white'); // Reduced from 300
    createStarLayer(starfield, 80, 2, 0.6, '#e2e8f0'); // Reduced from 200
    
    // Disable intensive animations
    console.log('📱 Mobile background optimized');
}

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
        'https://drive.google.com/thumbnail?id=1hkWWDzJZy8C501FoFcOufxlaIcYT_Aa9&sz=w400', // Smaller size for mobile
        'https://drive.google.com/uc?export=view&id=1hkWWDzJZy8C501FoFcOufxlaIcYT_Aa9&size=w400',

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

            // Shorter timeout for mobile
            setTimeout(() => {
                if (!img.complete && !loaded) {
                    reject();
                }
            }, isMobile() ? 1000 : 2000);

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

// INITIALIZE ENHANCED FIREWORKS SYSTEM - MOBILE OPTIMIZED
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

    // Add click counter - OPTIMIZED FOR MOBILE
    document.addEventListener('click', handleFireworksClick, { passive: true });
    
    // Mobile-specific touch handling
    if (isMobile()) {
        document.addEventListener('touchstart', handleMobileTouch, { passive: true });
    }

    // Initialize sound control button
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.style.cursor = 'pointer';
        soundToggle.style.userSelect = 'none';
        soundToggle.addEventListener(isMobile() ? 'touchend' : 'click', toggleSound, { passive: true });
        updateSoundTogglePosition();
        window.addEventListener('resize', updateSoundTogglePosition, { passive: true });
    }

    // Setup tutorial notification buttons - MOBILE OPTIMIZED
    const startFireworksNowBtn = document.getElementById('startFireworksNow');
    const closeTutorialBtn = document.getElementById('closeTutorial');

    // Setup tutorial buttons with TOUCH OPTIMIZED handlers
    if (startFireworksNowBtn) {
        const startHandler = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            console.log('🚀 Start Now clicked - Activating fireworks!');
            clickCount = CLICKS_NEEDED;
            updateCounter();
            hideNotification(tutorialNotification);
            tutorialShown = true;
            setTimeout(() => activateFireworks(), 100);
            
            // Visual feedback for mobile
            if (isMobile()) {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        };
        
        startFireworksNowBtn.addEventListener(isMobile() ? 'touchend' : 'click', startHandler);
        
        // Add visual feedback
        if (!isMobile()) {
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
    }

    if (closeTutorialBtn) {
        const closeHandler = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            console.log('✕ Closing tutorial');
            hideNotification(tutorialNotification);
            tutorialShown = true;
            showNotification(counterNotification);
            
            // Visual feedback for mobile
            if (isMobile()) {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        };
        
        closeTutorialBtn.addEventListener(isMobile() ? 'touchend' : 'click', closeHandler);
        
        // Add visual feedback for desktop
        if (!isMobile()) {
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
    }

    // Setup counter notification
    const closeCounterBtn = document.getElementById('closeCounter');
    if (closeCounterBtn) {
        const closeCounterHandler = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            console.log('✕ Closing counter');
            hideNotification(counterNotification);
            
            // Visual feedback for mobile
            if (isMobile()) {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        };
        
        closeCounterBtn.addEventListener(isMobile() ? 'touchend' : 'click', closeCounterHandler);
        
        if (!isMobile()) {
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
    }

    // Setup active notification controls
    const stopFireworksBtn = document.getElementById('stopFireworksBtn');
    const volumeUpBtn = document.getElementById('volumeUpBtn');
    const volumeDownBtn = document.getElementById('volumeDownBtn');
    const muteBtn = document.getElementById('muteBtn');

    // Setup all active notification buttons with mobile optimization
    [stopFireworksBtn, volumeUpBtn, volumeDownBtn, muteBtn].forEach(btn => {
        if (btn) {
            const eventType = isMobile() ? 'touchend' : 'click';
            btn.addEventListener(eventType, function(e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                
                // Mobile visual feedback
                if (isMobile()) {
                    this.style.opacity = '0.7';
                    setTimeout(() => {
                        this.style.opacity = '1';
                    }, 200);
                }
                
                // Call appropriate function
                if (btn === stopFireworksBtn) endFireworks();
                if (btn === volumeUpBtn) volumeUp();
                if (btn === volumeDownBtn) volumeDown();
                if (btn === muteBtn) toggleMute();
            });
        }
    });

    // Setup restart button
    const restartFireworksBtn = document.getElementById('restartFireworksBtn');
    if (restartFireworksBtn) {
        const eventType = isMobile() ? 'touchend' : 'click';
        restartFireworksBtn.addEventListener(eventType, function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            restartFireworks();
            
            // Mobile visual feedback
            if (isMobile()) {
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            }
        });
    }

    // Add firework patterns (SIMPLIFIED FOR MOBILE)
    if (!isMobile()) {
        addFireworkPatterns();
    }

    // Initialize notification state
    updateCounter();

    console.log('✅ Fireworks system ready!');
}

// MOBILE TOUCH HANDLING - OPTIMIZED
function handleMobileTouch(e) {
    if (fireworksActive) return;

    // Prevent multiple touches
    const now = Date.now();
    if (now - lastClickTime < CLICK_DELAY) return;
    lastClickTime = now;

    // Get touch position
    const touch = e.touches[0] || e.changedTouches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    // Don't count touches on interactive elements
    if (target && target.closest('a, button, input, textarea, .nav-item, .theme-switch, .sound-control, .fireworks-notification')) {
        return;
    }

    // Count the touch
    clickCount++;
    console.log(`📱 Touch ${clickCount}/${CLICKS_NEEDED}`);
    updateCounter();

    // Show tutorial if this is the first touch
    if (clickCount === 1 && !tutorialShown) {
        showTutorial();
    }

    // Clear previous timeout
    if (clickTimeout) {
        clearTimeout(clickTimeout);
    }

    // Reset counter after delay
    clickTimeout = setTimeout(() => {
        if (clickCount < CLICKS_NEEDED) {
            console.log('⏰ Touch counter reset');
            clickCount = 0;
            updateCounter();
            hideNotification(counterNotification);
        }
    }, isMobile() ? 2500 : 2000); // Longer timeout for mobile

    // ACTIVATE on required clicks
    if (clickCount >= CLICKS_NEEDED && !fireworksActive) {
        console.log('🎉 TOUCHES REACHED! Activating fireworks...');
        activateFireworks();
    }
}

// HANDLE FIREWORKS CLICK - MOBILE OPTIMIZED
function handleFireworksClick(e) {
    if (fireworksActive || isMobile()) return; // Mobile uses touch events

    // Prevent double counting
    const now = Date.now();
    if (now - lastClickTime < CLICK_DELAY) return;
    lastClickTime = now;

    // Don't count clicks on interactive elements
    if (e.target.closest('a, button, input, textarea, .nav-item, .theme-switch, .sound-control, .fireworks-notification')) {
        return;
    }

    // INSTANT CLICK COUNT
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

    // Reset counter after delay
    clickTimeout = setTimeout(() => {
        if (clickCount < CLICKS_NEEDED) {
            console.log('⏰ Click counter reset');
            clickCount = 0;
            updateCounter();
            hideNotification(counterNotification);
        }
    }, 2000);

    // INSTANT ACTIVATION
    if (clickCount >= CLICKS_NEEDED && !fireworksActive) {
        console.log('🎉 CLICKS REACHED! Activating fireworks...');
        activateFireworks();
    }
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
            soundToggle.style.bottom = isMobile() ? '80px' : '100px';
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

// SHOW NOTIFICATION - MOBILE OPTIMIZED
function showNotification(notification) {
    if (!notification) return;

    // Hide all other notifications first
    document.querySelectorAll('.fireworks-notification').forEach(notif => {
        notif.classList.remove('show');
        notif.style.display = 'none';
    });

    // Show the requested notification
    notification.style.display = 'block';
    
    // Force reflow for animation
    notification.offsetHeight;
    
    notification.classList.add('show');

    updateSoundTogglePosition();
    
    // Auto-hide tutorial after 8 seconds on mobile
    if (notification === tutorialNotification && isMobile()) {
        setTimeout(() => {
            if (notification.classList.contains('show') && !fireworksActive) {
                hideNotification(notification);
                tutorialShown = true;
            }
        }, 8000);
    }
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

// UPDATE COUNTER DISPLAY
function updateCounter() {
    const clickCountElement = document.getElementById('clickCount');
    const progressElement = document.getElementById('clickProgress');

    if (!clickCountElement || !progressElement) return;

    clickCountElement.textContent = clickCount;
    progressElement.style.width = `${(clickCount / CLICKS_NEEDED) * 100}%`;

    // Show counter notification if we have at least 1 click
    if (clickCount > 0 && !fireworksActive && counterNotification) {
        showNotification(counterNotification);
    }
}

// ACTIVATE FIREWORKS - MOBILE OPTIMIZED
function activateFireworks() {
    if (fireworksActive) return;

    console.log('🎆 ACTIVATING FIREWORKS!');
    fireworksActive = true;
    clickCount = 0;
    updateCounter();

    // Hide all notifications
    hideAllNotifications();

    // Add fireworks active class
    document.body.classList.add('fireworks-active');

    // Start fireworks sound (autoplay policy handling)
    startFireworksSound();

    // Show active notification
    showNotification(activeNotification);

    // Start countdown timer
    startCountdown();

    // Show celebration text (simplified for mobile)
    if (!isMobile()) {
        showCelebrationText();
    }

    // Start optimized fireworks show
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

// VOLUME CONTROLS
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

// START FIREWORKS SOUND - MOBILE FRIENDLY
function startFireworksSound() {
    if (!audioElement) return;

    // Mobile browsers require user interaction for audio
    if (isMobile() && audioElement.paused) {
        // Try to play with user interaction context
        const playAudio = () => {
            try {
                audioElement.currentTime = 0;
                audioElement.volume = volume;
                const playPromise = audioElement.play();
                
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Mobile audio play failed:', error);
                        // Silently fail for mobile
                    });
                }
            } catch (error) {
                console.log('Error starting sound on mobile:', error);
            }
        };
        
        // Try to play immediately
        playAudio();
    } else {
        // Desktop or already playing
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

    // Auto-hide ended notification
    setTimeout(() => {
        hideNotification(endedNotification);
    }, isMobile() ? 3000 : 5000); // Shorter on mobile
}

// RESTART FIREWORKS
function restartFireworks() {
    hideNotification(endedNotification);
    clickCount = CLICKS_NEEDED;
    updateCounter();
    setTimeout(() => activateFireworks(), 100);
}

// SHOW CELEBRATION TEXT - DESKTOP ONLY
function showCelebrationText() {
    if (isMobile()) return; // Skip on mobile
    
    const celebrationText = document.createElement('div');
    celebrationText.className = 'celebration-text';
    celebrationText.textContent = '🎉 FIREWORKS! 🎉';
    celebrationText.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.5);
        font-size: 3rem;
        font-weight: 900;
        background: linear-gradient(45deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        z-index: 10000;
        opacity: 0;
        pointer-events: none;
        text-align: center;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;

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
    if (!fireworksContainer || isMobile()) return; // Skip on mobile

    const pattern1 = document.createElement('div');
    pattern1.className = 'firework-pattern pattern-1';
    fireworksContainer.appendChild(pattern1);

    const pattern2 = document.createElement('div');
    pattern2.className = 'firework-pattern pattern-2';
    fireworksContainer.appendChild(pattern2);
}

// CREATE FIREWORKS SHOW - HEAVILY OPTIMIZED FOR MOBILE
function startFireworksShow() {
    if (!fireworksContainer || !fireworksActive) return;

    // Clear any existing fireworks
    fireworksContainer.innerHTML = '';

    // Add patterns back (desktop only)
    if (!isMobile()) {
        addFireworkPatterns();
    }

    // MOBILE: Simplified fireworks
    if (isMobile()) {
        startMobileFireworks();
        return;
    }

    // DESKTOP: Full fireworks show
    let lastFireworkTime = 0;
    const FIREWORK_INTERVAL = 150; // Slower for performance

    function createOptimizedFirework() {
        if (!fireworksActive) return;

        const now = Date.now();
        if (now - lastFireworkTime < FIREWORK_INTERVAL) {
            requestAnimationFrame(() => createOptimizedFirework());
            return;
        }
        lastFireworkTime = now;

        // Create fewer fireworks for performance
        const batchSize = 2; // Reduced from 3
        for (let i = 0; i < batchSize; i++) {
            setTimeout(() => {
                if (fireworksActive) {
                    createFirework();
                }
            }, i * 80); // Increased delay
        }
    }

    // Start the show
    const fireworksInterval = setInterval(() => {
        if (!fireworksActive) {
            clearInterval(fireworksInterval);
            return;
        }
        createOptimizedFirework();
    }, 500); // Slower interval

    // Special effects at intervals
    setTimeout(() => {
        if (fireworksActive && !isMobile()) createSpecialFirework('heart');
    }, 5000);

    setTimeout(() => {
        if (fireworksActive && !isMobile()) createSpecialFirework('spiral');
    }, 15000);
}

// MOBILE FIREWORKS - SIMPLIFIED
function startMobileFireworks() {
    if (!fireworksContainer || !fireworksActive) return;
    
    console.log('📱 Starting mobile-optimized fireworks');
    
    let fireworkCount = 0;
    const MAX_FIREWORKS = 30; // Limit for mobile
    
    function createMobileFirework() {
        if (!fireworksActive || fireworkCount >= MAX_FIREWORKS) return;
        
        fireworkCount++;
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7);
        const colors = ['#FF0000', '#FFD700', '#00FF00', '#0000FF'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Simple particle burst
        for (let i = 0; i < 15; i++) { // Reduced particles
            createSimpleParticle(x, y, color);
        }
        
        // Schedule next firework
        if (fireworksActive && fireworkCount < MAX_FIREWORKS) {
            setTimeout(createMobileFirework, Math.random() * 1000 + 500);
        }
    }
    
    // Start with a few fireworks
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            if (fireworksActive) createMobileFirework();
        }, i * 300);
    }
}

// SIMPLE PARTICLE FOR MOBILE
function createSimpleParticle(x, y, color) {
    if (!fireworksContainer || !fireworksActive) return;
    
    const particle = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 50; // Shorter distance
    const size = 2 + Math.random() * 3; // Smaller size
    
    particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px ${color};
    `;
    
    fireworksContainer.appendChild(particle);
    
    // Simple animation
    const animation = particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
    ], {
        duration: 1000 + Math.random() * 1000, // Shorter duration
        easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)'
    });
    
    animation.onfinish = () => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    };
}

// OPTIMIZED FIREWORK CREATION FUNCTIONS
function createFirework() {
    if (!fireworksContainer || !fireworksActive || isMobile()) return;

    requestAnimationFrame(() => {
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight;
        const targetX = startX + (Math.random() * 300 - 150); // Reduced movement
        const targetY = Math.random() * (window.innerHeight * 0.6) + 100;

        const colors = ['#FF0000', '#FF4500', '#FFD700', '#00FF00', '#0000FF'];
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
            height: 15px; // Shorter
            background: linear-gradient(to bottom, transparent, ${color} 20%, ${color} 50%, white 80%, transparent);
            pointer-events: none;
            filter: drop-shadow(0 0 8px ${color}) brightness(1.5);
            box-shadow: 0 0 15px ${color};
            transform-origin: center bottom;
        `;

        fireworksContainer.appendChild(rocket);

        // Simple animation
        const animation = rocket.animate([
            { transform: `translateY(0) rotate(${Math.random() * 360}deg)`, opacity: 0 },
            { transform: `translateY(-${startY - targetY}px) rotate(${Math.random() * 360}deg)`, opacity: 1 }
        ], {
            duration: 300 + Math.random() * 150, // Faster
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
    if (!fireworksContainer || !fireworksActive || isMobile()) return;

    // Create sparkle
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        position: absolute;
        width: 6px; // Smaller
        height: 6px;
        border-radius: 50%;
        filter: blur(1px);
        pointer-events: none;
        box-shadow: 0 0 60px ${color}; // Reduced glow
    `;

    fireworksContainer.appendChild(sparkle);

    // Animate sparkle
    sparkle.animate([], {
        duration: 1000, // Faster
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    };

    // Create fewer particles
    const particleCount = isMobile() ? 20 : 40; // Reduced
    for (let i = 0; i < particleCount; i++) {
        createParticle(x, y, color);
    }
}

function createParticle(x, y, color) {
    if (!fireworksContainer || !fireworksActive) return;

    const particle = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const distance = isMobile() ? 80 + Math.random() * 80 : 100 + Math.random() * 150; // Shorter on mobile
    const size = isMobile() ? 2 + Math.random() * 3 : 3 + Math.random() * 4; // Smaller on mobile

    particle.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px ${color};
    `;

    fireworksContainer.appendChild(particle);

    // Faster animation on mobile
    const duration = isMobile() ? 2000 + Math.random() * 1000 : 3000 + Math.random() * 1500;
    
    particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)'
    }).onfinish = () => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    };
}

// Special firework patterns (desktop only)
function createSpecialFirework(type) {
    if (!fireworksContainer || !fireworksActive || isMobile()) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 3;
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];

    const patterns = {
        heart: (x, y, colors) => {
            for (let i = 0; i < 90; i += 15) { // Reduced
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = i * Math.PI / 180;
                    const heartX = 16 * Math.pow(Math.sin(angle), 3);
                    const heartY = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
                    createParticle(x + heartX * 4, y + heartY * 4, colors[i % colors.length]); // Smaller
                }, i * 80); // Slower
            }
        },
        spiral: (x, y, colors) => {
            for (let i = 0; i < 180; i += 30) { // Reduced
                setTimeout(() => {
                    if (!fireworksActive) return;
                    const angle = i * Math.PI / 180;
                    const radius = i * 0.2; // Smaller
                    createParticle(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, colors[Math.floor(i / 72) % colors.length]);
                }, i * 40); // Slower
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

    // Create layers based on device
    if (isMobile()) {
        createStarLayer(starfield, 80, 1, 0.8, 'white');
        createStarLayer(starfield, 60, 2, 0.6, '#e2e8f0');
    } else {
        createStarLayer(starfield, 200, 1, 0.8, 'white');
        createStarLayer(starfield, 150, 2, 0.6, '#e2e8f0');
        createStarLayer(starfield, 100, 3, 0.4, '#94a3b8');
        createStarLayer(starfield, 80, 4, 0.3, '#6366f1');
    }
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
        
        // Slower animation for mobile
        const animDuration = isMobile() ? duration * 1.5 : duration;
        star.style.animation = `starTwinkle ${animDuration}s infinite ${delay}s`;
        
        if (!isMobile()) {
            star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        }

        container.appendChild(star);
    }

    // Add twinkle animation
    if (!document.querySelector('#starTwinkle')) {
        const style = document.createElement('style');
        style.id = 'starTwinkle';
        style.textContent = `
            @keyframes starTwinkle {
                0%, 100% { opacity: ${isMobile() ? 0.2 : 0.3}; }
                50% { opacity: ${isMobile() ? 0.6 : 0.8}; }
            }
        `;
        document.head.appendChild(style);
    }
}

// FREQUENT STARFALL EFFECT - MOBILE OPTIMIZED
function initFrequentStarfall() {
    const container = document.getElementById('starfall');
    if (!container || isMobile()) return; // Disabled on mobile

    function createStarfall() {
        const starfall = document.createElement('div');
        starfall.className = 'starfall';

        // Random starting position
        const startX = Math.random() * 100;
        const startY = -30;

        // Random properties
        const length = Math.random() * 100 + 80; // Shorter
        const duration = Math.random() * 1.5 + 1; // Faster
        const delay = Math.random() * 2;

        // Random color
        const colors = ['#ffffff', '#e2e8f0', '#FFD700'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Apply styles
        starfall.style.left = `${startX}%`;
        starfall.style.top = `${startY}px`;
        starfall.style.background = `linear-gradient(to bottom, transparent, ${color}, transparent)`;
        starfall.style.opacity = (Math.random() * 0.4 + 0.3).toString();
        starfall.style.filter = 'blur(0.5px)'; // Less blur

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
                transform: `translateY(${length * 1.5}px)`,
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

    // Create less frequent starfall
    function starfallLoop() {
        createStarfall();
        setTimeout(starfallLoop, Math.random() * 2000 + 1500); // Less frequent
    }

    // Start after delay
    setTimeout(starfallLoop, 2000);
}

// SHOOTING STARS - MOBILE OPTIMIZED
function initShootingStars() {
    const container = document.getElementById('shootingStars');
    if (!container || isMobile()) return; // Disabled on mobile

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Random starting position
        const startX = -100; // Closer
        const startY = Math.random() * 60 + 20;

        // Random angle and distance
        const angle = Math.random() * 20 + 15; // Narrower angle
        const distance = Math.random() * 300 + 200; // Shorter distance

        // Random color
        const colors = ['#ffffff', '#FFD700', '#22d3ee'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Apply styles
        star.style.left = `${startX}px`;
        star.style.top = `${startY}%`;
        star.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
        star.style.opacity = (Math.random() * 0.4 + 0.3).toString();
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
            duration: Math.random() * 1500 + 1000, // Faster
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        // Remove after animation
        animation.onfinish = () => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        };
    }

    // Create shooting stars less frequently
    function shootingStarsLoop() {
        createShootingStar();
        setTimeout(shootingStarsLoop, Math.random() * 5000 + 4000); // Much less frequent
    }

    // Start after delay
    setTimeout(shootingStarsLoop, 3000);
}

// METEOR SHOWER - DISABLED ON MOBILE
function initMeteorShower() {
    const container = document.getElementById('meteorShower');
    if (!container || isMobile()) return; // Disabled on mobile

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';

        // Random starting position
        const startX = Math.random() * 100 + 100;
        const startY = -20;

        // Random angle and distance
        const angle = Math.random() * 10 + 10; // Narrower
        const distance = Math.random() * 400 + 300; // Shorter

        // Apply styles
        meteor.style.left = `${startX}%`;
        meteor.style.top = `${startY}px`;
        meteor.style.opacity = (Math.random() * 0.3 + 0.3).toString(); // Less opaque
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
            duration: Math.random() * 2000 + 1500, // Faster
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        // Remove after animation
        animation.onfinish = () => {
            if (meteor.parentNode) {
                meteor.parentNode.removeChild(meteor);
            }
        };
    }

    // Create meteor shower rarely
    function meteorLoop() {
        createMeteor();
        setTimeout(meteorLoop, Math.random() * 10000 + 8000); // Very rare
    }

    // Start after delay
    setTimeout(meteorLoop, 5000);
}

// SPACE DEBRIS - DISABLED ON MOBILE
function initSpaceDebris() {
    const container = document.getElementById('spaceDebris');
    if (!container || isMobile()) return;

    const debrisCount = 15; // Reduced

    for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement('div');
        debris.className = 'debris';

        // Random properties
        const size = Math.random() * 3 + 1; // Smaller
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 40 + 30; // Slower
        const delay = Math.random() * 10;

        // Apply styles
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.left = `${x}%`;
        debris.style.top = `${y}%`;
        debris.style.opacity = (Math.random() * 0.2 + 0.1).toString();

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
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// PROFESSIONAL CURSOR SYSTEM - DESKTOP ONLY
function initCursorSystem() {
    if (isMobile()) return; // Skip on mobile
    
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

    // Animation loop with throttling
    function animateCursor() {
        const now = Date.now();
        if (now - lastAnimationFrame < ANIMATION_THROTTLE) {
            requestAnimationFrame(animateCursor);
            return;
        }
        lastAnimationFrame = now;

        // Smooth movement
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;

        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;

        // Rotate triangle
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
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1.2)`;
            cursorCircle.style.width = '50px';
            cursorCircle.style.height = '50px';
            cursorCircle.style.borderColor = 'var(--primary)';
            cursorTrail.style.opacity = '0.4';
            cursorTrail.style.width = '25px';
            cursorTrail.style.height = '25px';
        });

        element.addEventListener('mouseleave', () => {
            cursorTriangle.style.borderBottomColor = 'var(--golden-primary)';
            cursorTriangle.style.transform = `translate(-50%, -50%) rotate(${triangleRotate}deg) scale(1)`;
            cursorCircle.style.width = '40px';
            cursorCircle.style.height = '40px';
            cursorCircle.style.borderColor = 'var(--accent)';
            cursorTrail.style.opacity = '0.2';
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
        const eventType = isMobile() ? 'touchend' : 'click';
        themeSwitch.addEventListener(eventType, () => {
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
        'Tech Enthusiast'
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

        // Typing speed (slower on mobile)
        let typeSpeed = isMobile() ? 120 : 100;

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
            }, isMobile() ? 1500 : 2000); // Shorter pause on mobile
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

// NAVIGATION - MOBILE OPTIMIZED
function initNavigation() {
    const navHamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    // Mobile menu toggle
    if (navHamburger && navMenu) {
        const eventType = isMobile() ? 'touchend' : 'click';
        navHamburger.addEventListener(eventType, (e) => {
            if (e) e.stopPropagation();
            navHamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navHamburger.contains(e.target) && 
                !navMenu.contains(e.target)) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navHamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Update active nav link on scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
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
                    header.style.backdropFilter = 'blur(20px)';
                } else {
                    header.style.background = 'rgba(5, 5, 17, 0.9)';
                    header.style.backdropFilter = 'blur(10px)';
                }
            }
        }, isMobile() ? 100 : 50); // Throttle more on mobile
    });

    // Close menu when clicking on a link
    navItems.forEach(link => {
        const eventType = isMobile() ? 'touchend' : 'click';
        link.addEventListener(eventType, () => {
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

// SCROLL ANIMATIONS - MOBILE OPTIMIZED
function initScrollAnimations() {
    if (isMobile() && window.innerWidth < 768) {
        // Disable scroll animations on small mobile
        return;
    }

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
        el.classList.add(`delay-${(index % 3) + 1}`); // Fewer delays on mobile
        observer.observe(el);
    });
}

// BACK TO TOP BUTTON
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, isMobile() ? 100 : 50);
    });

    // Smooth scroll to top
    backToTop.addEventListener(isMobile() ? 'touchend' : 'click', (e) => {
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

        // Create gradient for progress circle (desktop only)
        if (!isMobile()) {
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
        }
    });
}

// ROTATING CUBE INTERACTION - DESKTOP ONLY
function initRotatingCube() {
    if (isMobile()) return;
    
    const rotatingCube = document.querySelector('.rotating-cube');
    if (!rotatingCube) return;

    let isHovering = false;

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
        const rotationX = (deltaY / rect.height) * 120; // Reduced rotation
        const rotationY = (deltaX / rect.width) * 120;

        rotatingCube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
}

// HOVER EFFECTS - DESKTOP ONLY
function initHoverEffects() {
    if (isMobile()) return;
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.feature-card, .project-card, .education-card, .certificate-card, .info-card, .form-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
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
            element.style.filter = 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))';
        });

        element.addEventListener('mouseleave', () => {
            element.style.filter = 'none';
        });
    });
}

// WINDOW RESIZE HANDLER - HEAVILY THROTTLED
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Update mobile detection
        const wasMobile = isMobile();
        document.body.classList.toggle('mobile', isMobile());
        
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
            if (!isMobile()) {
                addFireworkPatterns();
            }
        }
    }, 500); // Longer throttle for resize
});

// PERFORMANCE OPTIMIZATION
let lastScrollTime = 0;
const scrollInterval = isMobile() ? 200 : 100; // Longer interval on mobile

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

    // Arrow keys for navigation (desktop only)
    if (!isMobile() && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
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

// Add touch device detection CSS
if (isMobile()) {
    const style = document.createElement('style');
    style.textContent = `
        .touch-device * {
            -webkit-tap-highlight-color: transparent;
        }
        
        .touch-device button,
        .touch-device a {
            cursor: pointer;
        }
        
        .touch-device .hover-effect {
            opacity: 1 !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Prevent default touch behaviors
if (isMobile()) {
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Disable context menu on mobile
    document.addEventListener('contextmenu', function(e) {
        if (isMobile()) {
            e.preventDefault();
            return false;
        }
    });
}

// Optimize animations for mobile
if (isMobile()) {
    // Reduce animation complexity
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
        document.body.classList.add('reduce-motion');
    }
}
