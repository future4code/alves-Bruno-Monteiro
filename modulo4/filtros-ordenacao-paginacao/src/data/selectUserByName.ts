import { connection } from "../index"

export async function selectUserByName(name: string):Promise<any> {
    const result = await connection("aula49_exercicio")
    .select("*")
    .where("name", "LIKE", `${name}%`)

    return result
}