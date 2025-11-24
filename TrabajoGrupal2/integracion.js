// ===============================================
// ARREGLOS GLOBALES (Consolidado de cuentas.js y movimientos.js)
// ===============================================
cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

// ===============================================
// FUNCIONES DE NAVEGACIÓN (Consolidado de cargar)
// ===============================================

cargar = function () {
    // Inicializa la pantalla mostrando la sección de CUENTAS
    mostrarSeccion("divCuentas");
}

mostrarSeccion = function (idSeccion) {
    // Oculta todas las secciones
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
    // Muestra la sección solicitada
    mostrarComponente(idSeccion);
    
    // Lógica adicional para inicialización de pestañas
    if (idSeccion === "divCuentas") {
        mostrarCuentas();
    }
    
    if (idSeccion === "divTransacciones") {
        deshabilitarComponente("btnDepositar");
        deshabilitarComponente("btnRetirar");
        deshabilitarComponente("txtMonto"); 
    }
}

/*
    Busca la cuenta en el arreglo en función 
    del número de cuenta,
    si existe retorna el objeto cuenta, 
    caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    for (i = 0; i < cuentas.length; i++) {
        if (cuentas[i].numeroCuenta == numeroCuenta) {
            return cuentas[i];
        }
    }
    return null;
}

// ===============================================
// FUNCIONES DE CUENTAS (Desde cuentas.js)
// ===============================================

/*
        Muestra en pantalla una tabla con 
        la información de todas las cuentas
        del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre 
        y el apellido
    */
mostrarCuentas=function(){
   
    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla = "<table><tr>" +
        "<th>Número de cuenta</th>" +
        "<th>Nombre</th>" +
        "<th>Saldo</th>" +
        "</tr>";

    let elementoCuenta;

    for (let i = 0; i < cuentas.length; i++) {

        elementoCuenta = cuentas[i];
        contenidoTabla +=
            "<tr><td>" + elementoCuenta.numeroCuenta + "</td>"
            + "<td>" +  elementoCuenta.nombre+" "+elementoCuenta.apellido + "</td>"
            + "<td>" + elementoCuenta.saldo + "</td>" 
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Agrega una cuenta al arreglo, 
    solamente si no existe otra 
    cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    let encontrada=buscarCuenta(cuenta.numeroCuenta);
    if(encontrada !=null){
        alert ("Cuenta Existente");
        return;
    }else{
        cuentas.push(cuenta);
        alert ("Cuenta Agregada");
    }
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){

    //Toma los valores de las cajas de texto, sin validaciones

    let valorNumeroCuenta= recuperarTexto("txtNumeroCuenta");
    let valorCedula= recuperarInt("txtCedula");
    let valorNombre= recuperarTexto("txtNombre");
    let valorApellido= recuperarTexto("txtApellido");
    let valorSaldo= recuperarFloat("txtSaldo");
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    
    let cuenta= {
         numeroCuenta:valorNumeroCuenta,
         cedula:valorCedula,
         nombre:valorNombre,
         apellido:valorApellido,
         saldo:valorSaldo,
    };
    //Invoca a agregarCuenta
    agregarCuenta(cuenta);

    //Invoca a mostrarCuentas
    mostrarCuentas();
}

// ===============================================
// FUNCIONES DE TRANSACCIONES (Desde transacciones.js + Lógica de Movimientos)
// ===============================================

ejecutarBusqueda = function () {

    // toma el número de cuenta de la caja de texto
    let numeroCuenta = recuperarTexto("txtNumeroCuentaTrans");

    // invoca a buscarCuenta y guarda el resultado
    let cuenta = buscarCuenta(numeroCuenta);

    // Limpiar etiquetas y deshabilitar botones
    document.getElementById("lblNombre").innerHTML = "";
    document.getElementById("lblSaldo").innerHTML = "";
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
    deshabilitarComponente("txtMonto");


    //Si el resultado es diferente de null, 
    if (cuenta != null) {

        // muestra en pantalla, caso contrario 
        document.getElementById("lblNombre").innerHTML =
            cuenta.nombre + " " + cuenta.apellido;

        document.getElementById("lblSaldo").innerHTML =
            "$ " + cuenta.saldo;

        // habilitar botones y caja de monto
        habilitarComponente("btnDepositar");
        habilitarComponente("btnRetirar");
        habilitarComponente("txtMonto");

    } else {

        // muestra un alert
        alert("CUENTA INEXISTENTE");
    }
}

ejecutarDeposito = function () {
    //Toma el numero de cuenta ingresado en 
    // la caja de texto
    let numeroCuenta = recuperarTexto("txtNumeroCuentaTrans");
    //Toma el monto ingresado en la caja de texto
    let monto = recuperarFloat("txtMonto");
    
    // Validar monto
    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido para depositar.");
        return;
    }

    //invoca a depositar
    depositar(numeroCuenta, monto);
    let cuentaAfectada = buscarCuenta(numeroCuenta);
    
    //Muestra un mensaje TRANSACCION EXITOSA
    alert("TRANSACCIÓN EXITOSA");
    
    //Muestra en pantalla el nuevo saldo de la cuenta
    document.getElementById("lblSaldo").innerHTML = "$" + cuentaAfectada.saldo;
    mostrarTextoEnCaja("txtMonto", ""); // Limpiar monto
}

