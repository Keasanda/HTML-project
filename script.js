// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
});

closeMobileMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
});

menuOverlay.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
});

// Hero carousel functionality
const heroSlides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    heroSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

// Auto-advance the carousel every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}, 3000);

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

// Gallery button functionality
const galleryBtn = document.getElementById('view-gallery-btn');
const galleryLink = document.getElementById('gallery-link');
const mobileGalleryLink = document.getElementById('mobile-gallery-link');

function showGallery() {
    alert('Gallery would open here. In a complete implementation, this would show the gallery page.');
}

galleryBtn.addEventListener('click', showGallery);
galleryLink.addEventListener('click', function(e) {
    e.preventDefault();
    showGallery();
});
mobileGalleryLink.addEventListener('click', function(e) {
    e.preventDefault();
    showGallery();
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
        }
    });
});

// Additional JavaScript for Services Section
        document.addEventListener('DOMContentLoaded', function() {
            // Book service button functionality
            const bookServiceBtn = document.getElementById('book-service-btn');
            if (bookServiceBtn) {
                bookServiceBtn.addEventListener('click', function() {
                    window.open('https://webstore.ikhokha.com/emekastudios', '_blank');
                });
            }
            
            // View portfolio button functionality
            const viewPortfolioBtn = document.getElementById('view-portfolio-btn');
            if (viewPortfolioBtn) {
                viewPortfolioBtn.addEventListener('click', function() {
                    const portfolioSection = document.querySelector('#portfolio');
                    if (portfolioSection) {
                        portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        alert('Portfolio section not found. In a complete implementation, this would scroll to the portfolio.');
                    }
                });
            }
        });


          // Portfolio filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filters = document.querySelectorAll('.category-filter');
            const items = document.querySelectorAll('.portfolio-item');
            
            filters.forEach(filter => {
                filter.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active state
                    filters.forEach(f => f.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter items
                    items.forEach(item => {
                        if (category === 'all' || item.getAttribute('data-category') === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Explore portfolio button
            document.getElementById('explore-portfolio-btn').addEventListener('click', function() {
                window.location.href = 'gallery.html';
            });
            
            // Portfolio item click
            items.forEach(item => {
                item.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    window.location.href = `category-gallery.html?category=${category}`;
                });
            });
        });


        function showGallery() {
    window.location.href = 'gallery.html';
}


document.getElementById('explore-portfolio-btn').addEventListener('click', function() {
    window.location.href = 'gallery.html';
});


// In your gallery.html file, update the image click handlers
galleryItem.addEventListener('click', () => {
    window.location.href = `category-gallery.html?category=${image.category}`;
});


// In your main script.js file, update the portfolio item click handlers
items.forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        window.location.href = `category-gallery.html?category=${category}`;
    });
});





        // Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // In a real implementation, you would send this data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});


// Footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Smooth scrolling for footer links
    document.querySelectorAll('.footer-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Additional JavaScript for mobile optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Lazy loading for images
  const lazyImages = document.querySelectorAll('.gallery-item img, .category-gallery-item img');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          img.parentElement.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      // Store original src in data-src
      if (!img.dataset.src) {
        img.dataset.src = img.src;
      }
      // Set a placeholder initially
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PC9zdmc+';
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
      img.classList.add('loaded');
      img.parentElement.classList.add('loaded');
    });
  }
  
  // Improved touch handling for mobile
  let touchStartX = 0;
  let touchStartY = 0;
  
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, {passive: true});
  
  document.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    // If it's a tap (not a swipe)
    if (Math.abs(touchEndX - touchStartX) < 30 && Math.abs(touchEndY - touchStartY) < 30) {
      const target = e.target;
      
      // Handle category filter taps
      if (target.classList.contains('category-filter')) {
        target.focus();
      }
    }
  }, {passive: true});
  
  // Prevent zoom on double-tap
  let lastTap = 0;
  document.addEventListener('touchend', function(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
    }
    
    lastTap = currentTime;
  }, {passive: false});
});



function onPlayerReady(event) {
  playerInitialized = true;
  
  // Set up intersection observer to play video when in view
  const section = document.getElementById('video-showcase');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && playerInitialized) {
        // Play video when section is in view
        event.target.playVideo();
      } else if (playerInitialized) {
        // Pause video when section is not in view
        event.target.pauseVideo();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section);
}

function onPlayerStateChange(event) {
  // Optional: Handle player state changes if needed
}

// Load the YouTube API when the page loads
document.addEventListener('DOMContentLoaded', function() {
  loadYouTubeAPI();
});

        // Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    
    if (contactForm) {
        // Validate form on submit
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const service = document.getElementById('service');
            const message = document.getElementById('message');
            const hpname = document.getElementById('hpname');
            
            let isValid = true;
            
            // Reset error messages
            document.querySelectorAll('.form-error').forEach(el => {
                el.textContent = '';
            });
            
            // Honeypot check
            if (hpname.value !== '') {
                console.log('Bot detected');
                formStatus.textContent = 'There was an error submitting the form. Please try again.';
                formStatus.className = 'form-status error';
                return false;
            }
            
            // Name validation
            if (!name.value.trim() || !/^[A-Za-z ]+$/.test(name.value)) {
                document.getElementById('name-error').textContent = 'Please enter a valid name';
                isValid = false;
            }
            
            // Email validation
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Service validation
            if (!service.value) {
                document.getElementById('service-error').textContent = 'Please select a service';
                isValid = false;
            }
            
            // Message validation
            if (!message.value.trim() || message.value.length < 10) {
                document.getElementById('message-error').textContent = 'Please provide more details (at least 10 characters)';
                isValid = false;
            }
            
            if (!isValid) {
                formStatus.textContent = 'Please correct the errors above';
                formStatus.className = 'form-status error';
                return false;
            }
            
            // If using Formspree (replace YOUR_FORM_ID with your actual Formspree form ID)
            // For now, we'll simulate a successful submission
            simulateFormSubmission();
        });
    }
    
    function simulateFormSubmission() {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Sending...';
        
        // Simulate API call
        setTimeout(() => {
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="bi bi-send"></i> Send Message';
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, 1500);
    }
    
    // Add spinning animation for the submit button
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
});

// Replace your existing YouTube API code with this updated version
let player;
let playerInitialized = false;

// Load YouTube IFrame API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Initialize YouTube player when API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'Ellbj3kieqs',
        playerVars: {
            'autoplay': 1,  // Auto-play the video
            'mute': 1,      // Mute by default (required for autoplay)
            'playsinline': 1, // Play inline on iOS
            'modestbranding': 1, // Minimal branding
            'rel': 0,       // Do not show related videos at the end
            'controls': 1,  // Show player controls
            'enablejsapi': 1 // Enable JS API
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// When player is ready
function onPlayerReady(event) {
    playerInitialized = true;
    console.log('Player is ready');
    
    // Set up intersection observer to play video when in view
    const section = document.getElementById('video-showcase');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && playerInitialized) {
                // Play video when section is in view
                event.target.playVideo();
            } else if (playerInitialized) {
                // Pause video when section is not in view
                event.target.pauseVideo();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
}

// When player state changes
function onPlayerStateChange(event) {
    // Handle player state changes if needed
    console.log('Player state changed:', event.data);
}

// Load the YouTube API when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeAPI();
});