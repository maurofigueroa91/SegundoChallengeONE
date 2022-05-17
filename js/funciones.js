function crearBloqueLleno(palabra){
    limpiarBloque();
    for(var i = 0 ; i < palabra.length; i++){
        var elemento = document.createElement("div");
        elemento.classList.add("letra-bien");
        elemento.textContent = palabra[i]
        contenedorLetras.appendChild(elemento);
    }
}

function resetearValores(){
    contadorLetrasCorrectas = 0;
    letrasIncorrectas = "";
    limpiarLetrasMal();
    repetidas = [];
}

function activarTeclas(){
    window.addEventListener("keydown",activarTeclado)
}

function rotar(){
    var tarjeta = document.querySelector(".contenedor-canvas");
    tarjeta.classList.add("rotar");
}

function volverAtras(){
    var tarjeta = document.querySelector(".contenedor-canvas");
    tarjeta.classList.remove("rotar");
}

function generarNumeroAleatorio(maximo){
    var numero = Math.floor(Math.random()*maximo - 0);
    return numero;
}

function crearBloqueVacio(palabra){
    limpiarBloque();
    for(var i = 0 ; i < palabra.length; i++){
        var elemento = document.createElement("div");
        elemento.classList.add("letra-bien");
        contenedorLetras.appendChild(elemento);
    }
}

function activarTeclado(event){
    letraActual = validarLetras(event);
    completarBloque(letraActual);
    validarDerrota();
    validarVictoria();
}

function activarTecladoPantalla(letra){
    letraActual = letra;
    completarBloque(letraActual);
    validarDerrota();
    validarVictoria();
}

function validarLetras(letra){
    if(letra.keyCode >=65 && letra.keyCode <= 90){
        return letra.key.toUpperCase();
    }else{
        return "";
    }
}

function completarBloque(letra){
    var contenedorLetras = document.querySelector(".contenedor-letras-bien");
    var lista = contenedorLetras.childNodes;
    var i = 0;
    var letraEncontrada = false;
    
    if(!letrasIncorrectas.includes(letra) && !repetidas.includes(letra)){
        for(var elemento of lista){
            if(letra == palabraActual[i]){
                elemento.textContent = letra;
                elemento.classList.add("bordeVerde");
                letraEncontrada = true;
                contadorLetrasCorrectas++;
                repetidas.push(letra);
            }
            i++;
        }
        if(!letrasIncorrectas.includes(letra) && letraEncontrada == false){
            letrasIncorrectas += letra;
            completarLetrasMal(letra);
            crearMunieco();
        }
    }
}

function validarDerrota(){
    if(letrasIncorrectas.length >= 6){
        swal("Fin del Juego!", "Has llegado al límite de intentos." +"\n" +"La palabra oculta era: "+
        palabraActual, "error");
        anularTeclado();
        anularTecladoPantalla();
    }
}

function validarVictoria(){
    if(contadorLetrasCorrectas >= palabraActual.length){
        swal("¡Felicidades, ganaste el juego!", "Vuelve a jugar con otra palabra", "success");
        anularTeclado();
        anularTecladoPantalla();
    }
}

function limpiarBloque(){
    contenedorLetras.textContent = []
}

function completarLetrasMal(letra){
    var letraMal = document.createElement("div");
    letraMal.textContent = letra;
    letraMal.classList.add("letras-mal");
    contenedorLetrasMal.appendChild(letraMal);
}

function limpiarLetrasMal(){
    contenedorLetrasMal.textContent = "";
}

function mostrarTeclado(){
    teclado.classList.add("ocultar");
    tecladoPantalla.classList.remove("ocultar");
}

function ocultarTeclado(){
    teclado.classList.remove("ocultar");
    tecladoPantalla.classList.add("ocultar");
    teclado.onclick = null;
}

function anularTeclado(){
    window.removeEventListener("keydown",activarTeclado);
}

function anularTecladoPantalla(){
    for(var tecla of listaTeclas){
        tecla.removeEventListener("click",habilitarTeclado)
    }
}



