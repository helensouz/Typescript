//agregacao -> quando uma classe precisa de outra classe para funcionar

export class CarrinhoDeCompras{
    private readonly produtos: Produto[] = []


    inserirProduto(...produtos: Produto[]){
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }

    quantidadeProdutos():number{
        return this.produtos.length
    }
    valorTotal():number{
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
    }
}

export class Produto{
    constructor (public nome: string, public preco: number){

    }
}

const produto1 = new Produto('camiseta', 49.9)
const produto2 = new Produto('bolsa', 80.9)
const produto3 = new Produto('tenis', 99.9)

const carrinhodecompras = new CarrinhoDeCompras()
carrinhodecompras.inserirProduto(produto1, produto2, produto3)
console.log(carrinhodecompras.quantidadeProdutos())
































