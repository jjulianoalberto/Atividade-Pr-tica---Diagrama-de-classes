class Prato {
  constructor(public nome: string, public preco: number) {}
}

class Pedidos {
  constructor(public prato: Prato) {}
}

class Mesa {
  private pedidos: Pedidos[] = [];

  constructor(public numero: number) {}

  fazerPedido(prato: Prato): void {
    const pedido = new Pedidos(prato);
    this.pedidos.push(pedido);
    console.log(`Pedido feito na mesa ${this.numero}: ${prato.nome}`);
  }

  mostrarPedidos(): void {
    console.log(`Pedidos na mesa ${this.numero}:`);
    this.pedidos.forEach((pedido, index) => {
      console.log(
        `${index + 1}. ${pedido.prato.nome} - R$${pedido.prato.preco.toFixed(
          2
        )}`
      );
    });
  }

  calcularTotal(): number {
    return this.pedidos.reduce(
      (total, pedido) => total + pedido.prato.preco,
      0
    );
  }
}

class Restaurante {
  private mesas: Mesa[] = [];

  adicionarMesa(numero: number): void {
    const mesa = new Mesa(numero);
    this.mesas.push(mesa);
    console.log(`Mesa ${numero} adicionada.`);
  }

  fazerPedido(mesaNumero: number, prato: Prato): void {
    const mesa = this.mesas.find((m) => m.numero === mesaNumero);
    if (mesa) {
      mesa.fazerPedido(prato);
    } else {
      console.log(`Mesa ${mesaNumero} não encontrada.`);
    }
  }

  mostrarPedidosMesa(mesaNumero: number): void {
    const mesa = this.mesas.find((m) => m.numero === mesaNumero);
    if (mesa) {
      mesa.mostrarPedidos();
    } else {
      console.log(`Mesa ${mesaNumero} não encontrada.`);
    }
  }

  calcularTotalMesa(mesaNumero: number): number {
    const mesa = this.mesas.find((m) => m.numero === mesaNumero);
    if (mesa) {
      const total = mesa.calcularTotal();
      console.log(`Total na mesa ${mesa.numero}: R$${total.toFixed(2)}`);
      return total;
    } else {
      console.log(`Mesa ${mesaNumero} não encontrada.`);
      return 0;
    }
  }
}

const restaurante = new Restaurante();
restaurante.adicionarMesa(1);
restaurante.adicionarMesa(2);

const prato1 = new Prato("Pizza", 30.0);
const prato2 = new Prato("Espaguete", 25.0);
const prato3 = new Prato("Salada", 15.0);

restaurante.fazerPedido(1, prato1);
restaurante.fazerPedido(1, prato2);
restaurante.fazerPedido(2, prato3);

restaurante.mostrarPedidosMesa(1);
restaurante.mostrarPedidosMesa(2);

restaurante.calcularTotalMesa(1);
restaurante.calcularTotalMesa(2);
