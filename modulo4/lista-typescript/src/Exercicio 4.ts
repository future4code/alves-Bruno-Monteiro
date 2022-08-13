enum SETOR {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Funcionarios = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}

const colaboradores: Funcionarios[] = [
    { nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETOR.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETOR.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETOR.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETOR.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function filterDepto(colaboradores: Funcionarios[]) {
    return colaboradores.filter((colaborador) => {
        return colaborador.setor === SETOR.MARKETING && colaborador.presencial === true
    })
}

console.log(filterDepto(colaboradores))