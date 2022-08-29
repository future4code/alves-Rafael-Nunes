import express from 'express'
import dotenv from 'dotenv'
import knex from 'knex'
import createUser from '../endpoints/createUser'
import pegarPeloId from './pegarPeloId'
import pegarPeloIdRes from '../endpoints/pegarPeloId'


dotenv.config()

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

app.use(express.json())

app.put('/user', createUser)

app.get('/user/:id', pegarPeloIdRes)


app.listen(3003, () => {
  console.log('rodando na porta 3003')
})