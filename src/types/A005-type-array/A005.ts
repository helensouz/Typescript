// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac * valor, 1)
}

export function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase())
}


export function concatenaString(...args: string[]): string{
    return args.join(' ')
}




const result = multiplicaArgs(1,2,3);
const concatenacao = concatenaString( 'a', 'b', 'c')
const Upper = toUpperCase('um', 'array', 'com map')

console.log(result)
console.log(concatenacao)
console.log(Upper)

export {result}