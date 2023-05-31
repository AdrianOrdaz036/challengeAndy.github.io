let btnEncriptar = document.querySelector(".encriptar");
let btnDesencriptar = document.querySelector(".desencriptar");
let muneco = document.querySelector(".image");
let texto1 = document.querySelector(".texto1");
let texto2 = document.querySelector(".texto2");
let textoEnDe = document.querySelector(".inp");
let btCopiar = document.getElementById("copiar");


function ocultar() {
    muneco.classList.add("ocultar");
    texto1.classList.add("ocultar");
    texto2.classList.add("ocultar");
}

function mostrar() {
    muneco.classList.remove("ocultar");
    texto1.classList.remove("ocultar");
    texto2.classList.remove("ocultar");
}

function ocultarTex() {
    textoEnDe.classList.add("ocultar");
    btCopiar.classList.add("copiar1");
}

function mostrarTex() {
    textoEnDe.classList.remove("ocultar");
    btCopiar.classList.remove("copiar1");
}

btnEncriptar.addEventListener("click", encriptar);

function encriptar() {
    if (document.querySelector(".textob").value.length > 0) {
        ocultar();
        mostrarTex();
        let intTexto = recuperarTexto();
        textoEnDe.textContent = encriptarTexto (intTexto);
    }
    else if (document.querySelector(".textob").value.length <= 0) {
        mostrar();
        ocultarTex();
    }
} 

btnDesencriptar.addEventListener("click", desencriptar);

function desencriptar () {
    if (document.querySelector(".textob").value.length > 0) {
        ocultar();
        mostrarTex();
        let intTexto = recuperarTexto();
        textoEnDe.textContent = desencriptarTexto(intTexto);
    }
    else if (document.querySelector(".textob").value.length <= 0){
        mostrar();
        ocultarTex();
    }
}

function recuperarTexto() {
    let intTexto = document.querySelector(".textob");
    return intTexto.value
}

function encriptarTexto(mensaje) {
    let texto = mensaje
    let textoFin =  "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFin = textoFin + "ai"
        }
        else if (texto[i] == "e") {
            textoFin = textoFin + "enter"
        }
        else if (texto[i] == "i") {
            textoFin = textoFin + "imes"
        }
        else if (texto[i] == "o") {
            textoFin = textoFin + "ober"
        }
        else if (texto[i] == "u") {
            textoFin = textoFin + "ufat"
        }
        else {
            textoFin = textoFin + texto[i]
        }
    }

    return textoFin
}

function desencriptarTexto(mensaje) {
    let texto = mensaje
    let textoFin =  "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFin = textoFin + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFin = textoFin + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textoFin = textoFin + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textoFin = textoFin + "o"
            i = i+3;
        }
        else if (texto[i] == "u") {
            textoFin = textoFin + "u"
            i = i+3;
        }
        else {
            textoFin = textoFin + texto[i]
        }
    }

    return textoFin
}

btCopiar.addEventListener("click", copiar = () => {
    let contenidoP = document.querySelector(".inp").textContent;
    navigator.clipboard.writeText(contenidoP);
} )