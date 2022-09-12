import express from 'express'
import knex from 'knex'
import axios from 'axios'
import cors from 'cors'
import {baseURL} from './baseURL'

export const connection = knex({
  client: 'mysql',
  connection:{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: 3306
  }
})



const app = express()

app.use(cors())

app.use(express.json())

app.listen(3003, () => {
  console.log('rodando na porta 3003')
}) 

const main = async(): Promise<any> =>{
  try{
    console.log(await getAllSubs)
  }catch{

  }
}

 main()

//ex 1

async function getAllSubs(): Promise<any> {
  const res = await axios.get(`${baseURL}//subscribers`)

  return console.log(res.data)
}

getAllSubs()