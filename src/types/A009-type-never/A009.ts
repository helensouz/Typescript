// quando o metodo ou funcao nunca vai retornar nada
//never pode travar o codigo ou lancar um erro

export function criarErro(): never{
    throw new Error('error qualquer')
}

criarErro();