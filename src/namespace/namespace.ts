//eslint-disable @typescript-eslint/no-namespace

 //sistema de modulos
//É criado como se fosse um escopo 

 namespace MeuNameSpace {
    export const nome = 'helen'

    export class PessoaNameSpace{
        constructor(public nome: string){}

    }

    const pessoa = new PessoaNameSpace('valdir')
    console.log(pessoa)

    export namespace OutroNameSpace{
        export const nomeDoNamespace = 'nome de outro namespace'
    }

    
 }

 const pessoadonamespace = new MeuNameSpace.PessoaNameSpace('Helen 2')
 console.log(pessoadonamespace)
 console.log(MeuNameSpace.OutroNameSpace);
 console.log(MeuNameSpace.OutroNameSpace.nomeDoNamespace)


