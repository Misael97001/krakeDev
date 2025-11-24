movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

cargar=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

filtrarMovimientos=function(){
    let numeroCuenta = recuperarInt("txtNumeroCuentaMovimientos");
    let movimientosCuenta=[];
    //Se barre el arreglo de movimientos
     for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(movimientos[i]);
        }
    }
    //En cada iteración, verifica si el numero de cuenta del 
    // movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
    
    mostrarMovimientos(movimientosCuenta);

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

        // Si es débito, el monto va en negativo
        if (mov.tipo == "D") {
            montoMostrar = mov.monto * -1;
        } else {
            montoMostrar = mov.monto;
        }

        // Construcción de una fila en la tabla
        contenido +=
            "<tr>" +
            "<td>" + mov.numeroCuenta + "</td>" +
            "<td>" + montoMostrar + "</td>" +
            "<td>" + mov.tipo + "</td>" +
            "</tr>";
    }

    contenido += "</table>";

    document.getElementById("tablaMovimientos").innerHTML = contenido;

}

