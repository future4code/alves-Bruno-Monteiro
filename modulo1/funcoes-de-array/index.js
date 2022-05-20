// 1. Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) O que vai ser impresso no console?
//  vai imprimir o primeiro objeto seguido do indice 0 e depois o array inteiro
//  vai imprimir o segundo objeto seguido do indice 1 e depois o array inteiro
//  vai imprimir o terceiro objeto seguido do indice 2 e depois o array inteiro

// 2.Leia o código abaixo

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//   a) O que vai ser impresso no console?
//   Vai imprimir o novo array que foi criado que contem apenas o nome dos objetos

// 3. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // a) O que vai ser impresso no console?
 // Vai imprimir o novo array que foi criado que contem apenas os dois primeiros objetos, deixando de fora Chijo 


// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

//     const novaArray = pets.map((item, index, array) => {
//             return item.nome
// })

// b) Crie um novo array apenas com os [cachorros salsicha]
// (https://www.youtube.com/watch?v=YQ404vwjzus)

// const novaArray2 = pets.filter((item, index, array) => {
//     return item.raca.toLowerCase() === "salsicha"
// })

// c) Crie um novo array que possuirá mensagens para enviar para todos 
// os clientes que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const novaArray3 = pets.filter((item, index, array) => {
//     return item.raca.toLowerCase() === "poodle"

// })
// const novaArray4 = novaArray3.map((item, index, array) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`

// })

// // 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
// // utilizando as funções de array map e filter:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// //  a) Crie um novo array que contenha apenas o nome de cada item

//     const arrayProdutos = produtos.map((item, index, array) => {
//         return item.nome 

//     })

// // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
// // aplicando 5% de desconto em todos eles

//     const arrayProdutos2 = produtos.map((item, index, array) => {
//         return  { nome: item.nome, preco: item.preco * 0.95}
//     })
//         console.log(arrayProdutos2)

// // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    
//     const arrayProdutos3 = produtos.filter((item, index, array) => {
//         return item.categoria === "Bebidas"
//     })
//         console.log(arrayProdutos3)

// // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//     const arrayProdutos4 = produtos.filter((item, index, array) => {
//         return item.nome.includes("Ypê")
//     })
//         console.log(arrayProdutos4)


// // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por 
// // [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
// const arrayProdutos5 = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })
// const arrayProdutos6 = arrayProdutos5.map((item, index, array) => {
//     return `Compre ${item.nome} por ${item.preco}`
// })
// console.log(arrayProdutos5 , arrayProdutos6)
