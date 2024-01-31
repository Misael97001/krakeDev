calcularValorDescuento=function(monto, porcentajeDescuento){
    let descuento=monto*porcentajeDescuento/100;
    return descuento;
}

calcularIVA=function(monto){
    let IVA;
    IVA=monto*12/100;
    return IVA;
}

calcularSubtotal=function(precio, cantidad){
    let totalPagar;
    totalPagar=precio*cantidad;
    return totalPagar;
}

calcularTotal=function(subtotal, descuento,iva){
    return subtotal+descuento+iva;

}