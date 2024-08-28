let botonencriptar= document.querySelector(".botonEncriptar");
let botondesencriptar= document.querySelector(".botonDesencriptar");
let cajamuñeco=document.querySelector(".contenedorMuñeco");
let contenedorresultado = document.querySelector(".contenedorParrafo");
let parraforesultado= document.querySelector(".parrafoResultado");

let aviso = document.querySelector(".aviso");

botondesencriptar.onclick = desencriptar;
botonencriptar.onclick = encriptar;


function limpiarTex(contenido) {
    contenido = contenido.toLowerCase();
    contenido = contenido.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    contenido = contenido.replace(/[^a-z\s]/g, "");
    return contenido;
}

function validarTexto(contenido) {
    const tieneMayusculas = /[A-Z]/.test(contenido);
    const tieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(contenido);
    
    if (tieneMayusculas || tieneAcentos) {
        alert("El texto contiene mayúsculas o acentos. Por favor, ingresa solo letras minúsculas y sin acentos.");
        return false;
    }
    return true;
}


function encriptar(){
    let cajaText= mostrarTexto();

    if (!validarTexto(cajaText)) return; 
   
    ocultarCaja();
    cajaText = limpiarTex(cajaText);
    parraforesultado.textContent = encriptarText(cajaText);
   
}



function desencriptar(){
    ocultarCaja();
    let cajaText = mostrarTexto();
    parraforesultado.textContent=desencriptarText(cajaText);
}

function mostrarTexto(){
    let cajaText= document.querySelector(".cajaText");
    return cajaText.value

}

function ocultarCaja(){
    cajamuñeco.classList.add("esconder");
    contenedorresultado.classList.add("esconder");
}

function encriptarText(msg){
    let text = msg;
    let resultadoFinal = "";
    for(let i = 0; i<text.length;  i++ ){
        if( text[i]=="a"){
            resultadoFinal= resultadoFinal + "ai"
        }
        else if( text[i]=="e") {
            resultadoFinal = resultadoFinal + "enter"
        }
        else if( text[i]=="i") {
            resultadoFinal = resultadoFinal + "imes"
        }
        else if( text[i]=="o") {
            resultadoFinal = resultadoFinal + "ober"
        }
        else if( text[i]=="u") {
            resultadoFinal = resultadoFinal + "ufat"
        }
        else{
            resultadoFinal = resultadoFinal + text[i]
        }

    }
    return resultadoFinal
}


function desencriptarText(msg){
    
    let text = msg
        .replace(/ai/g, 'a')
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
        
    let resultadoFinal = text;
    return resultadoFinal
}


const botonCopiar = document.querySelector(".copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".parrafoResultado").textContent;
    navigator.clipboard.writeText(contenido);
});


