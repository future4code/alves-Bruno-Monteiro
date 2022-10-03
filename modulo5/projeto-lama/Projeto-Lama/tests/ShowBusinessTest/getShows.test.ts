import { ShowBusiness } from "../../src/business/ShowBusiness";
import { AuthenticatorMock } from "../mocks/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock";

describe("Testando o método getShows da ShowBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  )

  test("Todos os shows devem ser retornados quando o getShows é bem sucedido", async () => {
    const response = await showBusiness.getShows();
    expect(response.shows.length).toBe(4);
  })
})