export function add(a: number, b: unknown){
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`
}


console.log(add(2,2))


type Pessoa = {nome: String}
type Animal = {cor: string}
type PessoaouAnimal = Pessoa | Animal


export class Aluno implements Pessoa{
    constructor(public nome: string){}   
}

function mostraNome(obj: PessoaouAnimal) : void{
       if('nome' in obj ) console.log(obj.nome)
}

mostraNome(new Aluno('Joao'))