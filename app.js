// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo
let amigos = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        console.log(amigo);
        asignarTextoElemento('ul', amigo);
        limpiarCaja();
    }

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
    
}

//asignarTextoElemento('ul', 'Grecia');