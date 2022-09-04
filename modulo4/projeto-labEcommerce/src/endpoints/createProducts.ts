import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { productData, productInsert } from "../types/typeProducts";

export default async function createProducts(req:Request,res:Response) {
    
    try {
        const  {name, price, image_url }:productInsert = req.body

        if(!name || !price || !image_url){
            throw new Error ("Favor, inserir name, price e image")
        }

        const productData:productData={
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productData)
        res.status(201).send({message: answer})

    }catch(error:any) {
        res.status(500).send({message:error.message})
    }
}