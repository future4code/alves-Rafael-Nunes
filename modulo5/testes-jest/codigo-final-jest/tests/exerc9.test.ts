import { padronizeDate } from "./exercicios/exercicio9";

describe("testes exercicio 8", () => {

  test("deve retornar a data no padrão brasil", () => {
    const input = padronizeDate("2003/03/15")

    expect(input).toBe("15/03/2003")
  })
})