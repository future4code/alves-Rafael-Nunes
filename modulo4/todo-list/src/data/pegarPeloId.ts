import { connection } from "./data";

export default async function pegarPeloId(
  id:string
){
  const resposta = await connection('users_to_do_list')
  .select('*')
  .where({id})

  return resposta[0]
}