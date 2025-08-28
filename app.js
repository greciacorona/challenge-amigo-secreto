// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.querySelector('#amigo').value = '';
        actualizaLista();
    }
}

function actualizaLista() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";

    for (var nombres in amigos){
        let lista = document.createElement('li');
        lista.textContent = amigos[nombres];
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("No hay lista de amigos");
    } else {
        let indice =  Math.floor(Math.random()*amigos.length);
        let resultado = document.querySelector('#resultado');
        listaAmigos.innerHTML = '';
        resultado.innerHTML = amigos[indice];
    }
}