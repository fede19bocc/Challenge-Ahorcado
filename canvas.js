var pantalla = document.querySelector('#ahorcado');
// Oculto canvas hasta que inicia juego
pantalla.style.display = 'none';
var pincel = pantalla.getContext("2d");
pincel.font="bold 60px arial";


function crearTablero() {
    pincel.fillStyle = "lightgrey"
    pincel.fillRect(0,0,1200,800);
    
    // Muestra canvas al click del boton
    if (pantalla.style.display == 'none') {
        pantalla.style.display = 'block';
    } else {
        pantalla.style.display = 'none';
    }
    pincel.fillStyle = "black"; // color del trazo para dibujo y letras
}

function dibujarLineaLetra(palabra) {
    var pos = 320;
    for (var i=0; i < palabra.length; i++){
        pincel.beginPath();
        pincel.moveTo(pos, 600);
        pincel.lineTo((pos + 50), 600);
        pincel.stroke();
        pos = pos + 70; // dejo un espacio en blanco para el siguiente guion
    }
}

function dibujarLetra(indexLetra, palabraSecreta) {
    var posX = 325;
    var i = 0;
    while (indexLetra.length>i) {
        pincel.beginPath();
        let posInicial = posX + (70* indexLetra[i]);
        pincel.moveTo(posInicial, 600);
        pincel.fillText(palabraSecreta.charAt(indexLetra[i]), posInicial, 600);
        i++;
    } 
}

// Funciones que dibujan por partes la base y el cuerpo del ahorcado
function dibujarBase() {
    pincel.strokeRect (10,500, 280, 100);
}

function dibujarMastilVert1() {
    pincel.beginPath();
    pincel.moveTo(145, 500);
    pincel.lineTo(145, 100);
    pincel.stroke();
}

function dibujarMastilHorz() {
    pincel.beginPath();
    pincel.moveTo(145, 100);
    pincel.lineTo(300, 100);
    pincel.stroke();
}

function dibujarMastilVert2() {
    pincel.beginPath();
    pincel.moveTo(300, 100);
    pincel.lineTo(300, 150);
    pincel.stroke();
}

function dibujarCabeza() {
    pincel.beginPath()
    pincel.arc(300, 175, 25, 0, Math.PI * 2);
    pincel.stroke()
}

function dibujarCuerpo() {
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(300, 215);
    pincel.stroke();
    pincel.strokeRect(270,215,60,100)
}

function dibujarBrazo(cual) {
    var posX = 0;
    if (cual == 'der') {
        posX = 330;
    }  else {
        posX = 270;
    }
    pincel.beginPath();
    pincel.moveTo(posX, 225);
    if (cual == 'der') {
        pincel.lineTo(posX + 20, 290);
        pincel.moveTo(posX + 20, 290);
        pincel.arc(posX + 25, 295, 5, 0, Math.PI *2);
        pincel.stroke();
    } else {
        pincel.lineTo(posX - 20, 290);
        pincel.moveTo(posX - 20, 290);
        pincel.arc(posX - 25, 295, 5, 0, Math.PI *2);
        pincel.stroke();
    }
}

function dibujarPierna (cual) {
    var posX = 0;
    if (cual == 'der') {
        posX = 320;
    }  else {
        posX = 280;
    }
    pincel.beginPath();
    pincel.moveTo(posX, 315);
    if (cual == 'der') {
        pincel.lineTo(posX, 415);
        pincel.moveTo(posX, 415);
        pincel.arc(posX, 420, 5, 0, Math.PI *2);
        pincel.stroke();
    } else {
        pincel.lineTo(posX, 415);
        pincel.moveTo(posX, 415);
        pincel.arc(posX, 420, 5, 0, Math.PI *2);
        pincel.stroke();
    }
}