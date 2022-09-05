function showInfos (nome:string, data:string):string {
  const splitData = data.split('/')
  const day = splitData[0]
  const month = splitData[1]
  const year = splitData[2]

  return `Olá me chamo ${nome} e nasci no dia ${day} de ${month} de ${year}`
}

console.log(showInfos('Rafael', '18/03/2003)'))

