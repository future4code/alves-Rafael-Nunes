import { Request, Response } from "express"
import { connection } from ".."

export async function selecByName(name:string): Promise<any> {
  const result = await connection.raw(`
  select id, name, email, type
  from aula49_exercicio
  whree name like "%${name}%"
`)
  return result[0]
}

export const filterName = async(req:Request, res:Response): Promise<void> => {
  try{
    const name = req.query.name as string
    const users = await selecByName
    if(!name){
      throw new Error ('O nome não consta no banco de dados')
    }
    if(!users.length){
      res.status(400)
      throw new Error ('Usuarios não encontrados')
    }
    res.status(200).send(users)
    
  }catch(error){
    res.send('Erro')
  }
}