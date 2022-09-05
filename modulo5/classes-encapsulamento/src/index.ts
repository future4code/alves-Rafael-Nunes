//Oconstructor é executado quando se cria uma instancia de classe e recebe parametros e é declarado como "constructor"

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transactions[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
     transactions:Transactions[]
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
     this.transactions = transactions
  }

  public getCpf(){
    this.cpf
  }

  public getName(){
    this.name
  }

  public getAge(){
    this.age
  }

}

// const UserAccount1:UserAccount = new UserAccount(
//   "000.000.000-00",
//   "Danilo",
//   32,
// )

// const UserAccount2:UserAccount = new UserAccount(
//   "100.100.100-10",
//   "Rodrigo",
//   25
// )
//2
//Os atributos privado só podem ser acessado de dentro da propria classe através do this
//=================================================================================
//Exercicio 2

class Transactions {
 private description: string
 private value: number
 private date: string

 constructor(
  description: string,
  value: number,
  date: string
 ){
  this.description = description
  this.value = value
  this.date  = date
 }

public getDescription(){
  return this.description
}

public getValue(){
  return this.value
}
 
public getDate(){
  return this.date
}

}

const transactions1: Transactions = new Transactions(
  "comprou algo",
  79.90,
  "15/07/2022",
)

const UserAccount3 :UserAccount = new UserAccount(
  "555.555.555-55",
  "pessoa",
  29,
  [transactions1]
)
console.log(UserAccount3)