let puntoUsuario=0;
let puntoComputador=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
    let rutaImagen=generarRuta(elemento);
    mostrarImagen("imgComputador",rutaImagen);
    let ganador=determinarGanador(seleccionado,elemento);
    if(ganador==0){
        mostrarTexto("lblGanador","EMPATE");
    } else if(ganador==1){
        mostrarTexto("lblGanador","GANA EL USUARIO");
        puntoUsuario=puntoUsuario+1;
        mostrarTexto("lblPuntajeUsuario",puntoUsuario);
    }else if(ganador==2){
        mostrarTexto("lblGanador","GANA EL COMPUTADOR");
        puntoComputador=puntoComputador+1;
        mostrarTexto("lblPuntajeComputador",puntoComputador);
     
    }
    if(puntoUsuario==5){
     mostrarTexto("lblGanadorJuego","Haz ganado el juego");
    }
    if(puntoComputador==5){
        mostrarTexto("lblGanadorJuego","Haz perdido el juego");
    }
}

limpiar=function(){
    mostrarImagen("imgComputador","");
    mostrarTexto("lblGanador","");
    mostrarTexto("lblPuntajeUsuario","");
    mostrarTexto("lblPuntajeComputador","");
    mostrarTexto("lblGanadorJuego","");
    puntoUsuario=0;
    puntoComputador=0;
}