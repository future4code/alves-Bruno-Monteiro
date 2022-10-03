import { IShowDB } from "../models/Show";
import { ITicketDB } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase {
  public static TABLE_LAMA_SHOWS = "TABELA_LAMA_SHOWS"
  public static TABLE_LAMA_TICKET = "TABELA_LAMA_TICKET"

  public findShowById = async (id_show: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(TicketDatabase.TABLE_LAMA_SHOWS)
      .select()
      .where({id: id_show})

    return result[0]
  }

  public findBuyByIdShowIdUser = async (id_show: string, id_user: string): Promise<ITicketDB | undefined> => {
    const result: ITicketDB[] = await BaseDatabase
      .connection(TicketDatabase.TABLE_LAMA_TICKET)
      .select()
      .where({show_id: id_show})
      .andWhere({user_id: id_user})

    return result[0]
  }

  public counterTicketsByIdShow = async (id_show: string): Promise<number> => {
    const [number] = await BaseDatabase
      .connection.raw(`
        SELECT COUNT(*) as totalTickets
        FROM ${TicketDatabase.TABLE_LAMA_TICKET} 
        WHERE ${TicketDatabase.TABLE_LAMA_TICKET}.show_id = ${id_show}
      `)
      return number[0].totalTickets
  }

  public buyTicket = async (input: ITicketDB): Promise<void> => {
    await BaseDatabase
      .connection(TicketDatabase.TABLE_LAMA_TICKET)
      .insert(input)
  }

  public findBuyByIdIdUser = async (id_buy: string, id_user: string): Promise<ITicketDB | undefined> => {
    const result: ITicketDB[] = await BaseDatabase
      .connection(TicketDatabase.TABLE_LAMA_TICKET)
      .select()
      .where({id: id_buy})
      .andWhere({user_id: id_user})

    return result[0]
  }

  public deleteBuyTicket = async (id_buy: string, id_user: string): Promise<void> => {
    await BaseDatabase
      .connection(TicketDatabase.TABLE_LAMA_TICKET)
      .delete()
      .where({id: id_buy})
      .andWhere({user_id: id_user})
  }
}