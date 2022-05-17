// Exercicios de compreensão de código
// 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a-) Matheus Nachtergaele
// 4 ou o numero de caracteres
// globo 14h
// CORREÇÃO: Matheus Nachtergaele
// Virginia Cavendish
// globo 14h

// Exercicio de compreensão 
// 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a-)
// cachorro 
// nome:juca
// idade 3
// raca:SRD

// gato
// nome:juba
// idade 3
// raca:SRD

// tartaruga
// nome:jubo
// idade 3
// raca:SRD

// b-)Resposta: ela cria uma cópia de objeto ou array

// Exercicio compreenssão de código
// 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a-)false
// null ou undefined

// b-)o console imprime "undefined" pois não tem nenhum parametro pré definido para " altura"

// exercicio de código

const pessoaAp = {
  nome:"Rafael",
  apelidos : ["Rafa", "fael","Raff"]
}

// console.log(`eu sou ${pessoaAp.nome}, mas pode me chamar de: ${pessoaAp.apelidos}`)

function frase(){
  const f1 = pessoaAp.apelidos[0]
  const f2 = pessoaAp.apelidos[1]
  const f3 = pessoaAp.apelidos[2]
  console.log(`eu sou ${pessoaAp.nome}, mas pode me chamar de: ${pessoaAp.apelidos}`)
}

console.log(frase)