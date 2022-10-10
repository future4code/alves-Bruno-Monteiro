import { NotFoundError } from "../errors/NotFoundError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ICreateShowInputDTO, ITicketDB, Show } from "../models/Show";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationError } from "../errors/AuthenticationError";
import { TicketDatabase } from "../database/TicketDatabase";
import { USER_ROLES } from "../models/User";
import { AuthorizationError } from "../errors/AuthorizationError";

export class TicketBusiness {
    constructor(
      private ticketDatabase: TicketDatabase,
      private idGenerator: IdGenerator,
      private authenticator: Authenticator
    ) { }
  
    public buyTicket = async (token: string, id_show: string) => {
  
      const payload = this.authenticator.getTokenPayload(token);
      if (!payload) {
        throw new AuthenticationError("Token inválido");
      }
  
      const existShow = await this.ticketDatabase.findShowById(id_show);
      if(!existShow){
        throw new NotFoundError("Não foram encontrados shows com este ID");
      }
  
      const existBuy = await this.ticketDatabase.findShowByIdShowIdUser(id_show, payload.id);
      if(existBuy){
        throw new ConflictError("Só é permitido comprar 1 ingresso por show");
      }
  
      const numberTickets = await this.ticketDatabase.counterTicketsByIdShow(id_show);
      if(numberTickets >= 5000){
        throw new ConflictError("Ingressos esgotados!");
      }
  
      const id = this.idGenerator.generate();
  
      const buy: ITicketDB = {
        id,
        show_id: id_show,
        user_id: payload.id
      }
  
      await this.ticketDatabase.buyTicket(buy);
  
      const response = {
        message: "Compra efetuada com sucesso!",
      }
  
      return response
    }
  
    public deleteBuyTicket = async (token: string, id_buy: string) => {
  
      const payload = this.authenticator.getTokenPayload(token);
      if (!payload) {
        throw new AuthenticationError("Token inválido");
      }
  
      const existBuyByUser = await this.ticketDatabase.findBuyByIdIdUser(id_buy, payload.id);
      if(!existBuyByUser){
        throw new NotFoundError("Não encontramos sua compra com estes dados");
      }
  
      await this.ticketDatabase.deleteBuyTicket(id_buy, payload.id);
  
      const response = {
        message: "Compra deletada com sucesso!",
      }
  
      return response
    }
  }