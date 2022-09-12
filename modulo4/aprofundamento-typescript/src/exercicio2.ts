function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )

  let soma:number = 0

  for (let num of numeros) {
      soma += num
  }



  const estatisticas:Estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

console.log(obterEstatisticas([1, 22, 5 ,7, 2]))


type Estatisticas={
  maior:number,
  menor:number,
  media:number
}

type Amostra = {
  numeros:number[],
  obterEstatisticas: (numeros:number[]) => Estatisticas
}

const amostraDeIdades:Amostra = {

  numeros: [21, 18, 65, 44, 15, 18],

  obterEstatisticas: (numeros:number[]) =>  {
    return obterEstatisticas(numeros)
  }
}