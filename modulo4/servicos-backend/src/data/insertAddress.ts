import { Address } from "../types"
import { connection } from "./connection"

export const insertAddress = async (address: Address) => {
    await connection
        .insert(address)
        .into("aula_servicos_backend")
}