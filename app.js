let secretNumber = 0;
let attempt =0;
let sortedNumbers = []
let maxNumber = 10;



function asignarTextoElemento(Element, Text) {
    let elementoHTML = document.querySelector(Element);
    elementoHTML.innerHTML = Text;
    return;
}
function verificarIntento() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    
    

    if (userNumber === secretNumber) {
        asignarTextoElemento('p',  `Congrats you guessed the number in ${attempt} ${(attempt ===1) ? 'attempt' :'attempts'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
            if(userNumber > secretNumber) {
                asignarTextoElemento('p', 'the number is lower'); 
            } else{
                asignarTextoElemento('p', 'the number is greater');
            }
            attempt++;
            limpiarCaja();
    }
    return;
    
}
//dejar return dentro de las funciones como buena practica
function limpiarCaja(){
    document.querySelector('#userValue').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*maxNumber+1);

    
    if (sortedNumbers.length == maxNumber){
        asignarTextoElemento('p', 'All possible numbers have been sorted');
    } else {
        if (sortedNumbers.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            sortedNumbers.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Welcome to the secret number game!');
    asignarTextoElemento('p',`Chose a number between 1 & ${maxNumber}`);
    secretNumber = generarNumeroSecreto();
    attempt = 1;
}

function reiniciarJuego(){
    //limpliarCaja
    limpiarCaja();
    //MensajeDeINicio
    condicionesIniciales();
    //numerorandom
    
    //newgamedisable
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();

