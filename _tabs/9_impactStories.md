---
title: Impact Stories
icon: fas fa-book
permalink: /impact/
layout: page
order: 9
---

<div class="header-line"></div>

<div class="impact-intro">
    <h2>SNWG Solutions in Action</h2>
    <p>Discover how SNWG solutions are enabling better Earth science decisions and improving lives across federal agencies.</p>
</div>

<!-- Featured Impact Stories -->
<div class="impact-stories">
    <div class="carousel-container">
        <div class="carousel">
            <!-- Slide 1 -->
            <div class="carousel-slide">
                <div class="slide-container">
                    <iframe src="https://docs.google.com/presentation/d/1HKcjq3nWZ5x-FmN8Ibvq-L6wSDi5Ian0QPjtB_RbOWU/embed?start=false&loop=false&delayms=3000" 
                            frameborder="0" 
                            allowfullscreen="true" 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true">
                    </iframe>
                </div>
                <div class="slide-caption">SNWG Navigator Impact Story</div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-slide">
                <div class="slide-container">
                    <iframe src="https://docs.google.com/presentation/d/1E6qMFeKiLeXd7IsP6FPnzt5vEnBmiAW3/embed?start=false&loop=false&delayms=3000" 
                            frameborder="0" 
                            allowfullscreen="true" 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true">
                    </iframe>
                </div>
                <div class="slide-caption">Air Quality Story</div>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-slide">
                <div class="slide-container">
                    <iframe src="https://docs.google.com/presentation/d/1_3yYIvV_Spfh2C3uVBjQ6xrAcozG5lUS/embed?start=false&loop=false&delayms=3000" 
                            frameborder="0" 
                            allowfullscreen="true" 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true">
                    </iframe>
                </div>
                <div class="slide-caption">Implementation Success Story</div>
            </div>
            <!-- Slide 4 -->
            <div class="carousel-slide">
                <div class="slide-container">
                    <iframe src="https://docs.google.com/presentation/d/1S7aktQVWLYmVpM4gWB3UiLQfCJ5G7kzX/embed?start=false&loop=false&delayms=3000" 
                            frameborder="0" 
                            allowfullscreen="true" 
                            mozallowfullscreen="true" 
                            webkitallowfullscreen="true">
                    </iframe>
                </div>
                <div class="slide-caption">Stakeholder Engagement Story</div>
            </div>
        </div>
        <!-- Navigation Arrows -->
        <button class="carousel-nav prev" onclick="moveSlide(-1)">&#10094;</button>
        <button class="carousel-nav next" onclick="moveSlide(1)">&#10095;</button>
        <!-- Dot Navigation -->
        <div class="carousel-dots">
            <span class="dot active" onclick="goToSlide(0)"></span>
            <span class="dot" onclick="goToSlide(1)"></span>
            <span class="dot" onclick="goToSlide(2)"></span>
            <span class="dot" onclick="goToSlide(3)"></span>
        </div>
        <!-- Play/Pause Button -->
        <button class="carousel-control" onclick="toggleAutoplay()" id="playPauseBtn">
            <i class="fas fa-pause"></i>
        </button>
    </div>
</div>

<!-- Additional Resources Carousel -->
<div class="additional-resources">
    <h3>Additional Impact Materials</h3>   
    <div class="header-line"></div> 
    <div class="resource-carousel-container">
        <div class="resource-carousel">
            <!-- Resource 1 -->
            <div class="resource-slide">
                <div class="resource-card">
                    <div class="resource-preview">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="resource-content">
                        <h4>Impact Assessment Report</h4>
                        <p>Comprehensive analysis of SNWG solution impacts across agencies</p>
                        <a href="https://drive.google.com/file/d/1o6LgjlCjiztrdCfBzpsqzD-tULRCpRAq/view" 
                           class="resource-link" 
                           target="_blank">
                            <i class="fas fa-download"></i> Download PDF
                        </a>
                    </div>
                </div>
            </div>
            <!-- Resource 2 -->
            <div class="resource-slide">
                <div class="resource-card">
                    <div class="resource-preview">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="resource-content">
                        <h4>Implementation Success Stories</h4>
                        <p>Case studies of successful SNWG solution implementations</p>
                        <a href="https://drive.google.com/file/d/1S--ukC1_tPB1HUEYJ4UD_s_bAV4vsMhf/view" 
                           class="resource-link" 
                           target="_blank">
                            <i class="fas fa-download"></i> Download PDF
                        </a>
                    </div>
                </div>
            </div>
            <!-- Resource 3 -->
            <div class="resource-slide">
                <div class="resource-card">
                    <div class="resource-preview">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="resource-content">
                        <h4>Stakeholder Engagement Report</h4>
                        <p>Overview of agency engagement and feedback</p>
                        <a href="https://drive.google.com/file/d/19oLIVPeKuyRhALXfgj-jWEowJQr_O_EM/view" 
                           class="resource-link" 
                           target="_blank">
                            <i class="fas fa-download"></i> Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Resource Navigation Arrows -->
        <button class="resource-nav prev" onclick="moveResourceSlide(-1)">&#10094;</button>
        <button class="resource-nav next" onclick="moveResourceSlide(1)">&#10095;</button>
        <!-- Resource Dot Navigation -->
        <div class="resource-dots">
            <span class="resource-dot active" onclick="goToResourceSlide(0)"></span>
            <span class="resource-dot" onclick="goToResourceSlide(1)"></span>
            <span class="resource-dot" onclick="goToResourceSlide(2)"></span>
        </div>
    </div>
