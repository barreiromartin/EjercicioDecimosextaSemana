function __main__() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    pass.addEventListener("keyup", (evt) => {
        comprobarPass(evt, user, pass);
    });
}
function comprobarPass(evt, user, pass) {
    var minusculas = /[a-z]/;
    var mayusculas = /[A-Z]/;
    var numeros = /[0-9]/;
    if (minusculas.test(pass.value)) {
        console.log("Tiene minusculas");
    }
    if (mayusculas.test(pass.value)) {
        console.log("Tiene mayusculas");
    }
    if (numeros.test(pass.value)) {
        console.log("Tiene numero");
    }
}
__main__();
