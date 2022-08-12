export class Pessoa{ //super class
    
    constructor(
        private nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ){
        this.cpf = _cpf
    }

    set cpf(valor: string){
        this._cpf = valor
    }

    get cpf():string{
        return this._cpf.replace(/\D/g, '')
    }
}

const pessoa = new Pessoa('helen', 'souza', 20, '435.395.320.5325')
pessoa.cpf = '123.2435.4657.57'
console.log(pessoa.cpf)