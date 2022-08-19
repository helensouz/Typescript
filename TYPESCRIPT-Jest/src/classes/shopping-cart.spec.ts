import { Discount } from "./discount"
import { CartItem } from "./interfaces/cart-item"
import { ShoppingCard } from "./shopping-cart"

const createSut = () =>{
    const discountmock =  createDiscountMock()
    const sut = new ShoppingCard(discountmock)
    return {sut, discountmock}
}

const createDiscountMock = () => {
    class DiscountMock extends Discount{}
    return new DiscountMock()
}

const CartItem = (name: string, price: number) => {
    class CartItemMock implements CartItem{
        constructor(public name: string, public price: number){}
    }

    return new CartItemMock(name, price)


}

const createSutWithProducts = () =>{
    const {sut, discountmock} = createSut()
    const cartItem1 = CartItem('camiseta', 40)
    const cartItem2 = CartItem('saia', 1)
    sut.addItem(cartItem1)
    sut.addItem(cartItem2)
    return {sut, discountmock}
}

describe('ShoppingCart', () => {
    it('should be an empty cart when no product id added', () => {
        const {sut} = createSut()
        expect(sut.isEmpty()).toBe(true)
    })
    it('should have 2 cart items', () => {
       const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2)
     
    })
    it('should test total and totalWithDiscount', () => {
        const { sut } = createSutWithProducts();
        expect(sut.total()).toBe(41)
        expect(sut.totalWithDIcount()).toBe(41)
     })
     it('should add products and clear cart', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2)
        sut.clear()
      expect(sut.items.length).toBe(2)

     })
})