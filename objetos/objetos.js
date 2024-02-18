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

crearProducto=function(){
    let producto1={
        nombre: "Atun",
        precio:2.50,
        stock: 10
    }
    
    let producto2={
        nombre: "Sardina",
        precio:1.40,
        stock: 20
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock>=producto2.stock){
        console.log("EL PRODUCTO 1 TIENE MAYOR STOCK");
    }else if(producto2.stock>=producto1.stock){
        console.log("EL PRODUCTO 2 TIENE MAYOR STOCK");
    }else{
        console.log("AMBOS PRODUCTOS TIENEN EL MISMO STOCK");
    }
}