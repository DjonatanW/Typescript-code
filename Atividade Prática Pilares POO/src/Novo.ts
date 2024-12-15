import { Imovel } from "./Imovel";

export class Novo extends Imovel {
  constructor(
    endereco: string,
    preco: number,
    private _adicionalPreco: number
  ) {
    super(endereco, preco)
  }

  get adicionalPreco(): number {
    return this._adicionalPreco
  }

  set adicionalPreco(adicionalPreco: number)  {
    if (adicionalPreco > 0) {
      console.log('Valor adicional não pode ser negativo, tente novamente');
    }
    this._adicionalPreco = adicionalPreco
  }

  mostrarAdicional() {
    console.log(`O valor adicional é de R$${this.adicionalPreco}`);
  }
}