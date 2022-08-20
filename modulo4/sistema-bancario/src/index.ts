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
        throw new Error("Nenhum usuario registrado");
      }
      
      res.status(200).send(usersAccounts);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  });
  
  app.post("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400;
  
    try {
      let { name, cpf, birthDate } = req.body;
      const ageMilisseconds: number = Date.now() - birthDate.getTime();
      const ageInYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365;
      if (ageInYears < 18) {
        errorCode = 404;
        throw new Error("Idade deve ser maior que 18 anos.");
      }
  
      const checkCpf: account | undefined = accounts.find(
        (user) => user.cpf === req.body.cpf
      );
  
      if (checkCpf) {
        errorCode = 404;
        throw new Error("Cpf já cadastrado.");
      }
  
      if (!name || !cpf || !birthDate) {
        errorCode = 406;
        throw new Error("Preencha todos os campos para seguir!");
      }
  
      accounts.push({ name, cpf, birthDate, balance: 0, statement: [] });
      res
        .status(201)
        .send({
          message: "Conta criada com sucesso!",
          account: { name, cpf, birthDate, balance: 0, statement: [] },
        });
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  });

  app.get("/accounts/balance", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result: account | undefined = accounts.find(
          (user: account) => user.cpf === req.query.cpf
        );
    
        if (!result) {
          errorCode = 422;
          throw new Error("Dados inválido. Por favor, preencha corretamente.");
        }

        res
          .status(200)
          .send({
            balance: result.balance,
            message: `O saldo na conta de ${result.name} é de ${result.balance},00R$.`,
          });
      } catch (error) {
        res.status(errorCode).send(error.message);
      }
    });
    app.put("/accounts/:name/cpf", (req: Request, res: Response) => {
        let errorCode: number = 400;
      
        try {
          const value: number = Number(req.body.value);
          const cpf = req.query.cpf;
          const name = req.params.name;
      
          
          const userName = accounts.filter((user: account) => user.name === name);
          let userCpf = accounts.findIndex((user: account) => user.cpf === cpf);
      
          if (userCpf === -1 && !userName) {
            errorCode = 404;
            throw new Error("Usuário não encontrado.");
          }
      

          if (!cpf || !value || !name) {
            errorCode = 422;
            throw new Error("Dados inválidos!");
          }
      
          const totalBalance: number = (accounts[userCpf].balance += Number(value));
      
          accounts[userCpf].statement.push({
              value: value,
              date: Date.now(),
              description: "Depósito de dinheiro"
          })
      
          res
            .status(200)
            .send({
              message: `Operação realizada. Seu saldo atual é de ${totalBalance},00 R$.`,
            });
        } catch (error) {
          res.status(errorCode).send({ message: error.message });
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