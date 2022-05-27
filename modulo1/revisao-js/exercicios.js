// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
const array = [1, 2, 3, 4, 5, 6]
function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray(array)


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  }
retornaArrayInvertido()

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let numero = array.sort(function (a, b){
    return a - b
  })
  return numero
}
retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray = []
  for (let i =0; i < array.length; i++){
      if (array[i] % 2 === 0){
          let numeroPar = array[i]
          novoArray.push(numeroPar)

      }
  }
  return novoArray
}
retornaNumerosPares()


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const numerosPares = array.filter((numero) => {
     return numero % 2 === 0
 })
 let numerosElevados = numerosPares.map((item) => {
     return item **2
 }) 
 return numerosElevados
} 


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
          maiorNumero = array[i]
      }
  }
  return maiorNumero
}
retornaMaiorNumero()

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto = {
    maiorNumero: undefined,
    maiorDivisivelPorMenor: undefined,
    diferenca: undefined,
}
    if(num1 > num2){
       objeto.maiorNumero = num1
    }else{
        objeto.maiorNumero = num2
    }
}

if (num1 > num2){
    if(num1 % num2 === 0){
       objeto.maiorDivisivelPorMenor = true
    }else{
        objeto.maiorDivisivelPorMenor = false
    }
}else if (num2 > num1){
    if(num2 % num1 === 0){
        objeto.maiorDivisivelPorMenor = true
    }else{
        objeto.maiorDivisivelPorMenor = false
    }
}else{
    objeto.maiorDivisivelPorMenor = true
}

if(num1 > num2){
    objeto.diferenca = num1 - num2

}else{
    retornaObjetoEntreDoisNumeros.diferenca = num1 - num2
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeros = []
   for(let i = 0; numeros.length < n; i+= 2){
        numeros.push(i)
   }
   return numeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilatero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}
    
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let retornaArrayOrdenado = array.sort((a, b) => a-b )
  let segundoMenorValor = arrayOrdenado[1]
  let segundoMaiorValor = arrayOrdenado[arrayOrdenado.length - 2]
  let arrayResultado = [segundoMaiorValor, segundoMenorValor]
  return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   for (let i = 0; i <filme.atores.length;i++){
       if(filme.atores[i]!== filme.atores[0]){
           filme.atores[i] = " " +filme.atores[i]
       }
   }
   return "Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let obj = {
       ...pessoa,
       nome:"ANÔNIMO"
   }
   return obj
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let perfilPessoas = pessoas.filter((item)=> item.altura >= 1.5)
   perfilPessoas = perfilPessoas.filter((item)=> item.altura > 14)
   perfilPessoas = perfilPessoas.filter((item)=> item.idade<60)
   return perfilPessoas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((pessoa) =>{
      if (pessoa.altura <= 1.5 || pessoa.idade <=14 || pessoa.idade >= 60){
          return pessoa

      }
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
let resultado = contas.map((conta) => {
    let soma = conta.compras.reduce((itemAnt,itemAtual) => itemAnt + itemAtual, 0)
    let saldo = conta.saldoTotal
    return {...conta,saldoTotal: saldo - soma, comras: []}
})
return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let listaOrdenado = consultas.sorte(function(a,b){
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1:0

  })
}return listaOrdenado

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
let resultado  = consultas.sort((primeiraConsulta, segundaConsulta) => {
    return new Date(primeiraConsulta.dataDaconsulta.split("/").reverse()).getTime()
    new Date(segundaConsulta.dataDaconsulta.split("/").reverse()).getTime()
})
return resultado
}
