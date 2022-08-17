import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messagins";
import { Persistence } from "../services/persistence";
import { ShoppingCard } from "./shopping-cart";
import { ShoppingCardProtocol } from "./interfaces/shopping-cart-protocol";


/**
 * Open/close
 * Entidades devem estar abertas para extensao, mas fechadas para modificacao
 */

export class Order{
    private _orderStatus:  OrderStatus = 'open'  
    constructor(
        private readonly cart: ShoppingCardProtocol,
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