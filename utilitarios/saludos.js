saludar=function(){
    //recuperar el valor de la caja de texto
    let nombre;
    nombre=recuperarTexto("txtNombre");

    //recuperar el valor de la caja apellido
    let apellido;
    apellido=recuperarTexto("txtApellido")
}


recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}