</div>

<!-- Share Your Impact -->
<div class="share-impact">
    <h3>Share Your Impact Story</h3>
    <p>Have you used an SNWG solution to improve your agency's work? We want to hear about it!</p>
    <div class="action-buttons">
        <a href="#creation-guide" class="btn-primary" onclick="toggleCreationGuide()">Story Creation Guide</a>
        <a href="mailto:contact@snwg.nasa.gov" class="btn-secondary">Contact Us</a>
    </div>
</div>

<!-- Creation Guide (Initially Hidden) -->
<div id="creation-guide" class="creation-guide hidden">
    <div class="guide-header">
        <h3>Impact Story Creation Guide</h3>
        <button class="close-btn" onclick="toggleCreationGuide()"><i class="fas fa-times"></i></button>
    </div>
    <div class="guide-content">
        <div class="guide-section">
            <h4>Story Elements</h4>
            <div class="element-grid">
                <div class="element-card">
                    <div class="element-icon">🥺</div>
                    <h5>The Challenge</h5>
                    <p>Describe the problem or limitation being addressed</p>
                </div>
                <div class="element-card">
                    <div class="element-icon">🛰️</div>
                    <h5>The Solution</h5>
                    <p>Explain how the SNWG solution helps</p>
                </div>
                <div class="element-card">
                    <div class="element-icon">🐶</div>
                    <h5>The Impact</h5>
                    <p>Share the positive outcomes and improvements</p>
                </div>
            </div>
        </div>        
        <div class="guide-section">
            <h4>Resources</h4>
            <ul class="resource-list">
                <li>
                    <i class="fas fa-file-powerpoint"></i>
                    <a href="#">Impact Story Template</a>
                </li>
                <li>
                    <i class="fas fa-file-alt"></i>
                    <a href="#">Story Writing Guide</a>
                </li>
                <li>
                    <i class="fas fa-images"></i>
                    <a href="#">Image Guidelines</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<script>
let currentResourceSlide = 0;
const totalResourceSlides = document.querySelectorAll('.resource-slide').length;

