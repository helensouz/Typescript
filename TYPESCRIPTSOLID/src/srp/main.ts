import { Messaging } from "./services/messagins"
import { Order } from "./entities/order"
import { Persistence } from "./services/persistence"
import { Product } from "./entities/product"
import { ShoppingCard } from "./entities/shopping-cart"





const cart1 = new ShoppingCard()
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