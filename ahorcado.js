var botonIniciar = document.querySelector('#iniciar-juego');

botonIniciar.addEventListener('click', function(evento){
    pincel.fillStyle = "lightgrey"
    pincel.fillRect(0,0,800,1200);
    
    // Muestra canvas al click del boton
    if (pantalla.style.display == 'none') {
        pantalla.style.display = 'block';
    } else {
        pantalla.style.display = 'none';
    }
});