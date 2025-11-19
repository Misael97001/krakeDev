let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 },
];

agregarPersona = function () {

    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    if (validarNombre(valorNombre) && validarEdad(valorEdad)) {
        
        let nuevaPersona = {};
        nuevaPersona.nombre = valorNombre;
        nuevaPersona.edad = valorEdad;

        guardarPersona(nuevaPersona); 
        
        
    }
}

guardarPersona = function (persona) {
    personas.push(persona);
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarPersonas();
}

mostrarPersonas = function () {
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoPersona.nombre + "</td>"
            + "<td>" + elementoPersona.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    let personaMayor = personas[0];
    let elementoPersona;
    for (i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        console.log("nombre " + elementoPersona.nombre
            + " edad " + elementoPersona.edad);
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    return personaMayor;
}


determinarMayor = function () {
    let mayor = encontrarMayor();
    console.log("MAYOR: " + mayor.nombre + " - Edad: " + mayor.edad);
    alert(mayor.nombre + mayor.edad);
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    let elementoPersona;

    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];

        console.log("nombre " + elementoPersona.nombre +
            " edad " + elementoPersona.edad);

        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }

    return personaMenor;
};

determinarMenor = function () {
    let menor = encontrarMenor();
    console.log("MENOR: " + menor.nombre + " - Edad: " + menor.edad);
    alert(menor.nombre + menor.edad);
};
