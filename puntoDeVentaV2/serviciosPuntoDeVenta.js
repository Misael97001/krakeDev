calcularValorDescuento = function (monto, porcentajeDescuento) {
    let descuento = monto - monto * porcentajeDescuento / 100;
    return descuento;
}

calcularIVA = function (monto) {
    let IVA;
    IVA = monto * 12 / 100;
    return IVA;
}

calcularSubtotal = function (precio, cantidad) {
    let totalPagar;
    totalPagar = precio * cantidad;
    return totalPagar;
}

calcularTotal = function (subtotal, descuento, iva) {
    return subtotal - descuento + iva;

}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    if (cantidad < 3) {
        return 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        return subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        return subtotal * 0.04;
    } else if (cantidad >= 12) {
        return subtotal * 0.05;
    }
}



esProductoValido = function (producto, idComponenteError) {
    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (producto.length <= 10) {
        mostrarTexto(idComponenteError, "");
        return true;
    } else {
        return false;
    }
}


esCantidadValida = function (cantidad, idComponenteError) {
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (cantidad >= 0 && cantidad <= 100) {
        mostrarTexto(idComponenteError, "");
        return true;
    } else {
        return false;
    }
}

esPrecioValido = function (precio, idComponenteError) {
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else if (precio >= 0 && precio <= 50) {
        mostrarTexto(idComponenteError, "");
        return true;
    } else {
        return false;
    }
}