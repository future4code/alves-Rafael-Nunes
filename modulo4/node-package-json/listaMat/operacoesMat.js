const red = '\u001b[31m'
const blue = '\u001b[34m'
const reset = '\u001b[0m'

const number1 = Number(process.argv[2])
const number2 = Number(process.argv[3])
const operation = process.argv[4]

switch (operation) {
  case 'add':
    const add = number1 + number2
    console.log(blue, 'somar', add)
    break

  case 'sub':
    const sub = number1 - number2
    console.log(red, 'subtração', sub)
    break

  default:
    console.log('não há nada para calcular')
}
