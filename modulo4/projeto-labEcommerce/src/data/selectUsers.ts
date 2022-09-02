import { userData } from "../types";
import connection from "./connection";

const typeUser = (user:any) =>{
    const createUser :userData={
        id:user.id,
        name: user.name,
        email:user.email,
        password:user.password
    }
    return createUser
}


export default async function selectUsers(): Promise<userData[] | undefined> {

const result = await connection("labecommerce_users")

return result

}
    
