//temas
const temaOscuro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  localStorage.setItem("tema", "dark");
};

const temaClaro = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  localStorage.setItem("tema", "light");
};

const cambiarTema = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light"
    ? temaOscuro()
    : temaClaro();
};

const cookieTema = () => {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "dark") {
    temaOscuro();
  } else {
    temaClaro();
  }
};
document.addEventListener("DOMContentLoaded", cookieTema);

//Hamburguesa
const timelineItems = document.querySelectorAll(".timeline-item");

document.querySelectorAll(".timeline-content-trigger").forEach((item) => {
  item.addEventListener("click", function () {
    // Buscar el contenedor del contenido expandible
    const content = item
      .closest(".timeline-content")
      .querySelector(".timeline-content-inner");

    // Alternar la clase 'expanded'
    content.classList.toggle("expanded");
  });
});

//Spinner
const mostrarSpinner = () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "flex";
};

window.addEventListener("load", () => {
  const spinner = document.getElementById("spinner");
  spinner.style.display = "none";
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const url = link.getAttribute("href");

    if (url) {
      mostrarSpinner();

      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    }
  });
});

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
