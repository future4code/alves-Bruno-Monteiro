import express from "express";
import ProductsController from "../controller/ProductController";

export const productRouter = express.Router();

productRouter.post("/create", ProductsController.create);
productRouter.get("/", ProductsController.getProducts)
productRouter.get("/search/:name?/:tags?/:id?", ProductsController.search);