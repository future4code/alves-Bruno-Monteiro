import { Request, Response } from "express";
import { Product, productsTable } from "../models/Products";
import { GetProductsDTO, ProductDTO } from "../business/ProductBusiness";
import productBusiness from "../business/ProductBusiness";

class ProductController {

  async getProducts (req: Request, res: Response) {
    try {
        const input: GetProductsDTO = {
            order: req.query.order as string,
            sort: req.query.sort as string,
            limit: req.query.limit as string,
        }

        const response = await productBusiness.getProducts(input)
        res.status(200).send(response)
    } catch (error:any) {
      res.status(400).send(error.message);
    }
}
  async create(req: Request, res: Response) {
    try {
      // Monta o DTO
      const productDTO: ProductDTO = {
        name: req.body.name,
        tags: req.body.tags,
      };

      // Valida o DTO
      if (!productDTO.name || !productDTO.tags) {
        throw new Error("Algum parâmetro faltando");
      }

      // Invoca o caso de uso
      const output = await productBusiness.create(productDTO);
      res.status(200).send(output);
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }

  async search(req: Request, res: Response) {
    try {
      
      const input: Product = {
        id:  req.params.id,
        name:  req.params.name,
        tags:  req.params.tags,
      };
      const output = await productBusiness.search(input);
      console.log(output)
      res.status(200).send(output);
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  }
}
export default new ProductController();