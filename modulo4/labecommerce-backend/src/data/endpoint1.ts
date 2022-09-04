import { User } from "../types";
import { connection } from "./connection";

const endpoint1 = async  (name: string, email: string, password: string): Promise<void> => {
  const id = Date.now().toString()
  const resp: User = {
    id: id,
    name: name,
    email: email,
    password: password
  }
  await connection('labecommerce_users').insert(resp)

}
export default endpoint1
