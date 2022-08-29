import { connection } from "./data";

export default async function editarUser(
  id:string,
  name?:string,
  nickname?:string,
  email?:string
){
  if(name){
    await connection.raw(`
      update users_to_do_list
      set name = '${name}'
      where id =' ${id}'
    `)
  }
  if(nickname){
    await connection.raw(`
      update users_to_do_list
      set name = '${nickname}'
      where id =' ${id}'
    `)
  }
  if(email){
    await connection.raw(`
      update users_to_do_list
      set name = '${email}'
      where id =' ${id}'
    `)
  }
}