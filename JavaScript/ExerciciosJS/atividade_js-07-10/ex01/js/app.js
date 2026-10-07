let nome = (prompt("Olá! Qual o seu nome: "))

let nota1 = Number(prompt("Digite sua primeira nota: "))
let nota2 = Number(prompt("Digite sua segunda nota: "))

let soma = nota1+nota2

let media = soma/2

if(media >= 6){
    alert(`Parabéns ${nome}, você foi aprovado! Sua média foi ${media}`)
}
else{
    alert(`Você foi reprovado, sua média foi ${media}`)
}