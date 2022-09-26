import { numbers, calcMedia } from "./exercicios/exercicio7";

describe("testes exercicio 7", () => {

  test("retorna a médeia dos valores de um array", () => {

    const input = calcMedia(numbers)

    expect(input).toEqual(7)
  })
})