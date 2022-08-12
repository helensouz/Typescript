//a classe B vai ser criada dentro da classe A
//se a classe A deixar de existir a classe B tambem nao ira existir


export class Carro{
    public readonly motor = new Motor();

    


    ligar():void{
        this.motor.ligar()
    }

    desligar():void{
        this.motor.desligar()

    }

    acelerar():void{
        this.motor.acelerar()

    }

    parar():void{
        this.motor.parar()

    }
}



export class Motor{
    ligar():void{
        console.log('esta ligado')
    }

    desligar():void{
        console.log('esta desligado')
    }

    acelerar():void{
        console.log('esta acelerando')
    }

    parar():void{
        console.log('esta desligado')
    }
}

const carro = new Carro();
carro.ligar()
carro.acelerar()
carro.desligar()
carro.parar()