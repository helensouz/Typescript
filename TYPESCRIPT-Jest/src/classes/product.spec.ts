import { Product } from "./product"

const createSut = (name: string, price: number): Product => {
    return new Product(name, price)
}

describe('PRODUCT', () => {
    afterEach(() => jest.clearAllMocks())  //limpar a cada mock 


    it('should have properties name and price', () => {
        const sut = createSut('camiseta', 46.6); //classe a ser testado
        expect(sut).toHaveProperty('name','camiseta' )
        expect(sut).toHaveProperty('price', 46.6)

    })

})