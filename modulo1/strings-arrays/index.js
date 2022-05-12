// // // 1. Indique todas as mensagens impressas no console

// // let array
// // console.log('a. ', array)
// // //  undefined

// // array = null
// // console.log('b. ', array)
// // //  null
    
// // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //     //   0  1  2  3  4  5  6   7   8   9  10
// // console.log('c. ', array.length)
// // //  11

// // let i = 0
// // console.log('d. ', array[i])
// // //  3

// // array[i+1] = 19
// // console.log('e. ', array)
// // // 11

// // const valor = array[i+6]
// // console.log('f. ', valor)
// //9


// // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// //  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario

// // const nomeDoUsuario = prompt("Digite o seu Nome")
// // const emailDoUsuario = prompt("Digite o seu Email")
// // const fraseConcatenacao = "O e-mail "+ emailDoUsuario +" foi cadastrado com sucesso. Seja bem-vinda(o) "+ nomeDoUsuario +""

// // console.log(fraseConcatenacao)

// // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
// // Em seguida, siga os passos:

// const arrayComidas = ["Strogonoff", "Hamburger", "Churrasco", "Pizza", "Bife Acebolado"]
// // a) Imprima no console o array completo
// console.log(arrayComidas)

// // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
// // seguida por cada uma das comidas, uma embaixo da outra.
// console.log("Essas sao minhas comidas preferidas:")
// console.log(arrayComidas[0])
// console.log(arrayComidas[1])
// console.log(arrayComidas[2])
// console.log(arrayComidas[3])
// console.log(arrayComidas[4])
// console.log(arrayComidas[5])

// const comidaUsuario = prompt("Qual a sua comida preferida?")
// arrayComidas[1] = comidaUsuario
// console.log(arrayComidas)



// // 3. Faça um programa, seguindo os passos:
// // // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// // const listaDeTarefas = []

// // // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array 
// // const tarefa1 = prompt("Qual a sua tarefa?")
// // const tarefa2 = prompt("Qual a outra tarefa?")
// // const tarefa3 = prompt("Qual a terceira tarefa?")
// // listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// // // c) Imprima o array no console
// // console.log(tarefa1, tarefa2, tarefa3)

// // // d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
// // let realizou = prompt("Quais tarefas voce realizou: 0, 1 ou 2?")
// // console.log(listaDeTarefas[realizou])

// // // e) Remova da lista o item de índice que o usuário escolheu.
// // listaDeTarefas.splice(realizou,1)

// // // f) Imprima o array no console
// // console.log(listaDeTarefas)
