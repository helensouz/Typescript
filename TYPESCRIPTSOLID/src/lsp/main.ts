import { Messaging } from "./services/messagins"
import { Order } from "./classes/order"
import { Persistence } from "./services/persistence"
import { Product } from "./classes/product"
import { ShoppingCard } from "./classes/shopping-cart"
import { Discount, FitftyPercenteDiscount } from "./classes/discount"

/*
 Liskov substitution principle(Principio de substituicao de liskov) 
 Se ø(x) é uma propriedade demonstravel dos objetos x de tipo T. Entao ø(y) deve 
 ser verdadeiro para objetos y de tipo S onde
  S é um subtipo de T.

   (Subtipos precisam ser substituiveis por seus tipos de base)

   Se meu programa espera um animal, algo do tipo cachorro(que herda de animal ) 
   deve servir como qualquer outro animal
*/

const fifityDiscount = new FitftyPercenteDiscount()
const cart1 = new ShoppingCard(fifityDiscount)
const messaging = new Messaging()
const persistence = new Persistence()
const order = new Order(cart1, messaging, persistence)

cart1.addItem(new Product('blusa', 20.40))
cart1.addItem(new Product('saia', 40.40))


console.log(cart1.items)
console.log(cart1.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
console.log(cart1.totalWithDIcount())