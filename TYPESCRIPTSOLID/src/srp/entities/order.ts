import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messagins";
import { Persistence } from "../services/persistence";
import { ShoppingCard } from "./shopping-cart";



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