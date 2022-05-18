// Exercícios de interpretação de código


// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// O codigo impresso vai ser 10 

// 2. Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// // a) O que vai ser impresso no console?
// // vai ser impresso 19 21 23 25 27 30

// // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
// //  o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // 

// // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// // exercicio 1
// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// let petUsuario = Number(prompt("Quantos Bichinhos de estimacao voce tem?"))
// let array = []
// if (PetUsuario ===0) {
//     console.log("Que pena! Você pode adotar um pet!")
// // }    else{

//         for(let indice = 0;indice < petUsuario; indice++){
//         let pet = prompt("Qual o nome dos seus pet's")
//         array[indice] = pet
//     }
//     for(let arrayEx1 of array){

//     }
    
//         console.log(arrayEx1)
// }


// Exercicio 2

//     // const numero = [ 15, 40, 50, 60, 55, 67]

//     // function ex2A(array){
//     //     for(let ex2A of array){
//     //         console.log(ex2A)
//     //     }
//     // }

// // function ex2B(array){
// // }
// // for(let ex2B of array) {
// //     console.log(ex2B / 10)
// // }

// // function ex2C(array) {
// // let novoArray = []
// // for(let i = 0; i<array.length;i++){
// //     if(array[i] % 2 === 0){
// //         novoArray[i] = array[i]
// //     }
// //     console.log(novoArray)
// // }

// function ex2D(array){
//     let novoArray = []
//     for(let i =0;i<array.length; i++){
//         novoArray[i] = `O elemento do index ${i} é ${array[i]}`

//     }
//     for(let teste of novoArray){
//         console.log(teste)
//     }
// }

// function ex2E(array) {
//     let maior = 0
//     for(let i = 0; i <array.length; i++){
//         if(array[i] > maior){

//         }
//         maior = array[i]
//     }
//     let menor = Infinity
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < menor ) {
//             menor = array[i]
//         }

//     }
//     console.log(`meu maior numero é ${maior} e meu numero menor é ${menor}`)
// }
// ex2E(num)