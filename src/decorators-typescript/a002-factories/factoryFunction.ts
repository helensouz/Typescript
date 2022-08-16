

function inverteNomeECor(param1: string, param2: string){ 
    //closure
    return function inverteNomeECor<T extends new (...args: any[]) => any >(target: T){ //espera receber uma target\
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



@inverteNomeECor('valor1', 'valor 2')
export class Animal{
    constructor(
        public nome: string,
        public cor: string){
            console.log('sou a classe')
        }
}