const task = process.argv[2]

const lista = [
  { tarefa: 1, descrição: 'dar banho no cachorro' },
  { tarefa: 2, descrição: 'fazer o almoço' },
  { tarefa: 3, descrição: task }
]

console.table(lista)
