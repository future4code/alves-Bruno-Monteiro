import { Router } from "express"

export const pizzaRouter = Router()

const pizzaController = new PizzaController()

pizzaRouter.get("/", pizzaController.getPizzas)
   