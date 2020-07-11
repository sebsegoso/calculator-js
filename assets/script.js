var valorUno;
var valorDos;
var operacion;

function inicio() {

    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var clear = document.getElementById("clear");
    var resultado = document.getElementById("resultado");

    //Click
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    clear.onclick = function (e) {
        reset();
    }
    suma.onclick = function (e) {
        valorUno = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        valorUno = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        valorUno = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        valorUno = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        valorDos = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = "";
}
//Funcion reset para reiniciar los dos valores y la operación
function reset() {
    resultado.textContent = "";
    valorUno = 0;
    valorDos = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(valorUno) + parseFloat(valorDos);
            break;

        case "-":
            res = parseFloat(valorUno) - parseFloat(valorDos);
            break;

        case "*":
            res = parseFloat(valorUno) * parseFloat(valorDos);
            break;

        case "/":
            res = parseFloat(valorUno) / parseFloat(valorDos);
            break;
    }
    reset();
    resultado.textContent = res;
}