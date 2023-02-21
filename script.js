
var inputText = document.getElementById("entrada");
var outputText = document.querySelector("textoSaida");
const btncriptografar = document.querySelector("button");
var copyText = " ";


var codigos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.log(codigos);



function callCriptografar() {
    console.log("inputText.value = " + inputText.value)
    let msgCriptografado = fncriptografar(inputText.value);
    outputText = msgCriptografado;
}
function fncriptografar(strEntrada) {
    console.log("entró en la funcion criptografar");
    let strSaida = "";
    strEntrada = strEntrada.toLowerCase();
    console.log(strEntrada, "strEntrada = " + strEntrada);
    strSaida = strEntrada.replaceAll("a", "ai");
    console.log(strSaida);
    /*  strSaida = strSaida.replaceAll("e", "enter");
      console.log(strSaida);
      strSaida = strSaida.replaceAll("i", "imes");
      console.log(strSaida);
      strSaida = strSaida.replaceAll("o", "ober");
      console.log(strSaida);
      strSaida = strSaida.replaceAll("u", "ufat");
      console.log(strSaida); */
      
    document.getElementById("saida").innerHTML = strSaida;
    console.log("area saida: " + document.getElementById("saida").innerHTML);
}

function callDescriptografar() {
    console.log("inputText.value = " + inputText.value)
    let msgCriptografado = fndescriptografar(inputText.value);
    outputText = msgCriptografado;
}
function fndescriptografar(strEntrada) {
    console.log("entró en la funcion desencriptografar");
    let strSaida = "";
    strEntrada = strEntrada.toLowerCase();
    console.log(strEntrada, "strEntrada = " + strEntrada);
    strSaida = strEntrada.replaceAll("ai", "a");
    console.log(strSaida);
}

function callCopiar() {
    console.log("entró en callCopiar");
    outputText = " ";
    inputText = copyText;
    console.log("outputText = " + outputText, "inputText = " + inputText);
}

/*function fnCopiar(str) {
   
}*/

