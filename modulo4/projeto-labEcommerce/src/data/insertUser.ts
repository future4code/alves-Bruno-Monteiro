import { userData } from "../types/typesUser";
import connection from "./connection";


export default async function insertUser (insertUser:userData):Promise<string> {

    const{id,name,email,password} = insertUser
    
 await connection ("labecommerce_users")
 .insert({
    id,
    name,
    email,
    password    
 })

    return `O usuário, ${name} foi criado com sucesso`

}

