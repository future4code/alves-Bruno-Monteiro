import { ProductDatabase } from "../database/ProductDatabase";
import { ConflictError } from "../errors/ConflictError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { ICreateProductDBTO, ICreateProductInputDTO, IGetProductsDB, IGetProductsInputDBTO, IGetProductsOutput, IGetProductsSearchOutputDTO, IAddTagInputDTO, IProductDB, ITagsProductsDB, ITagsDB, Product } from "../models/Products";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public getProducts = async (input: IGetProductsInputDBTO): Promise<IGetProductsOutput> => {

        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getProductsInput: IGetProductsDB = {
            order,
            sort,
            limit,
            page,
            offset
        }

        const productDB: IProductDB[] = await this.productDatabase.getProducts(getProductsInput) as []

        const products = productDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const id = product.getId()
            const tags: string[] = []
            const tagsDB: any = await this.productDatabase.getTags(id)
            for (let tag of tagsDB) {
                tags.push(tag.tag)
            }
            product.setTags(tags)
        }

        const response: IGetProductsOutput = {
            product: products
        }

        return response
    }

    public searchProduct = async (search: string | undefined) => {
        if (!search) {
            throw new RequestError(`Digite na pesquisa qual produto você deseja buscar`)
        }

        const productsDB = await this.productDatabase.searchProduct(search)

        if (productsDB != undefined) {
            const products = productsDB?.map(productDB => {
                return new Product(
                    productDB.id,
                    productDB.name
                )
            })

            const response: IGetProductsSearchOutputDTO = {
                message: "Aqui está o produto!",
                products
            }

            return response
        }

    }

    public createProduct = async (input: ICreateProductInputDTO) => {
        const { token, id, name, tags } = input

        if (!token) {
            throw new UnauthorizedError("Token inválido ou ausente")
        }

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new UnauthorizedError("Não autenticado");
        }

        if (typeof id !== "string") {
            throw new RequestError("Parâmetro 'id' inválido: deve ser uma string")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (name.length < 3) {
            throw new RequestError("Parâmetro 'nome' inválido: deve ter pelo menos 3 letras")
        }

        const isExistsProduct = await this.productDatabase.searchProduct(name)
        if (!isExistsProduct) {
            throw new ConflictError(`Esse produto já existe`)
        }

        const newProduct: ICreateProductDBTO = {
            id,
            name
        }

        await this.productDatabase.createProduct(newProduct)

        for (let tag of tags) {
            let tagResult = await this.productDatabase.searchTag(tag)
            
            if (tagResult != undefined) {
                let inputTags: ITagsProductsDB = {
                    id: this.idGenerator.generate(),
                    product_id: newProduct.id,
                    tag_id: tagResult.id
                } 
                await this.productDatabase.addTag(inputTags)
            } else {
                let inputTags: ITagsDB = { 
                    id: this.idGenerator.generate(),
                    tag
                } 
                await this.productDatabase.createTag(inputTags)

            }

        }

        const response = {
            message: "Produto criado com sucesso!",
        }

        return response
    }
}
