import express,{Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Rodando na porta 3003')
})

//Exercicio 1

app.get('/ping', (req:Request, res:Response) => {
  res.send('Pong')
})

//Exercicio 2

type tasks ={
    userId:string | number,
    id:string | number,
    title:string ,
    completed:boolean
}
