
//Abstracao
export class RemoteControl{
    constructor(private powerStatus = false){}

    public turnon():void{
        this.powerStatus = true;
    }

    public turnoff():void {
        this.powerStatus = false;
    }

    public getStatus():boolean{
        return this.powerStatus;
    }

}


//Heranca

export default class Animal{
    makeNoise() {
        throw new Error("Method not implemented.");
    }
    constructor(public nome: string){}
}

export class Dog extends Animal{
    makeNoise():void{
        console.log(`${this.nome} are doing auau`)
    }
}

export class Cat extends Animal{
    makeNoise():any{
        console.log(`${this.nome} are doing miaumiau`)
    }
}



//Polimorfismo
//Algo que é polimorfo tem a habilidade de assumir difrenetes formas


class AnimalSounds{
    public playSound(animal: Animal):void{
        animal.makeNoise();
    }
}   

const dog = new Dog('tina')
const cat = new Dog('suzy')
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog)
animalSounds.playSound(cat)
