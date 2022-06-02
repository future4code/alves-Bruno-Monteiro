function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroVezes = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if(numeroEscolhido === arrayDeNumeros[i]) {
      numeroVezes++
    }
    
  } 
  if(numeroVezes > 0 ){
   return `O número ${numeroEscolhido} aparece ${numeroVezes}x`
  }
  else{
    return "Número não encontrado"
  }
}
