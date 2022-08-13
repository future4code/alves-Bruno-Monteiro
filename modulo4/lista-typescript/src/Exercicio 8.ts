function checaValidade(dataAtual: number, dataNascimento: number, dataEmissao: number ) {
    let idade = dataAtual - dataNascimento
    let tempoIdentidade = dataAtual - dataEmissao

     if(idade <= 20 ) {
         return tempoIdentidade >= 5 ? true : false
      }else if(idade >= 20 || idade <= 50) {
         return tempoIdentidade >= 10 ? true : false
      }else if(idade > 50) {
         return tempoIdentidade >=15 ? true : false
       }else {
           return "error"
       }
   }

   console.log(checaValidade(2022, 1986, 1999)) 