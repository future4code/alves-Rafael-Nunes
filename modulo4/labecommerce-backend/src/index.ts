import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex"
import createUser from './endpoints/createUser'
import { AddressInfo } from "net"
import getUsers from './endpoints/getUsers'
import createProduct from './endpoints/createProduct'
import getProducts from './endpoints/getProducts'
import createPurchase from './endpoints/createPurchase'


const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});



app.post('/user', createUser)
app.get('/users', getUsers)
app.post('/product', createProduct)
app.get('/products', getProducts)
app.post('/purchase', createPurchase)