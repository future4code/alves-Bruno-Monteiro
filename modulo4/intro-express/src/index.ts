import express, {Request, Response} from 'express';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response)=> {
    res.send("Hello World")
})
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

// 2
type User = {
    id: number,
    name: string,
    phone: number,
    email: string | number,
    website: string | number
}

// 3
const users: User[] = [
    {
        id: 1,
        name: "Bruno",
        phone: "2125186953",
        email: "bruno@gmail.com",
        website: "bruno.com.br"
    },
    {
        id: 2,
        name: "Mari",
        phone: "9293207706",
        email: "mari@gmail.com",
        website: "mari.com.br"
    },
    {
        id: 3,
        name: "Wally",
        phone: "8203009716",
        email: "wally@gmail.com",
        website: "wally.com.br"
    },

    {
        id: 4,
        name: "Milla",
        phone: "6745436280",
        email: "milla@gmail.com",
        website: "milla.com.br"
    }
]
//  4
app.get("/users", (req: Request, res: Response)=> {
    res.send(users)
})

//5
const posts: post[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },

      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },

      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },

      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },    
]
// 6
let posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "aut amet sed",
        body: "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
    },
    {
        userId: 1,
        id: 2,
        title: "ratione ex tenetur perferendis",
        body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
    },
    {
        userId: 2,
        id: 3,
        title: "id minus libero illum nam ad officiis",
        body: "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
    }
]
// Acredito que fazer por dentro seja melhor, pq facilitaria a filtragem. 

//7
app.get("/posts", (req: Request, res: Response)=> {
    res.send(posts)
})

//8
app.get("/posts/:userId", (req: Request, res: Response)=> {
    const postFilter = posts.filter((item)=>item.userId === +req.params.userId)
    res.send(postFilter)
})
// 9 Desafio
app.delete("/posts/:id", (req: Request, res: Response)=> {
    posts = posts.filter((item)=>item.id !== +req.params.id)
    res.send()
})

//10 Desafio
app.delete("/users/:userId", (req: Request, res: Response)=> {
    users = users.filter((item)=>item.id !== +req.params.userId)
    posts = posts.filter((item)=>item.userId !== +req.params.userId)
    res.send()
})
