const btn = document.getElementsByClassName("btn-accordion");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', mostrar);
}

function mostrar() {
    
    this.classList.toggle('activo');

    
    let panel = this.nextElementSibling;

    
    if (panel.classList.contains("activo")) {
        panel.classList.remove("activo"); 
    } else {
        panel.classList.add("activo"); 
    }
}
