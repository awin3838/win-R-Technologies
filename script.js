// Banner Scrolling Logic
let currentSlideIndex = 0; // Track the current slide index
const slides = document.querySelectorAll('.banner-slide'); // Select all banner slides

// Function to move the banner to the next or previous slide
function moveBanner(step) {
    currentSlideIndex += step;

    // Loop back to the first slide if we go past the last one
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } 
    // Loop to the last slide if we go before the first one
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    // Hide all slides and show the one at the current index
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlideIndex) ? 'block' : 'none';
    });
}

// Initialize the banner (Show the first slide by default)
moveBanner(0);

// Set up the automatic banner scrolling every 5 seconds
setInterval(() => {
    moveBanner(1);  // Automatically move to the next banner
}, 5000); // 5000 ms = 5 seconds


// Trusted Partners Scrolling (Carousel)
let partnerIndex = 0;
const partnerImages = document.querySelectorAll('.partners-logos img');
const partnerCount = partnerImages.length;

// Function to move partners logos
function movePartners() {
    // Move the logos by translating the container
    const partnersContainer = document.querySelector('.partners-logos');
    partnersContainer.style.transform = `translateX(-${partnerIndex * 160}px)`;

    // Increment the partner index for the next scroll
    partnerIndex = (partnerIndex + 1) % partnerCount;
}

// Set an interval to scroll the partners automatically every 2 seconds
setInterval(movePartners, 1000); // 1000 ms = 1 second 
