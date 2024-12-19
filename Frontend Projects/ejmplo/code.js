// Obtener todos los botones del acordeón
var acc = document.getElementsByClassName("accordion-button");

// Añadir el evento de click a cada botón
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Alternar la visibilidad del contenido al hacer click
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      // Cerrar otros paneles abiertos
      var allPanels = document.querySelectorAll(".panel");
      allPanels.forEach(function(p) {
        p.style.display = "none";
      });
      
      // Mostrar el panel correspondiente
      panel.style.display = "block";
    }
  });
}