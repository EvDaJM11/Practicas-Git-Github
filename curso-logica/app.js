'use strict'

function AsignarTextoElemento(elemento , texto){
    var elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
};

function numeroRandom(){
    return Math.floor(Math.random()*10)+1;
    
};
var numero = numeroRandom();
console.log(numero);
var intentos = 5
var i = 1
function intento(){
    var numeroIntento = parseInt(document.getElementById('numeroIntento').value);
    if (i <= intentos){
        var restantes = intentos - i
        if (numeroIntento == numero){
            AsignarTextoElemento('p' , 'El numero es correcto');
        }else if(numeroIntento > numero){
            restantes - i
            AsignarTextoElemento('p' , 'El numero secreto es menor, le quedan '+restantes+" intentos");
            i++;
        }else{
            var restantes = intentos - i
            AsignarTextoElemento('p' , 'El numero secreto es mayor, le quedan '+restantes+" intentos");
            i++;
        }
    }else if(restantes == 0){
        var input = document.getElementById('numeroIntento');
        input.disabled = true;
        AsignarTextoElemento('p' , 'Ya termino sus intentos, por favor reinicie');
    }
    
};

function reintentar(){
    i = 1
    var input = document.getElementById('numeroIntento');
    var numero = numeroRandom();
    console.log(numero);
    input.disabled = false;
    AsignarTextoElemento('p' , 'Indica un numero del 1 al 10');
};
AsignarTextoElemento('h1', 'Juego de numero secreto');
AsignarTextoElemento('p' , 'Indica un numero del 1 al 10');