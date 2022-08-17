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

type Task ={
    userId:string | number,
    id:string | number,
    title:string ,
    completed:boolean
}

//Exercicio 3

const tasks:Task[] =
[
  {
    userId: 1,
    id: 5,
    title: 'levar o doguinho para passear',
    completed: true
  },
  {
    userId: 2,
    id: 3,
    title: 'fazer um array para servir de banco de dados',
    completed: false
  },
  {
    userId: 3,
    id: 2,
    title: 'fazer o exercicio 1',
    completed: true
  }
] 