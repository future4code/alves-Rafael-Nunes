import  express,{request, Request, Response}  from "express";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () =>{
  console.log('servidor rodando em https//:localhost:3003')
})


//exercicio 1

app.get('/', (req:Request, res:Response) =>{
  res.send('Olá express')
})

//exercicio 2

type Users = {
 id:number | string,
 name:string,
 phone:string | number,
 email:string,
 website:string,
}

let users:Users[] = 
[
  {
    id: 1,
    name: 'Rafael',
    phone: '9999-9999',
    email: 'Rafael@email.com',
    website: 'cocacolalight.com'
  },
  {
    id: 2,
    name: 'José',
    phone: '1111-5555',
    email: 'ze@email.com',
    website: 'cocacolanormal.com'
  },
  {
    id: 3,
    name: 'Jessica',
    phone: '1111-1234',
    email: 'jessica@email.com',
    website: 'cocacolacero.com'
  },
  {
    id: 4,
    name: 'Yudi',
    phone: '4002-8322',
    email: 'yudi@email.com',
    website: 'sitedoyudi.com'
  }
]

app.get('/users', (req:Request, res:Response)=>{
  res.send(users)
})

