import { Request, Response } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { BaseError } from "../errors/BaseError";

export class TicketController {
  constructor(
    private ticketBusiness: TicketBusiness
  ) { }

  public buyTicket = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id_show = req.params.id;

      const response = await this.ticketBusiness.buyTicket(token, id_show)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao comprar ingresso" })
    }
  }

  public deleteBuyTicket = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id_buy = req.params.id;

      const response = await this.ticketBusiness.deleteBuyTicket(token, id_buy)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao deletar compra do ingresso" })
    }
  }
}

