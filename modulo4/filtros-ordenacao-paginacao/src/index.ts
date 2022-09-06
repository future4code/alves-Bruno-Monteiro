import express,{ Express } from "express";
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';
import { AddressInfo } from "net";
import {getAllUsers} from './endpoints/getAllUsers'
import {getUserByName} from './endpoints/getUserByName'
import {getUserByType} from './endpoints/getUserByType'
import {getOrderBy} from './endpoints/getOrderBy'
import {getOnlyFive} from './endpoints/getOnlyFive'
import {getUsers} from './endpoints/getUsers'

dotenv.config()
const app: Express = express();
app.use(express.json());

export const connection: Knex = knex({
   client: "mysql",
   connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
   }
})

app.get('/users/all', getAllUsers)

app.get('/users/search', getUserByName)

app.get('/users/search/:type', getUserByType)

app.get('/users/orderBy', getOrderBy)

app.get('/users/onlyFive', getOnlyFive)

app.get('/users/', getUsers)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});