// Show specific resource slide
function showResourceSlide(n) {
    const carousel = document.querySelector('.resource-carousel');
    const dots = document.querySelectorAll('.resource-dot');
    
    currentResourceSlide = (n + totalResourceSlides) % totalResourceSlides;
    
    carousel.style.transform = `translateX(-${currentResourceSlide * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentResourceSlide].classList.add('active');
}

// Navigate to specific resource slide
function goToResourceSlide(n) {
    showResourceSlide(n);
}

// Move resource slide by offset
function moveResourceSlide(offset) {
    showResourceSlide(currentResourceSlide + offset);
}

// Initialize resource carousel
document.addEventListener('DOMContentLoaded', () => {
    showResourceSlide(0);
});
</script>

<style>
/* Resource Carousel Styles */
.resource-carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 2rem auto;
    overflow: hidden;
}

.resource-carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.resource-slide {
    flex: 0 0 100%;
    padding: 0 1rem;
}

.resource-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    transition: transform 0.3s ease;
    border: 1px solid #e5e7eb;
}

.resource-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.resource-preview {
    flex: 0 0 150px;
    height: 150px;
    background: #f8fafc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #3498db;
}

.resource-content {
    flex: 1;
}

.resource-content h4 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
}

.resource-content p {
    color: #64748b;
    margin-bottom: 1rem;
}

.resource-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.resource-link:hover {
    background: #2980b9;
}

/* Resource Navigation */
.resource-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #4a5568;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.resource-nav:hover {
    background: white;
    color: #3498db;
}

.resource-nav.prev {
    left: 1rem;
}

.resource-nav.next {
    right: 1rem;
}

.resource-dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.5rem;
}

.resource-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cbd5e0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.resource-dot.active {
    background: #3498db;
}

@media (max-width: 768px) {
    .resource-card {
        flex-direction: column;
        text-align: center;
        padding: 1.5rem;
        gap: 1rem;
    }

    .resource-preview {
        flex: 0 0 100px;
        height: 100px;
        font-size: 2rem;
    }

    .resource-nav {
        width: 30px;
        height: 30px;
        font-size: 1rem;
    }
}
</style>

<script>
function toggleCreationGuide() {
    const guide = document.getElementById('creation-guide');
    guide.classList.toggle('hidden');
}
</script>

<style>
/* Base styles */
.header-line {
    height: 3px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    margin-top: 0.5rem;
    border-radius: 2px;
    width: 100px;
}

.impact-intro {
    text-align: center;
    max-width: 800px;
    margin: 2rem auto;
}

/* Story Grid */
.carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 2rem auto;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
}

.carousel-slide {
    flex: 0 0 100%;
    padding: 0 1rem;
}

.slide-container {
    position: relative;
    width: 100%;
    padding-top: 62.5%; /* 16:10 aspect ratio */
    background: #f8fafc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.slide-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.slide-caption {
    text-align: center;
    padding: 1rem;
    color: #4a5568;
    font-weight: 500;
}

/* Navigation Arrows */
.carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #4a5568;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.carousel-nav:hover {
    background: white;
    color: #3498db;
}

.carousel-nav.prev {
    left: 1rem;
}

.carousel-nav.next {
    right: 1rem;
}

/* Dot Navigation */
.carousel-dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.5rem;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cbd5e0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active {
    background: #3498db;
}

/* Play/Pause Button */
.carousel-control {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #4a5568;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.carousel-control:hover {
    background: white;
    color: #3498db;
}

/* Responsive Design */
@media (max-width: 768px) {
    .carousel-nav {
        width: 30px;
        height: 30px;
        font-size: 1rem;
    }
    
    .carousel-control {
        width: 30px;
        height: 30px;
        font-size: 0.875rem;
    }
}

/* Solution Sections */
.solution-section {
    margin: 2rem 0;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.solution-header {
    margin-bottom: 1.5rem;
}

/* Share Impact Section */
.share-impact {
    text-align: center;
    padding: 3rem 1.5rem;
    background: #f8fafc;
    border-radius: 8px;
    margin: 2rem 0;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
}

/* Creation Guide */
.creation-guide {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem;
}

.creation-guide.hidden {
    display: none;
}

.guide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #64748b;
}

.element-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
}

.element-card {
    text-align: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 8px;
}

.element-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.resource-list {
    list-style: none;
    padding: 0;
}

.resource-list li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
}

/* Buttons */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}

.btn-primary {
    background: #3498db;
    color: white;
}

.btn-secondary {
    background: #f8fafc;
    color: #3498db;
    border: 1px solid #3498db;
}

.btn-primary:hover {
    background: #2980b9;
}

.btn-secondary:hover {
    background: #e5e7eb;
}

/* Responsive Design */
@media (max-width: 768px) {
    .story-card.featured {
        grid-template-columns: 1fr;
    }
    
    .story-image {
        height: 200px;
    }
    
    .action-buttons {
        flex-direction: column;
    }
    
    .element-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;
let autoplayInterval;
let isPlaying = true;

// Initialize carousel
function initCarousel() {
    showSlide(0);
    startAutoplay();
}

// Show specific slide
function showSlide(n) {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Navigate to specific slide
function goToSlide(n) {
    showSlide(n);
    resetAutoplay();
}

// Move slide by offset
function moveSlide(offset) {
    showSlide(currentSlide + offset);
    resetAutoplay();
}

// Start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Reset autoplay
function resetAutoplay() {
    if (isPlaying) {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
}

// Toggle autoplay
function toggleAutoplay() {
    const btn = document.getElementById('playPauseBtn');
    const icon = btn.querySelector('i');
    
    if (isPlaying) {
        clearInterval(autoplayInterval);
        icon.className = 'fas fa-play';
    } else {
        startAutoplay();
        icon.className = 'fas fa-pause';
    }
    
    isPlaying = !isPlaying;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

// Optional: Pause autoplay when user is interacting with the carousel
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    if (isPlaying) {
        clearInterval(autoplayInterval);
    }
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    if (isPlaying) {
        startAutoplay();
    }
});
</script>

