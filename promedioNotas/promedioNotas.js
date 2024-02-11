calcularPromedioNotas=function(){

    let nota1=recuperarFloat("txtNota1");
    let nota2=recuperarFloat("txtNota2");
    let nota3=recuperarFloat("txtNota3");

    let promedio=calcularPromedio(nota1, nota2, nota3);
    promedio=promedio.toFixed(2);

    if(promedio<5 && promedio>0){
        mostrarImagen("imagen","reprobado.gif")
        mostrarTexto("lblMensaje", "REPROBADA");

    }else if(promedio>=5 && promedio<=8){
        mostrarImagen("imagen","buenTrabajo.gif")
        mostrarTexto("lblMensaje", "BUEN TRABAJO");
        
    }else if(promedio>8 && promedio<=10){
        mostrarImagen ("imagen", "exito.gif");
        mostrarTexto("lblMensaje", "EXCELENTE");
    }else{
        mostrarImagen ("imagen", "fracaso.gif");
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
    }


} 
