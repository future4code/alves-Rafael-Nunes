// Exercício de de compreensão de código
// 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// R:Esse código pega o numero que o usuario digitar e retorna se resto da divisão daquele numero por 2 é igual a zero.  

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// R:Para numeros pares (2,4,6,8,10 etc)

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// R:Para numeros impares (1,3,5,7,9 etc) 

// Exercício de compreensão de código
// 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// R:O código retorna o valor da fruta que o usuario está procurando 

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// R:O preço da fruta, maçã é 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R:A mensagem impressa seria o valror do "default" ou seja 5

// Exercicio de compreensão de código 
// 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// R:A primeira linha péde uma informação para o usuário e a transforma em "number"

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R:se o usuário digitar 10 irá aparecer "Esse número passu no teste", se digitar -10 vai retornar um erro no console

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo
// R:Sim , pois não tem nenhuma mensagem definida para numeros negativos ou caso o usuário não digite nenhum.


// Exercicio de código 
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idade = Number(prompt("Qual sua idade?"))

// if(idade >= 18) {
//   console.log("Você tem idade sufiente para dirigir!!!")
// } else{
//   console.log("Você não tem a idade minima para dirigir :(")
// }

// Exercici de código
// 2 Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt("qual letra é referente ao seu horario de curso? m(Matutino), v(Vespertino) ou n(Noturno)?")

// console.log(turno)

// function qualTurno(){
//   if (turno === 'm'){
//   console.log("Bom dia!")
// }
//  if (turno === 'v'){
//    console.log("Boa tarde!")
//  } 
//  if (turno === 'n'){
//    console.log("Boa noite!")
//  } else {
//    console.log("Tem certeza que digitou a letra correta?")
//  }
// }



// Exercicio de código
// 3
// const turno = prompt("qual letra é referente ao seu horario de curso? m(Matutino), v(Vespertino) ou n(Noturno)?")

// switch (turno){
//   case "m":
//     console.log("Bom dia!")
//     break
//     case "v":
//       console.log("Boa tarde!")
//       break
//       case "n":
//         console.log("Boa noite!")
//         break
//         default:
//           console.log("Tem certeza que digitou a letra correta?")
//           break
// }

// exercicio de código
//4 Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const tipoFilme = prompt("qual genero do filme?")
// const valorIngresso = Number(prompt("qual o valor do ingresso?"))

//  if (valorIngresso <= 15){
//    console.log("bom filme!")
//  } 
//  if (tipoFilme === "fantasia"){
//    console.log("Bom filme!")
//  } else {
//    console.log("deu ruim")
//  }

