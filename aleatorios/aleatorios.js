let aleatorios = [];
numAleatorio = function () {
    const numeroDecimal = Math.random();
    const numeroAleatorio = Math.floor(numeroDecimal * 100) + 1;
    return numeroAleatorio;
}

generarAleatorios = function () {

    let numRecuperado = recuperarTexto("txtValor")
    if (numRecuperado <= 20 && numRecuperado >= 5) {
        for (let i = 0; i < numRecuperado; i++) {
            console.log(i);

            let valorAleatorio = numAleatorio();
            aleatorios.push(valorAleatorio);
        }
        mostrarResultados(aleatorios.length);
    }

}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>ALEATORIO<th><tr>";
    let miNota;
    for (let i = 0; i < arregloNumeros; i++) {
        miNota = aleatorios[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
