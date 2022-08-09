const red = '\u001b[31m'
const blue = '\u001b[34m'
const reset = '\u001b[0m'

console.log(
  blue,
  'Olá',
  process.argv[2],
  'sua idade é',
  Number(process.argv[3])
)
console.log(
  red,
  'Olá',
  process.argv[2],
  'sua idade daqui a 7 anos será',
  Number(process.argv[3]) + 7
)
