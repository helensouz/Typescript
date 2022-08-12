// Generics com interfaces e type alias

interface PessoaProtocolo<T = string, U = number>{
    nome: T;
    sobrenome: T;
    idade: U;

}

const aluno1: PessoaProtocolo<string, number> ={
nome: 'helen',
sobrenome: 'souza',
idade: 20
}

const aluno2: PessoaProtocolo<number, number> ={
    nome: 123,
    sobrenome: 456,
    idade: 21
}

const aluno3: PessoaProtocolo<string, string> ={
    nome: 'oal',
    sobrenome: 'dfdf',
    idade: '21'
}

console.log(aluno1)
console.log('/////')
console.log(aluno2)
console.log('/////')
console.log(aluno3)