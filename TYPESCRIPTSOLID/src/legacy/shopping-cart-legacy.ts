type CartItem = {name: string, price: number}
type OrderStatus = 'open' | 'closed'

export class ShoppingCardLegacy{
    private readonly _items: CartItem[] = []
    private _orderStatus:  OrderStatus = 'open'
    addItem(item: CartItem): void{
        this._items.push(item)
    }


    removeitem(index: number):void{
        this._items.splice(index, 1)
    }

    get items(): Readonly<CartItem[]>{
        return this._items
    }
    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    total(): number{
        return + this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    checkout() : void{
    if(this.isEmpty()){
        console.log('carrinho vazio')
        return
    }

    this._orderStatus = 'closed'
    this.sendMessage( `seu pedido foi com total de ${this.total()} foi recebido.`)
    this.saveOrder();
    this.clear()
    }

    isEmpty(): boolean{
        return this._items.length === 0
    }

    sendMessage(msg: string): void{
        console.log('mensagem enviada: ', msg)
    }

    saveOrder(): void{
        console.log('pedido salvo')
    }

    clear():void{
        console.log('carrinho de compras vazio')
         this._items.length === 0
    }
}


const cart1 = new ShoppingCardLegacy()
cart1.addItem({name: 'blusa', price: 20.40})
cart1.addItem({name: 'tenis', price: 206.40})

console.log(cart1.items)
console.log(cart1.total())
console.log(cart1.orderStatus)
cart1.checkout()
console.log(cart1.orderStatus)