interface Constructor { 
    new (...args: any[])
    : any
}

function inverteNomeECor(param1: string, param2: string){ 
    //closure
    return function inverteNomeECor<T extends Constructor >(target: T){ //espera receber uma target\
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
                return valor.split('').reverse().join('') + param1 + ' ' + ' ' + param2;
            }
        };
    } 
}

function outroDecorador(target: Constructor){
    console.log('sou o segundo decorador')
}

@outroDecorador // chamado em segundo
@inverteNomeECor('valor1', 'valor 2') // chamado em primeiro
export class Animal{
    constructor(
        public nome: string,
        public cor: string){
            console.log('sou a classe')
        }
}