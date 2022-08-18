type User ={
  id:number ,
  name:string ,
  email:string ,
  type:typeUser ,
  age:number,
}

enum typeUser {
  ADMIN = 'admin',
  NORMAL = 'normal'
}

export let users:User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: typeUser.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: typeUser.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: typeUser.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: typeUser.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: typeUser.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: typeUser.ADMIN,
      age: 60
  }
]