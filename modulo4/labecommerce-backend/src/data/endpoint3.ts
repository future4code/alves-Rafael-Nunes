import { Product } from "../types";
import { connection } from "./connection";

const endpoint3 = async(name:string, price:number, imageUrl:string): Promise<void> => {
  const id = Date.now().toString()
  const response:Product ={
    id: id,
    name: name,
    price: price,
    imageUrl: imageUrl
  }
  await connection('labecommerce_products').insert(response)
}
export default endpoint3