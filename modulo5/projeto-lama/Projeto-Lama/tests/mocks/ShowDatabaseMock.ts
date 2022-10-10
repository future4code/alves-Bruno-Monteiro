import { IShowDB, Show } from "./../../src/models/Show";
import { BaseDatabase } from "./../../src/database/BaseDatabase";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_LAMA_SHOWS = "TABELA_LAMA_SHOWS"
  public static TABLE_LAMA_TICKET = "TABELA_LAMA_TICKET"

  public toShowDBModel = (show: Show): IShowDB => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      startsAt: show.getStartsAt()
    }

    return showDB
  }

  public create = async (show: Show): Promise<void> => { }

  public findShowByDay = async (date: Date): Promise<IShowDB | undefined> => {
    const [day, month, year] = [ date.getDate(), date.getMonth()+1, date.getFullYear() ]
    const newDate = day > 9 ? `${day}/${month}/${year}` : `0${day}/${month}/${year}`;
    if(newDate === "08/12/2022"){
      const showDay: IShowDB = {
        id: "1003",
        band: "Arctic Monkeys",
        startsAt: new Date("2022/12/08")
      }
      return showDay  
    }
    return undefined
  }

  public getShows = async (): Promise<IShowDB[]> => {
    const shows: IShowDB[] = [
        {
            id: "1000",
            band: "iron Maden",
            startsAt: new Date("2022/12/05")
          },
          {
            id: "1001",
            band: "The Off Spring",
            startsAt: new Date("2022/12/06")
          },
          {
            id: "1002",
            band: "The National",
            startsAt: new Date("2022/12/07")
          },
          {
            id: "1003",
            band: "System of a Down",
            startsAt: new Date("2022/12/08")
          },
    ]

    return shows
  }

  public findShowById = async (id_show: string): Promise<IShowDB | undefined> => {
    const result: IShowDB[] = await BaseDatabase
      .connection(ShowDatabaseMock.TABLE_LAMA_SHOWS)
      .select()
      .where({ id: id_show })

    return result[0]
  }
}