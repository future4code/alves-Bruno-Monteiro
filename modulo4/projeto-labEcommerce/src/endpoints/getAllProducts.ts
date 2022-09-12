import { Request, Response } from "express";
import selectAllProducts from "../data/selectAllproducts";

export default async function getAllProducts(req:Request,res:Response) {
    try {
        const getAllProducts = await selectAllProducts()

        if(!getAllProducts?.length){
                throw new Error("Não existem produtos cadastrados!")
        }

        res.status (200).send(getAllProducts)
    } catch (error: any) {
        res.status(500).send({message:error.message})
    }

    }