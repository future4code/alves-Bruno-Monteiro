//  1. Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
//  Matheus Nachtergaele, Virginia Cavendish, Canal Globo, Horario 14 horas

// 2. Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD" 
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juca"
// raca: "SRD"

// {nome: 'Juba', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Juba"
// raca: "SRD"

// {nome: 'Jubo', idade: 3, raca: 'SRD'}
// idade: 3
// nome: "Jubo"
// raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ela realiza uma cópia de um objeto ou um array inteiro 

// 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// Vai ser impresso False e undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Imprimiu False pq ele puxou: console.log(minhaFuncao(pessoa, "backender")) e no caso de undefined, ele nao encontrou "altura" na variavel pessoa

// Exercícios de escrita de código
// 1. Resolva os passos a seguir: 

// a)
// Exemplo de entrada
// const pessoa = {
//     nome: "Bruno",
//     apelidos: ["Bru", "Nobru", "Brunomon"]
// }

// function mudarApelido(objeto){
//     console.log('Eu sou ' + objeto.nome ,'mas pode me chamar de ' + objeto.apelidos[0]+ ', ' +objeto.apelidos[1], 'ou ' + objeto.apelidos[2])
// }
// mudarApelido(pessoa)

// // b)
// const outroApelido = {
//     ...pessoa,
//     apelidos : ["Adonai", "Monteiro", "Brubru"]
// }
// mudarApelido(outroApelido)

// 2. Resolva os passos a seguir: 
// // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const objeto1 = {
//     nome: "Bruno",
//     idade: 35,
//     profissao: "Developer"
// }

// const objeto2 = {
//     nome: "Mariana",
//     idade: 29,
//     profissao: "Product Manager"
// }

// // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// function minhaFuncao(objeto){
//     return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]

// }
// console.log(minhaFuncao(objeto1))
// console.log(minhaFuncao(objeto2))

// 3
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

// const carrinho = []

// const frutaSacolao1 = {
//     nome: "Banana", disponibilidade: true
// }

// const frutaSacolao2 = {
//     nome: "laranja", disponibilidade: true
// }

// const frutaSacolao3 = {
//     nome: "uva", disponibilidade: false
// }

// function minhaFuncao(fruta) {
//     carrinho.push(fruta)    
// }
// minhaFuncao(frutaSacolao1)
// minhaFuncao(frutaSacolao2)
// minhaFuncao(frutaSacolao3)

// console.log(carrinho)



