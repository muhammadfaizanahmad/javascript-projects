let slideIndex = 0;

function controller(c) {
  slideIndex = slideIndex + c;
  showSlides(slideIndex);
}
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  if (n === slides.length) {
    slideIndex = 0;
    n = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
    n = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
