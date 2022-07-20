// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt(Number("qual a altura do retangulo?"))
  const base = prompt(Number("qual a largura da base do retangulo?"))
  const resultado = altura * base
  console.log(resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade() {
   // implemente sua lógica aqui
  const anoAtual = prompt(Number("em que ano estamos?"))
  const nasceuEm = prompt(Number("você nasceu em que ano?"))
  const idade = anoAtual - nasceuEm
  console.log(idade)
 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  // const peso = prompt(Number("qual seu peso?"))
  // const altura = prompt(Number("qual sua altura?"))
  // const imc = peso / (altura * altura)
  // console.log(imc)
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const usuario = prompt("qual seu nome?")
  const idadeUsuario = prompt("qual sua idade?")
  const emailUsuario =prompt("insira seu e-mail")
  console.log(`Meu nome é ${usuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("diga uma cor")
const cor2 = prompt("outra")
const cor3 = prompt("só mais uma chefia")
const cores = [cor1, cor2, cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}