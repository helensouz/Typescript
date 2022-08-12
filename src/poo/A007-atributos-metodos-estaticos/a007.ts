//metodo estatico: metodo que pode ser acessado sem instanciar a classe

export class Pessoa{ //super class
    static idadePadrao = 0
    static cpfPadrao = '435.395.320.5325'

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ){  }

    metodoNormal():void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }


    static criaPessoa(nome: string, sobrenome: string): Pessoa{
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }

}

const pessoa = new Pessoa('helen', 'souza', 20, '435.395.320.5325')
const pessoa2 = Pessoa.criaPessoa('helen', 'souza')
const pessoa3 = Pessoa.criaPessoa('maria', 'oliveira')



//tendo acesso ao static
pessoa2.metodoNormal();