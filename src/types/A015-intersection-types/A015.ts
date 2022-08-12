// &  intersection
// combinar types

type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = { idade: number}
type Pessoa = TemIdade & TemNome & TemSobrenome //une todos os types

const pessoa: Pessoa = {
    nome: 'helen',
    sobrenome: 'souza',
    idade: 20
};

console.log(pessoa)


export {pessoa}


