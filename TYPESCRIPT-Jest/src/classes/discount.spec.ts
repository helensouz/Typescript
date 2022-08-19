import { Discount, FitftyPercenteDiscount, NoDiscount } from "./discount"

const createSut = (className: new () => Discount): Discount  => {
    return new className()
}

describe('DISCOUNT', () => {
    afterEach(() => jest.clearAllMocks())  //limpar a cada mock 


    it('should have no discount', () => {
        const sut = createSut(NoDiscount); //classe a ser testado
        expect(sut.calculate(10.00)).toBeCloseTo(10.00)
    })
    
    it('should apply 50% discount on price', () => {
        const sut = createSut(FitftyPercenteDiscount); //classe a ser testado
        expect(sut.calculate(150.5)).toBeCloseTo(75.25)
    })

})