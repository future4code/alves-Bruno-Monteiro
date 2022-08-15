//Exercicio 2
const blue = '\u001b[34m';
const valor1 = Number(process.argv[2])
const valor2 = Number(process.argv[3])
const calc = process.argv[4]

const operacao = (valor1, valor2, calc) => {
switch(calc){
    case "add":
         return (valor1 + valor2)
    case "sub":
        return (valor1 - valor2)
    case "mult":
        return (valor1 * valor2)
    case "div":
        return (valor1 / valor2) 
}
}

const verifica = (valor1, valor2, calc) => {
    if (valor1 && valor2 && calc) {
       return console.log(blue + "Resposta:", operacao(valor1, valor2, calc)) 
    } else {
        return "Todos os parametros foram enviados?"
    }
}

verifica(valor1, valor2, calc)