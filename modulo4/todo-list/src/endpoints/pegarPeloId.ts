import {Request, Response} from 'express'
import pegarPeloId from '../data/pegarPeloId'

export default async function pegarPeloIdRes(
  req:Request, res:Response
){
  try{
    const user = await pegarPeloId(req.params.id)

    if(!user){
      res.status(404).send("erro, usuario não encontrado")
    }
    res.status(200).send({
      id: user.id,
      nickname: user.nickname
    })

  }catch(err){
    res.status(400).send("erro")
  }
}