//type record
const objeto1: Record<string, string | number> = {
    nome: 'helen',
    sobrenome: 'souza',
    idade: 20
}
console.log(objeto1)

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number
}
//required
type PessoRequired = Required<PessoaProtocol> // recebe um tipo

//Partial --> deixa as propriedes como opcionais
type PessoaPartial = Partial<PessoRequired>


//Readonly
type PessoaReadonly = Readonly<PessoRequired>

//Pick
type PessoaPick = Pick<PessoRequired, 'nome' | 'idade'>

const objeto2: PessoaProtocol = {
    nome: 'helen',
    sobrenome: 'souza',
    idade: 20
}
// Extract and exclude



type ABC = 'A' | 'D' | 'C'
type CDE = 'C' | 'D' | 'E'
type TipoExclude = Exclude<ABC, CDE> // computado os dados que estao no item A que nao tem no item B
type TipoExtract = Extract<ABC, CDE> //

type AccountMongo = {
    _id: string,
    nome: string,
    idade: number

}

//module mode
export default 1