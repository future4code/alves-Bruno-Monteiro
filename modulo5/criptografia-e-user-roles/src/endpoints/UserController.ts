import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData, ROLE_TYPE } from "../types";

export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            const { email, password, role } = req.body

            if (!email || !password || !role) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email, senha e role")
            }

            if (email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Email inválido, acrescente @")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Senha muito curta, mínimo 6 caracteres")
            }

            if (role !== "normal" && role !== "admin") {
                res.statusCode = 400
                throw new Error("Role inválida, insira normal ou admin")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error("Usuário já existe")
            }

            const id = new GenerateID().id()


            const cypherPassword = new HashManager().createHash(password)


            const newUser = new User(
                id,
                email,
                cypherPassword,
                role
            )

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({
                id,
                role
            })

            res.status(200).send({
                message: "Usuário criado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email e senha")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }


            const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword())
            console.log(passwordIsCorrect)

            if (!passwordIsCorrect) {
                res.statusCode = 400
                throw new Error("credenciais inválidas")
            }
            const token = new Authenticator().generateToken({
                id: user!.getId(),
                role: user!.getRole()
            })

            res.status(200).send({
                message: "Usuário logado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Insira um token")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }
            if (tokenData.role !== ROLE_TYPE.NORMAL) {
                res.statusCode = 403
                throw new Error("Não autorizado, role inválido, precisa ser normal")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }
            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }


    public removeUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { id } = req.params

            if (!token || !id) {
                res.statusCode = 400
                throw new Error("Insira um token e um id")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            if (tokenData.role !== ROLE_TYPE.ADMIN) {
                res.statusCode = 403
                throw new Error("Não autorizado, precisa ser admin")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            await userDB.deleteUser(id)

            res.status(200).send({ message: "Usuário removido com sucesso" })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }


    public getUserLogged = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Insira um token")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}