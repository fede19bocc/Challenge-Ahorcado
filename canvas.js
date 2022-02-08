var pantalla = document.querySelector('#ahorcado');
// Oculto canvas hasta que inicia juego
pantalla.style.display = 'none';
var pincel = pantalla.getContext("2d");

function crearTablero() {
    pincel.fillStyle = "lightgrey"
    pincel.fillRect(0,0,800,1200);
    
    // Muestra canvas al click del boton
    if (pantalla.style.display == 'none') {
        pantalla.style.display = 'block';
    } else {
        pantalla.style.display = 'none';
    }
}

function dibujarLineaLetra() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(700, 600);
    pincel.lineTo(750, 600);
    pincel.stroke();
}