import {checkIfPair, toUpperCase, arrayStrings, changeToNumber, numberOfLetters, randomNumber, calculateAvg, calculateAge, formatDate, users } from "./exercicios"


describe("Exercicios", ()=>{


    test("A entrada deve retornar true", () => {
        const input = 2
        const result = checkIfPair(input)
        expect(result).toBe(true)
    })

})

test("A entrada deve retornar BANANINHA", () => {
    const input = "bananinha"
    const result = toUpperCase(input)
    expect(result).toBe("BANANINHA")
})


test("A entrada deve retornar ['d','e','v']", () => {
    const input = "dev"
    const result = arrayStrings(input)
    expect(result).toEqual(['d', 'e', 'v'])
})

test("A string deve retornar número", () => {
    const input = "10"
    const result = changeToNumber(input)
    expect(result).toBe(10)
})

test("A string deve retornar o número de letras", () => {
    const input = "jest"
    const result = numberOfLetters(input)
    expect(result).toBe(4)
})

test("Deve retornar um número aleatório entre 0 e 10", () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = randomNumber()
    expect(input).toContainEqual(result)
})

test("Deve retornar true para a busca de Astrodev", () => {
    expect(users).toContainEqual({name: "Astrodev"})
})

test("Deve retornar o número 7 para o array [10, 4, 7, 6]", () => {
    const input = [10, 4, 7, 6]
    const result = calculateAvg(input)
    expect(result).toBe(7)
})

test("Deve retornar a idade", () => {
    const input = 1986
    const result = calculateAge(input)
    expect(result).toBe(35)

    test("Deve retornar a data no formato 26/09/2022", () => {
        const input = "2022/09/26"
        const result = formatDate(input)
        expect(result).toBe("26/09/2022")
    })
})

