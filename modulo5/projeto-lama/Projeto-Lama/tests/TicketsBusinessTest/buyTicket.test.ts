import { TicketBusiness } from "../../src/business/TicketBusiness";
import { BaseError } from "../../src/errors/BaseError";
import { AuthenticatorMock } from ".././mocks/AuthenticatorMock";
import { IdGeneratorMock } from ".././mocks/IdGeneratorMock";
import { TicketDatabaseMock } from ".././mocks/TicketDatabaseMock";

describe("Testando o método buyTicket da TicketBusiness", () => {
  const ticketBusiness = new TicketBusiness(
    new TicketDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Uma mensagem de sucesso é retornada quando a compra é bem-sucedida", async () => {
    const token = "token-mock-admin";
    const id_show = '1000';

    const response = await ticketBusiness.buyTicket(token, id_show)
    expect(response.message).toBe("Compra efetuada com sucesso!")
  })

  test("Erro quando o token é inválido", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-admin-inválido";
      const id_show = "1000"

      await ticketBusiness.buyTicket(token, id_show)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toBe("Token inválido")
      }
    }
  })

  test("Erro quando o ID do show não existe", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-normal";
      const id_show = "1005"

      await ticketBusiness.buyTicket(token, id_show)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("Não foram encontrados shows com este ID")
      }
    }
  })

  test("Erro quando um usuário tenta duas vezes ingressos para o mesmo show", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-normal";
      const id_show = "1001"

      await ticketBusiness.buyTicket(token, id_show)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Só é permitido comprar 1 ingresso por show")
      }
    }
  })

  test("Erro quando um usuário tenta comprar ingresso para um show esgotado", async () => {
    expect.assertions(2)

    try {
      const token = "token-mock-normal";
      const id_show = "1002"

      await ticketBusiness.buyTicket(token, id_show)

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe("Ingressos esgotados!")
      }
    }
  })
})