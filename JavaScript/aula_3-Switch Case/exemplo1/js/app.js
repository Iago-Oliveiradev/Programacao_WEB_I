alert("Bem vindos a aula de Switch Case")
let num1 = Number(prompt("Digite o primeiro Número: "))
let num2 = Number(prompt("Digite o segundo Número: "))

let escolha = Number(prompt("Digite 1 para soma e 2 para Multiplicação"))

switch (escolha){
    case 1:
        let soma = num1 + num2
        console.log(`Você escolheu soma. O valor da soma é: ${soma}`)  // Interpolação
        console.log("Você escolheu soma. O valor da soma é:" + soma)   // Concatenação
        break
    case 2:
        let mult = num1 * num2
        console.log(`Você escolheu soma. O valor da somaa é: ${mult}`)
        break
    default:
        console.log("ERRO! Escolha inválida")
}