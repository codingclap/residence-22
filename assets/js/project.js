
// FloorplanSlider Arrow Positing
function positionFloorplanArrows() {
    const imgDiv = document.querySelector('.floorplanSlider .swiper-slide-active .floorplan-img-div');
    const slider = document.querySelector('.floorplanSlider');
    const prev = document.querySelector('.floorplanSlider .custom-prev');
    const next = document.querySelector('.floorplanSlider .custom-next');

    if (!imgDiv || !slider || !prev || !next) return;

    const imgRect = imgDiv.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();
    const isTablet = window.innerWidth <= 767; // adjust breakpoint as needed

    if (isTablet) {
        // Move arrows to bottom of image
        const arrowTop = (imgRect.top - sliderRect.top) + imgRect.height + 16; // 16px gap below image

        prev.style.top = arrowTop + 'px';
        next.style.top = arrowTop + 'px';
        prev.style.transform = 'translateY(0)';
        next.style.transform = 'translateY(0)';

        // Position left and right with space between
        prev.style.left = '0';
        next.style.right = '0';

    } else {
        // Desktop — center on image
        const arrowTop = (imgRect.top - sliderRect.top) + (imgRect.height / 2);

        prev.style.top = arrowTop + 'px';
        next.style.top = arrowTop + 'px';
        prev.style.transform = 'translateY(-50%)';
        next.style.transform = 'translateY(-50%)';

        prev.style.left = '0';
        next.style.right = '0';
    }
}

window.addEventListener('load', positionFloorplanArrows);
window.addEventListener('resize', positionFloorplanArrows);


// FloorplanSlider Swiper Slider
const floorplanSlider = new Swiper('.floorplanSlider', {
    loop: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    navigation: {
        prevEl: '.floorplanSlider .custom-prev',
        nextEl: '.floorplanSlider .custom-next',
    },
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    on: {
        init: positionFloorplanArrows,
        slideChange: positionFloorplanArrows,
    }
});

// thedesign Swiper
const thedesign = new Swiper('.thedesign-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.8,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
        prevEl: '.thedesign-swiper .design-prev',
        nextEl: '.thedesign-swiper .design-next',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.thedesign-pagination',   //  points to the div outside the swiper
        clickable: true,
        type: 'bullets',
    },
    grabCursor: false,
    simulateTouch: false,
    allowTouchMove: false,
    breakpoints: {
        300: { slidesPerView: 1.2, spaceBetween: 12 },
        320: { slidesPerView: 1.3, spaceBetween: 12 },
        375: { slidesPerView: 1.3, spaceBetween: 13 },
        425: { slidesPerView: 1.3, spaceBetween: 15 },
        530: { slidesPerView: 1.3, spaceBetween: 15 },
        640: { slidesPerView: 1.5, spaceBetween: 15 },
        768: { slidesPerView: 1.5, spaceBetween: 18 },
        1024: { slidesPerView: 1.8, spaceBetween: 20 },
        1200: { slidesPerView: 1.8, spaceBetween: 30 },
        1400: { slidesPerView: 1.8, spaceBetween: 40 },
    },
});


// lifestyle design Swiper
const lifestyleSwiper = new Swiper('.fivestar-lifestyle', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.8,
    spaceBetween: 20,
    speed: 1500,
    navigation: {
        prevEl: '.fivestar-prev',
        nextEl: '.fivestar-next',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    grabCursor: false,
    simulateTouch: false,
    allowTouchMove: false,
    breakpoints: {
        300: { slidesPerView: 1.2, spaceBetween: 12 },
        320: { slidesPerView: 1.3, spaceBetween: 12 },
        375: { slidesPerView: 1.3, spaceBetween: 13 },
        425: { slidesPerView: 1.3, spaceBetween: 15 },
        530: { slidesPerView: 1.3, spaceBetween: 15 },
        640: { slidesPerView: 1.5, spaceBetween: 15 },
        768: { slidesPerView: 1.5, spaceBetween: 18 },
        1024: { slidesPerView: 1.8, spaceBetween: 20 },
        1200: { slidesPerView: 1.8, spaceBetween: 30 },
        1400: { slidesPerView: 1.8, spaceBetween: 40 },
    },
});

