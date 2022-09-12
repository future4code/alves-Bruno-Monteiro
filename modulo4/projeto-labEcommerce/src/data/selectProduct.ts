import { productData } from "../types/typeProducts"
import connection from "./connection"


export default async function selectProduct(productid:string):Promise<productData| undefined> {

    const [result]= await connection("labecommerce_products").select("*").where({id:productid})
    
    if(result){
        const productType:productData= {
            id:result.id,
            name:result.name,
            price:result.price,
            image_url:result.image_url
        }
        return productType

    } else{

        return undefined
    }

    
}