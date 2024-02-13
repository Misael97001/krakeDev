validarEstructura = function (placa) {

    let char1, char2, char3, char4, char5, char6, char7, char8;
    let error = "";
    if (placa.length >= 7 && placa.length <= 8) {

        char1 = esMayuscula(placa.charAt(0));
        char2 = esMayuscula(placa.charAt(1));
        char3 = esMayuscula(placa.charAt(2));
        char4 = esGuion(placa.charAt(3));
        char5 = esDigito(placa.charAt(4));
        char6 = esDigito(placa.charAt(5));
        char7 = esDigito(placa.charAt(6));

        if (char1 == false) {
            error = error + "El primer caracter es una letra Mayuscula. ";
        }
        if (char2 == false) {
            error = error + "El segundo caracter es una letra Mayuscula. ";
        }
        if (char3 == false) {
            error = error + "El tercer caracter es una letra Mayuscula. ";
        }
        if (char4 == false) {
            error = error + "El cuarto caracter debe ser un guion. ";
        }
        if (char5 == false) {
            error = error + "El quinto caracter es un digito. ";
        }
        if (char6 == false) {
            error = error + "El sexto caracter es un digito. ";
        }
        if (char7 == false) {
            error = error + "El septimo caracter es un digito. ";
        }

        if (placa.length == 8) {
            char8 = esDigito(placa.charAt(7));
            if (char8 == false) {
                error = error + "El octavo caracter es un digito. ";
            }
        }
        return error;
    } else {
        return "La placa debe tener entre 7 a 8 digitos"
    }
}


obtenerProvincia = function (placa) {

    if (placa.charAt(0) == "A") {
        return "Azuay";
    }
    else if (placa.charAt(0) == "B") {
        return "Bolivar";
    }
    else if (placa.charAt(0) == "U") {
        return "CAÑAR";
    }
    else if (placa.charAt(0) == "C") {
        return "CARCHI";
    }
    else if (placa.charAt(0) == "X") {
        return "COTOPAXI";
    }
    else if (placa.charAt(0) == "H") {
        return "CHIMBORAZO";
    }
    else if (placa.charAt(0) == "O") {
        return "EL ORO";
    }
    else if (placa.charAt(0) == "E") {
        return "ESMERALDAS";
    }
    else if (placa.charAt(0) == "W") {
        return "GALAPAGOS";
    }
    else if (placa.charAt(0) == "G") {
        return "GUAYAS";
    }
    else if (placa.charAt(0) == "I") {
        return "IMBABURA";
    }
    else if (placa.charAt(0) == "L") {
        return "LOJA";
    }
    else if (placa.charAt(0) == "R") {
        return "LOS RIOS";
    }
    else if (placa.charAt(0) == "M") {
        return "MANABI";
    }
    else if (placa.charAt(0) == "V") {
        return "MORONA SANTIAGO";
    }
    else if (placa.charAt(0) == "N") {
        return "NAPO";
    }
    else if (placa.charAt(0) == "S") {
        return "PASTAZA";
    }
    else if (placa.charAt(0) == "P") {
        return "PICHINHA";
    }
    else if (placa.charAt(0) == "K") {
        return "SUCUMBIOS";
    }
    else if (placa.charAt(0) == "Q") {
        return "ORELLANA";
    }
    else if (placa.charAt(0) == "T") {
        return "TUNGURAHUA";
    }
    else if (placa.charAt(0) == "Z") {
        return "ZAMORA CHIMCHIPE";
    }
    else if (placa.charAt(0) == "Y") {
        return "SANTA ELENA";
    } else {
        return "";
    }

}



obtenerDiaPicoYPlaca = function (placa) {
    let ultimoDigito = placa.charAt(placa.length - 1);
    if (ultimoDigito == "1" || ultimoDigito == "2") {
        return "El día que tiene pico y placa es: Lunes ";
    }else if (ultimoDigito == "1" || ultimoDigito == "2") {
        return "El día que tiene pico y placa es: Lunes ";
    } else if (ultimoDigito == "3" || ultimoDigito == "4") {
        return "El día que tiene pico y placa es: Martes ";
    } else if (ultimoDigito == "5" || ultimoDigito == "6") {
        return "El día que tiene pico y placa es: Miercoles ";
    } else if (ultimoDigito == "7" || ultimoDigito == "8") {
        return "El día que tiene pico y placa es: Jueves ";
    } else if (ultimoDigito == "9" || ultimoDigito == "0") {
        return "El día que tiene pico y placa es: Viernes ";
    }else{
        return "No tiene ultimo digito ";
    }
}



limpiar=function(){
    mostrarTexto("lblValidar","");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblPicoYPlaca","");
    mostrarTextoEnCaja ("txtPlaca", "");
}