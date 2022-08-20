import express, {Express, Request, Response} from "express"
import cors from "cors"
import { account, accounts, extract } from "./accounts";
import { AddressInfo } from "net";


const app:  Express = express()

app.use(express.json())
app.use(cors())


app.get("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400;
    const usersAccounts = accounts;
  
    try {
     
      if (!usersAccounts) {
        errorCode = 404;
        throw new Error("no registered user");
      }
      
      res.status(200).send(usersAccounts);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  });
  








const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });