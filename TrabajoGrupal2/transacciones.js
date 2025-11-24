cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");

}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    for (i = 0; i < cuentas.length; i++) {
        if (cuentas[i].numeroCuenta == numeroCuenta) {
            return cuentas[i];
        }
    }
    return null;
}


ejecutarBusqueda = function () {

    // toma el número de cuenta de la caja de texto
    let numeroCuenta = recuperarTexto("txtNumeroCuentaTrans");

    // invoca a buscarCuenta y guarda el resultado
    let cuenta = buscarCuenta(numeroCuenta);

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
    let numeroCuenta=recuperarInt("txtNumeroCuentaTrans")
    //Toma el monto ingresado en la caja de texto
    let monto=recuperarInt("txtMonto");
    //invoca a depositar

    depositar(numeroCuenta, monto);
    let cuentaAfectada=buscarCuenta(numeroCuenta);
    //Muestra un mensaje TRANSACCION EXITOSA
    alert("TRANSACCIÓN EXITOSA");
    //Muestra en pantalla el nuevo saldo de la cuenta
    document.getElementById("lblSaldo").innerHTML = "$" + cuentaAfectada.saldo;
}

depositar = function (numeroCuenta, monto) {
    let cuentaAfectada;
    //invoca a buscarCuenta, 
    // guarda el resultado en la variable 
    // cuentaAfectada;
    cuentaAfectada = buscarCuenta(numeroCuenta);
    //Al saldo actual de la cuenta afectada,
    //  le suma el monto que recibe como parámetro
    cuentaAfectada.saldo = cuentaAfectada.saldo + monto;
}

retirar = function (numeroCuenta, monto) {
  let cuentaAfectada= buscarCuenta(numeroCuenta);
    
    //Valida si la cuenta tiene el saldo suficiente 
    // para retirar el monto
    if (cuentaAfectada.saldo >= monto) {
        //Si el saldo es suficiente,al saldo actual de la cuenta afectada,
        //  le resta el monto que recibe como parámetro
        cuentaAfectada.saldo = cuentaAfectada.saldo - monto;
        //Si logra retirar muestra un mensaje TRANSACCION 
        // EXITOSA y muestra en pantalla el nuevo saldo de 
        // la cuenta
        alert(("TRANSACCIÓN EXITOSA"))
        document.getElementById("lblSaldo").innerHTML="$ "+cuentaAfectada.saldo;
    } else {

        //Si el saldo no es suficiente, 
        // muestra un alert SALDO INSUFICIENTE
        alert("SALDO INSUFICIENTE");

    }

}

ejecutarRetiro=function(){
    let numeroCuenta=recuperarInt("txtNumeroCuentaTrans");
   
    let valorMonto=recuperarFloat("txtMonto");
    //invoca a buscarCuenta, guarda el resultado 
    // en la variable cuentaAfectada;
    retirar(numeroCuenta,valorMonto);
}
