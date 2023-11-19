const sliderContainer = document.querySelector('.slider__container');
const prevArrow = document.querySelector('.slider__arrow--prev');
const nextArrow = document.querySelector('.slider__arrow--next');

let slideIndex = 0;
const slideWidth = document.querySelector('.slider__item').offsetWidth + 4;

function slideTo(index) {
    sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
    if (slideIndex < 3) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    slideTo(slideIndex);
}

function prevSlide() {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = 3;
    }
    slideTo(slideIndex);
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

// Код для начальной установки слайдов
window.addEventListener('DOMContentLoaded', () => {
    slideTo(slideIndex);
});

setInterval(nextSlide, 5000);