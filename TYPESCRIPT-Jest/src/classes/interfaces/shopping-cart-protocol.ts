import { CartItem } from "./cart-item"

export interface ShoppingCardProtocol{

    addItem(item: CartItem): void
    removeitem(index: number):void
     get items(): Readonly<CartItem[]>
    total(): number
    totalWithDIcount(): number
    isEmpty(): boolean
    clear():void;
}