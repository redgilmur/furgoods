const carouselInner = document.querySelector('.carousel-inner');

// Duplicate images dynamically (optional if you don't want to manually double them)
carouselInner.innerHTML += carouselInner.innerHTML;

// Start scrolling
let x = 0;

function moveCarousel() {
  x -= 1; // speed (pixels per frame)
  if (Math.abs(x) >= carouselInner.scrollWidth / 2) {
    x = 0; // Reset position when half scrolled (because duplicated)
  }
  carouselInner.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(moveCarousel);
}

moveCarousel();

document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    card.classList.toggle('expanded');
  });
});
 