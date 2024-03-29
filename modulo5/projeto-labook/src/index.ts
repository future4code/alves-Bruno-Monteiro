/**************************** IMPORTS ******************************/
import express, {Express} from "express"
import cors from "cors"
import { userRouter } from './controller/routes/userRouter'
import { postRouter } from './controller/routes/postRouter'
/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** CONNECTION ******************************/
import { AddressInfo } from 'net'

/**************************** ENDPOINTS ******************************/
app.use("/user", userRouter);
app.use("/post", postRouter);

/**************************** SERVER INIT ******************************/

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Server is running in http://localhost:${address.port}`)
   } else {
      console.error(`Failure upon starting server.`)
   }
})