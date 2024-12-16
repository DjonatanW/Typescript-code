// Interface Desconto
interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  aplicarDescontoEmReais(desconto: number): void;
  recuperarValorTotal(): number;
}

// Interface ValorPedido
interface ValorPedido {
  recuperarValorTotal(): number;
  removeItem(item: string): void;
}

// Classe Pedido
class Pedido implements ValorPedido {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    return this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    this.itens.forEach((item) => item.aplicarDescontoEmPorcentagem(desconto));
  }
}

// Classe ItemPedido
class ItemPedido implements Desconto {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const descontoEmReais = (this.valor * desconto) / 100;
    this.valor -= descontoEmReais;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}

// Exemplo de uso
const pedido = new Pedido();

const item1 = new ItemPedido(50, "Pizza", 2); // 2 Pizzas, cada uma custa 50
const item2 = new ItemPedido(20, "Refrigerante", 1); // 1 Refrigerante custa 20

pedido.add(item1);
pedido.add(item2);

console.log("Valor total antes do desconto:", pedido.recuperarValorTotal()); // 120

pedido.aplicarDescontoEmPorcentagem(10); // 10% de desconto em cada item
console.log("Valor total após 10% de desconto:", pedido.recuperarValorTotal()); // 108

pedido.removeItem("Pizza");
console.log("Valor total após remover Pizza:", pedido.recuperarValorTotal()); // 18
