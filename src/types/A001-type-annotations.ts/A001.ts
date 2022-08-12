/* eslint-disable */

let neome: string = 'helen';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol')


//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers2: number[] = [1, 2, 3]
let arrayOfString: Array<string> = ['ola', 'tudo', 'bem']
let arrayOfString2: string[] = ['ola', 'tudo', 'bem']


//Objetos
let pessoa: { nome: string,idade: number, adulto?: boolean}={  // ? mostra que é a chave é opcional = {
        idade: 20,
        nome: 'helen'
 }

//funcoes

function soma(x: number, y: number): number{ //retorno tem que ser number
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
const result = (soma2(4,4))
console.log(result)