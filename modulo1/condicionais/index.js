// Exercícios de interpretação de código
// 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele verifica o numero que o usuario esta inserindo! Se for par passou no teste, se for impar nao passou no teste 

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Numeros pares ele imprime passou no teste
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Numeros impares nao passou no teste

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, 
// contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// serve para identificar o preco de acordo com a fruta escolhida pelo usuário

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preco da fruta Maça é R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se
//  retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preco da fruta Pêra é 5 pq nao tinha o break para fazer com que a execuçao saisse do bloco



// // 3. Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Pedindo ao usuario que digite um numero, com Number transformando a string em numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o numero for 10, ele vai imprimir duas mensagens: Esse número passou no teste e emitir um erro
// Se o numero for -10, ele vai emitir um erro

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, havera um erro no console pq ela foi declarada dentro do escopo if 

// Exercícios de escrita de código
// 1.Faça um programa que pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// const idade = Number(prompt("Qual é a sua idade"))
// if(idade >=18){
//     console.log("voce pode dirigir")
// } else{
//     console.log("Você não pode dirigir.")
// }   

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt("Qual é o seu turno? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// if (turno==="M"){
//     console.log("Bom Dia")
// } else {
//     if (turno==="V"){
//         console.log("Boa Tarde")
//     } else {
//         console.log("Boa Noite")
//     }
// }


// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.


// const turno = prompt("Qual é o seu turno? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch(turno){
//     case "M":
//       console.log("Bom Dia")  
//       break
//     case "V":
//         console.log("Boa Tarde")
//         break
//     case "N":
//         console.log("Boa Noite")
//         break
//     default: 
//         console.log("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
//         break
// }




// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo 
// de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
// `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

// const filme = prompt("Qual o genero de filme voce vai assistir?")
// const preco = Number(prompt("Quanto é o ingresso?"))

// if(filme === "fantasia" && preco < 15){
//     console.log("Bom filme!")
// }
// else{
//     console.log("Escolha outro Filme")
// }

// DESAFIO
// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, 
// pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar 
// (pipoca, chocolate, doces, etc) e imprima no console as mensagens `
// "Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.


// const filme = prompt("Qual o genero de filme voce vai assistir? ")
// const preco = Number(prompt("Quanto é o ingresso?"))

// if(filme === "fantasia" && preco < 15){
//     const lanchinho = prompt("Qual lanchinho voce vai querer?")
//     console.log("Bom filme!")
//     console.log("Aproveite o seu",lanchinho)
// }
// else{
//     console.log("Escolha outro Filme")
// }


// DESAFIO 2

// const nome = prompt("Qual seu nome?")
// const tipo = prompt("Qual o tipo de jogo? Use IN (internacional)ou DO (Domestico)!")
// const etapa  = prompt("Qual é a etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
// const categoria = prompt("Qual a categoria? Escolha entre 1,2,3 ou 4")
// const quantidade =  Number (prompt("Quantos ingressos voce quer?"))

// let preco 
// if(etapa==="SF"){
//     if(categoria==="1"){
//         preco = 1320
//     } else if(categoria==="2"){
//         preco = 880
//     } else if(categoria==="3"){
//         preco = 550
//     } else{
//         preco = 220
//     }
// } else if(etapa==="DT"){
//     if(categoria==="1"){
//         preco = 660
//     } else if(categoria==="2"){
//         preco = 440
//     } else if(categoria==="3"){
//         preco = 330
//     } else{
//         preco = 170
//     }

// } else{
//     if(categoria==="1"){
//         preco = 1980
//     } else if(categoria==="2"){
//         preco = 1320
//     } else if(categoria==="3"){
//         preco = 880
//     } else{
//         preco = 330
//     }
// }
// if(tipo==="IN"){
//     preco = preco * 4.1
// }

// let valorTotal = preco * quantidade

// console.log("Nome do cliente:", nome)
// console.log("Tipo do Jogo:", tipo)
// console.log("Etapa do jogo:", etapa)
// console.log("Categoria:", categoria)
// console.log("Quantidade de Ingressos: ", quantidade)
// console.log("Valor do ingresso:", preco)
// console.log("Valor total:", valorTotal)
