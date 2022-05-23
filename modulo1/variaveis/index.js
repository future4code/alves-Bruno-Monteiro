let a = 10
let b = 10

console.log(b)
// irá imprimir 10

b = 5
console.log(a, b)
// ira imprimir 10 e depois 5

let a = 10
let b = 20
c = a // 10
b = c // 10
a = b // 10 

console.log(a, b, c)
ira imprimr 10 10 10 


let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
//p horasPorDia
//t valorPorDia

let nome //undefined
let idade //undefined
console.log (typeof nome, typeof idade)
// nao conseguiu achar nenhum tipo pq nao associamos informacao de valor quando declaramos as variaveis 
nome = prompt("qual é o seu nome")
idade = prompt("qual é a sua idade")
console.log (typeof nome, typeof idade)
// notei que ele imprimiu string string pq foi o valor atribuido ao nome e idade atraves do comando prompt

console.log("Olá", nome, "voce tem", idade, "anos")


let almocou = prompt("voce almocou hoje?")
let agua = prompt("voce bebeu agua hoje?")
let correu = prompt("voce correu hoje?")

console.log("voce almocou hoje?", almocou) 
console.log("voce bebeu agua hoje?", agua) 
console.log("voce correu hoje?", correu) 


let a = 10
let b = 25
let c = a

// Aqui faremos uma lógica para trocar os valores
a = b //25
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio

let numeroUmTexto= prompt("digite um numero")
let numeroDoisTexto= prompt("digite um outro numero")

let numeroUmNumber = Number(numeroUmTexto)
let numeroDoisNumber = Number(numeroDoisTexto)

let soma = numeroUmNumber + numeroDoisNumber
let multiplicado = numeroUmNumber * numeroDoisNumber

console.log("O primeiro número somado ao segundo número resulta em:",soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:",multiplicado)
