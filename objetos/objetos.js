probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "Atun",
        precio: 2.50,
        stock: 10
    }

    let producto2 = {
        nombre: "Sardina",
        precio: 1.40,
        stock: 20
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if (producto1.stock > producto2.stock) {
        console.log("EL PRODUCTO 1 TIENE MAYOR STOCK");
    } else if (producto2.stock > producto1.stock) {
        console.log("EL PRODUCTO 2 TIENE MAYOR STOCK");
    } else if (producto2.stock == producto1.stock) {
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK");
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "405262626",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"123456123",
        nombre: "Juan"
    }
    let cliente1={};
        cliente1.nombre="Romel";
        cliente1.apellido="Salcedo";
        cliente1.cedula="123";
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad) {
        return persona2;    
    }else{
        return null;
    }
}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniela",edad:45}
    let per2={nombre:"Luisa",edad:48}
    let mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es "+mayor.nombre);
    }
}
probarIncrementarSaldo=function(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}