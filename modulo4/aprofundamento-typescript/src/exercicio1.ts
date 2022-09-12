const myString:string = '15'

const myNumber:number | string = 15


enum optionColors {
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  VIOLETA = 'violeta'
}

type person = {
  name:string,
  age:number,
  favoriteColor:optionColors
}

  const user1:person = {
    name:'Ruan',
    age: 22,
    favoriteColor: optionColors.AZUL
  }

  const user2:person ={
    name:'Luisa',
    age: 21,
    favoriteColor: optionColors.VIOLETA
  }

  console.log(user1, user2)