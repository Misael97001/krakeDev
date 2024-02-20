let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0202140810", nombre: "Misael", apellido: "Chiluisa", sueldo: 10000.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajasTexto();
}

deshabilitarCajasTexto=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");


}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}


mostrarEmpleados = function () {

    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;


}


buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            clienteEncontrado = elementoEmpleado;
            esNuevo = false;
            break;
        } else {
            esNuevo = true;
        }
    }
    return empleadoEncontrado;

}


agregarEmpleado = function (empleado) {
    let resultado;
    resultado = buscarEmpleado(empleados.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        alert("Empleado agregado");
        mostrarEmpleados();
        
        return true;
    } else {
        alert("ya existe el empleado con esa selda" + empleado.cedula);
    } return false;

}

guardar = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    if (validarCedula(valorCedula) &
        validarNombre(valorNombre) &
        validarApellido(valorApellido) &
        validarSueldo(valorSueldo)) {

        let empleadoEncontrado = buscarEmpleado(valorCedula);
        if (esNuevo == true) {
            let empleado = [];

            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            let valorAgregarEmepleado = agregarEmpleado(empleado);
            
            deshabilitarCajasTexto();
        } else {
            alert("Ya existe un empleado con la cedula " + valorCedula)
            
        }

    }

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
    if (!Number.isInteger(sueldo)) {
        if (sueldo >= 400.00 && sueldo <= 500.00) {
            sueldoValido = true;
            mostrarTexto("lblErrorNombre", "");
            return sueldoValido;
        } else {
            mostrarTexto("lblErrorSueldo", "Debe tener entre 400 y 500 ");
            return sueldoValido;
        }
    } else {
        mostrarTexto("lblErrorSueldo", "No es un numero float");
        return false;
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