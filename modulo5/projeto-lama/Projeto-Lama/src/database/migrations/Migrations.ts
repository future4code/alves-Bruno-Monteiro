import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
import { ShowDatabase } from "../ShowDatabase";
import { users } from "./data";
import { shows } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...")
      await this.createTables()
      console.log("Tables created successfully.")

      console.log("Populating tables...")
      await this.insertData()
      console.log("Tables populated successfully.")

      console.log("Migrations completed.")
    } catch (error) {
      console.log("FAILED! Error in migrations...")
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
      console.log("Ending connection...")
      BaseDatabase.connection.destroy()
      console.log("Connection closed graciously.")
    }
  }

  createTables = async () => {
    await BaseDatabase.connection.raw(`
      DROP TABLE IF EXISTS ${ShowDatabase.TABLE_LAMA_TICKET};
      DROP TABLE IF EXISTS ${UserDatabase.TABLE_LAMA_USERS};
      DROP TABLE IF EXISTS ${ShowDatabase.TABLE_LAMA_SHOWS};
        
      CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_LAMA_USERS}(
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS ${ShowDatabase.TABLE_LAMA_SHOWS}(
          id VARCHAR(255) PRIMARY KEY,
          band VARCHAR(255) NOT NULL,
          startsAt DATE NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS ${ShowDatabase.TABLE_LAMA_TICKET}(
          id VARCHAR(255) PRIMARY KEY,
          show_id VARCHAR(255),
          FOREIGN KEY (show_id) REFERENCES ${ShowDatabase.TABLE_LAMA_SHOWS}(id),
          user_id VARCHAR(255),
          FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_LAMA_USERS}(id)
      );
    `)
  }

  insertData = async () => {
    await BaseDatabase
      .connection(UserDatabase.TABLE_LAMA_USERS)
      .insert(users)

    await BaseDatabase
      .connection(ShowDatabase.TABLE_LAMA_SHOWS)
      .insert(shows)
  }
}

const migrations = new Migrations()
migrations.execute()