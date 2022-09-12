import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

export default async function getUsers(req:Request,res:Response) {
    try {

        const AllUsers = await selectUsers()

        res.status(200).send(AllUsers)

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}