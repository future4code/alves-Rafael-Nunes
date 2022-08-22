import express, { Response, Request } from "express";
import cors from "cors";
import { users, User, Extrato } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("rodando na porta 3003")
});

app.get('/users', (req: Request, res: Response) => {
  res.send(users)
})

app.post('/user', (req: Request, res: Response) => {
  const newUser:User | Extrato[] = {
    name:req.body.name,
    cpf:req.body.cpf,
    data:req.body.data,
    extrato:[{
      descricao: req.body.descricao,
      data1: req.body.data1,
      valor: req.body.valo
    }]
  }
  users.push(newUser)
  res.send(users)
})
// export type User = {
//   name:string,
//   cpf:string | number,
//   data:string | number,
//   extrato:Extrato[]
// }