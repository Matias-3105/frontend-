const firstTab = document.getElementById('firstTab');
const secondTab = document.getElementById('secondTab');
const thirdTab = document.getElementById('thridTab');
const fourthTab = document.getElementById('foruthTab');

const firtP = document.getElementById('firstP');
const secondP = document.getElementById('secondP');
const box = document.getElementById('caja');

let primerP = firtP.innerText;
let segundoP = secondP.innerText;
let caja = box.innerText;


function clickFirstTab(){
    firtP.innerText = primerP;
    box.innerText = caja;
    secondP.innerText = segundoP;
}
firstTab.addEventListener('click',clickFirstTab);

function clickSecondTab (){
    firtP.innerText = "Se entiende por texto una composición ordenada de signos inscritos en un sistema de escritura, cuya lectura permite recobrar un sentido específico referido por el emisor.";
    box.innerText = "Second Tab content to be displayed here"
    secondP.innerText = "Te explicamos qué es un texto, su concepto y sus propiedades o características. Además, los tipos que hay y ejemplos"
}
secondTab.addEventListener('click',clickSecondTab);

function clickThirdTab(){
    firtP.innerText = "C++ es un ejemplo de lenguaje de programación compilado, multiparadigma, principalmente de tipo imperativo y orientado a objetos, incluyendo también programación genérica y funcional, características estas últimas que comentaremos más adelante en el curso.";
    box.innerText = "Third Tab content to be displayed here";
    secondP.innerText ="C++ puede crear casi cualquier tipo de programa: juegos, controladores de dispositivos, HPC, nube, escritorio, incrustado, aplicaciones móviles, etc. Incluso hay bibliotecas y compiladores de otros lenguajes de programación escritos en C++.";
};
thirdTab.addEventListener('click',clickThirdTab);

function clickFourthTab(){
    firtP.innerText = "Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML).";
    box.innerText = "Fourth Tab content to be displayed here";
    secondP.innerText = "Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes.";

}
fourthTab.addEventListener('click',clickFourthTab);