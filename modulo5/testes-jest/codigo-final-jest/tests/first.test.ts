import { ITask, tasks } from "./tasks"

describe("Praticando com Jest", () => {
    test("O número 100 é maior que o número 99", () => {
        expect(100).toBeGreaterThan(99)
    })

    test("10 multiplicado por 2 é 20", () => {
        expect(10 * 2).toBe(20)
    })

    test("toBe e toEqual com valores primitivos", () => {
        expect(2).toBe(2) // comparação rasa
        expect(2).toEqual(2) // comparação profunda
    })

    test("toBe e toEqual com valores não-primitivos", () => {
        // expect({}).toBe({}) comparação rasa falha
        expect({}).toEqual({}) // comparação profunda
    })

    test("A tarefa 'Estudar testes com Jest' deve existir na lista", () => {
        const task: ITask = {
            id: "2",
            name: "Estudar testes com Jest"
        }

        expect(tasks).toContainEqual(task)
    })
})
