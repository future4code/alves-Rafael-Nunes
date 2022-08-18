export type Product = {
id:string | number,
name:string,
price:number
}
export const products:Product[] = [
  {
    id: '1a',
    name: 'tenis azul',
    price: 129.90
  },
  {
    id: '1b',
    name: 'camisa preta',
    price: 45.50
  },
  {
    id:'1c',
    name: 'calça jeans',
    price: 69.99 
  }
]