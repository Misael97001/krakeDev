jugar = function(){
    let aleatorio= lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        console.log("ES MAYOR A 3");
        console.log("GANASTE")
    }else{
        console.log("ES MENOR A 3");
        console.log("PERDISTE");
    }

}

// crear una función llamada lanzar Dado
// NO RECIBE PARÁMETROSl
// RETORNA UN NÚMERO ALEAOTORIO ENTRE 1 Y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    console.log("----->"+numeroEntero);
    valorDado=numeroEntero+1;

    if(valorDado>3){
        return valorDado+" ES MAYOR A 3, GANASTE";
        
    }else{
        return valorDado+" ES MENOR A 3, PERDISTE";
    }
    
}