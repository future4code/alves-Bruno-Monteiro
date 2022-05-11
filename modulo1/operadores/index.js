// //EXERCICIO 1

// // const bool1 = true
// // const bool2 = false
// // const bool3 = !bool2

// // let resultado = bool1 && bool2 
// // console.log("a. ", resultado) // RETORNA FALSE PQ TODOS OS BOOLEANS ENVOLVIDOS NAO SAO TRUE

// // resultado = bool1 && bool2 && bool3 
// // console.log("b. ", resultado) // RETORNA FALSE PQ TODOS OS BOOLEANS ENVOLVIDOS TAMBEM NAO SAO TRUE E USOU!
// // PARA RETORNAR O BOOLEAN OPOSTO

// // resultado = !resultado && (bool1 || bool2) 
// // console.log("c. ", resultado) // RETORNA TRUE 

// // console.log("d. ", typeof resultado) BOOLEAN


// // EXERCICIO 2

// // let primeiroNumero = prompt("Digite um numero!")
// // let segundoNumero = prompt("Digite outro numero!")

// // let primeiroNumeroNumber = Number(primeiroNumero)
// // let segundoNumeroNumber = Number(segundoNumero)
// // let soma = primeiroNumeroNumber + segundoNumeroNumber

// // console.log(soma)

// //VAI SER IMPRESSO NO CONSOLE UM NUMERO CONCATENADO POIS NAO FOI INSERIDO NUMBER


// // EXERCICIO 3
// // A SOLUCAO SERA CRIAR UMA NOVA VAR PARA TRANSFORMAR A STRING EM NUMBER PARA NAO SER CONCATENADO 



// 1. Faça um programa que:
    
// a) Pergunte a idade do usuário
    
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
// c) Imprima na consolea seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

// let idade = prompt("Qual é a sua idade?")
// let amigo = prompt("Qual é a idade da sua melhor amiga?")

// console.log(idade)
// console.log(amigo)

// let amigoNumero = Number(amigo)
// let idadeNumero = Number(idade)

// let idadeMaior = idadeNumero > amigoNumero
// console.log("sua idade é maior que a do seu amigo?", idadeMaior)

// let diferencaIdade = idadeNumero - amigoNumero
// console.log("Qual é a diferenca de idade sua e do seu amigo", diferencaIdade)

//2. Faça um programa que:
    
// a) Peça ao usuário que insira um número par
    
// b) Imprima na console o resto da divisão desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// let par = prompt("Insira um numero par")
// let numeroPar = Number(par)
// let restoDaDivisao = numeroPar % 2 
// console.log(restoDaDivisao)

// c) Quando um numero par for dividido por 2 o resto vai ser sempre 0

// d) Quando um numero impar for dividido por 2 o resto vai ser sempre 1

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
// a) A idade do usuário em meses
    
// b) A idade do usuário em dias
    
// c) A idade do usuário em horas


// let idadeAnos = prompt("Qual a sua idade em anos")
// let idadeAnosNumero = Number(idadeAnos)

// let idadeMeses = idadeAnosNumero * 12
// let idadeDias = idadeAnosNumero * 365
// let idadeHoras = idadeAnosNumero * 24 * 365

// console.log(idadeMeses,idadeDias,idadeHoras)

// Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let digiteUmNumero = prompt("Digite um numero")
let digiteOutroNumero = prompt("Digite outro numero")

let digiteUmNum = Number(digiteUmNumero)
let digiteOutroNum = Number(digiteOutroNumero)

let maior = digiteUmNum > digiteOutroNum
let igual = digiteUmNum === digiteOutroNum
let divisao = digiteUmNum % digiteOutroNum
let divisao2 = digiteOutroNum % digiteUmNum
let divisaoZero = divisao === 0
let divisaoZero2 = divisao2 === 0


console.log("O primeiro numero é maior que segundo?", maior)
console.log("O primeiro numero é igual ao segundo?", igual)
console.log("O primeiro numero é divisível pelo segundo?",divisaoZero)
console.log("O segundo numero é divisível pelo primeiro?",divis)

