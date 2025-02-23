let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides-wrapper');
  const totalSlides = document.querySelectorAll('.slide').length;
  const visibleSlides = 3;

  // Update the index
  currentIndex += direction;
  
  // Clamp index within valid bounds
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = totalSlides - visibleSlides;
  }
  
  // Use translate3d for GPU acceleration
  const offset = -(currentIndex * (100 / visibleSlides));
  slides.style.transform = `translate3d(${offset}%, 0, 0)`;
}
