import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static Amaro_Users = "Amaro_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.Amaro_Users)
            .select()
            .where({ email })

        return result[0]
    }

    public createUser = async (user: User): Promise<void> => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase
            .connection(UserDatabase.Amaro_Users)
            .insert(userDB)
    }
}