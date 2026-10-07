let idade = Number(prompt("Digite sua idade: "))

let escolha

if (idade < 18) {
    alert("Você é menor de idade, não pode fazer cursos aqui")
}
else{
    escolha = Number(prompt("digite o plano que deseja: \n 1 - Básico \n 2 - Pro \n 3 - VIP"))

    switch(escolha){
    case 1:
        alert("Você escolheu o plano Básico(Acesso aos planos básicos)")
        break

    case 2:
        alert("Você escolheu o plano Pro(Acesso a todos os cursos básicos e Pro)")
        break

    case 3:
        alert("Você escolheu o plano VIP(Todos os cursos e tutor pessoal)")
        break

    default:
        alert("Opção inválida, plano não identificado")
    }
}