/*
Operadores lógicos

&&  -> (and/E) lógico
||  -> (or/OU) lógico
!   -> (NOT/NÃO) lógico
*/

// Exemplos

let num1 = 10
let num2 = 15
let num3 = 2

if (num1 >= num2){
    console.log("Entrou no IF")
} else {
console.log("(FALSO!) NÃO ENTROU NO IF") 
}

// Exemplo composto

console.log("Condições Compostas")

if ((num1 >= num2) && (num1 != num3)){
    console.log("Entrou no IF")
} else {
console.log("(FALSO!) NÃO ENTROU NO IF") 
}


// Exemplo com 3 condições

console.log("Condições Compostas")

if ((num1 >= num2) && (num1 != num3) || (num1 != num3) ){
    console.log("Entrou no IF")
} else {
console.log("(FALSO!) NÃO ENTROU NO IF") 
}

// Condições Simples negada
console.log("Condições Simples negada")
if (!(num1 >= num2)){
    console.log("Entrou no IF")
} else {
    console.log("(FALSO!) NÃO ENTROU NO IF") 
}