depositar = function (numeroCuenta, monto) {
    let cuentaAfectada;
    //invoca a buscarCuenta, 
    // guarda el resultado en la variable 
    // cuentaAfectada;
    cuentaAfectada = buscarCuenta(numeroCuenta);
    
    //Al saldo actual de la cuenta afectada,
    //  le suma el monto que recibe como parámetro
    if (cuentaAfectada != null) {
        cuentaAfectada.saldo = cuentaAfectada.saldo + monto;
        
        // **LÓGICA DE REGISTRO DE MOVIMIENTO (CRÉDITO)**
        let movimiento = {
            numeroCuenta: numeroCuenta,
            monto: monto,
            tipo: "C" // C: CRÉDITO
        };
        movimientos.push(movimiento);
    }
}

retirar = function (numeroCuenta, monto) {
    let cuentaAfectada = buscarCuenta(numeroCuenta);

    //Valida si la cuenta tiene el saldo suficiente 
    // para retirar el monto
    if (cuentaAfectada != null) {
        if (cuentaAfectada.saldo >= monto) {
            //Si el saldo es suficiente,al saldo actual de la cuenta afectada,
            //  le resta el monto que recibe como parámetro
            cuentaAfectada.saldo = cuentaAfectada.saldo - monto;
            
            // **LÓGICA DE REGISTRO DE MOVIMIENTO (DÉBITO)**
            let movimiento = {
                numeroCuenta: numeroCuenta,
                monto: monto,
                tipo: "D" // D: DÉBITO
            };
            movimientos.push(movimiento);

            //Si logra retirar muestra un mensaje TRANSACCION 
            // EXITOSA y muestra en pantalla el nuevo saldo de 
            // la cuenta
            alert(("TRANSACCIÓN EXITOSA"))
            document.getElementById("lblSaldo").innerHTML = "$ " + cuentaAfectada.saldo;
        } else {
            //Si el saldo no es suficiente, 
            // muestra un alert SALDO INSUFICIENTE
            alert("SALDO INSUFICIENTE");
        }
    }
}

ejecutarRetiro=function(){
    let numeroCuenta=recuperarTexto("txtNumeroCuentaTrans"); 
    let valorMonto=recuperarFloat("txtMonto");

    // Validar monto
    if (isNaN(valorMonto) || valorMonto <= 0) {
        alert("Ingrese un monto válido para retirar.");
        return;
    }

    //invoca a buscarCuenta, guarda el resultado 
    // en la variable cuentaAfectada;
    retirar(numeroCuenta, valorMonto);
    mostrarTextoEnCaja("txtMonto", ""); // Limpiar monto
}

// ===============================================
// FUNCIONES DE MOVIMIENTOS (Desde movimientos.js)
// ===============================================

filtrarMovimientos=function(){
    let numeroCuenta = recuperarTexto("txtNumeroCuentaMovimientos"); 
    let movimientosCuenta=[];
    
    //Se barre el arreglo de movimientos
     for (let i = 0; i < movimientos.length; i++) {
        //En cada iteración, verifica si el numero de cuenta del 
        // movimiento es igual al que recibe como parametro
        if (movimientos[i].numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(movimientos[i]);
        }
    }
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
    if (movimientosCuenta.length > 0) {
        mostrarMovimientos(movimientosCuenta);
    } else {
        document.getElementById("tablaMovimientos").innerHTML = "No se encontraron movimientos para esta cuenta.";
    }
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO

      let contenido = "<table border='1' cellpadding='5'>";
    contenido += "<tr><th>CUENTA</th><th>MONTO</th><th>OPERACIÓN</th></tr>";

    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)

    for (let i = 0; i < misMovimientos.length; i++) {
        let mov = misMovimientos[i];

        // Aquí guardaremos el monto que se mostrará
        let montoMostrar;
        let tipoOperacion;

        // Si es débito, el monto va en negativo
        if (mov.tipo == "D") {
            montoMostrar = mov.monto * -1;
            tipoOperacion = "DÉBITO";
        } else {
            montoMostrar = mov.monto;
            tipoOperacion = "CRÉDITO";
        }

        // Construcción de una fila en la tabla
        contenido +=
            "<tr>" +
            "<td>" + mov.numeroCuenta + "</td>" +
            "<td>" + montoMostrar.toFixed(2) + "</td>" 
            +
            "<td>" + tipoOperacion + "</td>" +
            "</tr>";
    }

    contenido += "</table>";

    document.getElementById("tablaMovimientos").innerHTML = contenido;

}