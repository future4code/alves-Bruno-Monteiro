// // 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log (minhaFuncao(2))
// console.log (minhaFuncao(10))

// a)
// 10 e 50 
// b) a fincao ainda seria invocada, porem nada seria impresso

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)       

// a) Explique o que essa função faz e qual é sua utilidade
// a funcionalidade é verificar se tem ou nao tem cenoura no texto

// b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// todas as respostas serao true pq identificou cenoura nos 3 textos


// 1.Escreva as funções explicadas abaixo:
// a)
// function perfil (){
//     console.log("Eu sou Bruno, tenho 35 anos, moro em NY e sou developer")
// } 

// b)
// function perfil(nome, idade, cidade, profissao){
//     return ("Eu sou " + nome + " tenho "+ idade + " anos, moro em " + cidade + " e sou " + profissao)
// }
// const nome = prompt(`qual é o seu nome?`)
// const idade = prompt(`qual é a sua idade?`)
// const cidade = prompt(`onde voce mora?`)
// const profissao = prompt(`qual a sua profissao?`)
// console.log(perfil(nome,idade,cidade,profissao))


// 2
// a)
// const fun = (numero1,numero2) => {return numero1+numero2}
// console.log(fun(20,15))

// // // b)
// const numbers = (num1,num2)=>{
//     const comparar = num1>=num2
//     return comparar
// }
// console.log(numbers(50,20))


// // c)
// const variavel = (number1)=>{
//     const compare = number1%2 == 0

//     return compare
// }
// console.log(variavel(10))

// d)
// function variable(word){
//     console.log(word.toUpperCase().length)
//     console.log(word.toUpperCase())
// }
// argue = prompt("Digite um Texto")
// variable (argue)


// 3.
// function soma (num1,num2){
//     return num1+num2
// }
// function divisao(num1,num2){
//     return num1/num2

// }
// function multiplicacao(num1,num2){
//     return num1*num2

// }
// function subtracao(num1,num2){
//     return num1-num2

// }
// const ask = + prompt("Insira um Numero")
// const ask2 = + prompt("Insira outro Numero")

// console.log(soma(ask,ask2))
// console.log(divisao(ask,ask2))
// console.log(multiplicacao(ask,ask2))
// console.log(subtracao(ask,ask2))

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
// Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
// a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

// const imprimeNum = (numero) => {console.log(numero)}

    
// // b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.
// // ** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo


// const somar = (num1,num2) => {imprimeNum(num1 + num2)}
// somar(1,2)


// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
// Retorne este valor, invoque a função e imprima o resultado no console. 
// -
// a2 = b2 + c2

// function pitagoras(cat1, cat2) {
//     return Math.sqrt((cat1*cat1) + (cat2*cat2))
// }
// console.log(pitagoras(2,3))