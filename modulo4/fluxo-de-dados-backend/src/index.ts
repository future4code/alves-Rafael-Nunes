import express,{Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("rodando na porta 3003")
});

app.get('/teste', (req:Request, res:Response) => {
  res.send('rodou bonito essa')
})

