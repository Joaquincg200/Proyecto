const temaOscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
};
const temaClaro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
};
const cambiarTema = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ? temaOscuro() : temaClaro();
};
const timelineItems = document.querySelectorAll(".timeline-item");
document.querySelectorAll(".timeline-content-trigger").forEach((item)=>{
    item.addEventListener("click", function() {
        // Buscar el contenedor del contenido expandible
        const content = item.closest(".timeline-content").querySelector(".timeline-content-inner");
        // Alternar la clase 'expanded'
        content.classList.toggle("expanded");
    });
});

//# sourceMappingURL=index.aa69868b.js.map
