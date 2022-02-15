var botonIniciar = document.querySelector('#iniciar-juego');
var botonAgregarPalabra = document.querySelector('#nueva-palabra');
var inputPalabraSecreta = document.querySelector('#input-nueva-palabra');
var palabrasSecretras = ["hola", "mundo", "cochera", "palacio", "murcielago"];
var juegoIniciado = false;
var palabraSecreta = "";
var ahorcado = 0;

var letrasCorrectas = [];
var letrasIncorrectas = [];

botonIniciar.addEventListener('click', function(evento){
    crearTablero();
    palabraSecreta = escogerPalabra();
    dibujarLineaLetra(palabraSecreta); 
    dibujarBase();
    evento.preventDefault();
    juegoIniciado = true;
    console.log(palabraSecreta);
    document.addEventListener('keypress', teclado);
});

function teclado(tecla) {
    dibujarLetra(buscaLetra(tecla.key, palabraSecreta), palabraSecreta);
    if (buscaLetra(tecla.key, palabraSecreta).length == 0) {
        dibujarAhorcado(ahorcado);
        ahorcado++;
    }
}

function dibujarAhorcado(numero) {
    if (numero == 0) {return dibujarMastilVert1(), dibujarMastilHorz(), dibujarMastilVert2();}
    else if (numero == 1) {return dibujarCabeza();}
    else if (numero == 2) {return dibujarCuerpo();}
    else if (numero == 3) {return dibujarBrazo('der');}
    else if (numero == 4) {return dibujarBrazo('izq');}
    else if (numero == 5) {return dibujarPierna('der');}
    else if (numero == 6) {return dibujarPierna('izq');}
    else { alert("perdiste!!!");}
}

botonAgregarPalabra.addEventListener('click', function(evento) {
    palabrasSecretras.push(inputPalabraSecreta.value);
    inputPalabraSecreta.value="";
    //agregar validacion de palabra repetida
});

function escogerPalabra() {
    var indexRandom =  Math.round(Math.random()*(palabrasSecretras.length-1));
    return palabrasSecretras[indexRandom];
}

//Devuelve un array con las posiciones de la letra buscada, si no esta es vacio
function buscaLetra(letra, palabra) {
    let numCar = palabra.length; //longitud del texto
    var lugar = []; //guardo la posicion de la letra
    let posicion = palabra.indexOf(letra); //primera aparición de letra
    let posfinal = palabra.lastIndexOf(letra);
    let palabraDescartada = "";
    posfinal = numCar-posfinal; //posición de la ultima letra 
    while (numCar>=posfinal) {
        posicion = palabra.indexOf(letra); //punto para modificar
        lugar.push(posicion+palabraDescartada.length); // guardo la posicion
        posicion++;
        palabraDescartada = palabraDescartada + palabra.substring(0, posicion); 
        palabra = palabra.substring(posicion); //modificar texto
        numCar -= posicion; // nueva longitud del texto
        }
    return lugar;
} 

