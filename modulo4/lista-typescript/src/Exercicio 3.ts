enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
 
type Movies = {
    nome:string,
    anoLancamento:number,
    genero:GENERO,
    pontuacao:number
}


const Interstellar: Movies = {
    nome:"Interstellar",
    anoLancamento:2014,
    genero:GENERO.DRAMA,
    pontuacao:74
}

console.log(Interstellar)
