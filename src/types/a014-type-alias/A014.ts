type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'vermelho' | 'verde' | 'azul'
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto'

type corPreferida = CorRGB | CorCMYK ;

const pessoa: Pessoa = { //implementa tudo que tem em PESSOA
    nome: "helen",
    idade: 20,
    salario: 2000,
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida):Pessoa{
    return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'azul'))