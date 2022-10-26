import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ICreateProductInputDTO } from "../../src/models/Product"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

// Agrupa os testes para dar semântica (suíte/grupo de testes)
// O primeiro argumento é uma string de descricao do grupo.
// O segundo argumento é um callback com seu conteudo. Normalmente é uma funcao anonima arrow function
describe("Testando o método do ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
    )

    // Vem dentro do callback do describe e guarda um teste unico
    // O primeiro argumento é uma string de descricao do teste
    // O segundo argumento é um callback que pode ser assincrono
    // expect() é a assertiva, uma afirmacao que o Jest ira avaliar
    test("createProduct bem sucedido", async () => {
        const input: ICreateProductInputDTO = {
            id: `8314`,
            name: `VESTIDO PLISSADO ACINTURADO`,
            tags: [`casual", "viagem", "delicado`]
        }
        const response = await productBusiness.createProduct(input)
        expect(response.message).toEqual(`Produto criado com sucesso!`)
    })


    test("Retorna um erro caso o produto nao esteja cadastrado", async () => {
        try {
            const input: ICreateProductInputDTO = {
                id: `8314`,
                name: `VESTIDO PLISSADO ACINTURADO`,
                tags: [`casual", "viagem", "delicado`]
            }
            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual(`Nao autenticado`)
        }

    })


        test("Retorna um erro caso o produto nao esteja cadastrado", async () => {
            try {
                const input: ICreateProductInputDTO = {
                    id: ``,
                    name: `VESTIDO PLISSADO ACINTURADO`,
                    tags: [`casual", "viagem", "delicado`]
                }
                await productBusiness.createProduct(input)
            } catch (error) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual(`Id ausente ou invalida`)
            }

        })

            test("Retorna um erro caso o produto ja exista", async () => {
                try {
                    const input: ICreateProductInputDTO = {
                        id: `8314`,
                        name: `VESTIDO PLISSADO ACINTURADO`,
                        tags: [`casual", "viagem", "delicado`]
                    }
                    await productBusiness.createProduct(input)
                } catch (error) {
                    expect(error.statusCode).toEqual(409)
                    expect(error.message).toEqual(`O produto ja existe no cadastro`)
                }
            })


                test("Retorna um erro caso o name nao seja uma string", async () => {
                    try {
                        const input = {
                            id: `8314`,
                            name: 12345,
                            tags: [`casual", "viagem", "delicado`]
                        } as unknown as ICreateProductInputDTO

                        await productBusiness.createProduct(input)
                    } catch (error) {
                        expect(error.statusCode).toEqual(400)
                        expect(error.message).toEqual(`Parâmetro 'name' inválido: deve ser uma string`)
                    }
                })

                    test("Retorna erro caso o name tenha menos que 3 caracteres", async () => {
                        try {
                            const input = {
                                id: `8314`,
                                name: "Br",
                                tags: [`casual", "viagem", "delicado`]
                            } as unknown as ICreateProductInputDTO

                            await productBusiness.createProduct(input)
                        } catch (error) {
                            expect(error.statusCode).toEqual(400)
                            expect(error.message).toEqual(`Parâmetro 'name' inválido: Deve conter ao menos 3 letras`)
                        }

                    })
                })