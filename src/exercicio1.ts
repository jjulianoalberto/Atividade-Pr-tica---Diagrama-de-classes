class Item {
    constructor(
        public valor: number,
        public nome: string,
        public descricao: string
    ) {}
}

class Pedidoo {
    itens: Item[] = [];
    valorTotal: number = 0;

    addItem(item: Item): void {
        this.itens.push(item);
        this.calcularValorTotal();
    }

    calcularValorTotal(): void {
        this.valorTotal = this.itens.reduce((total, item) => total + item.valor, 0);
    }
}


const item1 = new Item(10, 'Caneta', 'Caneta azul');
const item2 = new Item(20, 'Lápis', 'Lápis de madeira');


const pedido = new Pedidoo();
pedido.addItem(item1);
pedido.addItem(item2);

console.log('Valor total do pedido:', pedido.valorTotal);

