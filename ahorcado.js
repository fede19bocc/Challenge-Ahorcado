var botonIniciar = document.querySelector('#iniciar-juego');
var botonAgregarPalabra = document.querySelector('#nueva-palabra');
var inputPalabraSecreta = document.querySelector('#input-nueva-palabra');
var palabrasSecretras = [];

botonIniciar.addEventListener('click', function(){
    crearTablero();
});

botonAgregarPalabra.addEventListener('click', function(evento) {
    palabrasSecretras.push(inputPalabraSecreta.value);
    //agregar validacion de palabra repetida
});

function escogerPalabra() {
    var indexRandom =  Math.round(Math.random()*(palabrasSecretras.length-1));
    return palabrasSecretras[indexRandom];
}

