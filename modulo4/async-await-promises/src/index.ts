import axios from "axios"
import { baseURL } from "./baseURL";

// EX 1
// a) Usamos o endpoint get.

// b)Utilizamos Promise<any[]>

// c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios
        .get(`${baseURL}/subscribers`)

    return response.data
}
const main = async () => {
    try {
      const subscribers = await getSubscribers()
      console.log(subscribers)
    } catch (error: any) {
      const resp = error.response?.data || error.message
      console.log(resp)
    }
  }
  main()
  
// EX 2
// a) Quando utilizamos a funcao nomeada, o async vem no inicio. Ja na funcao arrow, o async é escrito depois.

// b) 
const getSubscribersArrow = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}
const main = async () => {
    try {
      const subscribers = await getSubscribersArrow()
      console.log(subscribers)
    } catch (error: any) {
      const resp = error.response?.data || error.message
      console.log(resp)
    }
  }
  main()

// EX 3
// a) Recebi a mensagem que nao foi encontrado nenhum user

// b) Pq dessa forma podemos retornar propriedades especificas.

// c)
type user = {
    id: string;
    name: string;
    email: string;
}

const getSubscribersCorrect = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    })
}

// EX 4
// a) void, pois nao tem retorno.

// b) 

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
}

// EX 5

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            });
        }

        console.log("All notifications sent")
    } catch {
        console.log("Error")
    }
}

// EX 6
// a) Em síntese, Promise.all retornará um array com os valores de resultado de todas as promessas passadas. Ele irá rejeitar caso qualquer uma delas falhe.

// b) Uma das grandes vantagens de usar Promise.all() é receber uma exceção mais cedo se alguma promise falhar, além de esperar no máximo o tempo da promise mais demorada dentro de doubles.

// c) 
const sendNotificationsAllPromises = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);
        console.log(`Notificações enviadas com sucesso`)

    } catch {
        console.log("Error");
    }
};


