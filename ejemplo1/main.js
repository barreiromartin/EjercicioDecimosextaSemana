function __main__() {
    var comunidades = document.getElementsByClassName("radio");
    var provincia = document.getElementById("provincia");
    for (var i = 0; i < comunidades.length; i++) {
        comunidades[i].addEventListener("click", (evt) => {
            cambiarComunidad(provincia, evt.target);
        });
    }
}
function cambiarComunidad(provincia, comunidad) {
    var c_galicia = ["Pontevedra", "A Coruña", "Lugo", "Ourense"];
    var c_cantabria = ["Cantabria"];
    var c_asturias = ["Asturias"];
    var c_leon = ["Leon", "Zamora", "Palencia", "Burgos", "Valladolid",
        "Soria", "Segovia", "Salamanca", "Ávila"];
    var comunidad_cambiar;
    console.log(comunidad.value);
    switch (comunidad.value) {
        case "Galicia":
            comunidad_cambiar = c_galicia;
            break;
        case "Asturias":
            comunidad_cambiar = c_asturias;
            break;
        case "Cantabria":
            comunidad_cambiar = c_cantabria;
            break;
        case "Leon":
            comunidad_cambiar = c_leon;
            break;
        default:
            break;
    }
    purgarProvincias(provincia);
    mostrarProvincias(provincia, comunidad_cambiar);
}
function purgarProvincias(provincia) {
    while (provincia.firstChild) {
        provincia.removeChild(provincia.lastChild);
    }
}
function mostrarProvincias(provincia, comunidad) {
    var etiqueta, opcion, salto;
    for (var i = 0; i < comunidad.length; i++) {
        etiqueta = document.createElement("Label");
        etiqueta.setAttribute("for", comunidad[i]);
        etiqueta.innerHTML = comunidad[i];
        opcion = document.createElement("input");
        opcion.setAttribute("type", "radio");
        opcion.setAttribute("value", comunidad[i]);
        opcion.setAttribute("name", "provincia");
        etiqueta.appendChild(opcion);
        provincia.appendChild(etiqueta);
        salto = document.createElement("br");
        provincia.appendChild(salto);
    }
}
__main__();