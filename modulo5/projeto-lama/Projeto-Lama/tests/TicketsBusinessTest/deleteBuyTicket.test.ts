import { TicketBusiness } from "../../src/business/TicketBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock";
import { TicketDatabaseMock } from ".././mocks/TicketDatabaseMock";

describe("Testando o método deleteBuyTicket da TicketBusiness", () => {
  const ticketBusiness = new TicketBusiness(
    new TicketDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando a compra é deletada com sucesso", async () => {
    const token = "token-mock-admin";
    const id_buy = '10000';

    const response = await ticketBusiness.deleteBuyTicket(token, id_buy)
    expect(response.message).toBe("Compra deletada com sucesso!")
  })

  test("Erro quando o token é inválido", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-admin-inválido";
      const id_buy = "1000"

      await ticketBusiness.deleteBuyTicket(token, id_buy)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Token inválido")
      }
    }
  })

  test("Erro quando a compra selecionada não foi encontrada", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-normal";
      const id_buy = "10001"

      await ticketBusiness.deleteBuyTicket(token, id_buy)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("Não encontramos sua compra com estes dados")
      }
    }
  })
})