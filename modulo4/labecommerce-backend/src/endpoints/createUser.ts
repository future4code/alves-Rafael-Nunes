import { Request, Response } from "express";
import { User } from "../types";
import endpoint1 from "../data/endpoint1";

const createUser = async (req:Request, res:Response) => {
    try{
      const {name, email, password} = req.body
      if(!name || !email || !password){
        res.statusCode = 404
        throw new Error('Você precisa passar name email e password')
      }
      // if(typeof name || email || password !== ""){
      //   throw new Error('todos valores passados devem ser strings')
      // }
      await endpoint1(name , email , password)
      res.status(200).send('usuario criado')

    }catch(error:any){
        res.status(400).send('houve um erro')
    }
}

export default createUser