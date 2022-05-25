function calculaPrecoTotal(quantidade) {
  let preco
  if (quantidade >= 12) {
    preco = 1.00
  
  } else {
    preco = 1.30 
    
  }
  return preco * quantidade
  
  }