//temas
const temaOscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    localStorage.setItem("tema", "dark");
};
const temaClaro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("tema", "light");
};
const cambiarTema = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ? temaOscuro() : temaClaro();
};
const cookieTema = ()=>{
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") temaOscuro();
    else temaClaro();
};
document.addEventListener("DOMContentLoaded", cookieTema);
//Hamburguesa
const timelineItems = document.querySelectorAll(".timeline-item");
document.querySelectorAll(".timeline-content-trigger").forEach((item)=>{
    item.addEventListener("click", function() {
        // Buscar el contenedor del contenido expandible
        const content = item.closest(".timeline-content").querySelector(".timeline-content-inner");
        // Alternar la clase 'expanded'
        content.classList.toggle("expanded");
    });
});
//Spinner
const mostrarSpinner = ()=>{
    const spinner = document.getElementById("spinner");
    spinner.style.display = "flex";
};
window.addEventListener("load", ()=>{
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
});
document.querySelectorAll("a").forEach((link)=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        const url = link.getAttribute("href");
        if (url) {
            mostrarSpinner();
            setTimeout(()=>{
                window.location.href = url;
            }, 1000);
        }
    });
});
//Simple slider de los logros
const sliderItems = document.querySelectorAll('.simple-slider .slider-item');
let currentIndex = 0; // Índice de la imagen actual
// Función para mostrar la imagen correspondiente
function showImage(index) {
    // Ocultar todas las imágenes
    sliderItems.forEach((item)=>item.classList.remove('active'));
    // Aseguramos que el índice esté dentro del rango
    if (index >= sliderItems.length) currentIndex = 0; // Volver al inicio si se pasa el final
    else if (index < 0) currentIndex = sliderItems.length - 1; // Volver al final si el índice es negativo
    // Mostrar la imagen actual
    sliderItems[currentIndex].classList.add('active');
}
// Inicializar el slider mostrando la primera imagen
showImage(currentIndex);
// Botón "Anterior"
const prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', ()=>{
    currentIndex--;
    showImage(currentIndex); // Mostrar imagen anterior
});
// Botón "Siguiente"
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', ()=>{
    currentIndex++;
    showImage(currentIndex); // Mostrar siguiente imagen
});

//# sourceMappingURL=index.aa69868b.js.map
