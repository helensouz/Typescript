export class Empresa{

        public readonly nome: string;
        private readonly colaboradores: Colaborador[] = []
        protected readonly cnpj: string;

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




//forma resumida
export class Colaborador{
   
    constructor(
        public readonly nome: string,
        public readonly cnpj: string
        ){}

}

const empresa1 = new Empresa('marvel', 'fdklnfksdnf')
const colaborador1 = new Colaborador('helensouza', 'dfddknvs')
const colaborador2 = new Colaborador('colaborador 2', 'defddknvs')

empresa1.adicionaColaborador(colaborador2)


console.log(empresa1)
empresa1.mostrarColaboradores(colaborador1)