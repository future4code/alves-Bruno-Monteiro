// a)
let minhaString: string = "quatro"
//a) Ao atribuir um valor numérico a variável do tipo string ocorre o erro "Type number is not assignable to type 'string'."

let meuNumero: number = 4
let meuNumero2: number | string = "quatro"

//b) Para que a variável acima também aceite strings devemos usar o union type, dessa forma a variável pode assumir mais de um tipo.

//c)

const person : { name: string, age: number, favoriteColor: string} = {
    name: "Bruno",
    age: 35,
    favoriteColor: "Green"
}
// type person = {name: string, age: number, favoriteColor: string}

// const mariana : person = {name: "Mariana", age: 29, favoriteColor: "amarelo"}
// const davi : person = {name: "Davi", age: 27, favoriteColor: "azul"}
// const isabel : person = {name: "Isabel", age: 32, favoriteColor: "roxo"}

// d)

 enum Cores {
        AMARELO = "amarelo",
        LARANJA = "laranja",
        VERMELHO = "vermelho",
        VERDE = "verde",
        AZUL = "azul",
        ANIL = "anil",
        VIOLETA = "violeta"
 }

type person = {name: string, age: number, favoriteColor: Cores}

const bruno : person = {name: "Bruno", age: 35, favoriteColor: Cores.VERDE}