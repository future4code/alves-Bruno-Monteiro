import { Product, productsTable } from "../models/Products";
import { connection } from "../../connection";
import { GetProductsDTO } from "../business/ProductBusiness";

class ProductDatabase {
  async save(product: Product) {
    const productDB = {
      id: product.id,
      name: product.name,
      tags: product.tags,
    };
    await connection.insert(productDB).into(`${productsTable}`);
    return;
  }

  async getProducts(order: string, sort: string, limit: number) {

    const result = await connection(productsTable).select("*").orderBy(order, sort).limit(limit);

    return result;
  }

  async selectProductById(id: string) {
    const result = await connection(productsTable).select("*").where({ id });

    return result;
  }
  async selectProductByName(name: string) {
    const result = await connection(productsTable).select("*").whereILike('name', '%'+name+'%');
    return result;
  }
  async selectProductByTags(tags: string) {
    const result = await connection(productsTable).select("*").where({ tags });

    return result;
  }
  async selectProductByTagsAndNameAndId(tags: string, name: string, id: string) {
    const result = await connection(productsTable)
      .select("*")
      .where({ tags, name, id })
    return result;
  }
}

export default new ProductDatabase();