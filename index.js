///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//criar uma calculadora que faça as operações: soma, subtração, divisão, multiplicação e exponenciação.

let num1;
let num2;
let operador;
let resultado

function Calculadora(numero1, numero2, operacao){

num1 = parseFloat(numero1);
num2 = parseFloat(numero2);
operador = operacao;
resultado = 1;  

if(operador == "+" || operador == "-" || operador == "/" || operador == "*" || operador == "e" ){

  if(operador == "+"){
    resultado = parseFloat(num1 + num2);
    if(resultado === 'undefined' || resultado > 1000000){
      return resultado = "ERRO"
    }
    else{
      return resultado;
    }
    
  }

  else if(operador == "-"){
    resultado = num1 - num2;
    if(resultado == undefined || resultado > 1000000){
      return resultado = "ERRO"
    }
    else{
      return resultado;
    }
  }

  else if(operador == "/"){
    resultado = num1 / num2;
    if(resultado == undefined || resultado > 1000000){
      return resultado = "ERRO"
    }
    else{
      return resultado;
    }
  }
  
  else if(operador == "*"){
    resultado = num1 * num2;
    if(resultado == undefined || resultado > 1000000){
      return resultado = "ERRO"
    }
    else{
      return resultado;
    }
  }

  else if(operador == "e"){
      for(let i = 0; i < num2; i++ ){
        resultado *= num1
      }
      
      if(resultado == undefined || resultado > 1000000){
        return resultado = "ERRO"
      }
      else{
        return resultado;
      }
  }
} 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
visor.value = visor.value + tecla;
}

function limpezatotal() {
visor.value = "";
}

function calcular() {
let expressao = visor.value;
let numeros = expressao.split(/([+\-*/e])/).filter(function(e) { return e; });
let numero1 = parseFloat(numeros[0]);
let operador = numeros[1];
let numero2 = parseFloat(numeros[2]);

if (!isNaN(numero1) && !isNaN(numero2) && operador) {
  visor.value = Calculadora(numero1, numero2, operador);
} else {
  visor.value = "ERRO";
}
}

