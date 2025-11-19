
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



recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}


recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.textContent;
    return valorIngresado;
}

recuperarIntDiv = function (idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorDiv);
    return valorEntero;
}

recuperarFloatDiv = function (idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorFloat = parseFloat(valorDiv);
    return valorFloat;
}

mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}



validarNombre = function (nombre) {
    let nombreValido = false;
    if (nombre.length >= 3) {
        mostrarTexto("lblErrorNombre", "");
        return nombreValido = true;
    } else {
        mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres ");
        return nombreValido;
    }
}

validarEdad = function (edad) {
    let edadValida = false;
    if (edad >= 0 && edad <= 100) {
        edadValida = true;
        mostrarTexto("lblErrorEdad", "");
        return edadValida;
    } else {
        mostrarTexto("lblErrorEdad", "Debe tener entre 0 y 100 ");
        return edadValida;
    }
}
