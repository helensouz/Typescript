//teremos acesso a super dentro dentro das subclasses

export class Pessoa{ //super class
    
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ){}

    getIdade():number{
        return this.idade;
    }

    getCpf(): string{
        return this.cpf
    }

    getNomeCompleto():string{
        return this.nome + ' ' + this.sobrenome
    }
}


export class Aluno extends Pessoa{
    sala: string;

    constructor(
         nome: string,
         sobrenome: string,
         idade: number,
         cpf: string,
          sala: string
    ){
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }


    getNomeCompleto():string{
        console.log('fazendo algo antes')
        return super.getNomeCompleto()
    }
}



export class Cliente extends Pessoa{
    getNomeCompleto():string{
        return 'isso vem de cliente'+ this.nome + ' ' + this.sobrenome
    }
}




const aluno = new Aluno('helen', 'souza', 20, '4353953205325', '01')
const cliente = new Cliente('helen', 'souza', 20, '4353953205325')
const pessoa = new Pessoa('helen', 'souza', 20, '4353953205325')

console.log(pessoa.getNomeCompleto())
console.log(cliente.getNomeCompleto())
console.log(aluno)
