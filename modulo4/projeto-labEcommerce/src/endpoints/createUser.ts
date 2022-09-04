import { Request , Response } from "express"
import insertUser from "../data/insertUser";
import { userInput,userData } from "../types/typesUser"

export default async function createUser(req:Request, res:Response) {
    try {
 
        const {name, email, password }: userInput = req.body

        if(!name || !email || !password){
            throw new Error("Favor, inserir nome, email e password");
            
        }

        const userInsert: userData={
            id: Date.now().toString(),
            name,
            email,
            password
        }
        
        const answer = await insertUser(userInsert)

        res.status(201).send({ message: answer})
        
    } catch (error:any) {
            res.status(500).send({message: error.message})
    }
    
}