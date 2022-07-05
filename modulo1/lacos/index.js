// Exercicio de interpretação de código
// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?
// R:ele vai pegar o prieiro valore somar com o seguinte, assim chegando a 10

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// 2- Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero)
//   }
// }

// a) O que vai ser impresso no console?
// R:No console será impresso somente os valores maiores de 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// R:

// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// R:****

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Exercicio de escrita de código
//  1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// dica: Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// c) Por fim, imprima o array com os nomes dos bichinhos no console

let petsArray = Number(prompt('quantos pets você tem?'))
