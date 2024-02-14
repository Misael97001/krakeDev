obtenerAleatorio = function () {
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    return numeroAleatorio;
}

generarElemento = function () {
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    if (numeroAleatorio == 1) {
        return "piedra";
    } else if (numeroAleatorio == 2) {
        return "papel";
    } else if (numeroAleatorio == 3) {
        return "tijera";
    }

}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    }else if (eleccionJugador1 == "piedra" && eleccionJugador2 == "papel") {
        return 2;
    } else if (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") {
        return 1;
    } else if (eleccionJugador1 == "papel" && eleccionJugador2 == "tijera") {
        return 2;
    } else if (eleccionJugador2 == "piedra" && eleccionJugador1 == "papel") {
        return 1;
    } else if (eleccionJugador2 == "piedra" && eleccionJugador1 == "tijera") {
        return 2;
    } else if (eleccionJugador2 == "papel" && eleccionJugador1 == "tijera") {
        return 1;
    }
}
generarRuta=function(nombre){
    if(nombre=="tijera"){
        return "./imagenes/tijera.png";
    }else if(nombre=="papel"){
        return "./imagenes/papel.png";
    }else if(nombre=="piedra"){
        return "./imagenes/piedra.png";
    }    
}

