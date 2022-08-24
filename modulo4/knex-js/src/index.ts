import { Request, Response } from "express"
import knex from "knex"
import doenv from "dotenv"
import app from "./app"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());


const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
  `)

  return result[0][0]
}

app.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const myActor = await getActorByName(name);
    res.status(200).send({ actor: myActor });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});


const getAcountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
  `)

  return result[0][0]
}



const updateSalary = async (salary: number, id:string): Promise<any> => {
  try{
  await connection('Actor')
    .update({
      salary: salary,
    })
    .where("id", id);

      console.log(`Salário atualizado com sucesso para ${salary}`);

   } catch (error) {
      throw new Error(error.sqlMessage || error.message);
   }
};


const deleteActor = async (id:string): Promise<any> => {
    try{
    await connection('Actor')
      .delete()
      .where("id", id);
     } catch (error) {
        throw new Error(error.sqlMessage || error.message);
     }
};


const averageSalary = async (gender:string): Promise<any> => {
try{
const result = await connection('Actor')
.avg("salary as average")
.where("gender", gender);  
 console.log(result[0])
return result[0];  
 } catch (error) {
throw new Error(error.sqlMessage || error.message);
}
};


app.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id; const actor = await getActorById(id);
        res.status(200).send(actor)
    } catch (err) { console.log(error); res.send(error.sqlMessage || error.message); }); } });


app.get("/gender", async (req: Request, res: Response) => {
     try {
       const gender = req.query.gender as string;
       const countGender = await getAcountByGender(gender);
       res.status(200).send({ Actor: countGender });
     } catch (error) {
       console.log(error);
       res.send(error.sqlMessage || error.message);
     }
   });


app.post("/", async (req:Request, res:Response) => {

try { const id = req.body.id const salary = req.body.salary; const newSalary = Number(salary)

    await updateSalary(newSalary, id);

    res.status(200).send("Salário atualizado com sucesso");
  } catch (error) {
    console.log(error);
    res.send(error.sqlMessage || error.message);
  }
});



app.delete("/:id", async (req:Request, res:Response) => {

try {
      const id = req.params.id;
      await deleteActor(id);

      res.status(200).send("Ação realizada com sucesso");
    } catch (error) {
      console.log(error);
      res.send(error.sqlMessage || error.message);
    }
});



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  