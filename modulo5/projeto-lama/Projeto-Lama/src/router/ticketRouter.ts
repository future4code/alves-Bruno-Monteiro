import { Router } from 'express';
import { TicketBusiness } from '../business/TicketBusiness';
import { TicketController } from '../controller/TicketController';
import { TicketDatabase } from '../database/TicketDatabase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export const ticketRouter = Router();

const ticketController = new TicketController(
  new TicketBusiness(
    new TicketDatabase(),
    new IdGenerator(),
    new Authenticator()
  )
)

ticketRouter.post("/buy/:id", ticketController.buyTicket);
ticketRouter.delete("/delete/:id", ticketController.deleteBuyTicket);