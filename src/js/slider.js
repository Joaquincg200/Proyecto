//Slider
const sliderItems = document.querySelectorAll(".simple-slider .slider-item");
let currentIndex = 0;

function imagenMostrar(index) {
  sliderItems.forEach((item) => item.classList.remove("active"));

  if (index >= sliderItems.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = sliderItems.length - 1;
  }

  sliderItems[currentIndex].classList.add("active");
}

imagenMostrar(currentIndex);

const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", () => {
  currentIndex--;
  imagenMostrar(currentIndex);
});

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", () => {
  currentIndex++;
  imagenMostrar(currentIndex);
});
