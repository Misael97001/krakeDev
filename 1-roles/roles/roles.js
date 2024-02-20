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
    deshabilitarComponente("botonGuardarRol");
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
      habilitarComponente("botonGuardarRol");
      
    }
}

let roles=[];
let rol={ }

buscarRol = function (cedula) {
    let elementoRol;
    let RolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        if (elementoRol.cedula == cedula) {
            RolEncontrado = elementoRol;
            esNuevo = true;
            break;
        } else {
            esNuevo = false;
        }
    }
    return RolEncontrado;

}


agregarRol = function (rol) {
    let resultado;
    resultado = buscarRol(roles.cedula);
    if (resultado == null) {
        roles.push(rol);
        alert("rol agregado");
        mostrarRoles();

        return true;
    } else {
        alert("ya existe el rol con esa selda" + rol.cedula);
    } return false;
}

calcularAporteEmpleador=function(sueldo){
    return((11.15/100)*sueldo);
}


guardarRol = function () {

    let valorCedula = recuperarTextoDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorEmpleado=recuperarFloatDiv("infoIESS")
    
    let valorAporteEmpleador=calcularAporteEmpleador(valorSueldo);
    let rol={ 
        cedula:valorCedula,
        nombre:valorNombre,
        sueldo:valorSueldo,
        aporteEmpleado: valorEmpleado,
        aporteEmpleador:valorAporteEmpleador,

     };
     agregarRol(rol);
     alert("Exito");
     deshabilitarComponente("botonGuardarRol");
}



/*
buscarRol=function(cedula){
    buscarPorRol=function(){
        let cedulaBuscar=recuperarTexto("txtBusquedaCedulaRol");
        let empleadoBuscado=buscarEmpleado(cedula);
        if(empleadoBuscado!=null){
            mostrarTexto("infoCedula",empleadoBuscado.cedula);
            mostrarTexto("infoNombre",empleadoBuscado.nombre+" "+empleadoBuscado.apellido);
            mostrarTexto("infoSueldo",empleadoBuscado.sueldo);
    
        }else{
            alert("No existe el empleado");
        }
    }
        

}*/

agregarRol=function(rolNuevo){

    if(rolNuevo.cedula==roles.cedula){

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