 export abstract class Personagem{
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    )
    {}

    atacar(personagem: Personagem): void{
        this.bordao(); 
        console.log(`${this.emoji} - ${this.nome} esta atacando`)
        personagem.perderVida(this.ataque);

    }

    perderVida(forcaAtaque: number): void{
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`)

    }

    abstract bordao():void;
 }

 export class Guerreira extends Personagem{
    protected emoji = '\u{1F9DD}'

     bordao():void{
        console.log(this.emoji + 'Receba a minha luuuz! capitao patria')
    }
 }
 export class Monstro extends Personagem{
    protected emoji = '\u{1F9DF}'

    bordao():void{
        console.log(this.emoji + 'Eu vou fritar os seus olhoooos')
    }
 }

 const guerreira = new Guerreira('starlight', 100, 10000)
 const monstro = new Monstro('capitao patria', 87, 10000)

 guerreira.atacar(monstro)
 monstro.atacar(guerreira)
