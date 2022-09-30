import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO } from "../models/Show";

export class ShowController {
  constructor(
    private showBusiness: ShowBusiness
  ) { }

  public create = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const input: ICreateShowInputDTO = {
        band: req.body.band,
        startsAt: req.body.startsAt
      }

      const response = await this.showBusiness.create(input, token)
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao cadastrar show" })
    }
  }

  public getShows = async (req: Request, res: Response) => {
    try {

      const response = await this.showBusiness.getShows()
      res.status(201).send(response)
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro inesperado ao buscar shows" })
    }
  }
}