import { capsLock } from "./exercicios/exercicio1";

describe("testes do exercicio1", () => {

  test("a saida deve ser DANONINHO", () => {

    const input = capsLock("danoninho")
  
    expect(input).toBe("DANONINHO")
  })

  test("a saida deve ser CAPSLOCK", () => {
    const output = capsLock("capslock")

    expect(output).toBe("CAPSLOCK")
  })
})