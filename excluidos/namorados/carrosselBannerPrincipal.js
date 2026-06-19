document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.banner-carousel');

    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    
    
    const dotsContainer = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;
    let autoplay;

    if (slides.length <= 1) return;

    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');

        if (index === 0) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoplay();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = carousel.querySelectorAll('.carousel-dot');

    function showSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoplay() {
        autoplay = setInterval(nextSlide, 5000);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        startAutoplay();
    }

    

    

    startAutoplay();
});
