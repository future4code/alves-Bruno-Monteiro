import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// 1
app.get("/ping", (req: Request, res: Response) => {
    res.send("pong 🏓")
})

// 2
type afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// 3
const thingsToDo: afazeres[] = [
    {
        userId: 1,
        id: 1,
        title: "Estudar",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Correr",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "Fazer Almoço",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Por a louça para lavar",
        completed: false
    },
]
// 4

app.get("/tasks", (req: Request, res: Response): void => {
    const { completed } = req.body
  
    const arrayToDo = thingsToDo.filter(afazeres => {
      return afazeres.completed === completed
    })
  
    res.send(arrayToDo);
  })

  // 5

app.post("/createTasks", (req: Request, res: Response) => {

    const addTasks: afazeres = req.body

    thingsToDo.push(addTasks)
    res.send(thingsToDo)
})

//6
app.put("/todos", (req: Request, res: Response) => {
    thingsToDo.map((item) => {
        if (item.id === +req.params.id) {
            item.completed = !item.completed
        }
        return item
    })
    res.send(thingsToDo)
})

// 7
app.delete("/todos", (req: Request, res: Response) => {
    thingsToDo.filter((item)=> item.id !== +req.params.id)
    res.send(thingsToDo)
})


// 8
app.get("/tarefas/:userId", (req:Request, res:Response) => {
    const userId = Number(req.params.userId)

    const listaUser = thingsToDo.filter((tarefa) => {
        if(tarefa.userId === userId){
            return tarefa
        }
    })

    res.send(listaUser)
})