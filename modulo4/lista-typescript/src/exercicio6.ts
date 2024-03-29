type Infos = {
  cliente:string,
  saldoTotal:number,
  debitos:number[]
}

const infosClients:Infos[] = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function negativeClients(infosClients:Infos[]):Infos[] {
   infosClients.map(infosClients =>{
		const debts = infosClients.debitos.reduce((a,b) => a + b, 0)
		infosClients.saldoTotal -= debts 
		infosClients.debitos = []
	})
  const negativedClients = infosClients.filter(infosClients => infosClients.saldoTotal -= 0)
	return negativedClients 
} 

console.table(negativeClients(infosClients))

