import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

enum userType {
    ADMIN = "ADMIN",
    NORMAL = 'NORMAL'
}
type user = {
    id: number,
    name: string,
    email: string,
    type: userType,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.ADMIN,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.NORMAL,
        age: 60
    }
]



app.get("/api-rest", (req: Request, res: Response) => {
    res.send("users")
})

app.get("/apiType/:type", (req: Request, res: Response) => {
    const Type = req.params.type
    
    let resultId = users.filter((item) => {
        return item.type === Type
    })
    res.status(200).send(resultId)
})



app.get("/api-users/:name", (req: Request, res: Response) => {
    let erroCode = 400
    try {
        const name = req.params.name
        
        let resultName = users.filter((item) => {
            return item.name === name
        })

        if (!resultName.length) {
            erroCode = 404

            throw new Error(`User ${name} not found`)
        }

        res.send(resultName)

    } catch (error: any) {
        res.status(erroCode).send({ message: error.message })
    }

})



app.post("/apis-add", (req: Request, res: Response) => {
    const { id, name, email, type, age } = req.body as newUser

    const newUser = {
        id,
        name,
        email,
        type,
        age
    }

    users.push(newUser)

    res.send(users)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


// 1
// a) Usei metodo Get
// b) Entidade de busca

// 2
//a)Por params
//b)Com enum

// 3
//a) utilizo req params
//b)

//4
//a) Nada mudou
// b) Sim, pq ele pode ser utilizado para atualizar e o post criar, sendo assim, acredito que post seja uma opcao melhor
