export const baseURL = 'https://viacep.com.br/'
import axios from "axios"
import { Request, Response } from "express"

export const getAddress = async(req:Request, res:Response) => {
  try{
    const cep = req.params

    const address = await axios.get(`${baseURL}/${cep}/json`)
    console.log(address.data)

    if(!address){
      res.status(400)
      throw new Error('not found')
    }
    const addressInfos = {
      bairro: address.bairro,
      localidade: address.localidade,
      logradouro: address.logradouro,
      estado: address.uf
    }
    res.status(200).send(addressInfos)

  }catch{

  }
}