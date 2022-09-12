import { connection } from "..";

export default async function inserirUser(
  id: string,
  name:string,
  nickname:string,
  email:string
){
  await connection.insert({
    id: id,
    name: name,
    nickname: nickname,
    email: email
  }).into('users_to_do_list')
}