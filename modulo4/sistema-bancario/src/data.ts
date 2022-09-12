export type Extrato = {
  descricao:string,
  data1:string | number,
  valor:number
}

export type User = {
  name:string,
  cpf:string | number,
  data:string | number,
  extrato:Extrato[]
}

export const users:User[] = 
[
  {
    name:'Gerente',
    cpf:'555.555.555-55',
    data:'05/05/2005',
    extrato:[{
      descricao:'alguma coisa',
      data1: '27/05/2022',
      valor:19.90
    }]
  }
]