import { Request, Response } from "express"
import endpoint6 from "../data/endpoint6"

const createPurchase = async(req:Request, res:Response) => {
try{
  const{userId, productId, quantity,  totalPrice} = req.body
  if(!userId || !productId || !quantity ||  !totalPrice){
    res.statusCode = 404
    throw new Error("Houve um erro ao cadastrar compra")
  }
  await endpoint6(userId, productId, quantity,  totalPrice)
  res.status(200).send("compra cadastrada com sucesso!")
}catch(error){
  res.status(500).send("erro ao cadastrar compra")
  }
}
export default createPurchase