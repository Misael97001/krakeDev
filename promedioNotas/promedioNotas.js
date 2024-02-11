calcularPromedioNotas=function(){

    let nota1=recuperarFloat("txtNota1");
    let nota2=recuperarFloat("txtNota2");
    let nota3=recuperarFloat("txtNota3");

    let promedio=calcularPromedio(nota1, nota2, nota3);
    promedio=promedio.toFixed(2);

    if(promedio>7){

        mostrarImagen ("imagen", "exito.gif"); 
    }else{
        mostrarImagen ("imagen", "fracaso.gif");
    }
} 
