export const checkIfPair = (n:number): boolean =>{
    return n % 2 === 0
}

export const toUpperCase = (word: string): string =>{
    return word.toUpperCase()
}

export const arrayStrings = (word: string): string[] => {
    return word.split("")
}

export const changeToNumber = (number: string): number =>{
    return + number
}

export const numberOfLetters = (word: string): number =>{
    return word.length
}

export const randomNumber = (): number => {
    return Math.ceil(Math.random())
}

export const users = [
    {
        name: "mari"
    },
    {
        name: "davi"
    },
    {
        name: "bruno"
    },
    {
        name: "astrodev"
    }
]

export const calculateAvg = (array: number[]): number => {
    let calc = 0

    array.map((number) => {
        return calc = calc + number
    })

    const avg = Math.ceil(calc / (array.length))

    return avg
}

export const calculateAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    return currentYear - year
}

export const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
    const formattedDate = date.toLocaleDateString()

    return formattedDate
}