'use strict'
var intentos = 5;
var i = 1;
var numero = numeroRandom();
var numerosR = [];
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
            AsignarTextoElemento('p' , 'El numero es correcto, reinicie para continuar');
            var input = document.getElementById('numeroIntento');
            var btn = document.getElementById('Intento');
            btn.disabled = true
            input.disabled = true;
            limpiarCaja();
        }else if(numeroIntento > numero){
            restantes - i
            AsignarTextoElemento('p' , 'El numero secreto es menor, le quedan '+restantes+" intentos");
        }else{
            var restantes = intentos - i
            AsignarTextoElemento('p' , 'El numero secreto es mayor, le quedan '+restantes+" intentos");
        }
        i++;
        limpiarCaja();
    }else if(restantes == 0){
        var input = document.getElementById('numeroIntento');
        var btn = document.getElementById('Intento');
        btn.disabled = true
        input.disabled = true;
        AsignarTextoElemento('p' , 'Ya termino sus intentos, por favor reinicie');
        limpiarCaja();
    }
    
};
function limpiarCaja(){
    document.querySelector('#numeroIntento').value = '';
};
function reintentar(){
    limpiarCaja();
    AsignarTextoElemento('p' , 'Nuevo juego, ingrese un numero del 1 al 10');
    i = 1
    var input = document.getElementById('numeroIntento');
    var numero = numeroRandom();
    console.log(numero);
    input.disabled = false;
    AsignarTextoElemento('p' , 'Indica un numero del 1 al 10');
};
AsignarTextoElemento('h1', 'Juego de numero secreto');
AsignarTextoElemento('p' , 'Indica un numero del 1 al 10');