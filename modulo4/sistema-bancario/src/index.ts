import express,{Response, Request} from "express";
import cors from "cors";
import { users, User, Extrato } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("rodando naquele pique na porta 3003")
});

app.get('/users', (req:Request, res:Response) => {
  res.send(users)
})