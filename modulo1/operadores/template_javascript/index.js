// //constinuar aula a partir de 2:00 horas

// console.log('funcionando')

// const num1 = 25

// const num2 = 10

// const soma = num1 + num2

// console.log(soma)

// const menos = num1 - num2

// console.log(menos)

// const multiplicar = num1 * num2

// console.log(multiplicar)

// const resto = num1 % num2

// console.log(resto)

// const divisao = num1 / num2

// console.log(divisao)

// const compara = num1 === num2

// console.log(compara)

// console.log(1 == '1') //true
// console.log(1 == '2') //false

// /*
// exemplos de simplificação

// let resultado = 100
// resultado = resultado + 20 | resultado += 20
// resultado = resultado - 10 | resultado -= 10
// resultado = resultado * 5  | resultado *= 5
// resultado = resultado / 10 | resultado /= 10
// */
// /*"1" !== "2" // true, são diferentes
// "2" !== "2" // false, são iguais
// 2 !== "2" // true, tipos diferentes*/

// //primeiro exercicio pratico da aula

// let valor1 = 3
// let valor2 = 4
// console.log(valor1 + valor2)

// let valor3 = 3
// let valor4 = 5
// //let resultado = (valor3 * valor4) / 2
// console.log((valor3 * valor4) / 2)

// let valor5 = 4
// let valor6 = 5
// console.log((valor5 - valor6) * -1)

// let valor7 = 234
// let valor8 = 5
// console.log(valor7 % valor8)

// //segundo exervivio pratico da aula

// const exe2 = 10
// const exet2 = 12

// console.log(exe2 === exet2)
// console.log(exe2 !== exet2)
// console.log(exe2 > exet2)
// console.log(exe2 < exet2)
// console.log(exe2 == exet2)

// //terceiro exercicio da aula

// const a = true
// const b = false
// const c = true

// console.log(a && b)
// console.log(b && c)
// console.log(a && c)
// console.log(a && b && c)

// //quarto exercicio da aula

// console.log(a && b)
// console.log(b && c)
// console.log(a && c)
// console.log(a || b || c)

// // Faça um programa que receba o
// // nome, ano de nascimento de uma
// // pessoa e o ano atual e mostre:
// // ● O nome da pessoa
// // ● A idade dessa pessoa
// // ● Um true ou false que diz se ela é
// // maior de idade
// // ● Quantos anos ela terá em 2050

// const nome = 'Rafael'
// const anoDeNascimento = 2003
// const anoAtual = 2022

// console.log(
//   'Olá ',
//   nome,
//   'sua idade é ',
//   2022 - anoDeNascimento,
//   'e em 2050 você terá',
//   2050 - anoDeNascimento
// )

// let maiorDeIdade = anoAtual - anoDeNascimento
// let resposta = maiorDeIdade >= 18

// console.log('o usuario é maior de idade?:', resposta)

// //exemplo operador não '!'

// const no = false
// const yes = true

// console.log(!no)
// console.log(!yes)

// /* ● Existem 3 operadores importantes:
// ○ Operador E: &&
// ○ Operador Ou: ||
// ○ Operador Não/Negação: !
// */

/*Exercicio de interpretação código 1

no  "console.log(a.)" será retornado um 'false'
no  "console.log(b.)" será retornado um 'flase'
no  "console.log(c.)" será retornado um 'true'
no  "console.log(a.)" será retornado um 'boolean'

Exercicio de interpretação código 2/3

No console serão impressos os numeros porem no formato string
para no console ser impresso no formato number deve ser escrito na seguinte sintaxe

Exemplo
let numero = Number(prompt('digite um numero'))

*/

//Exercicios de código

//1

// a) Pergunte a idade do usuário/ok

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

const nome = prompt('digite seu nome')
const idadeAmigo = Number(prompt('qual a idade do seu(a) melhor amigo?'))
let verdadeiro = true
console.log('sua idade é maior do que a do seu melhor amigo(a)?:', verdadeiro)
console.log(19 % idadeAmigo)

//2

// a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number(prompt('digite um numero par'))
console.log(numeroPar % 2)
//sempre o valor retornado será 0
//o console vai retornar o resto da divisão do por 2, no caso, se o usuario inserir 15
//no console vai ser retornado 1

//3
//Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

// a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

let idadeUsuario = Number(prompt('qual sua idade'))
console.log('sua idade em meses é:', idadeUsuario * 12)
console.log('sua idade em dias são:', idadeUsuario * 365)
console.log('sua idae em horas são:', idadeUsuario * 8760)

//4
//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações
//e imprima no console as seguintes mensagens seguidas pelo true ou false:

const inputUserNumber = Number(prompt('digite um numero'))
const inputUserNumber2 = Number(prompt('digite outro numero'))

console.log(
  'o primeiro numero é maior q o segundo:',
  inputUserNumber > inputUserNumber2
)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//aqui confere se o primeiro numero inserido pelo usuario é
//maior que o segundo^

console.log(
  'o pimeiro numero é igual ao segundo:',
  inputUserNumber === inputUserNumber2
)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//aqui confere se primeiro e o segundo numero inseridos pelo
//usuario são iguais^

let resto = inputUserNumber % inputUserNumber2
console.log('o primeiro numero é divisivel pelo segundo:', resto === 0)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//aqui caso o numero retornado no console for 0 o numero é
//divisivel pelo segundo^

resto = inputUserNumber2 % inputUserNumber
console.log('o segundo numero é divisivel pelo primeiro', resto === 0)
