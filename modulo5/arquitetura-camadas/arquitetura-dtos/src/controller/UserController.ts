import { Request, RequestHandler, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { User, UserInput } from "../models/User"

export class UserController {
    getUsers(arg0: string, getUsers: any) {
        throw new Error('Method not implemented.')
    }
    signup(arg0: string, signup: any) {
        throw new Error('Method not implemented.')
    }

 

    signUp = async (req: Request, res: Response) => {
        try {
            
            const { name, email, password, role } = req.body
            
            const user: UserInput = {
                name,
                email,
                password,
                role,
                id: ""
            } 

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signUp(user)

            res.status(201).send({ message: "User created successfully", token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(email, password)

            res.status(200).send({ message: "User logged successfully", token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            const users = await userBusiness.getAllUsers(token)

            res.status(200).send({ users })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            const userBusiness = new UserBusiness()
            await userBusiness.deleteUser(id, token)

            res.status(200).send({ message: "User deleted successfully" })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}