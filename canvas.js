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

function dibujarLineaLetra(palabra) {
    var pos = 300;
    for (var i=0; i < palabra.length; i++){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(pos, 600);
        pincel.lineTo((pos + 50), 600);
        pincel.stroke();
        pos = pos + 70; // dejo un espacio en blanco para el siguiente guion
    }
}