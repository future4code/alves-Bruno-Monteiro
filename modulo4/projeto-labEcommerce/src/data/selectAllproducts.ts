import createProducts from "../endpoints/createProducts";
import { productData } from "../types/typeProducts";
import connection from "./connection";

const productsType = (product:any) =>{

    const typeProducts:productData = {
        id:product.id,
        name:product.name,
        price:product.price,
        image_url: product.image_url
}
return typeProducts

}

export default async function selectAllproducts():Promise<productData[] | undefined> {
    
    const result = await connection("labecommerce_products")


const AllProductsType = result.map((product)=>{
    return productsType(product)
})

return AllProductsType
}