calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto = recuperarTexto("txtProducto");
 
    let productoValido=esProductoValido(nombreProducto, "lblError1");

    cantidad = recuperarInt("txtCantidad")
    
    let cantidaValida=esCantidadValida(cantidad, "lblError2");


    precioProducto = recuperarFloat("txtPrecio");
   
    let precioValido= esPrecioValido(precioProducto,"lblError3");
   
    


    

     
    if(productoValido && cantidaValida && precioValido){
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        valorIVA = calcularIVA(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal", valorTotal);
    
    }else{
        mostrarTexto("lblDescuento", "0.0");
    }

    

}


limpiar = function () {

    let componente;
    componente = document.getElementById("txtProducto");
    componente.value = " ";

    componente = document.getElementById("txtPrecio");
    componente.value = " ";

    componente = document.getElementById("txtPorcentajeDescuento");
    componente.value = " ";

    componente = document.getElementById("txtCantidad");
    componente.value = " ";
    
}

