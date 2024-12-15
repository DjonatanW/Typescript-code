import { Imovel } from "./Imovel";

export class Velho extends Imovel {
  constructor(
    endereco: string,
    preco: number,
    private _descontoValor: number
  ) {
    super(endereco, preco)
  }

  get descontoValor(): number {
    return this._descontoValor
  }

  set descontoValor(descontoValor: number)  {
    if (descontoValor > 0) {
      console.log('Valor de desconto não pode ser negativo, tente novamente');
    }
    this._descontoValor = descontoValor
  }

  mostrarDesconto() {
    console.log(`O valor de desconto é de R$${this.descontoValor}`);
  }
}