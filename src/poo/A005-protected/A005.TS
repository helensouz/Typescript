 export class Empresa{
     readonly nome: string;
    protected readonly colaboradores: Colaborador[] = []
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string){
        this.nome = nome;//valor esta sendo inicializado
        this.cnpj = cnpj;

    }


    adicionaColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(colaborador: Colaborador):void{
        for(const colaborador of this.colaboradores){
            console.log(colaborador)
        }
    }

}

export class Udemy extends Empresa{

    constructor(){
        super('udemy', '11.111..2.32323/333')
    }

    popColaborador():Colaborador | null{
        const colaborador = this.colaboradores.pop()
    if (colaborador) return colaborador;
    return null
        }
}




//forma resumida
export class Colaborador{

constructor(
    public readonly nome: string,
    public readonly sobrenome: string
    ){}

}

const empresa1 = new Udemy()
const colaborador1 = new Colaborador('helensouza', 'dfddknvs')
const colaborador2 = new Colaborador('colaborador 2', 'defddknvs')
const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido)
empresa1.adicionaColaborador(colaborador2)

console.log(empresa1)
empresa1.mostrarColaboradores(colaborador1)