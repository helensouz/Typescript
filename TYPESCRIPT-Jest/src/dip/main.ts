import { Messaging } from "./services/messagins"
import { Order } from "./classes/order"
import { Persistence } from "./services/persistence"
import { Product } from "./classes/product"
import { ShoppingCard } from "./classes/shopping-cart"
import { Discount, FitftyPercenteDiscount } from "./classes/discount"
import { EnterpriseCustomer } from "./classes/custumer"
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol"

/*
 Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender
 de abstracoes.
 Depende de abstracoes, nao de implementacoes.
 Abstracoes nao devem depender de detalhes, detalhes devem depender de abstracoes.

 classes de baixo nivel sao classes que executam tarefas(os detalhes)
 classses de alto nivel sao classes que gerenciam as classes de baixo nivel
*/

const fifityDiscount = new FitftyPercenteDiscount()
const shoppingCard = new ShoppingCard(fifityDiscount)
const messaging = new Messaging()
const persistence = new Persistence()


shoppingCard.addItem(new Product('blusa', 20.40))
shoppingCard.addItem(new Product('saia', 40.40))

const enterpriseCustomer = new EnterpriseCustomer(
    'Empresa IBM',
    '343.400.383.85035'
);

//classe de mock que finge enviar email

class MessagingMock implements MessagingProtocol{
    sendMessage(msg: string): void {
        console.log("a mensagem foi enviada pelo mock")
    }
}

const messagingMock = new MessagingMock()

const order = new Order(
    shoppingCard,
    messagingMock,
    persistence,
)

console.log(shoppingCard.items)
console.log(shoppingCard.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
console.log(shoppingCard.totalWithDIcount())