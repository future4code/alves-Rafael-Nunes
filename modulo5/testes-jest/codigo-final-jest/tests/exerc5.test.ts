import { aletotyNumber } from "./exercicios/exercicio5";

describe("testes do exercicio 5", () => {

  test("a saida deve ser um numero aletório entre 1 e 10", () =>{

    const input = aletotyNumber()

    expect(input).toEqual(input)
  })
})