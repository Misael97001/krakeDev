let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0202140810", nombre: "Misael", apellido: "Chiluisa", sueldo: 10000.0 }

]


let roles = [];
let rol = {};

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajasTexto();
}

deshabilitarCajasTexto = function () {
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
    deshabilitarComponente("botonGuardarRol");
    mostrarRoles();
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

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(valorCedula);
    if (empleado == null) {
        alert("Empleado no existe");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        deshabilitarComponente("txtCedula");
    }
}


buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            esNuevo = true;
            break;
        } else {
            esNuevo = false;
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

        buscarEmpleado(valorCedula);
        if (esNuevo == false) {
            let empleado = [];

            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            agregarEmpleado(empleado);

            deshabilitarCajasTexto();
            esNuevo = false;
        } else {
            let empleadoEncontrado = buscarEmpleado(valorCedula);
            if (empleadoEncontrado != null) {
                empleadoEncontrado.nombre = valorNombre;
                empleadoEncontrado.apellido = valorApellido;
                empleadoEncontrado.sueldo = valorSueldo;
                mostrarEmpleados();
                deshabilitarCajasTexto();
                alert("EMPLEADO MODIFICADO EXITOSAMENTE ");
            }
        }

    }

}


limpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitarCajasTexto();
}



calcularAporteEmpleado = function (sueldo) {
    return sueldo * (9.45 / 100);
}
calcularValorAPagar = function (sueldo, aporte, descuento) {
    return (sueldo - aporte - descuento);
}

calcularRol = function () {
    let sueldoEmmpleado = recuperarFloatDiv("infoSueldo");
    let descuentoEmpleado = recuperarFloat("txtDescuentos");
    if (descuentoEmpleado >= 0 && descuentoEmpleado <= sueldoEmmpleado) {
        let aporteEmpleado = calcularAporteEmpleado(sueldoEmmpleado);
        mostrarTexto("infoIESS", aporteEmpleado.toFixed(2));
        let valorAPagar = calcularValorAPagar(sueldoEmmpleado, descuentoEmpleado, aporteEmpleado);
        mostrarTexto("infoPago", valorAPagar);
        habilitarComponente("botonGuardarRol");

    }
}



buscarPorRol = function () {
    let cedulaBuscar = recuperarTexto("txtBusquedaCedulaRol");
    let rolBuscado = buscarEmpleado(cedulaBuscar);
    if (rolBuscado != null) {
        mostrarTexto("infoCedula", rolBuscado.cedula);
        mostrarTexto("infoNombre", rolBuscado.nombre + " " + rolBuscado.apellido);
        mostrarTexto("infoSueldo", rolBuscado.sueldo);

    } else {
        alert("No existe el empleado");
    }
}

buscarRol = function (cedula) {
    let elementoRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        if (elementoRol.cedula == cedula) {
            rolEncontrado = elementoRol;
        } else {
        }
    }
    return rolEncontrado;

}


agregarRol = function (rol) {
    let resultado;
    resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        
        roles.push(rol);
        alert("rol agregado");
        mostrarRoles();
        return true;
    } else {
        alert("ya existe el rol con esa selda" + rol.cedula);
    } return false;
}

calcularAporteEmpleador = function (sueldo) {
    return ((11.15 / 100) * sueldo);
}


guardarRol = function () {

    let valorCedula = recuperarTextoDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoPago");
    let valorEmpleado = recuperarFloatDiv("infoIESS")
    let valorAporteEmpleador = calcularAporteEmpleador(valorSueldo);    
    let rol = {
        cedula: valorCedula,
        nombre: valorNombre,
        sueldo: valorSueldo,
        aporteEmpleado: valorEmpleado,
        aporteEmpleador: valorAporteEmpleador,
    };
    agregarRol(rol);
    alert("Exito");
    deshabilitarComponente("botonGuardarRol");
    mostrarRoles();
}

mostrarRoles = function () {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    let elementoRol;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>"
            + "<td>" + elementoRol.nombre + "</td>"
            + "<td>" + elementoRol.sueldo + "</td>"
            + "<td>" + elementoRol.aporteEmpleado + "</td>"
            + "<td>" + elementoRol.aporteEmpleador + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    mostrarTotales();
}

mostrarTotales=function(){

    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;

    for(let i=0; i<roles.length;i++){
        let resultado=roles[i]
        totalAPagar+= totalEmpleado+resultado.sueldo;

        totalEmpleado+= totalEmpleado+resultado.aporteEmpleado;
        totalEmpleador+= totalEmpleador+resultado.aporteEmpleador;

    }

    let totalNomina=totalEmpleado+totalEmpleador+totalAPagar;

    mostrarTexto("infoTotalPago",totalAPagar);
    mostrarTexto("infoAporteEmpresa",totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado",totalEmpleado.toFixed(2));
    mostrarTexto("infoTotalNomina",totalNomina.toFixed(2));
}
