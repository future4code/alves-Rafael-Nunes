// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b
// Exemplo:

function checarDesigualdade(a, b) {
  return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3))

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
  //  Sua lógica aqui
  return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(7, 7))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
  return `se ${a} > ${b} ${a > b}`
}
console.log(verificaSeEMaior(321, 2156))

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'=false
// d-) 'b'>'a'= false
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
function registerUser(name, age, password, nacionality) {
  if (
    age >= 18 &&
    password.length >= 6 &&
    nacionality.toLowerCase() === 'brasileira'
  ) {
    const user = [name, age, password, nacionality]
    console.log('usuario cadastrado com sucesso')
  } else {
    console.log('deu ruim')
  }
}
console.log(registerUser('Rafael', 18, '123456', 'brasileira'))
// Função criada com switch case

// function registerUser(name, age, password, nacionality) {
//   const infoUser = [name, age, password, nacionality]
//   switch (infoUser) {
//     case age < 18:
//       console.log('você não tem a idade minima para se cadastrar')
//       break
//     case password.length <= 6:
//       console.log('a senha precisa ter no minimo 6 caracteres')
//       break
//     case nacionality.toLowerCase !== 'Brasileira':
//       console.log('para se cadastrar é preciso ser Brasileiro(a)')
//     default:
//       console.log('cadastro realizado com sucesso!!')
//       break
//   }
// }
// console.log(registerUser('Rafael', 18, '1a2b3c', 'Brasileira'))

const cadastro = () => {
  const usuario = []

  //  Sua lógica aqui
}
console.log(cadastro())

// Exercício 4-----------------------------------------------------------------------------------------------

function loginUser(user, senha) {
  if (senha === 'Labenu') {
    const login = [user, senha]
    console.log('usuario logado')
  } else {
    console.log('senha invalida')
  }
}
console.log(loginUser('Rafael', 'Labenu'))

// function loginUser(user, senha) {
//   const login = [user, senha]
//   switch (login) {
//     case senha !== 'Labenu':
//       console.log('senha invalida')
//       break
//     default:
//       console.log('usuario logado')
//       break
//   }
// }
// console.log(loginUser('Rafael', 'Labenu'))

// const login = () => {
//   const login = 'labenu'
//   //  Sua lógica aqui
// }

// console.log(login())

// Exercício 5----------------------------------------------------------------------------------------------------

function vacinaUser(user, vacina) {
  const userVacina = [user, vacina]
  switch (userVacina) {
    case vacina === 'Pfizer'.toLowerCase:
      console.log('segunda dose com 90 dias')
      break
    case vacina === 'Astrazeneca'.toLowerCase:
      console.log('segunda dose com 90 dias')
      break
    case vacina === 'CoronaVac'.toLowerCase:
      console.log('segunda dose com 28 dias')
      break
    default:
      console.log('vacina não encontrada, confira se o nome esta correto')
      break
  }
}
console.log(vacinaUser('Rafael', 'CoronaVac'))

const primeiraDose = () => {
  //  Sua lógica aqui
}
console.log(primeiraDose())

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = nomeDoUsuario => {
  const usuarios = [
    { nome: 'Artur', imunizacao: 'incompleta' },
    { nome: 'Barbara', imunizacao: 'incompleta' },
    { nome: 'Carlos', imunizacao: 'incompleta' }
  ]

  //  Sua lógica aqui
}
console.log(segundaDose('Barbara'))

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
  const usuarios = [
    { nome: 'Artur', imunizacao: 'incompleta' },
    { nome: 'Barbara', imunizacao: 'completa' },
    { nome: 'Carlos', imunizacao: 'incompleta' }
  ]

  //  Sua lógica aqui
}
console.log(avisoAosAtrasados())

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: 'Artur',
    ano: 2000,
    nacionalidae: 'brasileiro',
    senha: '123456',
    vacina: 'pfizer',
    imunizacao: 'incompleta'
  },
  {
    nome: 'Bárbara',
    ano: 1984,
    nacionalidae: 'brasileira',
    senha: 'labenu',
    vacina: 'astrazenica',
    imunizacao: 'completa'
  },
  {
    nome: 'Carlos',
    ano: 2000,
    nacionalidae: 'brasileiro',
    senha: '123456',
    vacina: 'coronavac',
    imunizacao: 'incompleta'
  }
]

const cadastroDesafio = () => {
  //  Sua lógica aqui
}
console.log(cadastroDesafio())

const loginDesafio = () => {
  //  Sua lógica aqui
}
console.log(loginDesafio())

const primeiraDoseDesafio = () => {
  //  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = nomeDoUsuario => {
  //  Sua lógica aqui
}
console.log(segundaDoseDesafio('ALGUM NOME AQUI'))

const avisoAosAtrasadosDesafio = () => {
  //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio())
