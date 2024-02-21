
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}



recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

 
recuperarTextoDiv=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.textContent;
    return valorIngresado;
}

recuperarIntDiv=function(idComponente){
    let valorDiv=recuperarTextoDiv(idComponente);
    let valorEntero=parseInt(valorDiv);
    return valorEntero;
}

recuperarFloatDiv=function(idComponente){
    let valorDiv=recuperarTextoDiv(idComponente);
    let valorFloat=parseFloat(valorDiv);
    return valorFloat;
}

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}







validarCedula = function (cedula) {
    let cedulaValida = false;
    if (cedula.length == 10) {
        for (let i = 0; i < cedula.length; i++) {
            cedulaValida = esDigito(cedula.charAt(i));
            if (cedulaValida == false) {
                mostrarTexto("lblErrorCedula", "Todos los numeros deben ser digitos");
                return cedulaValida;
            }
        }
    } else {
        mostrarTexto("lblErrorCedula", "Debe tener 10 digitos");
        return cedulaValida;
    }
    mostrarTexto("lblErrorCedula", "");
    return cedulaValida;
}

validarNombre = function (nombre) {
    let nombreValido = false;
    if (nombre.length >= 3) {
        for (let i = 0; i < nombre.length; i++) {
            nombreValido = esMayuscula(nombre.charAt(i));
            if (nombreValido == false) {
                mostrarTexto("lblErrorNombre", "Todo debe ser mayuscula");
                return nombreValido;
            }
        }
    } else {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres ");
        return nombreValido;
    }
    mostrarTexto("lblErrorNombre", "");
    return nombreValido;
}



validarApellido = function (apellido) {
    let apellidoValido = false;
    if (apellido.length >= 3) {
        for (let i = 0; i < apellido.length; i++) {
            apellidoValido = esMayuscula(apellido.charAt(i));
            if (apellidoValido == false) {
                mostrarTexto("lblErrorApellido", "Todo debe ser mayuscula");
                return apellidoValido;
            }
        }
    } else {
        mostrarTexto("lblErrorApellido", "Debe tener al menos 3 caracteres ");
        return apellidoValido;
    }
    mostrarTexto("lblErrorApellido", "");

    return apellidoValido;
}

validarSueldo = function (sueldo) {
    let sueldoValido = false;
    if (sueldo >= 400 && sueldo <= 500) {
        sueldoValido = true;
        mostrarTexto("lblErrorNombre", "");
        return sueldoValido;
    } else {
        mostrarTexto("lblErrorSueldo", "Debe tener entre 400 y 500 ");
        return sueldoValido;
    }
}

esMayuscula = function (caracter) {
    let codigoLetra = caracter.charCodeAt(0);
    if (codigoLetra >= 65 && codigoLetra <= 90) {
        return true;
    } else {
        return false;
    }
}


esDigito = function (caracter) {
    let codigoLetra = caracter.charCodeAt(0);
    if (codigoLetra >= 48 && codigoLetra <= 57) {
        return true;
    } else {
        return false;
    }
}