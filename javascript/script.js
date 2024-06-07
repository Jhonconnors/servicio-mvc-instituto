document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('inputNumero').value = '';
    document.getElementById('resultado').innerText = '';
});

document.getElementById('inputNumero').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

function Factorial(){

    let num = document.getElementById("inputNumero").value;

    let factorial = 1;

    if(num < 0){
        document.getElementById("resultado").innerHTML = "El factorial solo se calcula para numeros positivos.";
        return;
    }else if(isNaN(num)) {
        document.getElementById("resultado").innerHTML = "Por favor ingrese valores reales";
        return;
    }else {

        for(let i = num; i>0; i--) {
			
			factorial = factorial*i;
		}

        document.getElementById("resultado").innerHTML = "El factorial de:  " + num +" es: " + factorial;
    }

}


function Fecha(){

    let fecha1 = document.getElementById("inputFecha").value;

    document.getElementById("resultado").innerHTML = "la cantidad de dias son: " + fecha1;
}