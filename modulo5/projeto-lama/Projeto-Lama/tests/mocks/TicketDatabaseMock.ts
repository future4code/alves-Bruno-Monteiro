import { ITicketDB, IShowDB } from "./../../src/models/Show";
import { BaseDatabase } from "./../../src/database/BaseDatabase";

export class TicketDatabaseMock extends BaseDatabase {
  public static TABLE_LAMA_SHOWS = "TABELA_LAMA_SHOWS"
  public static TABLE_LAMA_TICKET = "TABELA_LAMA_TICKET"

  public findShowById = async (id_show: string): Promise<IShowDB | undefined> => {
    if(id_show === "1000"){
      const show: IShowDB = {
            id: "1000",
            band: "iron Maden",
            startsAt: new Date("2022/12/05")
      }
      return show
    } else if (id_show === "1001") {
      const show: IShowDB = {
            id: "1001",
            band: "The Off Spring",
            startsAt: new Date("2022/12/06")
      }
      return show
    } else if (id_show === "1002") {
      const show: IShowDB = {
            id: "1003",
            band: "System of a Down",
            startsAt: new Date("2022/12/08")
      }
      return show
    } else {
      return undefined
    }
  }

  public findBuyByIdShowIdUser = async (id_show: string, id_user: string): Promise<ITicketDB | undefined> => {
    if(id_show === '1001' && id_user === 'id-mock'){
      const result: ITicketDB = {
        id: "string",
        show_id: "string",
        user_id: "string"
      }
      return result
    }
    return undefined
  }

  public counterTicketsByIdShow = async (id_show: string): Promise<number> => {
    if(id_show === '1000'){
      return  1000
    } else {
      return  6000
    }
  }

  public buyTicket = async (input: ITicketDB): Promise<void> => { 
  }

  public findBuyByIdIdUser = async (id_buy: string, id_user: string): Promise<ITicketDB | undefined> => {
    if(id_buy === '10000' && id_user === 'id-mock'){
      const result: ITicketDB = {
        id: "string",
        show_id: "string",
        user_id: "string"
      }
      return result
    }
    return undefined
  }

  public deleteBuyTicket = async (id_buy: string, id_user: string): Promise<void> => {
  }
}