import { OrderStatus } from "../../srp/entities/interfaces/order-status"
import { ShoppingCard } from "../../srp/entities/shopping-cart"
import { Messaging } from "../../srp/services/messagins"
import { Persistence } from "../../srp/services/persistence"



export class Order{
    private _orderStatus:  OrderStatus = 'open'  
    constructor(
        private readonly cart: ShoppingCard,
        private readonly messaging: Messaging,
        private readonly persistence: Persistence
        ){}

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }


    checkout() : void{
        if(this.cart.isEmpty()){
            console.log('carrinho vazio')
            return
        }
       this._orderStatus = 'closed'
        this.messaging.sendMessage(`seu pedido foi com total de ${this.cart.total()} foi recebido.`)
        this.persistence.saveOrder();
        this.cart.clear()
    
    }   
}