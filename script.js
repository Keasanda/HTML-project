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


 // Video Showcase functionality
        document.addEventListener('DOMContentLoaded', function() {
            const videoSection = document.getElementById('video-showcase');
            const videoPlaceholder = document.getElementById('video-placeholder');
            const videoIframe = document.getElementById('video-iframe');
            
            // Function to play video
            function playVideo() {
                videoPlaceholder.style.display = 'none';
                videoIframe.classList.add('visible');
                
                // Update the src to autoplay the video
                const currentSrc = videoIframe.src;
                if (!currentSrc.includes('autoplay=1')) {
                    videoIframe.src = currentSrc + '&autoplay=1&mute=1';
                }
            }
            
            // Function to pause video
            function pauseVideo() {
                // We'll just hide the iframe and show placeholder
                // Note: YouTube iframe API would be better for actual pause control
                videoPlaceholder.style.display = 'flex';
                videoIframe.classList.remove('visible');
            }
            
            // Click on placeholder to play
            videoPlaceholder.addEventListener('click', playVideo);
            
            // Intersection Observer to play when visible
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            playVideo();
                        } else {
                            pauseVideo();
                        }
                    });
                },
                { threshold: 0.5 } // Play when 50% of the element is visible
            );
            
            observer.observe(videoSection);
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