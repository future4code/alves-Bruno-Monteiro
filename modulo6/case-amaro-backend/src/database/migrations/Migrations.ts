import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { products, tags, tagsProducts, users } from "./data"

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
        DROP TABLE IF EXISTS ${ProductDatabase.Amaro_Tags_Products};
        DROP TABLE IF EXISTS ${ProductDatabase.Amaro_Tags};
        DROP TABLE IF EXISTS ${ProductDatabase.Amaro_Products};
        DROP TABLE IF EXISTS ${UserDatabase.Amaro_Users};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.Amaro_Users}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.Amaro_Products}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.Amaro_Tags}(
            id VARCHAR(255) PRIMARY KEY,
            tag VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.Amaro_Tags_Products}(
            id VARCHAR(255) PRIMARY KEY,
            product_id VARCHAR(255) NOT NULL,
            tag_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES ${ProductDatabase.Amaro_Products}(id),
            FOREIGN KEY (tag_id) REFERENCES ${ProductDatabase.Amaro_Tags}(id)
        );

        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.Amaro_Users)
            .insert(users)

            await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .insert(products)

        await BaseDatabase
            .connection(ProductDatabase.Amaro_Tags)
            .insert(tags)

        await BaseDatabase
            .connection(ProductDatabase.Amaro_Tags_Products)
            .insert(tagsProducts)
    }
}

const migrations = new Migrations()
migrations.execute()