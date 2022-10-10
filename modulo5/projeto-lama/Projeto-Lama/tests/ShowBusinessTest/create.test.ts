import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { ICreateShowInputDTO } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock";

describe("Testando o método createShow da ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
      new ShowDatabaseMock(),
      new IdGeneratorMock(),
      new AuthenticatorMock()
    )

    test("Uma mensagem de sucesso é retornada quando a criação de show é bem-sucedida", async () => {
        const input: ICreateShowInputDTO = {
          band: "Radiohead",
          startsAt: "09/12/2022"
        }
        const token = "token-mock-admin";
    
        const response = await showBusiness.create(input, token);
        expect(response.message).toBe("Show cadastrado com sucesso");
      })

      test("Erro quando o parâmetro 'band' não é do tipo string", async () => {
        expect.assertions(2)
    
        try {
          const input: any = {
            band: 2,
            startsAt: "05/12/2022"
          }
          const token = "token-mock-admin";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'band' inválido: deve ser uma string")
          }
        }
      })

      test("Erro quando o parâmetro 'startsAt' não é do tipo string", async () => {
        expect.assertions(2)
    
        try {
          const input: any = {
            band: "2",
            startsAt: 2
          }
          const token = "token-mock-admin";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("Parâmetro 'startsAt' inválido: deve ser uma string")
          }
        }
      })

      test("Erro quando a data do show é anterior ao festival", async () => {
        expect.assertions(2)
    
        try {
          const input: ICreateShowInputDTO = {
            band: "2",
            startsAt: "01/10/2022"
          }
          const token = "token-mock-admin";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(400)
            expect(error.message).toBe("A data do show não pode ser anterior a data de início do festival")
          }
        }
      })

      test("Erro quando o token é inválido", async () => {
        expect.assertions(2)
    
        try {
          const input: ICreateShowInputDTO = {
            band: "2",
            startsAt: "12/12/2022"
          }
          const token = "token-mock-admin-inválido";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(401)
            expect(error.message).toBe("Token inválido")
          }
        }
      })
    
      test("Erro quando o usuário não possui autorização de ADMIN", async () => {
        expect.assertions(2)
    
        try {
          const input: ICreateShowInputDTO = {
            band: "2",
            startsAt: "12/12/2022"
          }
          const token = "token-mock-normal";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(403)
            expect(error.message).toBe("Você não possui autorização para essa tarefa")
          }
        }
      })
    
      test("Erro quando já existe show cadastrado na data", async () => {
        expect.assertions(2)
    
        try {
          const input: ICreateShowInputDTO = {
            band: "2",
            startsAt: "08/12/2022"
          }
          const token = "token-mock-admin";
    
          await showBusiness.create(input, token)
    
        } catch (error) {
          if (error instanceof BaseError) {
            expect(error.statusCode).toBe(409)
            expect(error.message).toBe("Já existe show cadastrado nesta data")
          }
        }
      })
    })