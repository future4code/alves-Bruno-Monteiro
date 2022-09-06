import { Request, Response } from "express";
import { insertAddress } from "../data/insertAddress";
import { getFullAddress } from "../services/getFullAddress";
import { Address } from "../types";

export const createAddress = async (req: Request, res: Response) => {
    try {
        const { cep } = req.params

        const address = await getFullAddress(cep)

        if (!address) {
            res.statusCode = 404
            throw new Error("Address not found")
        }

        const addressInfos: Address = {
            cep: address.cep,
            logradouro: address.logradouro,
            numero: address.ibge,
            complemento: address.complemento,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf
        }
        


        await insertAddress(addressInfos)

        res.status(201).send({message: "Address created with success"})


    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message || error.sqlMessage)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
