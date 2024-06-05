function calcularEdad() {
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    var ano = parseInt(document.getElementById('ano').value);

    var fechaNacimiento = new Date(ano, mes - 1, dia);
    var ahora = new Date();
    var edad = ahora.getFullYear() - fechaNacimiento.getFullYear();
    var m = ahora.getMonth() - fechaNacimiento.getMonth();

    if (m < 0 || (m === 0 && ahora.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultado').innerText = "Su edad actual es " + edad;
}

document.addEventListener("DOMContentLoaded", function() {
    // Asigna la función calcularEdad al evento click del botón
    document.getElementById('calcular-btn').addEventListener('click', calcularEdad);
});
