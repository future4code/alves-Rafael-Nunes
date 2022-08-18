import express,{Request, Response} from "express";
import cors from "cors";
import { Product } from "./data";
import {products} from './data'


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("rodando na porta 3003")
});

//Exercicio 1
//=========================================================================================================================

app.get('/teste', (req:Request, res:Response) => {
  res.send('rodou bonito essa')
})

//Exercicio 3

app.post('/add/product', (req:Request, res:Response) => {
  const newProduct:Product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  }
  products.push(newProduct)
  res.send(products)
})

//Exercicio 4
//================================================================================================================

app.get('/all', (req:Request, res:Response) => {
  res.send(products)
})

//Exercicio 5
//====================================================================================================================

