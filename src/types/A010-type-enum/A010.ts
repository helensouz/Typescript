enum Cores{
    vermelho = 10, //0
    azul = 100, //1
    amarelo, //2,
    roxo = 'roxo',
    verde = 11,
    
}

console.log(Cores.vermelho)
console.log(Cores)

function escolhaACor(cor: Cores): void{
    console.log(Cores[cor])
}

escolhaACor(Cores.amarelo)