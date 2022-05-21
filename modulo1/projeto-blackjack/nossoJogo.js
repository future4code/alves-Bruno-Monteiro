/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// console.log("Boas vindas ao jogo de Blackjack!")

// let carta
// let carta2
// let carta3
// let carta4

// if (confirm("Quer iniciar uma nova rodada?")===true){
//    carta = comprarCarta()
//    carta2 = comprarCarta()
//    carta3 = comprarCarta()
//    carta4 = comprarCarta()

// } 
// else{window.prompt("O jogo acabou")}

// let valorUsuario = carta.valor + carta2.valor
// let valorComprador = carta3.valor + carta4.valor

// console.log(`Usuário - cartas: ${carta.texto},${carta2.texto} - pontuação ${valorUsuario} 
// Computador - cartas:${carta3.texto},${carta4.texto} - pontuação ${valorComprador}`)

// alert (`Usuário - cartas: ${carta.texto},${carta2.texto} - pontuação ${valorUsuario} 
// Computador - cartas:${carta3.texto},${carta4.texto} - pontuação ${valorComprador}`)


// if (valorComprador > valorUsuario && valorComprador <=21){
//    console.log("O computador ganhou!")
//    alert ("O computador ganhou!")
// }

// else if (valorComprador < valorUsuario && valorUsuario <=21){
//    console.log("O usuário ganhou!")
//    alert ("O usuário ganhou!")
// }

// else if (valorComprador === valorUsuario && valorComprador <= 21){
//    console.log("Empate!")
//    alert ("Empate")
// }