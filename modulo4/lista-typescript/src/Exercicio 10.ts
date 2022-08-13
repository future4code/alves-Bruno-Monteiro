import { validate } from "gerador-validador-cpf",

const cpf=(digitos: string) => {
    const verifica = validate(digitos)

    return verifica
}

console.log(cpf('457.921.103-50'));