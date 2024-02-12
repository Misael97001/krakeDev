calcularTasaInteres=function(ingresoAnual){
let tasa;
    if(ingresoAnual<3000000){
        return tasa=16/100;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        return tasa=15/100;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        return tasa=14/100;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        return tasa=13/100;
    }else if(ingresoAnual>=2000000 ){
        return tasa=12/100;
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuotaMensual;
    if(edad>50){
        cuotaMensual=0.3*(ingresos-egresos);
        return cuotaMensual;
    }else if(edad<=50){
        cuotaMensual=0.4*(ingresos-egresos);
        return cuotaMensual;
    }
}

calcularDescuento=function(precio, cantidad){
    
    if(cantidad<3){
        return precio;
    } else if(cantidad>=3 && cantidad<=5){
        return precio-precio*0.02;
    }else if(cantidad>=6 && cantidad<=11){
        return precio-precio*0.03;
    }else if(cantidad>=12 ){
        return precio-precio*0.04;
    }
}

determinarColesterolLDL=function(nivelColesterol){
    if(nivelColesterol<100){
        return "lo mejor para la salud";
    } else if(nivelColesterol>=100 && nivelColesterol<=129){
        return "Casi óptimo"
    } else if(nivelColesterol>=130 && nivelColesterol<=159){
        return "Límite superior del rango normal"
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        return "Alto"
    }else if(nivelColesterol>=190 ){
        return "Muy alto"
    }
}

validarClave=function(clave){
    if(clave.length>8 && clave.length<=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=65 && codigoLetra<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=97 && codigoLetra<=122){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigoLetra=caracter.charCodeAt(0);
    if(codigoLetra>=48 && codigoLetra<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}


dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        if(notaFisica>notaMatematica){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}