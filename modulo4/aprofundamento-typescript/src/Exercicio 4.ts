type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Através do comando tsc exercicio4.ts
//c) Sim, mas a diferença seria o endereço da pasta. Por exemplo, tsc ./src/exercicio4.ts
//d) Sim, através do comando tsc --init que cria um arquivo de configuração dentro da pasta do projeto. 
// Após configurar esse arquivo basta utilizar novamente o comando tsc e 
// os arquivos typescript serão transpilados para JS.