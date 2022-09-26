import { convertToNumber } from "./exercicios/exercicio3";

describe("testes exercicio3", () => {

  test("a saida deve um Number", () => {
    const input = convertToNumber("35")

    expect(input).toEqual(35)
  })
})