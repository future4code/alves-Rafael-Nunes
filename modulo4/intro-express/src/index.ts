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

// exercicio 5

type Post = {
 id:string | number,
 title:string, 
 body:string,
 userId:number | string
}

//exercicio 6 

const posts:Post[] = 
[
  {
    id: 1,
    title: 'Olá mundo!',
    body: 'Olá este é meu primeiro post',
    userId: 1
  },
  {
    id: 2,
    title: 'Bom dia!',
    body: 'Bom dia a todos!',
    userId: 2
  },
  {
    id: 3,
    title: 'ta certo?',
    body: 'se não tivesse errado estaria certo',
    userId: 3
  },
  {
    id: 4,
    title: 'onde é que eu to?',
    body: 'sera que estou na lagoinha?',
    userId: 4
  }
]

//Exercicio 7 

app.get('/posts', (req:Request, res:Response) =>{
  res.send(posts)
})

// exercicio 8

app.get('/posts:id', (req:Request, res:Response)=>{
  const id = req.params.id

  const getPost:Post[] = posts.filter((posts)=>{
    return posts.userId === id
  }) 
    res.send(getPost)
})

//Fora pois caso quisermos chamar os usuarios de forma isolada é melhor
//e para manter um certa organização

//Exercicio 8

