// type  CoresObj = {
//     vermelho: string
//     azul: string
//     verde: string
// }

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj

const coresObj ={
    vermelho: 'red',
    azul: 'blue',
    verde: 'green'
};

function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: typeof coresObj){
    return cores[cor]
}


console.log(traduzirCor('azul', coresObj))