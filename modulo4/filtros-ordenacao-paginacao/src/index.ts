import express, {Request, Response} from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import {getAllUsers} from './endpoints/getAllUsers'
import { filterName } from "./endpoints/usersByName";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
})

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
  console.log('rodando na porta 3003')
})



app.get('/users', getAllUsers)

app.get('/name/filter', filterName)