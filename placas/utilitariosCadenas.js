
esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=65 && codigoLetra<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=97 && codigoLetra<=122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=48 && codigoLetra<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra==45){
        return true;
    }else{
        return false;
    }
}



mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}


