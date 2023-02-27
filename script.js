
var inputText = document.getElementById("entrada");
var outputText = document.querySelector("textoSaida");
const btncriptografar = document.querySelector("button");

// Função para criptografar um texto
function criptografar() {
    let entrada = document.getElementById("entrada").value;
    let saida = entrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("saida").value = saida;
    document.getElementById("menino").style.display="none";
}

// Função para descriptografar um texto
function descriptografar() {
    let entrada = document.getElementById("entrada").value;
    let saida = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("saida").value = saida;
    document.getElementById("menino").style.display="none";
}

function copiarTexto() {
    let saida = document.getElementById("saida");
    saida.select();
    saida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
    
}

