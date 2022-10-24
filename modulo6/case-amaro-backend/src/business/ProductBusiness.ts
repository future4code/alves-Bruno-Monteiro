import productDatabase from "../data/ProductDatabase";
import { Product } from "../models/Products";
import { IdGenerator } from "../services/idGenerator";

export interface ProductDTO {
  name: string;
  tags: string;
}

export interface GetProductsDTO {
    order: string;
    sort: string;
    limit: string;
  }

class ProductBusiness {

  async getProducts(input: GetProductsDTO) {

    const order = input.order || "name"
    const sort = input.sort || "ASC"
    const limit = Number(input.limit) || 10

    const productList =  await productDatabase.getProducts(order,
        sort,
        limit);

    return {
        productList,
    };
  }

  async create(productDTO: ProductDTO) {
    const idGenerator = new IdGenerator();
    const randomId = idGenerator.generateId();


    const productModel: Product = {
      id: randomId,
      name: productDTO.name,
      tags: productDTO.tags,
    };

    const savedProduct = await productDatabase.save(productModel);

    return {
      product: productModel,
    };
  }

  async search(productDTO: Product) {
    // const filteredProducts = {
        
    //   generalFilter:[],
    //   nameFilter: [],
    //   tagsFilter: [],
    //   idFilter: [],
    // };
    let generalFilter: any[] = [];
    let nameFilter: any[] = [];
    let tagsFilter: any[] = [];
    let idFilter: any[] = [];
    if (
      productDTO.name !== undefined &&
      productDTO.tags !== undefined &&
      productDTO.id !== undefined
      ) {
       generalFilter =
        await productDatabase.selectProductByTagsAndNameAndId(
          productDTO.tags,
          productDTO.name,
          productDTO.id
        );
    }

    if (productDTO.name !== undefined) {
       nameFilter = await productDatabase.selectProductByName(
        productDTO.name
      );
    }

    if (productDTO.tags !== undefined) {
       tagsFilter = await productDatabase.selectProductByTags(
        productDTO.tags
      );
    }
    if (productDTO.id !== undefined) {
       idFilter = await productDatabase.selectProductById(
        productDTO.id
      );
    }
    return {
      generalFilter,
      nameFilter,
      tagsFilter,
      idFilter
    };
  }
}
export default new ProductBusiness();