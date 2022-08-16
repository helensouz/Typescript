export abstract class Discount{
    

    abstract calculate(value : number):number
}

export class FitftyPercenteDiscount extends Discount{
    private readonly discount = 0.5;
    calculate(price: number): number {
        return price - price * this.discount 
    }
}

