import {Request, Response} from 'express';
import endpoint3 from '../data/endpoint3';

const createProduct = async(req:Request, res:Response) => {
  try{
    const{name, price, imageUrl} = req.body
    if(!name || !price || !imageUrl){
    res.statusCode = 404
    throw new Error("Voce deve preencher todos os campos da seguinte forma(name=string, price=number, imageUrl=string)")
    }
    await endpoint3(name, price, imageUrl)
    res.status(200).send('produto criado')
  }catch(error){
    res.status(500).send('erro ao tentar criar produto')
  }
}

export default createProduct