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

    console.log("Boas vindas ao jogo de Blackjack!")

    let cartaUsuario = []
    let cartaComputador = []
    
    if (confirm("Quer iniciar uma nova rodada?")===true){
       cartaUsuario[0] = comprarCarta()
       cartaUsuario[1] = comprarCarta()
       cartaComputador[0] = comprarCarta()
       cartaComputador[1] = comprarCarta()
    
    } 
    else{window.alert("O jogo acabou")}
    
    let valorUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
    let valorComputador = cartaComputador[0].valor + cartaComputador[1].valor
    let valorUsuario2

    if (valorUsuario > 21){
      cartaUsuario[0] = comprarCarta()
      cartaUsuario[1] = comprarCarta()
   }

   if(valorComputador > 21){
      cartaComputador[0] = comprarCarta()
      cartaComputador[1] = comprarCarta()
      
      
    while (confirm(`Suas cartas sao ${cartaUsuario[0].texto},${cartaUsuario[1].texto} a carta do computador é ${cartaComputador[0].texto} 
    deseja comprar mais uma carta`)){
       cartaUsuario.push(comprarCarta())
         valorUsuario2 = valorUsuario + cartaUsuario[cartaUsuario.length-1].valor 
    }
    
    }
    if (valorComputador > valorUsuario && valorComputador <=21){
       console.log("O computador ganhou!")
       alert ("O computador ganhou!")
    }
    
    else if (valorComputador < valorUsuario && valorUsuario <=21){
       console.log("O usuário ganhou!")
       alert ("O usuário ganhou!")
    }
    
    else if (valorComputador === valorUsuario && valorComputador <= 21){
       console.log("Empate!")
       alert ("Empate")
    }

