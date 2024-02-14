validarPlaca = function () {
    let placa = recuperarTexto("txtPlaca");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == "") {
        mostrarTexto("lblValidar", "VALIDA");
        mostrarTexto("lblErrores", erroresEstructura);
    } else {
        mostrarTexto("lblValidar", "INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura);
    }

    let provincia = obtenerProvincia(placa);
    if (provincia != "") {
        mostrarTexto("lblProvincia", provincia);
    } else {
        mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
    }

    let tipoVehiculo = obtenerTipoVehiculo(placa);
    if (tipoVehiculo != null) {
        mostrarTexto("lblTipoVehiculo", tipoVehiculo);
    } else {
        mostrarTexto("lblTipoVehiculo", "tipo de vehiculo incorrecto");
    }

    let picoYPlaca = obtenerDiaPicoYPlaca(placa);
    mostrarTexto("lblPicoYPlaca", picoYPlaca);
}

obtenerTipoVehiculo = function (placa) {
    if (placa.charAt(1) == "A" || placa.charAt(1) == "Z") {
        return "Vehículos comerciales";
    } else if (placa.charAt(1) == "E") {
        return "Vehículos gubernamentales";
    } else if (placa.charAt(1) == "X") {
        return "Vehículos de uso oficial";
    } else if (placa.charAt(1) == "S") {
        return "Vehículos del gobierno provicional";
    } else if (placa.charAt(1) == "M") {
        return "Vehículos municipales";
    } else {
        return "vehiculo particular";
    }
}