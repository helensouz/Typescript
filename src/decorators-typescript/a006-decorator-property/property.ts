function decorador(classPrototype: any, nome: string | symbol): any{
    let valorPropriedade: any;
    return {
        get: () => valorPropriedade,
        set: (valor: any) => {
            if(typeof valor === 'string'){ 
            valorPropriedade = valor.split('').reverse().join(' ');
            return
        }

        valorPropriedade = valor;
    }
    }
}

export class UmaPessoa{
    @decorador
    nome: string;
    @decorador
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }

    metodo(msg: string): string{
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome
    }


    set nomeCompleto(valor: string){
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift()
        if(!primeiroNome) return;
        this.nome = primeiroNome
        this.sobrenome = palavras.join(' ')
    }
}

// const pessoa = new UmaPessoa('Helen', 'souza', 20)
// const metodo1 = pessoa.metodo('hello world')
// pessoa.metodo = () => 'olaaa'
// console.log(metodo1)