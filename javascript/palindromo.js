function limpiarCadena(cadena) {
    // Normalizar la cadena para eliminar las tildes
    cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Eliminar caracteres no alfabéticos y convertir a minúsculas
    return cadena.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function esPalindromo(frase) {
    // Limpiar la frase de tildes y caracteres especiales, y convertirla a minúsculas
    frase = limpiarCadena(frase);
    // Comparar la frase original con la frase invertida
    return frase === frase.split("").reverse().join("");
}

function verificarPalindromo() {
    // Obtener el valor del input
    var inputFrase = document.getElementById("inputFrase").value;
    // Verificar si es un palíndromo
    if (esPalindromo(inputFrase)) {
        document.getElementById("resultado").innerHTML = "<p class='text-success'>La frase es un palíndromo.</p>";
    } else {
        document.getElementById("resultado").innerHTML = "<p class='text-danger'>La frase no es un palíndromo.</p>";
    }
}
