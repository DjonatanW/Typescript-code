import { Item } from "./Item";

export class Pedido {
  constructor(
    itens: Item[],
    private _valorTotal: number
  ) {}

  get valorTotal(): number {
    return this._valorTotal
  }
}