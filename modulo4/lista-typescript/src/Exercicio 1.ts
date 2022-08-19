function person(nome:string, data: string){
    const birthDate:string[] = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${birthDate[0]} do mês de ${birthDate[1]} do ano de ${birthDate[2]}`
}

console.log(person("Bruno", "28/12/1986"))