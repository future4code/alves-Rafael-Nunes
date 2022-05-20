// Exercícios de interpretação de código
// 1- Leia o código abaixo

// const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array)
// })

// a) O que vai ser impresso no console?
// R: Vão aparecer todos os objetos dentro do array, mostrando o elemento que está sendo processado, o indice e o array de onde foi chamado.

// 2

// const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome
// })

// console.log(novoArrayB)

// a) O que vai ser impresso no console?
// R:Somente os nomes em um novo array

// 3

// const usuarios = [
//   { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' },
//   { nome: 'Letícia Chijo', apelido: 'Chijo' }
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.apelido !== 'Chijo'
// })

// console.log(novoArrayC)

// a) O que vai ser impresso no console?
// R:Somente os dois primeiros objetos do array

// Exercícios de escrita de código

// 1- Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// a
// const pets = [
//   { nome: 'Lupin', raca: 'Salsicha' },
//   { nome: 'Polly', raca: 'Lhasa Apso' },
//   { nome: 'Madame', raca: 'Poodle' },
//   { nome: 'Quentinho', raca: 'Salsicha' },
//   { nome: 'Fluffy', raca: 'Poodle' },
//   { nome: 'Caramelo', raca: 'Vira-lata' }
// ]

// const arrayPets = pets.map((item, index, array) => {
//   console.log(item.nome)
// })

// b

// const late = pets.filter((pets1) => {
//   return pets1.raca === "Salsicha"
// })
// const petPao = late.map((pets1) => {
//   return pets1.raca
// })

// console.log(petPao)

// const fofinhos = pets.filter(pets2 => {
//   return pets2.raca === 'Poodle'
// })
// const fofi = fofinhos.map(pets2 => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets2.nome}`
// })
// console.log(fofi)

// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]
