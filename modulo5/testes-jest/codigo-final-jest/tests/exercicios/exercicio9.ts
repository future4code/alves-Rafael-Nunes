export const padronizeDate = (data1:string) => {
  const date = new Date(data1)
  const formatDate = date.toLocaleDateString()

  return formatDate 
}