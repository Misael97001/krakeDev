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
            let valorAgregarEmepleado = agregarEmpleado(empleado);

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


limpiar=function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
    deshabilitarCajasTexto();
}

buscarPorRol=function(){
    let cedulaBuscar=recuperarTexto("txtBusquedaCedulaRol");
    let empleadoBuscado=buscarEmpleado(cedulaBuscar);
    if(empleadoBuscado!=null){
        mostrarTexto("infoCedula",empleadoBuscado.cedula);
        mostrarTexto("infoNombre",empleadoBuscado.nombre+" "+empleadoBuscado.apellido);
        mostrarTexto("infoSueldo",empleadoBuscado.sueldo);

    }else{
        alert("No existe el empleado");
    }
}

calcularAporteEmpleado=function(sueldo){
    return sueldo*(9.45/100);
}
calcularValorAPagar=function(sueldo,aporte,descuento){
   return (sueldo-aporte-descuento);
}

calcularRol=function(){
    let sueldoEmmpleado=recuperarFloatDiv("infoSueldo");
    let descuentoEmpleado=recuperarFloat("txtDescuentos");
    if(descuentoEmpleado>=0 && descuentoEmpleado<=sueldoEmmpleado){
       let aporteEmpleado=calcularAporteEmpleado(sueldoEmmpleado);
       mostrarTexto("infoIESS",aporteEmpleado.toFixed(2));
      let valorAPagar=calcularValorAPagar(sueldoEmmpleado,descuentoEmpleado,aporteEmpleado);
      mostrarTexto("infoPago",valorAPagar);
    }
}