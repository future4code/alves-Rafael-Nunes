import { list } from "./exercicios/exercicio6";

describe("teste do exercicio 6", () => {

  test("conferir se o Astrodev esta na lista", () => {

    const input = list

    expect(input).toContainEqual({name:"Astrodev", id:1})
  })
})