const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const slides = document.querySelectorAll(".slide");
var currentIndex = 0;

next.addEventListener("click", handleNextClicked);

function handleNextClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current");
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add("current");
}

prev.addEventListener("click", handlePrevClicked);

function handlePrevClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add("current");
}

var autoPlay = true;
var forward = true;
var interval = 5000;
if (autoPlay) {
  setInterval(forward ? handleNextClicked : handlePrevClicked, interval);
}
