import { numberCaracteres } from "./exercicios/exercicio4";

describe("testes exercicio 4", () => {

  test("a saida deve ser o numero de caracteres", () => {

    const input = numberCaracteres("palavra")

    expect(input).toEqual(7)
  })
})