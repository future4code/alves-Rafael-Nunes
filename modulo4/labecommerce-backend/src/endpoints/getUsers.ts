import { Request, Response } from "express"
import { User } from "../types"
import { connection } from "../data/connection"

const getUsers = async (req:Request, res:Response): Promise<void> => {
  try{
    const users:User[] = await connection("labecommerce_users")
    res.statusCode = 200
    res.send(users)
  }catch(error){
    res.status(500).send('houve um erro ')
  }
}

export default getUsers