import { connection } from "./connection";
import { Purchase } from "../types";

const endpoint6 = async(userId:string, productId:string, quantity:number, totalPrice:number,
): Promise<void> =>{
  const id = Date.now().toString()
  const response:Purchase = {
    id:id,
    userId: userId,
    productId: productId,
    quantity: quantity,
    totalPrice: totalPrice
  }
  await connection("purchase_labecommerce").insert(response)
}

export default endpoint6