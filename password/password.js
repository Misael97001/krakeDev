validarPassword = function (password) {
    if (password.length >= 8 && password.length <= 16) {
        let letra;
        let contadorMayusculas=0;
        let contadorDigito=0;
        let contadorCaracter=0;
        let error = "";
        for (let i = 0; i <= password.length; i++) {
            letra = password.charAt(i);
            if (esMayuscula(letra) == true) {
                contadorMayusculas++;
            }
        }
        if (contadorMayusculas >= 1) {
            error = error+"";
        } else {
            error = error + "No tiene Mayuscula. "
        }

        for (let i = 0; i <= password.length; i++) {
            letra = password.charAt(i);
            if (esDigito(letra) == true) {
                contadorDigito++;
            }
        }
        if (contadorDigito >= 1) {
            error = error + "";
        } else {
            error = error + "No tiene Digito. "
        }


        for (let i = 0; i <= password.length; i++) {
            letra = password.charAt(i);
            if (esCaracterEspecial(letra) == true) {
                contadorCaracter++;
            }
        }
        if (contadorCaracter >= 1) {
            error = error + "";
        } else {
            error = error + " No tiene Caracter especial. "
        }
        return error;

    } else {
        return "Debe tener entre 8 a 16 caracteres";
    }
}

ejecutarValidacion=function(){
    let password=recuperarTexto("txtPassword");
    let passwordValidado=validarPassword(password);
    if(passwordValidado==""){
        mostrarTexto("lblPassword","Password Correcto");
    }else{
        mostrarTexto("lblPassword",passwordValidado);    
    }
}