import { Request, Response } from "express";
import { User } from "../types";

export default async function createUser(req:Request, res:Response){
  try{
    const {name, email, password}:User = req.body

    if(!name || !email || !password){
      throw new Error(`os campos 'name', 'email' e 'password' devem ser preenchidos`)
    }
  }catch(error:any){
    res.status(500).send({message: error.message})
  }
}