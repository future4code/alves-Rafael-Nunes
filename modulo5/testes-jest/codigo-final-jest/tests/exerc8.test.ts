import { actuallyAge } from "./exercicios/exercicio8";

describe("teste exercicio 8",() => {

  test("retorna a idade do usuario com base no atual e ano de nascimento", () => {
    const input = actuallyAge(2003)

    expect(input).toEqual(19)
  })
})