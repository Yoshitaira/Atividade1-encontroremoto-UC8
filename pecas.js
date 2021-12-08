var listadePeca = ["Amortecedor", "Filtro de ar", "Motor", "Parachoque dianteiro"]

if (listadePeca.length < 10) {
    // É possivel cadastrar 
    console.log("É possível cadastrar mais itens")
} else {
    console.log("Lista cheia, por favor exclua algum item")
}


let peso = 2000;
if (peso < 100) {
    console.log("Peso mínimo da peça deve ser de 100g")
} else {
    console.log("Item adicionado com sucesso")
}

let nomePeca = "Escapamento"
if (nomePeca.length > 3) {
    console.log("Obrigado")
} else if (nomePeca.length == 0) {
    console.log("Não entendi, pode escrever algo?")
} else {
    console.log("O item deve conter mais de 3 caracteres")
}
//switch (nomePeca.length) {
//    case 0:
//        console.log("o nome da peça não pode ser vazio")
//        break;
//
//    case 1:
//    case 2:
//    case 3:
//        console.log(" o nome deve ter mais de 3 caracteres, digite")
//       break;
//    default:
//       console.log("nome da peça está adequado")
//        break
//}