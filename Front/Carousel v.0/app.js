let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

document
  .getElementById('carousel__button--next')
  .addEventListener('click', () => {
    moveToNextSlide();
  });
document
  .getElementById('carousel__button--prev')
  .addEventListener('click', () => {
    moveToPrevSlide();
  });
