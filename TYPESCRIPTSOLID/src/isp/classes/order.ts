import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messagins";
import { Persistence } from "../services/persistence";
import { ShoppingCard } from "./shopping-cart";


/**
 * Open/close
 * Entidades devem estar abertas para extensao, mas fechadas para modificacao
 */

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
        this.messaging.sendMessage(`seu pedido foi com total com desconto de ${this.cart.totalWithDIcount()} foi recebido.`)
        this.persistence.saveOrder();
        this.cart.clear()
    
    }   
}