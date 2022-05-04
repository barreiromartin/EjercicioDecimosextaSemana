function __main__() {
    var errores = ""

    //NOMBRE Y APELLIDOS SIN NUMEROS
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellidos");
    nombre.addEventListener("input", (evt) => {
        comprobarLetras(evt, nombre);
    })
    apellido.addEventListener("input", (evt) => {
        comprobarLetras(evt, nombre);
    })

    //COMPROBAR NIF LONGITUD

    var envio = document.getElementById("envio");
    envio.addEventListener("click", () => {
        contarCaracteres();
    })

    //comprobar checks
    var checkBoxes = document.getElementsByClassName("check");
    for(var i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].addEventListener("click", () => {
            /* PORQUE ESTO NO FUNCIONA
            
            if(checkBoxes[i].checked == true){
                alert("hola")
            } */
            console.log(i)
            alert("hola")
        })
    }

    comentario = document.getElementById("comentarios")

    comentario.addEventListener("input", ()=>{
        comentarioTexto = document.getElementById("comentarios").value
        if(comentarioTexto.length > 10){
            alert("Has llegado al limite de letras")
            
        }
    })

    
    


}//FINAL MAIN



//Funciones
function comprobarAficiones(checkBox) {
    console.log(checkBox)
    checkBox.checked == "true"
   alert("hola")
}

function comprobarLetras(evt, nombre) {
    var numeros = /[0-9]/;
    if (numeros.test(nombre.value)) {
        alert("El apartado Nombre no puede incluir valores numéricos");
    }
}

//PORQUE NIF TIENE QUE ESTAR DENTRO DE LA FUNCION Y NO PUEDE FUERA SI LLAMO A LA FUNCION CON EL ------- PORQUE ¿evt?    
function contarCaracteres() {
    var nif = document.getElementById("nif").value;
    console.log(nif)
    if (nif.length != 9) {
        alert("El NIF son 9 caracteres.");
    }
}

__main__()