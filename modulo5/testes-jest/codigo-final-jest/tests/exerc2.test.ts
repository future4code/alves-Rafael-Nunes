import { capsLock } from "./exercicios/exercicio1";
import { separeteLetters } from "./exercicios/exercicio2";

describe("testes do exercicio2", () => {

  test(`a saida deve ser ["d", "e", "v"]`, () => {

    const input = separeteLetters("dev")

    expect(input).toEqual(["d", "e", "v"])
  })
})