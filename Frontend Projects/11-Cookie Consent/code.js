const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}


botonAceptarCookies.addEventListener('click',()=>{
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    localStorage.setItem('cookies-aceptadas',true);
    document.cookie = "usuario=matias; expires=Thu , 31 Dec 2024 12:00:00 UTC; path=/; ";
})