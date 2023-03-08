let slidIndex = 0;

function controller(c) {
  slidIndex = slidIndex + 1;
  slideShow(slidIndex);
}

slideShow(slidIndex);

function slideShow(n) {
  let slides = document.getElementsByClassName("slides");
  if (n === slides.length) {
    slidIndex = 0;
    n = 0;
  }
  if (n < 0) {
    slidIndex = slides.length - 1;
    n = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
