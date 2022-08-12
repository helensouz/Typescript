


let objetoA:  {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown; //index signature
    //PODEMOS CRIAR OUTRAS CHAVES SEM ADICIONAR DENTRO DO OBJ

} =
 {

    chaveA: 'valor a',
    chaveB: 'valor b',

}


objetoA.chaveB = 'outra chave'
objetoA.chaveD = 'chave'
objetoA.chaveE = 'chave E'
objetoA.chaveF = 'chave F'

console.log(objetoA)