type ObterChavefn = <O, K extends keyof O> (objeto: O, chave: K) => O[K];

const obterChave: ObterChavefn = (objeto, chave) => objeto[chave]


const animal = {
    cor: 'rosa', 
    vacinas: ['vacina 1', 'vacina 2']
}

const vacinas = obterChave(animal, 'vacinas')
const cor = obterChave(animal, 'cor')


console.log(vacinas, cor)