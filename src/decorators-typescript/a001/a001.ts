//decorator pode ter a habilidade de observar o codigo e decorar o codigo

//exemplo usando classese

@decorator
export class Animal{
    constructor(
        public nome: string,
        public cor: string){}
}

//decorator ira decorar a classe . decorator recebe essa classe

function decorator<T extends new (...args: any[]) => any >(target: T){ //espera receber uma target\

    return class extends target{
        cor: string;
        nome: string

        constructor(...args: any[]){
            super(...args)
            this.cor = this.inverte(args[0])
            this.nome = this.inverte(args[0])
        }

        inverte(valor: string): string{
            return valor.split('').reverse().join('')
        }
    };
}

const animal = new Animal ('preto', 'nina');
console.log(animal)

