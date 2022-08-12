//implementando type alias com classes

type TipoPessoa = { //type interface

    nome: string;
    sobrenome: string;
    nomeCompleto(): string
}

export class Pessoa implements TipoPessoa{

    constructor(public nome: string, public sobrenome: string){
      
    }

     nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('helen', 'souza')
console.log(pessoa.nomeCompleto())