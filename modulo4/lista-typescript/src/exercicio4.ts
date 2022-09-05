 enum Sectors{
  MARKETING = 'marketing',
  FINANCEIRO = 'financeiro',
  VENDAS = 'vendas'
 }

 type person = {
  nome:string,
  salario:number,
  setor:Sectors,
  presencial:boolean
 }

 const collaborators:person[] =
 [
	{ nome: "Marcos", salario: 2500, setor: Sectors.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: Sectors.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: Sectors.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: Sectors.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: Sectors.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: Sectors.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: Sectors.MARKETING, presencial: true }
]

function marketingCollaborator(collaborators:person[]):person[] {
  return collaborators.filter(
    (collaborators)=>{
      if(collaborators.setor === Sectors.MARKETING && collaborators.presencial === true)
      return collaborators
    }
  )
}

console.table(marketingCollaborator(collaborators))