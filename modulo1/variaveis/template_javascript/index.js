/*Exercicio de analise de código*/
/*
1-)Resposta) no console será impresso o segunte
console.log(b)/ Vai exibir 10
e
console.log(a, b)/ Vai exibir 10 10

2-)Resposta) no console será impresso o segunite
10
10
20

3-)Resposta) o código pergunta quanto tempo o usuario trabalha por dia e quanto o usuario recebe por dia,
assim que o usuario fornece esses valores ele retorna quanto o usuario ganha por dia

sriam melhores nomes de variaves
em vez de p horasTrabalhadasDia
e em vez de t valorGanhoPorDia

na minha opinião os nomes de variaveis estão grandes porm bem significativos
*/

//Exercicio de código 2

const nome = prompt('Digite seu nome')
const idade = prompt('digite sua idade')
console.log(nome, idade)
console.log(typeof nome, typeof idade) //passo d-) O resultado impresso no console foi 'string string'
//passo e-) com o typeof foi impresso no console 'string string' e sem foram impressos o nome e a idade digitadas
console.log('Olá! ', nome, 'sua idade é ', idade)

//Exercicio de código 2

const Pergunta1 = 'Você é maior de idade?'
const Pergunta2 = 'Você dormiu bem?'
const Pergunta3 = 'Você gosta de videogames?'

const resposta1 = 'sim'
const resposta2 = 'não'
const resposta3 = 'sim'

console.log(Pergunta1, '-', resposta1)
console.log(Pergunta2, '-', resposta2)
console.log(Pergunta3, '-', resposta3)

//Exercicio de código 2

let a = 10
let b = 25

a = b
b = a

console.log('O novo valor de a é', a)
console.log('O novo valor de a é', b)

//Desafio

let num1 = Number(prompt('Digite um numero'))
let num2 = Number(prompt('Digite outro numero'))

console.log(num1 + num2)

let mult1 = Number(prompt('Digite um numero'))
let mult2 = Number(prompt('Digite um numero'))

console.log(mult1 * mult2)
