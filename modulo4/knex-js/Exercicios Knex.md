## EXERCICIO 1

### a)
Quando usamos o raw, é retornado uma promise contendo os dados chamados e os metadados de criação desses dados.

### b)
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

### c)
const getAcountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
  `)

  return result[0][0]
}

## EXERCICIO 2

### a)
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

### b)
const deleteActor = async (id:string): Promise<any> => {
    try{
    await connection('Actor')
      .delete()
      .where("id", id);
     } catch (error) {
        throw new Error(error.sqlMessage || error.message);
     }
};

### c)
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

## EXERCICIO 3

### a)
app.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id; const actor = await getActorById(id);
        res.status(200).send(actor)
    } catch (err) { console.log(error); res.send(error.sqlMessage || error.message); }); } });

### b)
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

## EXERCICIO 4

### a)

app.post("/", async (req:Request, res:Response) => {

try { const id = req.body.id const salary = req.body.salary; const newSalary = Number(salary)

    await updateSalary(newSalary, id);

    res.status(200).send("Salário atualizado com sucesso");
  } catch (error) {
    console.log(error);
    res.send(error.sqlMessage || error.message);
  }
});

### b)

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


