import {BaseDatabase} from "./data/BaseDatabase"

class Setup extends BaseDatabase{
createTables = async() => {
   try {
      await BaseDatabase.connection.raw(`
         CREATE TABLE labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         )
      `)

      await BaseDatabase.connection.raw(`
         CREATE TABLE labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         )
      `)

      console.log("MySql setup completed!")
   } catch (error) {
      console.log(error)
   }
}
}

new Setup().createTables()