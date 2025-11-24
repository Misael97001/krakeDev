cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

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
            + "<td>" +  elementoCuenta.saldo+ "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función 
    del número de cuenta,
    si existe retorna el objeto cuenta, 
    caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
  for(i=0; i<cuentas.length; i++){
    if(cuentas[i].numeroCuenta==numeroCuenta){
        return cuentas[i];
    }
  }
  return null;
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
         cedula:valorCedula ,
         nombre:valorNombre,
         apellido:valorApellido,
         saldo:valorSaldo,
    };
    //Invoca a agregarCuenta
    agregarCuenta(cuenta);

    //Invoca a mostrarCuentas
    mostrarCuentas();
}
