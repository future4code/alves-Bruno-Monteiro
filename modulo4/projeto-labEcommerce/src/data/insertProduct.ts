 import { productData } from "../types/typeProducts";
import connection from "./connection";

 export default async function insertProduct(product:productData):Promise<string> {
    const {id,name,price,image_url} = product
    
    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })
    return `O produto ${name} foi criado com sucesso`
 }