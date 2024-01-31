
saludar=function(){
    //recuperar el valor de la caja de texto
    let nombre;
    nombre=recuperarTexto("txtNombre");

    //recuperar el valor de la caja apellido
    let apellido;
    apellido=recuperarTexto("txtApellido");
    
    let edad=recuperarInt("txtEdad");

    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido " + nombre +" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);
    
    mostrarImagen("imgSaludo","./imagenes/saludo.gif")

    mostrarTextoEnCaja("txtNombre", "");
}
