export class Escritor{

    private _ferramenta: Ferramenta | null = null;
    
    constructor(   private _nome: string,){    }

    get nome(): string{
        return this._nome
    }

    set ferramenta(ferramenta: Ferramenta | null){
        this._ferramenta = ferramenta
    }

    get ferramenta(): Ferramenta | null{
        return this._ferramenta
    }

    escrever():void{
        if(this._ferramenta === null){
            console.log('nao posso escrever sem ferramenta...')
            return;
        }
        this._ferramenta.escrever()

       

    }
}


export abstract class Ferramenta{
    constructor(private _nome: string,)
    {}
    abstract escrever():void;


    get nome(): string{
        return this._nome
    }
}

export class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta escrevendo`)
    }
}

export class MaquinaEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta digitando`)
    }
}

const escritor = new Escritor('mario')
const caneta = new Caneta('caneta')
const maquinaEscrever = new MaquinaEscrever('marquina de escrever')


console.log(escritor.nome)
console.log(caneta.nome)
console.log(maquinaEscrever.nome)