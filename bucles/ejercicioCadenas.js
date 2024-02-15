ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    mensajeInversa=recorrerCadenaInversa(mensaje);
    mostrarTexto("lblInversa", mensajeInversa);
}

recorrerCadenaInversa=function(cadena){
    let cadenaInversa="";
    let caracter;
    for(let i=cadena.length-1;i>=0;i--){
        caracter=cadena.charAt(i);
        cadenaInversa=cadenaInversa+caracter;
    }
    return cadenaInversa;
}

recorrerCadena=function(cadena){
    let caracter;

    for(let posicion=0; posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+ caracter+ " posicion "+posicion);
    }

    for(let posicion=0; posicion<cadena.length; posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+ caracter+ " posicion "+posicion);
    }
}