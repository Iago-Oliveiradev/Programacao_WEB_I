let escolha = Number(prompt("Digite o código do combo desejado\n1 - Combo Bug (Hambúrguer + Refri)\n 2 - Combo Deploy (Pizza + Suco)\n3 - Combo Sênior (Salada + Água) "))

switch(escolha){
   case 1:
        alert("O combo selecionado foi de código 1(Combo Bug)")
        break

    case 2:
        alert("O combo selecionado foi de código 2(Combo Deploy)")
        break

    case 3:
        alert("O combo selecionado foi de código 3(Combo Senior)")
        break

    default:
        alert("Opção inválida, código não identificado")
}