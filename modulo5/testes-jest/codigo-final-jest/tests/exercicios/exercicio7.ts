export const numbers = [1, 5, 7, 8, 6, 10]

export const calcMedia = (array:number[]):number => {
  let med = 0

  for(let n of array){
    med += n
  }

  const totalMed = Math.ceil(med / array.length) 

  return totalMed
}

