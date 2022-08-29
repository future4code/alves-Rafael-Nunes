import {Request, Response} from 'express'
import inserirUser from '../data/inserirUser'

export default async function createUser(
  req:Request, res:Response
){
  try{
    if(
    !req.body.name ||
    !req.body.nickname ||
    !req.body.email
    ){
      res.status(400).send('preencha todos os campos') 
    }
    const id:string = Date.now().toString()

    await inserirUser(
      id,
      req.body.name,
      req.body.nickname,
      req.body.email,
    )
    res.status(200).send('Usuario inserido na tabela')
  }catch (error){
    res.status(404).send({
      message: 'erro'
    })
  }
}