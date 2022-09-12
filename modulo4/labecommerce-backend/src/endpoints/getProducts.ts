import { Request, Response } from "express"
import { Product } from "../types"
import { connection } from "../data/connection"

const getProducts = async (req:Request, res:Response): Promise<void> => {
  try{
    const products:Product[] = await connection("labecommerce_products")
    res.statusCode = 200
    res.send(products)
  }catch(error){
    res.status(500).send('houve um erro ')
  }
}

export default getProducts