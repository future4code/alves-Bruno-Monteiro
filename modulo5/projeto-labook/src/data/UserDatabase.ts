import { BaseDatabase } from "../data/BaseDatabase";
import { user } from "../business/entities/user";

class UserDatabase extends BaseDatabase {
  tableName = "labook_users";

  insertUser = async (user: user) => {
    try {
      await BaseDatabase.connection(this.tableName).insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (error:any) {
      throw new Error(error.slqMessage || error.message);
    }
  };

  selectUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await BaseDatabase.connection(this.tableName)
        .select("*")
        .where({ email });

      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
      };
    } catch (error:any) {
      throw new Error(error.slqMessage || error.message);
    }
  };
}

export default new UserDatabase();
