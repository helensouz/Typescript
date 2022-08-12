// void nao retorna nada

function semRetorno(...args: string[]):void{
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'helen', 
    sobrenome: 'souza',

    exibirNome():void{
        console.log(this.nome + this.sobrenome)
    }
}

semRetorno('hello', 'friend')
pessoa.exibirNome()

export {pessoa};