//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;


guardarPalabra=function(){
    let secreta=recuperarTexto("txtSecreta");
    let contadorMayuscula=0;
    if(secreta.length==5){
        for(let i=0; i<=5;i++){
            if(esMayuscula(secreta.charAt(i))){
                contadorMayuscula++;        
            }
        }
        if(secreta.length==5 && contadorMayuscula==5){
            palabraSecreta=secreta; 
        }else{
            alert("INGRESAR UNA PALABRA DE 5 LETRAS Y MAYUSCULAS");
        }
    }else{
        alert("INGRESAR UNA PALABRA DE 5 LETRAS Y MAYUSCULAS");
    }
}




ingresarLetra=function(){
    let letra=recuperarTexto("txtLetra");

    if(esMayuscula(letra.charAt(0))){
        validar(letra);
        if(coincidencias==5){
            alert("HA GANADO");
            mostrarImagen("lblFin","ganador.gif");
        }
        if(intentos==10){
            mostrarImagen("lblFin","gameOver.gif");
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

validar=function(letra){    
    let letrasEncontradas=0;
    for( let i=0;i<=4;i++){
        if(palabraSecreta.charAt(i)==letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }

    intentos++;
}

mostrarLetra=function(letra,posicion){

    for(let i=0; i<=4; i++){
        if(i==posicion){
            mostrarTexto("div"+i, letra);    
        }
    }
}


mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }
    if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }
    if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }
    if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }
    if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }
    if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }
    if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }
    if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }
    if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }

}