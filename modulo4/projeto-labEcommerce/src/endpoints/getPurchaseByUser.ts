import { Request, Response } from "express";
import selectOneUser from "../data/selectOneUser";
import selectPurchasesByUser from "../data/selectPurchaseByUser";

export default async function getPurchasesByUser(req:Request,res:Response){
    try {
        const userId = req.params.userId

        const userAlreadyExist = await selectOneUser(userId)

        if (!userAlreadyExist) {
            throw new Error(`usuario com o id ${userId} nao foi encontrado`)
        }

        const allPurchases = await selectPurchasesByUser(userId)

        if(!allPurchases?.compras.length){
            throw new Error(`pessoa com o id ${userId} nao tem nenhuma compra`)
        }
        
        res.status(200).send(allPurchases)
    } catch (error:any) {
        res.status(500).send({message:error.message})
    }
}