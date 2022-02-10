var botonIniciar = document.querySelector('#iniciar-juego');
var botonAgregarPalabra = document.querySelector('#nueva-palabra');
var inputPalabraSecreta = document.querySelector('#input-nueva-palabra');
var palabrasSecretras = ["hola", "mundo", "cochera", "palacio", "murcielago"];

botonIniciar.addEventListener('click', function(){
    crearTablero();
    let palabraSecreta = escogerPalabra();
    console.log(palabraSecreta);
    dibujarLineaLetra(palabraSecreta); 
});

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
function buscaLetra(letra, palabraSecreta) {
    let palabra = palabraSecreta;
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

