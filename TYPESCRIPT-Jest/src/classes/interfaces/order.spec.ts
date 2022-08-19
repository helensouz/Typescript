
import { create } from 'lodash'
import { Order } from '../order'
import { CartItem } from './cart-item'
import { CustomerOrder } from './customer-protocol'
import { MessagingProtocol } from './messaging-protocol'
import {OrderStatus} from './order-status'
import { PersistenceProtocol } from './persistence-protocol'
import { ShoppingCardProtocol } from './shopping-cart-protocol'


class ShoppingCartMock implements ShoppingCardProtocol{
    addItem(item: CartItem): void{}
    removeitem(index: number):void{}
     get items(): Readonly<CartItem[]>{
        return []
     }
    total(): number{
        return 1
    }
    totalWithDIcount(): number{
        return 1
    }
    isEmpty(): boolean{
        return false
    }
    clear():void{}
}

class MessagingMock implements MessagingProtocol{
    sendMessage(){}
}
class PersistenceMock implements PersistenceProtocol{
    saveOrder(): void {
        
    }
}

class CustomerMock implements CustomerOrder{
    getName(){
        return ''
    }
    getIDN(){
        return ''
    }

    
}

const createSut = () => {
    const shoppingCartMock = new ShoppingCartMock();
    const messaginMock = new MessagingMock();
    const persistenceMock = new PersistenceMock();
    const customerMock = new CustomerMock();
    const sut = new Order(shoppingCartMock, messaginMock, persistenceMock );

    return{
        sut,
        shoppingCartMock,
        messaginMock,
        persistenceMock
    }
}


describe('Order', () => {
    it('should not checkout if cart is empty', () => {
        const {sut, shoppingCartMock} = createSut()
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true)
        sut.checkout();
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
        expect(sut.orderStatus).toBe('open');
    })
    it('should not checkout if cart is not empty', () => {
        const {sut, shoppingCartMock} = createSut()
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false)
        sut.checkout();
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
        expect(sut.orderStatus).toBe('closed');
    })
    it('should send an email to customer', () => {
        const {sut, messaginMock} = createSut()
        const messagingMockSpy = jest.spyOn(messaginMock, 'sendMessage')
        sut.checkout();
        expect(messagingMockSpy).toHaveBeenCalledTimes(1)
    })
})
