import { IAddTagInputDTO, ICreateTagInputDTO, IGetProductsDB, IProductDB, ITagDB, Product } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {
    public static Amaro_Products = "Amaro_Products"
    public static Amaro_Tags ="Amaro_Tags"
    public static Amaro_Tags_Products ="Amaro_Tags_Products"

    public getProducts = async (input: IGetProductsDB): Promise<IProductDB[] | undefined> => {
        const {
            order,
            sort,
            limit,
            offset
        } = input

        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        return result
    }

    public getTags = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase.connection.raw(`
            SELECT Amaro_Tags.tag
            FROM Amaro_Tags
            JOIN Amaro_Tags_Products
            ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
            WHERE Amaro_Tags_Products.product_id = "${id}";
        `)
        return result[0]
    }

    public searchProduct = async (search: string): Promise <IProductDB[] | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .select()
            .where(`name`, `LIKE`, `%${search}%`)
            .orWhere(`id`, `LIKE`, `%${search}%`)
        return result
    }

    public createProduct = async (input: IProductDB): Promise<void> => {
        const {id, name} = input

        await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .insert({id, name})
    }

    public addTag = async (input: IAddTagInputDTO): Promise<void> => {
        const {id, product_id, tag_id} = input

        await BaseDatabase
            .connection(ProductDatabase.Amaro_Tags_Products)
            .insert({id, product_id, tag_id})
    }

    public createTag = async (input: ICreateTagInputDTO): Promise<void> => {
        const {id, tag} = input

        await BaseDatabase
            .connection(ProductDatabase.Amaro_Tags)
            .insert({id, tag})
    }

    public searchTag = async (search: string): Promise <ITagDB[] | undefined> => {
        const result: ITagDB[] = await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .select()
            .where(`tag`, `LIKE`, `%${search}%`)
        return result
    }

    public getProductById = async (id: string): Promise <IProductDB | undefined> => {
        const [result] = await BaseDatabase
            .connection(ProductDatabase.Amaro_Products)
            .select()
            .where(`id`, `=`, `${id}`)
        return result
    }
}