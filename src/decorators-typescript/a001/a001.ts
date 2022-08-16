//decorator pode ter a habilidade de observar o codigo e decorar o codigo

//exemplo usando classese


//decorator ira decorar a classe . decorator recebe essa classe

function inverteNomeECor<T extends new (...args: any[]) => any >(target: T){ //espera receber uma target\
    console.log('sou o decorador e recebi', target)
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

@inverteNomeECor
export class Animal{
    constructor(
        public nome: string,
        public cor: string){
            console.log('sou a classe')
        }
}


// const animal = new Animal ('preto', 'nina');
// console.log(animal)

