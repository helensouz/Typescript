import { CartItem } from "./interfaces/cart-item"
import { OrderStatus } from "./interfaces/order-status"


export class ShoppingCard{
    private readonly _items: CartItem[] = []
   //nao é necessario no carrinho de compras
    addItem(item: CartItem): void{
        this._items.push(item)
    }

    removeitem(index: number):void{
        this._items.splice(index, 1)
    }

    get items(): Readonly<CartItem[]>{ //esta expondo a propriedade privada
        return this._items
    }

    total(): number{
        return + this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    ////nao é responsabilidade do carrinho
   

    isEmpty(): boolean{
        return this._items.length === 0
    }

    clear():void{
        console.log('carrinho de compras vazio')
         this._items.length === 0
    }
}

